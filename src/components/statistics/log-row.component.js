import _ from "lodash";

import Link from "next/link";
import { wikiEntries, projectDict } from "../../utils/stats";
import { daysPassed, formatDate, formatPath } from "../../utils/helpers";

const EntryRow = ({ data }) => {
  var today = new Date();
  var date = new Date(2020, 1, 1);
  var breakpoint = new Date().setDate(today.getDate() - date.getDate());

  const wikiEntryUrl =
    wikiEntries[data] != undefined
      ? wikiEntries[data].entry[0].__resourcePath.match("pages/(.*).md")
      : "Notice: Cannot link " + data + ". No entry exist.";
  const wikiEntryPath = wikiEntryUrl[1].replace("/index ", "");

  const wikiEntry =
    wikiEntries[data] != undefined
      ? wikiEntries[data]
      : console.warn("Notice: no wiki entry found for " + data);
  const isPublished = wikiEntry != undefined ? wikiEntry.entry[0].published : false;

  const latestLog = projectDict[data].entries[0].date;

  const isWithinBreakpoint = new Date(latestLog.date) > date;

  return wikiEntries[data] != undefined && isPublished ? (
    <div>
      <Link href={"/" + wikiEntryPath}>
        <a>{data}</a>
      </Link>
      <span>{Math.ceil(projectDict[data].totalEntries) + " logs"}</span>
    </div>
  ) : (
    <div>
      <span>{data}</span>
      <span>{Math.ceil(projectDict[data].totalEntries) + " logs"}</span>
    </div>
  );
};

export default EntryRow;
