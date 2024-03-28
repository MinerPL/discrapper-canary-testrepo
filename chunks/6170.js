"use strict";
r.r(t);
var n = r("583738"),
  a = r("508977"),
  o = r("678529");
t.default = function(e) {
  var t = (0, a.default)(e);
  return 1 == t.length && t[0][2] ? (0, o.default)(t[0][0], t[0][1]) : function(r) {
    return r === e || (0, n.default)(r, e, t)
  }
}