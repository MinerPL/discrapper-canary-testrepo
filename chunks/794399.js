var r = n(429614),
  i = n(483506);
e.exports = function e(t, n, a, o, s) {
  var l = -1,
u = t.length;
  for (a || (a = i), s || (s = []); ++l < u;) {
var c = t[l];
n > 0 && a(c) ? n > 1 ? e(c, n - 1, a, o, s) : r(s, c) : !o && (s[s.length] = c);
  }
  return s;
};