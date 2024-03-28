"use strict";
r.r(t);
var n = r("572657"),
  a = r("670097"),
  o = r("429296"),
  i = r("675717");
t.default = function(e, t, r) {
  if (!(0, i.default)(r)) return !1;
  var l = typeof t;
  return ("number" == l ? !!((0, a.default)(r) && (0, o.default)(t, r.length)) : "string" == l && t in r) && (0, n.default)(r[t], e)
}