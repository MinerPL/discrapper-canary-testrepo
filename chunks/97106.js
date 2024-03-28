"use strict";
r.r(t);
var n = r("347941"),
  a = Object.prototype.hasOwnProperty;
t.default = function(e, t, r, o, i, l) {
  var u = 1 & r,
    s = (0, n.default)(e),
    f = s.length;
  if (f != (0, n.default)(t).length && !u) return !1;
  for (var c = f; c--;) {
    var d = s[c];
    if (!(u ? d in t : a.call(t, d))) return !1
  }
  var p = l.get(e),
    h = l.get(t);
  if (p && h) return p == t && h == e;
  var b = !0;
  l.set(e, t), l.set(t, e);
  for (var v = u; ++c < f;) {
    var g = e[d = s[c]],
      x = t[d];
    if (o) var y = u ? o(x, g, d, t, e, l) : o(g, x, d, e, t, l);
    if (!(void 0 === y ? g === x || i(g, x, r, o, l) : y)) {
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
  return l.delete(e), l.delete(t), b
}