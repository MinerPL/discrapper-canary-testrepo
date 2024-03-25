"use strict";
r.r(t), r.d(t, {
  default: function() {
    return i
  }
}), r("424973");
var n = r("23693"),
  a = r("831139"),
  o = r("863749"),
  i = function(e, t, r, i, u, l) {
    var s = 1 & r,
      f = e.length,
      c = t.length;
    if (f != c && !(s && c > f)) return !1;
    var d = l.get(e),
      p = l.get(t);
    if (d && p) return d == t && p == e;
    var h = -1,
      b = !0,
      v = 2 & r ? new n.default : void 0;
    for (l.set(e, t), l.set(t, e); ++h < f;) {
      var g = e[h],
        x = t[h];
      if (i) var y = s ? i(x, g, h, t, e, l) : i(g, x, h, e, t, l);
      if (void 0 !== y) {
        if (y) continue;
        b = !1;
        break
      }
      if (v) {
        if (!(0, a.default)(t, function(e, t) {
            if (!(0, o.default)(v, t) && (g === e || u(g, e, r, i, l))) return v.push(t)
          })) {
          b = !1;
          break
        }
      } else if (!(g === x || u(g, x, r, i, l))) {
        b = !1;
        break
      }
    }
    return l.delete(e), l.delete(t), b
  }