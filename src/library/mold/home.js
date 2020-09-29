const Base = require('./base');
const {cap, url} = require('../lib/utils');

module.exports = function (opts, db) {
  Base.call(this, opts);
  this.path = './index.html';
  this.unde = 'HOME';

  function makeListItem ({term, alt}) {
    const a = alt ? alt : cap(term);
    return `<li><a href="wiki/${url(term)}.html">${a}</a>`;
  }

  function makeLinks () {
    const children = db.getChildren('HOME');
    const l = children.length;
    if (l === 0) return '';
    const skip = ['HOME', 'BENCHMARK', 'BLOG'];
    let items = '';
    for (let i = 0; i < l; i++) {
      const child = children[i];
      if (skip.includes(child.term)) continue;
      if (child.fini) items += makeListItem(child);
    }
    items += '<li><a href="https://webring.xxiivv.com">Webring</a>';
    return `<ul>${items}</ul>`;
  }

  this.css = function () {
    return `<style>:root{--n:#030303;--b:#f8f8f8}*{margin:0;padding:0}body,html{height:100%}body{display:flex;align-items:center;justify-content:center;font:20px/1.62 "Inter UI","Roboto",sans-serif;background-color:var(--b);color:var(--n)}ul{list-style:none}a{color:var(--n);text-decoration-style:dotted}a:hover{text-decoration-style:solid}::selection,a:focus{background-color:var(--n);color:var(--b)}</style>`;
  }

  this.core = () => `<div>${makeLinks()}</div>`;
  this.render = () => this.head() + this.core();
};
