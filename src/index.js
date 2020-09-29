const Indental = require("./library/indental");
const Tome = require("./library/tome");
const CreatePages = require("./library/factory");
const Builder = require("./library/builder");

const fs = require("fs");
const config = require("./config");

const databases = fs.readdirSync("./database");

let aggregate = "";
for (let i = 0, l = databases.length; i < l; i++) {
  const file = databases[i];
  if (file.endsWith(".ndtl")) {
    aggregate += fs.readFileSync(`./database/${file}`, "utf8");
  }
}

const db = new Indental(new Tome(aggregate));
new Builder(CreatePages(db)).build();
