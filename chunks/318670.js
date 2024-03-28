"use strict";
r.r(t);
var n = r("345114"),
  a = r("806159"),
  o = r("738562");
t.default = function(e, t, r, i, l, u) {
  var s = 1 & r,
    f = e.length,
    c = t.length;
  if (f != c && !(s && c > f)) return !1;
  var d = u.get(e),
    p = u.get(t);
  if (d && p) return d == t && p == e;
  var h = -1,
    b = !0,
    v = 2 & r ? new n.default : void 0;
  for (u.set(e, t), u.set(t, e); ++h < f;) {
    var g = e[h],
      x = t[h];
    if (i) var y = s ? i(x, g, h, t, e, u) : i(g, x, h, e, t, u);
    if (void 0 !== y) {
      if (y) continue;
      b = !1;
      break
    }
    if (v) {
      if (!(0, a.default)(t, function(e, t) {
          if (!(0, o.default)(v, t) && (g === e || l(g, e, r, i, u))) return v.push(t)
        })) {
        b = !1;
        break
      }
    } else if (!(g === x || l(g, x, r, i, u))) {
      b = !1;
      break
    }
  }
  return u.delete(e), u.delete(t), b
}