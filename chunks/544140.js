var r = n(796581),
  o = n(149912);
e.exports = function e(t, n, a, i, c) {
  var l = -1,
s = t.length;
  for (a || (a = o), c || (c = []); ++l < s;) {
var u = t[l];
n > 0 && a(u) ? n > 1 ? e(u, n - 1, a, i, c) : r(c, u) : !i && (c[c.length] = u);
  }
  return c;
};