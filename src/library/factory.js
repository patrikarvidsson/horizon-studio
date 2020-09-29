const Page = require("./mold/page");
const Port = require("./mold/port");

module.exports = function (db, logs) {
  const { entries } = db;
  const pages = {};
  const types = {
    page: (entry, data) => new Page(entry, data),
    port: (entry) => new Port(entry, db),
  };

  for (const id in entries) {
    const entry = entries[id];
    const page = types[entry.type] || types.page;
    pages[id] = page(entry);
  }

  return pages;
};
