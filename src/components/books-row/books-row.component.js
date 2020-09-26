import Link from "next/link";
import React from "react";

import _ from "lodash";

import StarIcon from "../icons/star.component";
import { bookEntries } from "../../utils/stats";

export default function ReadingList(props) {
  return (
    <div>
      <section>
        {bookEntries.map((entry) => {
          return (
            <React.Fragment key={entry.date + "-" + entry.title}>
              <div>
                <a href={"https://amazon.com/dp/" + entry.sin}>{entry.title}</a>
              </div>
              <div>{entry.author}</div>
              <time>{entry.date}</time>
              <div>
                {_.times(entry.rating, () => {
                  return <StarIcon key={Math.random()} color="#fff" size="12" />;
                })}
              </div>
            </React.Fragment>
          );
        })}
      </section>
    </div>
  );
}
