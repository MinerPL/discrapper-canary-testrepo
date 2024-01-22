n("424973");
var r = n("488063"),
  i = n("862167"),
  o = n("430272");
e.exports = function(e, t, n, s, a, c) {
  var u = 1 & n,
    d = e.length,
    l = t.length;
  if (d != l && !(u && l > d)) return !1;
  var f = c.get(e);
  if (f && c.get(t)) return f == t;
  var p = -1,
    h = !0,
    g = 2 & n ? new r : void 0;
  for (c.set(e, t), c.set(t, e); ++p < d;) {
    var b = e[p],
      v = t[p];
    if (s) var m = u ? s(v, b, p, t, e, c) : s(b, v, p, e, t, c);
    if (void 0 !== m) {
      if (m) continue;
      h = !1;
      break
    }
    if (g) {
      if (!i(t, function(e, t) {
          if (!o(g, t) && (b === e || a(b, e, n, s, c))) return g.push(t)
        })) {
        h = !1;
        break
      }
    } else if (!(b === v || a(b, v, n, s, c))) {
      h = !1;
      break
    }
  }
  return c.delete(e), c.delete(t), h
}