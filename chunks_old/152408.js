"use strict";
r.r(t), r.d(t, {
  default: function() {
    return o
  }
});
var n = r("472092"),
  a = Object.prototype.hasOwnProperty,
  o = function(e, t, r, o, i, u) {
    var l = 1 & r,
      s = (0, n.default)(e),
      f = s.length;
    if (f != (0, n.default)(t).length && !l) return !1;
    for (var c = f; c--;) {
      var d = s[c];
      if (!(l ? d in t : a.call(t, d))) return !1
    }
    var p = u.get(e),
      h = u.get(t);
    if (p && h) return p == t && h == e;
    var b = !0;
    u.set(e, t), u.set(t, e);
    for (var v = l; ++c < f;) {
      var g = e[d = s[c]],
        x = t[d];
      if (o) var y = l ? o(x, g, d, t, e, u) : o(g, x, d, e, t, u);
      if (!(void 0 === y ? g === x || i(g, x, r, o, u) : y)) {
        b = !1;
        break
      }
      v || (v = "constructor" == d)
    }
    if (b && !v) {
      var m = e.constructor,
        w = t.constructor;
      m != w && "constructor" in e && "constructor" in t && !("function" == typeof m && m instanceof m && "function" == typeof w && w instanceof w) && (b = !1)
    }
    return u.delete(e), u.delete(t), b
  }