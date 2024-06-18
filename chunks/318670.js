"use strict";
var r = n(345114),
  i = n(806159),
  a = n(738562);
t.Z = function(e, t, n, o, s, u) {
  var c = 1 & n,
    l = e.length,
    d = t.length;
  if (l != d && !(c && d > l)) return !1;
  var f = u.get(e),
    p = u.get(t);
  if (f && p) return f == t && p == e;
  var h = -1,
    m = !0,
    g = 2 & n ? new r.Z : void 0;
  for (u.set(e, t), u.set(t, e); ++h < l;) {
    var _ = e[h],
      b = t[h];
    if (o) var v = c ? o(b, _, h, t, e, u) : o(_, b, h, e, t, u);
    if (void 0 !== v) {
      if (v) continue;
      m = !1;
      break
    }
    if (g) {
      if (!(0, i.Z)(t, function(e, t) {
          if (!(0, a.Z)(g, t) && (_ === e || s(_, e, n, o, u))) return g.push(t)
        })) {
        m = !1;
        break
      }
    } else if (!(_ === b || s(_, b, n, o, u))) {
      m = !1;
      break
    }
  }
  return u.delete(e), u.delete(t), m
}