s.d(n, {
  U: function() {
return _;
  }
});
var l = s(913527),
  t = s.n(l),
  i = s(442837),
  r = s(853872),
  a = s(509545),
  c = s(78839),
  o = s(74538),
  u = s(981631),
  d = s(231338);

function _() {
  let e = (0, i.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
n = (0, i.e7)([a.Z], () => null != e && null != e.planIdFromItems ? a.Z.get(null == e ? void 0 : e.planIdFromItems) : null),
s = (0, i.e7)([r.Z], () => null != e && null != e.paymentSourceId ? r.Z.getPaymentSource(e.paymentSourceId) : null, [e]),
l = null != s && d.Uk.has(s.type),
_ = (null == e ? void 0 : e.status) === u.O0b.PAST_DUE ? t()().diff(t()(e.currentPeriodStart), 'days') : 0;
  return !!(null != e && null != n && (0, o.uZ)(n.id)) && l && _ >= 0 && _ <= (0, o.lY)(e).days && e.status === u.O0b.PAST_DUE && !e.isPurchasedExternally;
}