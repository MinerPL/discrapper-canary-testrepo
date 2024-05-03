"use strict";
u.r(e), u.d(e, {
  default: function() {
    return a
  }
});
var n = u("528734"),
  r = u("951516");

function a(t, e) {
  (0, r.default)(2, arguments);
  var u = (0, n.default)(t),
    a = (0, n.default)(e),
    f = u.getTime() - a.getTime();
  return f < 0 ? -1 : f > 0 ? 1 : f
}