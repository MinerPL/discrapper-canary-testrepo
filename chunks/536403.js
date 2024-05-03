"use strict";
u.r(e), u.d(e, {
  default: function() {
    return o
  }
});
var n = u("528734"),
  r = u("352187"),
  a = u("991656"),
  f = u("951516"),
  d = u("21231");

function o(t, e) {
  (0, f.default)(2, arguments);
  var u, o = (0, n.default)(t),
    i = (0, n.default)(e),
    l = (0, a.default)(o, i),
    s = Math.abs((0, r.default)(o, i));
  if (s < 1) u = 0;
  else {
    1 === o.getMonth() && o.getDate() > 27 && o.setDate(30), o.setMonth(o.getMonth() - l * s);
    var c = (0, a.default)(o, i) === -l;
    (0, d.default)((0, n.default)(t)) && 1 === s && 1 === (0, a.default)(t, i) && (c = !1), u = l * (s - Number(c))
  }
  return 0 === u ? 0 : u
}