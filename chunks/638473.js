"use strict";
r.r(t);
var n = r("809948"),
  a = r("670097");
t.default = function(e, t) {
  var r = -1,
    o = (0, a.default)(e) ? Array(e.length) : [];
  return (0, n.default)(e, function(e, n, a) {
    o[++r] = t(e, n, a)
  }), o
}