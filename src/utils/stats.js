import { titleCase, slugifyString } from "./helpers";

import { tablatal } from "./tablatal";
import { indental } from "./indental";

import { raw } from "../database/log.tbtl";
import { books } from "../database/books.tbtl";

/* ---------------------------------- */
/* Importing raw data
/* ---------------------------------- */

export const entries = tablatal(raw);
export const bookEntries = tablatal(books);

/* ---------------------------------- */
/* Manipulate raw data
/* ---------------------------------- */

var today = new Date();
var yearAgo = today.setMonth(today.getMonth() - 12);

export const entries2 = entries.filter((date) => new Date(yearAgo) < new Date(date.date));

/* ---------------------------------- */
/* Parse projects in log.tbtl
/* ---------------------------------- */

export const projectDict = {};

const parseProjects = (projectDict) => {
  for (const i in entries) {
    let key = entries[i].project;
    let hour = entries[i].time;
    if (key in projectDict) {
      projectDict[key].name = key;
      projectDict[key].entries.push(entries[i]);
      projectDict[key].totalEntries += 1;
      projectDict[key].totalTime += parseFloat(hour, 10);
    } else {
      projectDict[key] = {};
      projectDict[key].entries = [];
      projectDict[key].entries.push(entries[i]);
      projectDict[key].totalEntries = 1;
      projectDict[key].totalTime = parseFloat(hour, 10);
    }
  }
};

parseProjects(projectDict);

const totalProjectHours = (projectDict) => {
  let count = 0;

  for (const i in projectDict) {
    count += projectDict[i].totalTime;
  }

  return count;
};

totalProjectHours(projectDict);

export const projectDictYear = {};

const parseProjectsYear = (projectDictYear) => {
  for (const i in entries2) {
    let key = entries2[i].project;
    let hour = entries2[i].time;
    if (key in projectDictYear) {
      projectDictYear[key].entries2.push(entries2[i]);
      projectDictYear[key].totalTime += parseFloat(hour, 10);
    } else {
      projectDictYear[key] = {};
      projectDictYear[key].entries2 = [];
      projectDictYear[key].entries2.push(entries2[i]);
      projectDictYear[key].totalTime = parseFloat(hour, 10);
    }
  }
};

parseProjectsYear(projectDictYear);

const totalProjectHoursLastYear = (projectDictYear) => {
  let count = 0;

  for (const i in projectDictYear) {
    count += projectDictYear[i].totalTime;
  }

  return count;
};

totalProjectHoursLastYear(projectDictYear);

export const projectStats = {
  allEntries: Object.keys(projectDict),
  allProjects: Object.keys(projectDict),
  size: entries.length,
  totalHours: Math.round(totalProjectHours(projectDict)),
  totalTopics: Object.keys(projectDict).length,
};

export const overallStats = {
  size: entries.length,
  totalHours: Math.round(totalProjectHours(projectDict)),
  totalHoursYear: Math.round(totalProjectHoursLastYear(projectDictYear)),
  totalTopics: Object.keys(projectDict).length,
  oldestEntry: entries[entries.length - 1],
  newestEntry: entries[0],
};

/* ---------------------------------- */
/* Parse markdown entries
/* ---------------------------------- */

import { frontMatter as wikiPages } from "../{pages,unpublished}/**/*.md";
export const wikiEntries = {};

const parseEntries = (wikiEntries) => {
  for (const i in wikiPages) {
    let key = wikiPages[i].title;
    if (key in wikiEntries) {
      wikiEntries[key].entry.push(wikiPages[i]);
    } else {
      wikiEntries[key] = {};
      wikiEntries[key].name = key;
      wikiEntries[key].lastLog =
        projectDict[key] != null
          ? projectDict[key].entries[0]
          : "Notice: No log entry found for " + key;
      wikiEntries[key].entry = [];
      wikiEntries[key].entry.push(wikiPages[i]);
    }
  }
};

parseEntries(wikiEntries);
