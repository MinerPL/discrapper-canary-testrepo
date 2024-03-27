"use strict";
r.r(t), r.d(t, {
  default: function() {
    return o
  }
});
var n = r("366000"),
  a = r("741221"),
  o = function(e) {
    return (0, n.default)(function(t, r) {
      var n = -1,
        o = r.length,
        i = o > 1 ? r[o - 1] : void 0,
        u = o > 2 ? r[2] : void 0;
      for (i = e.length > 3 && "function" == typeof i ? (o--, i) : void 0, u && (0, a.default)(r[0], r[1], u) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++n < o;) {
        var l = r[n];
        l && e(t, l, n, i)
      }
      return t
    })
  }