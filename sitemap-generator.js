const fs = require("fs");

const globby = require("globby");
const prettier = require("prettier");

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

const getFileUpdatedDate = path => {
  const file = fs.statSync(path);
  const stats = new Date(file.mtime);

  return formatDate(stats);
};

const today = new Date();

(async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
  const pages = await globby([
    "src/pages/**/*{.mdx,.md}",
    "!src/pages/404.mdx",
    "!src/pages/**/_*",
    "!src/pages/_*/**/*{.md,.mdx}",
    "!src/pages/_*.js",
    "!src/pages/api"
  ]);
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map(page => {
                const path = page
                  .replace("src/pages", "")
                  .replace(".mdx", "")
                  .replace(".md", "")
                  .replace("/index", "");
                const route = path === "/index" ? "" : path;
                return `
                        <url>
                            <loc>${`https://patrikarvidsson.com${route}`}</loc>
                            <lastmod>${getFileUpdatedDate(page)}</lastmod>
                        </url>
                    `;
              })
              .join("")}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html"
  });

  // eslint-disable-next-line no-sync
  fs.writeFileSync("public/sitemap.xml", formatted);
})();
