module.exports = function (data) {
  function parse(line) {
    const indent = line.search(/\S|$/);
    const content = line.trim();
    const separator = " : ";

    if (line.includes(separator)) {
      const ls = line.split(separator);
      return {
        indent,
        content,
        key: ls[0].trim().toLowerCase(),
        value: ls[1].trim(),
      };
    }

    return { indent, content, children: [] };
  }

  function makeLines() {
    const lines = data.split("\n");
    const parsed = [];
    for (let i = 0, l = lines.length, line; i < l; i++) {
      line = lines[i];
      if (line === "") continue;
      parsed[parsed.length] = parse(line);
    }
    return parsed;
  }

  function format(line) {
    const a = [];
    const h = {};
    for (const child of line.children) {
      if (child.key) {
        if (h[child.key]) console.warn(`Redefined key: ${child.key}.`);
        h[child.key] = child.value;
      } else if (child.children.length === 0 && child.content) {
        a[a.length] = child.content;
      } else {
        h[child.content.toLowerCase()] = format(child);
      }
    }
    return a.length > 0 ? a : h;
  }

  const lines = makeLines();
  const l = lines.length;
  const stack = {};
  const h = {};

  for (let i = 0, line, target; i < l; i++) {
    line = lines[i];
    if (line.skip) continue;
    target = stack[line.indent - 2];
    if (target) target.children[target.children.length] = line;
    stack[line.indent] = line;
  }

  for (let i = 0, line; i < l; i++) {
    line = lines[i];
    if (line.skip || line.indent > 0) continue;

    let term = line.content;
    let unde = "HOME";
    let type = "page";
    let fini = true;
    let sli = true;

    if (term[0] === "~") {
      fini = false;
      term = term.slice(2);
    }

    switch (term[0]) {
      case "@":
        type = "port";
        break;
      case "+":
        type = "note";
        break;
      default:
        sli = false;
        break;
    }

    if (sli) term = term.slice(2);
    type = term === unde ? "home" : type;
    if (term.includes(".")) [unde, term] = term.split(".");
    if (h[term]) console.warn(`Redefined key: ${term}, line ${i}`);
    h[term] = { term, unde, fini, type, ...format(line) };
  }

  return h;
};
