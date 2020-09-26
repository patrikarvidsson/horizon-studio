---
title: Horizon
published: true
type: personal
layout: pageWide
metaDescription: Project information repository, time-tracking engine and personal wiki space.
metaKeywords: time tracking, wiki, logging, research, horizon
---

## Horizon is the codebase running the website you are currently browsing.

The purpose of Horizon is to keep track of the time spent researching different topics and how much time is invested on each individual project.

It summarises logged data and provides key insights into productivity and balance across different sectors.

### Design

Horizon parses [markdown](https://en.wikipedia.org/wiki/Markdown) files for its
wiki entries, and [flat-file](https://en.wikipedia.org/wiki/Flat-file_database)
databases for all recorded logs. The records are stored in
[Tablatal](https://wiki.xxiivv.com/site/tablatal.html), a human-readable
database format.

Each row represents a time entry rounded to nearest thirty minutes, and has a <dfn>sector</dfn> which categorizes the row and <dfn>task</dfn> which documents what was done.

| DATE        | TIME | PROJECT | TASK         | SECTOR    |
| ----------- | ---- | ------- | ------------ | --------- |
| 2020-05-01  | 2.0  | Name    | Graphic      | Visual    |
| 2020-04-29  | 1.5  | Name    | Development  | Code      |

Data is accumlated and processed to visualize productivity on each project. Some of this data can be seen at the [Statistics](/wiki/personal/statistics) page. 

### Aesthetics

Horizon is an experiement in trying to find a balance between minimalism and good user experience. 

It promotes readability for the repository of information it hosts, which will prove more challenging with time as more information is added continuously.

### Building

Horizon is built in [Next](https://nextjs.org/), a React-based framework. All javascript code is removed during build time and HTML and CSS is kept to a minimum to ensure that the website remains simple and fast. It is currently hosted at [Vercel](https://vercel.com).

### Further reading

For more information on the concepts of personal assistants and time management, visit [XXIIVV](https://wiki.xxiivv.com) or [Victor Ivanov](https://v-os.ca).
