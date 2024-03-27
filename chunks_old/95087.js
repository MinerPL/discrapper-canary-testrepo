"use strict";
r.r(t), r.d(t, {
  default: function() {
    return o
  }
});
var n = r("178275"),
  a = Math.max,
  o = function(e, t, r) {
    return t = a(void 0 === t ? e.length - 1 : t, 0),
      function() {
        for (var o = arguments, i = -1, u = a(o.length - t, 0), l = Array(u); ++i < u;) l[i] = o[t + i];
        i = -1;
        for (var s = Array(t + 1); ++i < t;) s[i] = o[i];
        return s[t] = r(l), (0, n.default)(e, this, s)
      }
  }