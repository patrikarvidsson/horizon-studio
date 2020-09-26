import _ from "lodash";

import Link from "next/link";
import { wikiEntries, projectDict } from "../../utils/stats";
import { formatDate, formatPath } from "../../utils/helpers";

const EntryRow = ({ data }) => {
  const Entries = Object.entries(_.orderBy(wikiEntries, ["lastLog.date"], ["desc"]));

  return (
    <>
      {Entries.map((entry) => {
        var today = new Date();
        var breakpoint = new Date().setDate(today.getDate() - 365 * 3);

        const wikiEntry = entry[1].entry[0];
        const latestLog = wikiEntries[wikiEntry.title].lastLog;

        const filter = wikiEntry.type && wikiEntry.type == data;
        const filter2 =
          wikiEntry.__resourcePath.match("/projects/") ||
          wikiEntry.__resourcePath.match("/portfolio/");

        const url = wikiEntry.__resourcePath.match("pages/(.*).md");
        const path = url != null ? url[1].replace("/index", "") : null;

        const isWithinBreakpoint = new Date(latestLog.date) > breakpoint;
        const isSubstantial =
          projectDict[wikiEntry.title] && projectDict[wikiEntry.title].totalTime > 0;

        return isWithinBreakpoint && isSubstantial && filter2 ? (
          <div>
            {wikiEntry.type == "client" ? (
              <p>{"█".repeat(wikiEntry.title.length)}</p>
            ) : (
              <Link href={"/" + path}>
                <a>{wikiEntry.title}</a>
              </Link>
            )}
            <span>{projectDict[wikiEntry.title].totalEntries + " logs"}</span>
          </div>
        ) : null;
      })}
    </>
  );
};

export default EntryRow;
