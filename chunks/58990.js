var n = r(961499);
e.exports = function(e, t) {
  var r = n(this, e),
a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
};