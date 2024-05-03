"use strict";
u.r(e), u.d(e, {
  default: function() {
    return d
  }
});
var n = u("250327"),
  r = u("226430"),
  a = u("951516"),
  f = u("227700");

function d(t, e, u) {
  (0, a.default)(2, arguments);
  var d = (0, r.default)(t, e) / n.millisecondsInMinute;
  return (0, f.getRoundingMethod)(null == u ? void 0 : u.roundingMethod)(d)
}