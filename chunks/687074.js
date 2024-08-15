var n = r(815869);
e.exports = function(e, t) {
  var r = this.__data__,
a = n(r, e);
  return a < 0 ? (++this.size, r.push([
e,
t
  ])) : r[a][1] = t, this;
};