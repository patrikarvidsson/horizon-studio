/* ---------------------------------- */
/* Date passed since
/* ---------------------------------- */

export function daysPassed(dt) {
  var current = new Date(dt.getTime());
  var previous = new Date(dt.getFullYear(), 0, 1);

  return Math.ceil((current - previous + 1) / 86400000);
}

/* ---------------------------------- */
/* Format date string
/* ---------------------------------- */

export function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

/* ---------------------------------- */
/* Title case
/* ---------------------------------- */

export function titleCase(str) {
  var splitStr = String(str).toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

/* ---------------------------------- */
/* Slugify string
/* ---------------------------------- */

export function slugifyString(string) {
  const a = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
  const b = "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

/* ---------------------------------- */
/* Format route path
/* ---------------------------------- */

export function formatPath(p) {
  return p.substring(p.indexOf("/wiki")).replace(/\.mdx$/, "");
}
