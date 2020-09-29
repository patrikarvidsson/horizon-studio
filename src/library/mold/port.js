const Base = require("./base");
const { cap, url } = require("../lib/utils");

module.exports = function (opts, db) {
  Base.call(this, opts);

  function list({ term, alt }) {
    return `<li><a href="${url(term)}.html">${alt || cap(term)}</a>`;
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
    return `<ol class="c">${items}</ol>`;
  }

  this.core = function () {
    return `${this.header()}<main id="mm">${this.content}${index(
      this.term
    )}</main>`;
  };
};
