module.exports = function (d = new Date()) {
  const dy = d.getFullYear();
  this.n = ~~((d - new Date(dy, 0, 1)) / 864E5) + 1;
  this.isYearDay = this.n === 365;
  this.isLeapDay = this.n === 366;
  this.day = d.getDay();
  this.year = dy;

  if (!this.isYearDay && !this.isLeapDay) {
    this.month = String.fromCharCode(97 + ~~((this.n - 1) / 14)).toUpperCase();
    let dd = this.n - 14 * ~~(this.n / 14);
    if (dd === 0) dd = 14;
    this.date = dd.toString(15).toUpperCase();
  }

  this.display = function () {
    let dm = '';
    if (this.isYearDay) dm = 'Y';
    else if (this.isLeapDay) dm = 'L';
    else dm = `${this.date}${this.month}`;
    return `${dm}${this.year.toString().slice(-2)}`;
  };
};
