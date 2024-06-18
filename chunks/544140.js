var r = n(796581),
  i = n(149912);
e.exports = function e(t, n, l, s, a) {
  var o = -1,
    u = t.length;
  for (l || (l = i), a || (a = []); ++o < u;) {
    var c = t[o];
    n > 0 && l(c) ? n > 1 ? e(c, n - 1, l, s, a) : r(a, c) : !s && (a[a.length] = c)
  }
  return a
}