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
