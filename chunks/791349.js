"use strict";
r.r(t);
var n = r("186082"),
  a = Math.max;
t.default = function(e, t, r) {
  return t = a(void 0 === t ? e.length - 1 : t, 0),
    function() {
      for (var o = arguments, i = -1, l = a(o.length - t, 0), u = Array(l); ++i < l;) u[i] = o[t + i];
      i = -1;
      for (var s = Array(t + 1); ++i < t;) s[i] = o[i];
      return s[t] = r(u), (0, n.default)(e, this, s)
    }
}