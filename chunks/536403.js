"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var r = n(528734),
  i = n(352187),
  a = n(991656),
  o = n(951516),
  s = n(21231);

function u(e, t) {
  (0, o.Z)(2, arguments);
  var n, u = (0, r.default)(e),
    c = (0, r.default)(t),
    l = (0, a.Z)(u, c),
    d = Math.abs((0, i.default)(u, c));
  if (d < 1) n = 0;
  else {
    1 === u.getMonth() && u.getDate() > 27 && u.setDate(30), u.setMonth(u.getMonth() - l * d);
    var f = (0, a.Z)(u, c) === -l;
    (0, s.Z)((0, r.default)(e)) && 1 === d && 1 === (0, a.Z)(e, c) && (f = !1), n = l * (d - Number(f))
  }
  return 0 === n ? 0 : n
}