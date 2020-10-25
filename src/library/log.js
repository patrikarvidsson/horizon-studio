const fs = require("fs");
const { duration } = require("./lib/utils");

function Entry(attr) {
  Object.assign(this, attr);
  this.dur = duration(this.s, this.e);
}

module.exports = function (file) {
  const log = fs.readFileSync(file, "utf8");

  function makeKey(segs) {
    segs.pop();
    const keys = {};
    let counter = 0;
    for (const id in segs) {
      const key = segs[id].trim().toLowerCase();
      const len = id < segs.length - 1 ? segs[id].length : -1;
      keys[key] = [counter, len - 1];
      counter += len;
    }
    return keys;
  }

  const a = [];

  const lines = log.trim().split("\n");
  const key = makeKey(lines.shift().match(/(\w*\W*)/g));
  for (const id in lines) {
    if (lines[id].trim() === "") {
      continue;
    }
    if (lines[id].substr(0, 1) === ";") {
      continue;
    }
    const entry = {};
    for (const i in key) {
      entry[i] = lines[id]
        .substr(key[i][0], key[i][1] < 0 ? lines[id].length : key[i][1])
        .trim();
    }
    a.push(entry);
  }
  return a;
};
