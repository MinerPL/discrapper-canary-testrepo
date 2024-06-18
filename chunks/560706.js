var n = e(196322),
  o = e(443735),
  i = e(402428),
  a = e(830911),
  u = e(406705),
  f = e(828091);
t.exports = function(t, r, e) {
  r = n(r, t);
  for (var c = -1, s = r.length, p = !1; ++c < s;) {
    var l = f(r[c]);
    if (!(p = null != t && e(t, l))) break;
    t = t[l]
  }
  return p || ++c != s ? p : !!(s = null == t ? 0 : t.length) && u(s) && a(l, s) && (i(t) || o(t))
}