const {genArray} = require('./utils');

/**
 * Generate polyline chart
 * @param {Array} data - Array of numerical values
 * @param {number} points - Number of points to display
 * @param {number} cap - Chart ceiling value
 * @return {string} SVG
 */
module.exports = function (data, points, cap = 12) {
  function makePoints() {
    let s = '';
    let stack = false;
    const set = data.length < points
      ? genArray(points - data.length, 0).concat(data)
      : data;

    const convert = n => (!n ? 100 : Math.ceil((25 * (cap - n)) / 3));
    const append = (i, v) => s += `${i},${v.toFixed(0)} `;
    for (let i = 0, l = set.length; i < l; i++) {
      const v = convert(set[i]);
      if (v === 100) {
        const next = set[i + 1];
        const cn = convert(next);
        if (stack) {
          if (cn !== 100 || next === undefined) {
            append(i, v);
            stack = false;
          }
          continue;
        }
        if (cn === 100) stack = true;
      }
      append(i, v);
    }
    return s.trim();
  }

  return `<svg height="100" width="${points}" viewBox="0 -10 ${points} 120" preserveAspectRatio="none" aria-label="Chart"><polyline vector-effect="non-scaling-stroke" points="${makePoints()}"></polyline></svg>`;
};
