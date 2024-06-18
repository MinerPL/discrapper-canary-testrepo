var n = e(620014),
  o = e(733892);
t.exports = function(t, r, e, i) {
  var a = e.length,
    u = a,
    f = !i;
  if (null == t) return !u;
  for (t = Object(t); a--;) {
    var c = e[a];
    if (f && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1
  }
  for (; ++a < u;) {
    var s = (c = e[a])[0],
      p = t[s],
      l = c[1];
    if (f && c[2]) {
      if (void 0 === p && !(s in t)) return !1
    } else {
      var h = new n;
      if (i) var v = i(p, l, s, t, r, h);
      if (!(void 0 === v ? o(l, p, 3, i, h) : v)) return !1
    }
  }
  return !0
}