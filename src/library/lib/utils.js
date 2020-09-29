module.exports = {

  apostrophise (text) {
    return text.replace(/([A-Za-z])\'/g, '$1&rsquo;');
  },

  avg (values = []) {
    const l = values.length;
    if (l === 0) return 0;
    let sum = 0;
    for (let i = 0; i < l; i++) {
      sum += values[i];
    }
    return sum / l;
  },

  /**
   * Capitalise string
   * @param {string} str
   * @return {string}
   */
  cap (str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  },

  /**
   * Dewidow text
   * @param {string}
   * @return {string}
   */
  deWidow (text) {
    const words = text.split(' ');
    if (words.length === 1) return text;
    const last = words.pop();
    words[words.length - 1] += `&nbsp;${last}`;
    return words.join(' ');
  },

  /**
   * Calc duration
   * @param {number} start
   * @param {number} end
   * @return {number} Duration
   */
  duration (start, end) {
    return end === undefined ? 0 : (+end - +start) / 36E5;
  },

  /**
   * Generate array
   * Replaces `new Array(size).fill(content)`
   * @param {number} size
   * @param {*} content
   * @return {array}
   */
  genArray (size, content) {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr[i] = content;
    }
    return arr;
  },

  /**
   * Check if string is a URL
   * @param {string} str
   * @return {boolean}
   */
  isExternalLink (str) {
    return str.includes('https:')
      || str.includes('http:')
      || str.includes('dat:');
  },

  /**
   * Get max value in a set
   * @param {array} values
   * @return {number} Max
   */
  max (values = []) {
    let l = values.length;
    if (l === 0) return 0;
    let m = 0;
    while (l--) {
      if (values[l] > m) m = values[l];
    }
    return m;
  },

  /**
   * Pad number with zero
   * @param {number} num
   * @return {string} Padded number
   */
  pad (num) {
    return `0${num}`.substr(-2);
  },

  /**
   * Sum up values
   * @param {array} values
   * @return {number} Sum
   */
  sum (values = []) {
    const l = values.length;
    if (l === 0) return 0;
    let x = 0;
    for (let i = 0; i < l; i++) {
      x += values[i];
    }
    return x;
  },

  /**
   * Make string URL-friendly
   * e.g. hello world -> hello_world
   * @param {string} str
   * @return {string} URL-friendly string
   */
  url (str) {
    return str.replace(/ /g, '_').replace(/\W/g, '').trim().toLowerCase();
  },
};
