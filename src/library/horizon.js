const fs = require("fs");

const Log = require("./log");
const logs = new Log(`./database/log.tbtl`);

const Indental = require("./indental");
const databases = fs.readdirSync("./database");

const Tome = require("./tome");

/* ---------------------------------- */
/* Parse projects in log.tbtl
/* ---------------------------------- */

function parseLogs(x) {
  const data = {};

  if (x) {
    for (const i in x) {
      const key = x[i].project.toUpperCase();
      const hour = x[i].time;

      if (!(key in data)) {
        data[key] = {};
        data[key].entries = [];
        data[key].totalEntries = 0;
        data[key].totalTime = 0;
      }

      data[key].name = key;
      data[key].entries.push(x[i]);
      data[key].latestLog = data[key].entries[0];
      data[key].totalEntries += 1;
      data[key].totalTime += parseFloat(hour, 10);
    }
  }

  return data;
}

function totalHours() {
  const data = parseLogs(logs);
  let count = 0;

  for (const i in data) {
    count += data[i].totalTime;
  }

  return count;
}

function getArticles() {
  let aggregate = "";

  for (let i = 0, l = databases.length; i < l; i++) {
    const file = databases[i];
    if (file.endsWith(".ndtl")) {
      aggregate += fs.readFileSync(`./database/${file}`, "utf8");
    }
  }

  const aggregatedList = new Indental(new Tome(aggregate));

  const list = []

  for (const i in aggregatedList.entries) {
    const key = aggregatedList.entries[i].term.toUpperCase();

    list.push(key); 
  }

  return list;
}

function averageHours(x) {
  let count = 0;
  const today = new Date();
  const yearAgo = today.setMonth(today.getMonth() - 12);

  const data = x.filter((date) => new Date(yearAgo) < new Date(date.date));

  for (const i in data) {
    count += parseFloat(data[i].time, 10);
  }

  return count;
}

function latestLogs() {
  const list = [];
  const data = parseLogs(logs);

  for (const i in data) {
    const articles = getArticles();

    if (articles.indexOf(data[i].name) != -1) {
      list.push(data[i].latestLog);
    }
  }  

  return list;
}

function readingList(x) {
  const list = [];

  for (const i in x) {
    if (x.indexOf(data[i].name) != -1) {
      list.push(data[i].latestLog);
    }
  }  

  return list;
}

module.exports.parseLogs = parseLogs;
module.exports.totalHours = totalHours;
module.exports.averageHours = averageHours;
module.exports.latestLogs = latestLogs;
