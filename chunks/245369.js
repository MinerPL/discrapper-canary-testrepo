"use strict";
r.r(t);
var n = r("670097");
t.default = function(e, t) {
  return function(r, a) {
    if (null == r) return r;
    if (!(0, n.default)(r)) return e(r, a);
    for (var o = r.length, i = t ? o : -1, l = Object(r);
      (t ? i-- : ++i < o) && !1 !== a(l[i], i, l););
    return r
  }
}