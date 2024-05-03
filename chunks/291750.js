"use strict";
u.r(e), u.d(e, {
  default: function() {
    return d
  }
});
var n = u("528734"),
  r = u("492511"),
  a = u("991656"),
  f = u("951516");

function d(t, e) {
  (0, f.default)(2, arguments);
  var u = (0, n.default)(t),
    d = (0, n.default)(e),
    o = (0, a.default)(u, d),
    i = Math.abs((0, r.default)(u, d));
  u.setFullYear(1584), d.setFullYear(1584);
  var l = (0, a.default)(u, d) === -o,
    s = o * (i - Number(l));
  return 0 === s ? 0 : s
}