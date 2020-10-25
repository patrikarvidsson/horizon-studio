const Page = require("./mold/page");
const Port = require("./mold/port");
const { cap, max, url } = require("./lib/utils");

module.exports = function (db, logs) {
  const { entries } = db;
  const pages = {};
  const types = {
    page: (entry, data) => new Page(entry, data, logs),
    port: (entry) => new Port(entry, db),
  };

  const projectDict = {};

  for (const i in logs) {
    let key = logs[i].project.toUpperCase();
    let hour = logs[i].time;

    if (key in projectDict) {
      projectDict[key].name = key;
      projectDict[key].logs.push(logs[i]);
      projectDict[key].totalEntries += 1;
      projectDict[key].totalTime += parseFloat(hour, 10);
    } else {
      projectDict[key] = {};
      projectDict[key].logs = [];
      projectDict[key].logs.push(logs[i]);
      projectDict[key].totalEntries = 1;
      projectDict[key].totalTime = parseFloat(hour, 10);
    }
  }

  for (const id in entries) {
    const entry = entries[id];

    const logs = projectDict[id] === undefined ? "" : projectDict[id];

    const page = types[entry.type] || types.page;
    pages[id] = page(entry, logs);
  }

  return pages;
};
