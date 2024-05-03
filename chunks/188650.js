"use strict";
u.r(e), u.d(e, {
  default: function() {
    return f
  }
});
var n = u("226430"),
  r = u("951516"),
  a = u("227700");

function f(t, e, u) {
  (0, r.default)(2, arguments);
  var f = (0, n.default)(t, e) / 1e3;
  return (0, a.getRoundingMethod)(null == u ? void 0 : u.roundingMethod)(f)
}