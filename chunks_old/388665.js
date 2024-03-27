"use strict";
r.r(t), r.d(t, {
  default: function() {
    return o
  }
});
var n = r("997096"),
  a = r("443061"),
  o = function(e, t) {
    var r = -1,
      o = (0, a.default)(e) ? Array(e.length) : [];
    return (0, n.default)(e, function(e, n, a) {
      o[++r] = t(e, n, a)
    }), o
  }