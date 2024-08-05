var r = n(429614),
  i = n(483506);
e.exports = function e(t, n, a, s, o) {
  var l = -1,
u = t.length;
  for (a || (a = i), o || (o = []); ++l < u;) {
var c = t[l];
n > 0 && a(c) ? n > 1 ? e(c, n - 1, a, s, o) : r(o, c) : !s && (o[o.length] = c);
  }
  return o;
};