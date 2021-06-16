const fs = require("fs");
const { apostrophise, isExternalLink, deWidow, url } = require("./utils");
const Cal = require("./cal");

const { parseLogs, totalHours, averageHours, latestLogs } = require("../horizon");

const Log = require("../log");
const { get } = require("http");
const logs = new Log(`./database/log.tbtl`);
const readingList = new Log(`./database/books.tbtl`);

const ISO_LANGS = [
  "ab",
  "aa",
  "af",
  "ak",
  "sq",
  "ar",
  "an",
  "hy",
  "as",
  "ay",
  "az",
  "bm",
  "ba",
  "eu",
  "be",
  "bn",
  "bh",
  "bi",
  "bs",
  "br",
  "bg",
  "my",
  "ca",
  "ch",
  "ce",
  "ny",
  "zh",
  "zh-Hans",
  "zh-Hant",
  "cv",
  "kw",
  "co",
  "cr",
  "cs",
  "da",
  "dv",
  "nl",
  "dz",
  "en",
  "eo",
  "et",
  "ee",
  "fo",
  "fj",
  "fi",
  "fr",
  "ff",
  "gl",
  "gd",
  "gv",
  "ka",
  "de",
  "el",
  "kl",
  "gn",
  "gu",
  "ht",
  "ha",
  "he",
  "hz",
  "hi",
  "ho",
  "hu",
  "is",
  "io",
  "ig",
  "id",
  "in",
  "ia",
  "ie",
  "iu",
  "ik",
  "ga",
  "it",
  "ja",
  "jv",
  "kl",
  "kn",
  "kr",
  "ks",
  "kk",
  "km",
  "ki",
  "rw",
  "rn",
  "ky",
  "kv",
  "kg",
  "ko",
  "ku",
  "kj",
  "lo",
  "la",
  "lv",
  "li",
  "ln",
  "lt",
  "lu",
  "lg",
  "lb",
  "gv",
  "mk",
  "mg",
  "ms",
  "ml",
  "mt",
  "mi",
  "mr",
  "mh",
  "mo",
  "mn",
  "na",
  "nv",
  "ng",
  "nd",
  "ne",
  "no",
  "nb",
  "nn",
  "ii",
  "oc",
  "oj",
  "cu",
  "or",
  "om",
  "os",
  "pi",
  "ps",
  "fa",
  "pl",
  "pt",
  "pa",
  "qu",
  "rm",
  "ro",
  "ru",
  "se",
  "sm",
  "sg",
  "sa",
  "sr",
  "sh",
  "st",
  "tn",
  "sn",
  "sd",
  "si",
  "ss",
  "sk",
  "sl",
  "so",
  "nr",
  "es",
  "su",
  "sw",
  "ss",
  "sv",
  "tl",
  "ty",
  "tg",
  "ta",
  "tt",
  "te",
  "th",
  "bo",
  "ti",
  "to",
  "ts",
  "tr",
  "tk",
  "tw",
  "ug",
  "uk",
  "ur",
  "uz",
  "ve",
  "vi",
  "vo",
  "wa",
  "cy",
  "wo",
  "fy",
  "xh",
  "yi",
  "ji",
  "yo",
  "za",
  "zu",
];

module.exports = function (raw) {
  const format = (x) => deWidow(apostrophise(x));

  const SYLLABARY = {
    1: { tag: "h1" },
    2: { tag: "h2" },
    3: { tag: "h3" },
    4: { tag: "h4" },
    "&": { tag: "p" },
    "-": { tag: "li", wrp: "ol" },
    "=": { tag: "li", wrp: "ul" },
    "*": { fn: (x) => `<h2 id="${url(x)}">${markup(x)}</h2>` },

    λ: {
      tag: "div",
      fn: (content) => {
        switch (content) {
          case "totalStats":
            const te = logs.length;
            const th = totalHours();
            const tt = Object.keys(parseLogs(logs)).length;
            const ah = (averageHours(logs) / 182).toFixed(2);
            const totalStats = `This wiki consists of <dfn title="Log entries in Horizon">${te} entries</dfn>, with a total of <dfn title="Accumulated hours logged so far">${th} hours</dfn> across <dfn title="Amount of topics in the wiki">${tt} topics</dfn>. An average of <dfn title="Average hours logged in the last specified period">${ah} hours</dfn> per day was logged in the last 6 months.`;

            return totalStats;

            break;

          case "latestChanges":
            const list = latestLogs().map(item => {
              const ds = item.date.split("-");

              return `
                <span>${item.date} · <a href="${url(item.project)}.html">${item.project}</a> · ${item.task}</span><br />
              `;
            }).join('');
            return `<p>${list}</p>`
            break;

          case "latestJournal":
            const journalList = logs.map(item => {
              if (item.pict !== '') {
                sd = new Date(item.date);
                td = new Cal(sd).display();

                return `
                    <figure>
                      <img src="./m/d/${item.pict}.jpg" alt="${item.details}" />
                      <figcaption>${td} — ${item.details}</figcaption>
                    </figure>
                ` 
              }
            }).join('');

            return `${journalList}` 

          case "readingList":
            const rl = readingList;
            const years = ['2020', '2019', '2018', '2016', '2015'];
            var array = [];
            
            for (let i = 0; i < years.length; i++) {
              const header = `<h2>${years[i]}</h2>`;

              const books = rl.map((book) => {
                const d = new Date(book.date);
                const y = d.getFullYear();

                if (years[i] == y) {
                  return `
                    <div><a href="https://amazon.com/dp/${book.sin}">${book.title}</a></div>
                    <div>${book.author}</div>
                    <div>${book.date}</div>
                    <div>${"⭑".repeat(book.rating)}</div>
                  `;
                }
              }).join('');

              array.push(`${header}<section>${books}</section>`);
            };

            return array.join('');


          default:
            return `${content} is an unknown function`;
            break;
        }
      },
    },

    "|": { tag: "tr", wrp: "table", fn: makeTable },

    "@": {
      tag: "blockquote",
      fn: (content) => {
        const [quotation, author, source, link] = content.split(" | ");
        const source1 = markup(deWidow(source));
        const cite = link
          ? `<a href="${link}" target="_blank"><cite>${source1}</cite></a>`
          : `<cite>${source1}</cite>`;
        const citation = source ? `${author}, ${cite}` : deWidow(author);

        return `<blockquote${
          link ? ` cite="${link}"` : ""
        }><p class="q">${format(quotation)}${
          author ? `<p class="a">&mdash; ${citation}` : ""
        }</blockquote>`;
      },
    },

    ">": {
      wrp: "dl",
      fn: (content) => {
        const [t, d] = content.split(" - ");
        const term = markup(t.trim());
        const def = markup(format(d.trim()));
        return `<dt>${term}</dt><dd>${def}</dd>`;
      },
    },

    "#": { wrp: "code", fn: (x) => `${x}<br>` },
    "~": { tag: "li", wrp: "ul", klass: "z" },
    "%": { fn: makeMedia },
    "`": { fn: (x) => makeMedia(x, true) },
  };

  const marks = {
    "!": (content) => {
      if (!content.includes("|")) return content;
      const [word, lang] = content.split("|");
      if (!lang || lang === "") {
        console.warn(`Missing lang code: ${content}`);
        return word;
      }
      if (!ISO_LANGS.includes(lang)) {
        console.warn(`Invalid ISO 639-1 code: ${lang} - ${content}`);
        return word;
      }
      return `<span lang="${lang}">${word}</span>`;
    },

    "^": (content) => {
      if (!content.includes("|")) return content;
      const [abbr, full] = content.split("|");
      if (!full || full === "") {
        console.warn(`Missing abbreviation meaning: ${content}`);
        return abbr;
      }
      return `<abbr title="${full}">${abbr}</abbr>`;
    },

    "+": (content) => {
      let target = content;
      let name = content;

      if (content.includes("|")) [name, target] = content.split("|");
      if (isExternalLink(target)) {
        return `<a${
          target.includes("https://") ? ' class="external"' : ""
        } href="${target}" target="_blank">${name}</a>`;
      }

      return `<a href="${url(target)}.html">${name}</a>`;
    },

    _: (content) => {
      if (content.includes("|")) {
        const keys = content.split("|");
        let html = `<kbd><kbd>${keys[0]}</kbd>`;
        for (let i = 1, l = keys.length; i < l; i++) {
          if (keys[i] === "") continue;
          html += ` + <kbd>${keys[i]}</kbd>`;
        }
        return `${html}</kbd>`;
      }
      return `<kbd>${content}</kbd>`;
    },

    "#": (content) => {
      if (!content.includes("|")) return content;
      const chars = content.split("|");
      let ruby = "";
      for (let i = 0, l = chars.length; i < l; i++) {
        const [char, annotation] = chars[i].split(":");
        if (!annotation || annotation === "") {
          console.warn(`Missing annotation: ${content}`);
        }
        ruby += ` ${char} <rp>(</rp><rt>${annotation}</rt><rp>)</rp>`;
      }
      return `<ruby lang="ja">${ruby.trim()}</ruby>`;
    },

    "/": (content) => {
      const [phrase, stamp] = content.split("|");
      return `<time${
        !stamp || stamp === "" ? "" : ` datetime="${stamp}"`
      }>${phrase}</time>`;
    },

    "=": (x) => `<dfn>${x}</dfn>`,
    "%": (x) => `<code class="i">${x}</code>`,
    "*": (x) => `<strong>${x}</strong>`,
    "'": (x) => `<cite>${x}</cite>`,
    '"': (x) => `<q>${x}</q>`,
  };

  function markup(content) {
    let s = content;
    for (const key in marks) {
      s = makeEl(key, s, marks[key]);
    }
    return s;
  }

  function isRunic(line) {
    if (line.trim() === "") return false;
    if (line[1] !== " " || !SYLLABARY[line[0]]) return false;
    return true;
  }

  function makeStash(acc, line) {
    const rune = line[0];
    const rest = line.substr(2);
    const prev = acc[acc.length - 1]
      ? acc[acc.length - 1]
      : [{ rune, all: [] }];
    if (prev.rune === rune) prev.all[prev.all.length] = rest;
    else acc[acc.length] = { rune, all: [rest] };
    return acc;
  }

  function renderHTML(acc, stash) {
    const { fn, klass, tag, wrp } = SYLLABARY[stash.rune];
    const html = stash.all.reduce((acc, val, id) => {
      const proc = fn ? fn(stash.all[id]) : stash.all[id];
      const text =
        tag && !fn
          ? `<${tag}${klass ? ' class="${klass}"' : ""}>${markup(
              format(proc)
            )}</${tag}>`
          : proc;
      return acc + text;
    }, "");

    return wrp
      ? `${acc}<${wrp}${klass ? ` class="${klass}"` : ""}>${html}</${wrp}>`
      : acc + html;
  }

  function makeEl(symbol, content, fn) {
    const open = `[${symbol}`;
    if (!content.includes(open)) return content;
    const close = `${symbol}]`;
    const parts = content.split(open);
    let temp = content;

    for (let i = 0, l = parts.length; i < l; i++) {
      const part = parts[i];
      const [mid] = part.split(close);
      temp = temp.replace(open + mid + close, fn(mid));
    }

    return temp;
  }

  function makeMedia(content, pixelate = false) {
    const jpg = (x) => (!x.includes(".") ? `${x}.jpg` : x);
    const [image, alt, caption, cw] = content.split(" | ");
    const imgFile = `./m/${jpg(image)}`;

    if (!fs.existsSync(imgFile)) {
      console.warn(`Missing image: ${image} - ${content}`);
      return "";
    }
    if (!alt || alt === "") console.warn(`Missing alt text: ${content}`);

    const klass = pixelate ? ' class="p"' : "";
    const src = `src=".${imgFile}"`;
    const imgAlt = `alt="${alt || ""}"`;
    const cap = caption
      ? `<figcaption>${markup(format(caption))}</figcaption>`
      : "";
    const fig = `<figure><img${klass} ${src} ${imgAlt} loading="lazy">${cap}</figure>`;

    return cw ? `<details><summary>${cw}</summary>${fig}</details>` : fig;
  }

  function makeTable(content) {
    return `<tr><td>${content.trim().replace(/ \| /g, "</td><td>")}</td></tr>`;
  }

  return raw
    ? raw.filter(isRunic).reduce(makeStash, []).reduce(renderHTML, "")
    : "";
};
