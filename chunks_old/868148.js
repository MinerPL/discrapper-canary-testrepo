var n = l("728110"),
  a = l("705646");
e.exports = function e(t, l, s, r, i) {
  var u = -1,
    o = t.length;
  for (s || (s = a), i || (i = []); ++u < o;) {
    var d = t[u];
    l > 0 && s(d) ? l > 1 ? e(d, l - 1, s, r, i) : n(i, d) : !r && (i[i.length] = d)
  }
  return i
}