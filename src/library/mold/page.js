const Base = require("./base");
const Cal = require("../lib/cal");
const { cap, max, url } = require("../lib/utils");

module.exports = function (opts, logs) {
  Base.call(this, opts);

  this.links = function () {
    const list = this.link;
    if (!list) return "";
    let nav = "";
    for (const item in list) {
      nav += `<li>
                <a href="${list[item]}" target="_blank">${cap(item)}</a>
              </li>`;
    }
    return `<nav>
              <ul>${nav}</ul>
            </nav><br />`;
  };

  var stats = function (log) {
    if (log) {
      const logs = log.logs;
      
      const fl = new Date(logs[logs.length - 1].date);
      const ll = new Date(logs[0].date);

      const sd = new Cal(fl).display();
      const ed = new Cal(ll).display();

      const start = `<time datetime="${fl.toISOString()}">${sd}</time>`;
      const end = `<time datetime="${ll.toISOString()}">${ed}</time>`;

      return `
        <div>
          <small>${log.totalTime.toFixed(2)} hours · ${log.totalEntries == "1" ? "1 edit" : log.totalEntries + " edits"}</small><br />
          <small>${start} — ${end}</small>
        </div>`;
    } else {
      return "";
    }
  };

  this.info = function () {
    return `<aside>${this.links()}${stats(logs)}</aside>`;
  };

  this.core = function () {
    return `${this.header()}<main>${this.content}</main>${
      this.link || stats(logs) ? this.info() : ""
    }`;
  };
};
