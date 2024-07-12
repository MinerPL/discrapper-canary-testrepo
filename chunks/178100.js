s.d(t, {
  Z: function() {
return l;
  }
});
var n = s(470079),
  a = s(913527),
  i = s.n(a),
  r = s(55935);
let o = i().duration(30, 'days');

function l(e, t) {
  return n.useMemo(() => (0, r.vc)(t ? null != e.outboundRedemptionEndDate ? i()(e.outboundRedemptionEndDate) : i()(e.endDate).add(o) : i()(e.endDate), 'LL'), [
e,
t
  ]);
}