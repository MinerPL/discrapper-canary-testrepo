t.d(n, {
	U: function () {
		return _;
	}
});
var i = t(913527),
	a = t.n(i),
	r = t(442837),
	s = t(853872),
	l = t(509545),
	o = t(78839),
	c = t(74538),
	u = t(981631),
	d = t(231338);
function _() {
	let e = (0, r.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription()),
		n = (0, r.e7)([l.Z], () =>
			null != e && null != e.planIdFromItems ? l.Z.get(null == e ? void 0 : e.planIdFromItems) : null
		),
		t = (0, r.e7)(
			[s.Z],
			() => (null != e && null != e.paymentSourceId ? s.Z.getPaymentSource(e.paymentSourceId) : null),
			[e]
		),
		i = null != t && d.Uk.has(t.type),
		_ = (null == e ? void 0 : e.status) === u.O0b.PAST_DUE ? a()().diff(a()(e.currentPeriodStart), 'days') : 0;
	return (
		!!(null != e && null != n && (0, c.uZ)(n.id)) &&
		i &&
		_ >= 0 &&
		_ <= (0, c.lY)(e).days &&
		e.status === u.O0b.PAST_DUE &&
		!e.isPurchasedExternally
	);
}
