const DeathClock = ({ birth }) => {
  var birth = new Date(birth);

  var ley = 75;
  var led = 25567.5;

  var ndl = Math.round(Math.abs((+birth - +new Date()) / 864e5));
  var pro = Math.round((ndl / led) * 100);
  var etr = led - ndl;
  var eyd = birth.getFullYear() + ley;

  function Mortem(d) {
    this.d = d;

    (this.ley = 70), // human life expectancy (years)
      (this.led = 25567.5), // human life expectancy (days)
      /**
       * Calculate estimated time remaining
       * @return {number} ETR (days)
       */
      (this.etr = () => this.led - this.ndl());

    /**
     * Calculate estimate year of death
     * @return {number} EYD
     */
    this.eyd = () => this.d.getFullYear() + this.ley;

    /**
     * Calculate the number of days lived so far
     * @return {number} number of days
     */
    (this.ndl = () => {
      return Math.round(Math.abs((+this.d - +new Date()) / 864e5));
    }),
      /**
       * Calculate progress
       * @return {number} progress percentage
       */
      (this.pro = () => (this.ndl() / this.led) * 100);
  }
  return (
    <div>
      <span>
        {pro}% of life lived so far, assuming living up to {ley} years. Expected year of death is{" "}
        {eyd} which is in {etr} days.
      </span>
    </div>
  );
};

export default DeathClock;
