const fs = require('fs');

module.exports = function (pages) {
  this.build = function () {
    for (const id in pages) {
      const page = pages[id];
      fs.writeFile(page.path, page.render(), (err) => {
        if (err) console.error(err);
      });
    }
  };
};

