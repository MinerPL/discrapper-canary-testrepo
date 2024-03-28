"use strict";
r.r(t);
var n = r("906024"),
  a = 1 / 0;
t.default = function(e) {
  if ("string" == typeof e || (0, n.default)(e)) return e;
  var t = e + "";
  return "0" == t && 1 / e == -a ? "-0" : t
}