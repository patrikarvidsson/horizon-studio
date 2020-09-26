import _ from "lodash";

import TrackerStatsRow from "./tracker-stats-row.js";
import EntryRow from "./statistics/entry-row.component";
import LogRow from "./statistics/log-row.component";
import Mortem from "./statistics/death-clock.component";

import { overallStats, wikiEntries, projectDict, entries2, entries } from "../utils/stats";

import { formatDate } from "../utils/helpers";

const TrackerOverall = () => {
  const Entries = Object.entries(_.orderBy(wikiEntries, ["lastLog.date"], ["desc"]));

  var today = new Date();
  var yearAgo = today.setMonth(today.getMonth() - 12);
  var lastYear = (overallStats.totalHoursYear / 182).toFixed(2);

  return (
    <>
      <p>
        The database consists of <strong>{overallStats.size} entries</strong>, with a total of{" "}
        <strong>{overallStats.totalHours} hours</strong> across{" "}
        <strong>{overallStats.totalTopics} topics</strong>. An avverage of{" "}
        <strong>{lastYear} hours per day</strong> was logged in the last 6 months.
      </p>
      <output>
        <div>
          <h4>Work</h4>
          <EntryRow />
        </div>
        <div>
          <h4>Personal</h4>
          <LogRow data="Health" />
          <LogRow data="Meditation" />
          <LogRow data="Scuba" />
          <h4>Languages</h4>
          <LogRow data="PHP" />
          <LogRow data="Rust" />
          <LogRow data="Javascript" />
          <LogRow data="React" />
          <h4>Design</h4>
          <LogRow data="Framer" />
          <LogRow data="User Experience" />
          <LogRow data="User Research" />
          <LogRow data="Design Systems" />
          <LogRow data="Design Thinking" />
        </div>
      </output>
    </>
  );
};

export default TrackerOverall;
