"use strict";
r.r(t), r.d(t, {
  default: function() {
    return u
  }
});
var n = r("29264"),
  a = r("443061"),
  o = r("299911"),
  i = r("794666"),
  u = function(e, t, r) {
    if (!(0, i.default)(r)) return !1;
    var u = typeof t;
    return ("number" == u ? !!((0, a.default)(r) && (0, o.default)(t, r.length)) : "string" == u && t in r) && (0, n.default)(r[t], e)
  }