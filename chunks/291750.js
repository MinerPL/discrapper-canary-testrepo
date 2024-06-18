"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var r = n(528734),
  i = n(492511),
  a = n(991656),
  o = n(951516);

function s(e, t) {
  (0, o.Z)(2, arguments);
  var n = (0, r.default)(e),
    s = (0, r.default)(t),
    u = (0, a.Z)(n, s),
    c = Math.abs((0, i.default)(n, s));
  n.setFullYear(1584), s.setFullYear(1584);
  var l = (0, a.Z)(n, s) === -u,
    d = u * (c - Number(l));
  return 0 === d ? 0 : d
}