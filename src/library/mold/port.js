const Base = require("./base");
const { cap, url, titleCase } = require("../lib/utils");

module.exports = function (opts, db) {
  Base.call(this, opts);

  function list({ term, alt }) {
    return `<li><a href="${url(term)}.html">${alt || titleCase(term)}</a>`;
  }

  function index(t) {
    const children = db.getChildren(t);
    const l = children.length;
    if (l === 0) return "";
    let items = "";
    for (let i = 0; i < l; i++) {
      const child = children[i];
      if (child.fini) items += list(child);
    }
    return `<p><small>—</small></p><nav><ol>${items}</ol></nav>`;
  }

  this.core = function () {
    return `${this.header()}<main>${this.content}${index(this.term)}</main>`;
  };
};
