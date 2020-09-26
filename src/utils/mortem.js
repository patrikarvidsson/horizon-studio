/**
 * Mortem
 * Morbid stats
 *
 * @author Josh Avanier
 * @license MIT
 */

function Mortem(d = new Date()) {
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
