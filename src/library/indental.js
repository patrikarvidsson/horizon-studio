module.exports = function (entries) {
  this.entries = entries;

  function sort(arr) {
    return Object.keys(arr).sort((a, b) => {
      return arr[a].term > arr[b].term ? 1 : -1;
    });
  }

  this.getChildren = function (name) {
    const scion = [];
    const tmp = [];

    for (const id in this.entries) {
      const term = this.entries[id];
      const { unde } = term;
      if (unde && name === unde) {
        tmp[tmp.length] = term;
      }
    }

    const sorted = sort(tmp);
    for (let i = 0, l = sorted.length; i < l; i++) {
      scion[i] = tmp[sorted[i]];
    }

    return scion;
  };
};
