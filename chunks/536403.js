n.d(t, {
  Z: function() {
return l;
  }
});
var r = n(528734),
  i = n(352187),
  a = n(991656),
  s = n(951516),
  o = n(21231);

function l(e, t) {
  (0, s.Z)(2, arguments);
  var n, l = (0, r.default)(e),
u = (0, r.default)(t),
c = (0, a.Z)(l, u),
d = Math.abs((0, i.default)(l, u));
  if (d < 1)
n = 0;
  else {
1 === l.getMonth() && l.getDate() > 27 && l.setDate(30), l.setMonth(l.getMonth() - c * d);
var _ = (0, a.Z)(l, u) === -c;
(0, o.Z)((0, r.default)(e)) && 1 === d && 1 === (0, a.Z)(e, u) && (_ = !1), n = c * (d - Number(_));
  }
  return 0 === n ? 0 : n;
}