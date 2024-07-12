t.exports = function(t) {
  var e = -1,
r = Array(t.size);
  return t.forEach(function(t, n) {
r[++e] = [
  n,
  t
];
  }), r;
};