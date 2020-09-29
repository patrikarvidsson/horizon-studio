const Cal = require("../lib/cal");
const Runic = require("../lib/runic");
const { cap, url } = require("../lib/utils");

module.exports = function (opts) {
  Object.assign(this, opts);

  this.path = `./wiki/${`${!this.fini ? "_" : ""}${url(this.term)}`}.html`;
  this.title = this.alt ? this.alt : cap(this.term);
  this.stylesheet =
    this.style !== undefined
      ? "../css/" + this.style + ".css"
      : "../css/page.css";
  this.content = Runic(this.body, this.term);

  this.head = function () {
    return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="nofollow"><meta name="googlebot" content="none"><meta name="description" content="${
      this.bref
    }"><meta name="author" content="Patrik Arvidsson"><meta name="generator" content="Horizon"><title>${
      this.title
    }</title><link rel="icon" href="data:,"><link rel="stylesheet" href="../css/base.css">${this.css()}</head>`;
  };

  this.css = () => `<link rel="stylesheet" href="${this.stylesheet}">`;

  this.webring =
    '<a href="https://webring.xxiivv.com/#random"><svg id="w" viewBox="0 0 240 240" aria-label="Webring"><g transform="translate(0,30)"><g transform="translate(120,120),rotate(120,0,0)"><path d="M0,-60 a60,60 0 1,0 0,120 l100,0"/></g><g transform="translate(120,120),rotate(240,0,0)"><path d="M0,-60 a60,60 0 1,0 0,120 l100,0"/></g><g transform="translate(120,120),rotate(0,0,0)"><path d="M0,-60 a60,60 0 1,0 0,120 l100,0"/></g></g></svg></a>';

  this.glyph = function () {
    const { icon, title, unde } = this;
    const i = icon ? icon : unde.icon ? unde.icon : "M60,180 L60,180 L300,180";
    return `<svg id="l" viewBox="30 30 300 300" aria-label="${this.title} glyph" aria-hidden="true"><path d="${i}"/></svg>`;
  };

  this.header = function () {
    const { unde } = this;
    const u = `<a href="${unde === "HOME" ? "../index" : url(unde)}.html">${cap(
      unde
    )}</a>`;
    const skip = '<a id="sl" href="#mm">Skip to main</a>';
    return unde !== "HOME"
      ? `<header><p>${u} / ${this.title}</p><h1>${this.bref}</h1></header>`
      : "";
  };

  this.footer = function () {
    const date = new Cal().display();
    const today = new Date();
    const year = `${today.getFullYear()}`.slice(-2);
    return `<footer>© 2014–${year} — <time datetime="${today.toISOString()}">${date}</time></footer>`;
  };

  this.render = () => this.head() + this.core() + this.footer();
};
