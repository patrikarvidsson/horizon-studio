import _ from "lodash";

import Link from "next/link";
import { wikiEntries, projectDict } from "../../utils/stats";
import { formatDate, formatPath } from "../../utils/helpers";

const TrackerRow = () => {
  const Entries = Object.entries(_.orderBy(wikiEntries, ["lastLog.date"], ["desc"]));

  console.log(Entries);
  console.log(wikiEntries);

  return (
    <>
      {Entries.map((project) => {
        var today = new Date();
        var breakpoint = new Date().setDate(today.getDate() - 365 * 2);

        const latestWiki = project[1].entry[0];
        const wikiEntry = project[1].entry[0];
        const latestLog = wikiEntries[latestWiki.title].lastLog;

        const url = latestWiki.__resourcePath.match("pages/(.*).md");
        const path = url != null ? url[1].replace("/index", "") : null;

        const isNotMissingLog = !latestLog.toString().includes("Notice");
        const isWithinBreakpoint = new Date(latestLog.date) > breakpoint;
        const isSubstantial =
          projectDict[latestWiki.title] && projectDict[wikiEntry.title].totalTime > 30;

        const isCommercial = wikiEntry.type == "client";
        const isPublished = wikiEntry.published == true;

        console.log(latestWiki);

        return isNotMissingLog && isWithinBreakpoint ? (
          <>
            {isCommercial ? (
              isSubstantial ? (
                <p key={project}>
                  {latestLog.date} — <span>{"█".repeat(wikiEntry.title.length)}</span>
                </p>
              ) : null
            ) : isPublished ? (
              <p key={project}>
                {latestLog.date} —{" "}
                <Link href={"/" + path}>
                  <a>{latestWiki.title}</a>
                </Link>
              </p>
            ) : (
              <p key={project}>
                {latestLog.date} — {latestWiki.title}
              </p>
            )}
          </>
        ) : null;
      })}
    </>
  );
};

export default TrackerRow;
