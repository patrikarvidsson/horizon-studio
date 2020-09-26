import _ from "lodash";

import Link from "next/link";
import { wikiEntries, projectDict } from "../../utils/stats";
import { formatDate, formatPath } from "../../utils/helpers";

const LatestChanges = ({ data }) => {
  const Entries = Object.entries(_.orderBy(wikiEntries, ["lastLog.date"], ["desc"]));

  return (
    <>
      {Entries.map((entry) => {
        var today = new Date();
        var breakpoint = new Date().setDate(today.getDate() - 365 * 3);

        const wikiEntry = entry[1].entry[0];
        const latestLog = wikiEntries[wikiEntry.title].lastLog;

        const filter = wikiEntry.type && wikiEntry.type == data;
        const filter2 = wikiEntry.__resourcePath.match("/") || wikiEntry.__resourcePath.match("");

        const url = wikiEntry.__resourcePath.match("pages/(.*).md");
        const path = url != null ? url[1].replace("/index", "") : null;

        const isWithinBreakpoint = new Date(latestLog.date) > breakpoint;
        const isSubstantial =
          projectDict[wikiEntry.title] && projectDict[wikiEntry.title].totalTime > 0;

        const isPublished = wikiEntry.published != false && wikiEntry.published != null;

        console.log(isPublished + wikiEntry.title);

        return isWithinBreakpoint && isPublished ? (
          <div>
            <span>{latestLog.date}</span> ·&nbsp;
            <Link href={"/" + path}>
              <a>{wikiEntry.title}</a>
            </Link>{" "}
          </div>
        ) : null;
      })}
    </>
  );
};

export default LatestChanges;
