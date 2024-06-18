"use strict";
var r = n(347941),
  i = Object.prototype.hasOwnProperty;
t.Z = function(e, t, n, a, o, s) {
  var u = 1 & n,
    c = (0, r.Z)(e),
    l = c.length;
  if (l != (0, r.Z)(t).length && !u) return !1;
  for (var d = l; d--;) {
    var f = c[d];
    if (!(u ? f in t : i.call(t, f))) return !1
  }
  var p = s.get(e),
    h = s.get(t);
  if (p && h) return p == t && h == e;
  var m = !0;
  s.set(e, t), s.set(t, e);
  for (var g = u; ++d < l;) {
    var _ = e[f = c[d]],
      b = t[f];
    if (a) var v = u ? a(b, _, f, t, e, s) : a(_, b, f, e, t, s);
    if (!(void 0 === v ? _ === b || o(_, b, n, a, s) : v)) {
      m = !1;
      break
    }
    g || (g = "constructor" == f)
  }
  if (m && !g) {
    var y = e.constructor,
      E = t.constructor;
    y != E && "constructor" in e && "constructor" in t && !("function" == typeof y && y instanceof y && "function" == typeof E && E instanceof E) && (m = !1)
  }
  return s.delete(e), s.delete(t), m
}