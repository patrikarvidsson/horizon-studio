const Base = require("./base");
const { cap, max, url } = require("../lib/utils");

module.exports = function (opts, logs) {
  Base.call(this, opts);

  this.links = function () {
    const list = this.link;
    if (!list) return "";
    let nav = "";
    for (const item in list) {
      nav += `<li><a href="${list[item]}" target="_blank">${cap(item)}</a>`;
    }
    return `<nav><ul>${nav}</ul></nav>`;
  };

  this.info = function () {
    return `<aside>${this.links()}</aside>`;
  };

  this.core = function () {
    return `${this.header()}<main id="mm">${this.content}</main>${this.info()}`;
  };
};
