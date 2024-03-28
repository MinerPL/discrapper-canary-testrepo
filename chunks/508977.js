"use strict";
r.r(t);
var n = r("854441"),
  a = r("917430");
t.default = function(e) {
  for (var t = (0, a.default)(e), r = t.length; r--;) {
    var o = t[r],
      i = e[o];
    t[r] = [o, i, (0, n.default)(i)]
  }
  return t
}