"use strict";
var r = n(186082),
  i = Math.max;
t.Z = function(e, t, n) {
  return t = i(void 0 === t ? e.length - 1 : t, 0),
    function() {
      for (var a = arguments, o = -1, s = i(a.length - t, 0), u = Array(s); ++o < s;) u[o] = a[t + o];
      o = -1;
      for (var c = Array(t + 1); ++o < t;) c[o] = a[o];
      return c[t] = n(u), (0, r.Z)(e, this, c)
    }
}