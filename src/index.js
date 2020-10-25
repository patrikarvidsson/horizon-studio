const Indental = require("./library/indental");
const Tablatal = require("./library/tablatal");
const Tome = require("./library/tome");
const CreatePages = require("./library/factory");
const Builder = require("./library/builder");
const Log = require("./library/log");

const fs = require("fs");
const config = require("./config");

const databases = fs.readdirSync("./database");
const logs = new Log(`./database/log.tbtl`);

let aggregate = "";
for (let i = 0, l = databases.length; i < l; i++) {
  const file = databases[i];
  if (file.endsWith(".ndtl")) {
    aggregate += fs.readFileSync(`./database/${file}`, "utf8");
  }
}

const db = new Indental(new Tome(aggregate));
new Builder(CreatePages(db, logs)).build();
