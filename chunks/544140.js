var l = n("796581"),
  r = n("149912");
e.exports = function e(t, n, s, a, i) {
  var u = -1,
    o = t.length;
  for (s || (s = r), i || (i = []); ++u < o;) {
    var c = t[u];
    n > 0 && s(c) ? n > 1 ? e(c, n - 1, s, a, i) : l(i, c) : !a && (i[i.length] = c)
  }
  return i
}