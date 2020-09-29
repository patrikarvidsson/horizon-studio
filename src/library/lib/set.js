const {sum, pad} = require('./utils');

/**
 * Add days to date
 * @param {Date} date
 * @param {number=} i - Increment
 * @return {Date}
 */
function addDays (date, i = 1) {
  const d = new Date(date);
  d.setDate(d.getDate() + i);
  return d;
}

/**
 * Convert to date ID
 * @param {Date} date
 * @return {string} YYYYMMDD
 */
function toDate (date) {
  const y = date.getFullYear();
  const m = pad(date.getMonth());
  const d = pad(date.getDate());
  return `${y}${m}${d}`;
}

/**
 * List dates
 * @param {Date}  s - Start
 * @param {Date=} e - End
 * @return {array} List
 */
function listDates(s, e = new Date()) {
  const l = [];

  let n = new Date(s);
  n.setHours(0, 0, 0, 0);

  for (; n <= e;) {
    l[l.length] = n;
    n = addDays(n, 1);
  }

  return l;
}

module.exports = class LogSet {
  /**
   * Construct set
   * @param {Array=} ent
   */
  constructor(ent = []) {
    this.logs = ent;
  }

  get count() { return this.logs.length; }

  get last() { return this.logs.slice(-1)[0]; }

  get lh() { return this.logHours(); }

  /**
   * Calculate efficiency
   * @return {number}
   */
  efficiency () {
    const l = this.count;
    if (l === 0) return 0;
    let score = 0;
    let count = 0;
    for (let i = 0; i < l; i++) {
      const {x} = this.logs[i];
      score += x || 0;
      count++;
    }

    return score / this.count * 100;
  }

  /**
   * List durations
   * @return {array} List
   */
  listDurations() {
    const d = [];
    const l = this.count;
    if (l === 0) return d;
    const n = this.last.e === undefined ? 2 : 1;
    for (let i = l - n; i >= 0; i--) {
      d[d.length] = this.logs[i].dur;
    }
    return d;
  }

  /**
   * Calculate logged hours
   * @return {number} Logged hours
   */
  logHours() {
    return this.count === 0 ? 0 : sum(this.listDurations());
  }

  /**
   * Get recent entries
   * @param {number} [n] - Number of days
   * @return {array} Entries
   */
  recent(n = 1) {
    const x = n % 1 === 0 ? n : Math.round(n);
    return x < 1 ? [] : this.byPeriod(addDays(new Date(), -x));
  }

  /**
   * Sort entries
   * @param {Date=} end
   * @return {array} Sorted entries
   */
  sortEntries(end = new Date()) {
    const el = this.count;
    if (el === 0) return [];

    const list = listDates(this.logs[0].s, end);
    const dates = {};

    for (let i = 0, l = list.length; i < l; i++) {
      dates[toDate(list[i])] = [];
    }

    for (let i = 0; i < el; i++) {
      const x = toDate(new Date(this.logs[i].s));
      if (x in dates) dates[x][dates[x].length] = this.logs[i];
    }

    return Object.keys(dates).map(i => dates[i]);
  }
};
