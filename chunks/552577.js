"use strict";
r.r(t), r.d(t, {
  default: function() {
    return a
  }
});
var n = r("443061"),
  a = function(e, t) {
    return function(r, a) {
      if (null == r) return r;
      if (!(0, n.default)(r)) return e(r, a);
      for (var o = r.length, i = t ? o : -1, u = Object(r);
        (t ? i-- : ++i < o) && !1 !== a(u[i], i, u););
      return r
    }
  }