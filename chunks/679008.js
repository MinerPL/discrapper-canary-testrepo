"use strict";
r.r(t), r.d(t, {
  default: function() {
    return o
  }
});
var n = r("723347"),
  a = 1 / 0,
  o = function(e) {
    if ("string" == typeof e || (0, n.default)(e)) return e;
    var t = e + "";
    return "0" == t && 1 / e == -a ? "-0" : t
  }