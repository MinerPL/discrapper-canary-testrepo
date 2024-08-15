n.d(t, {
	_: function () {
		return c;
	}
});
var s = n(442837),
	a = n(78839),
	r = n(74538),
	i = n(104494),
	l = n(639119),
	o = n(474936);
function c(e) {
	let { defaultResponse: t, onDiscountOffer: n, onNonSubscriber: c, onTier0TrialOffer: d, onTier2TrialOffer: _, onTier0TrialPeriod: u, onTier2TrialPeriod: E, onNonTier2Subscriber: T, onTier2Subscriber: I, onCustomCriteria: R } = e,
		C = (0, l.N)(),
		g = (0, i.Ng)(),
		p = (0, s.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription()),
		N = r.ZP.getPremiumTypeFromSubscription(p);
	if (null != R) {
		let e = R();
		if (null != e) return e;
	}
	return null != C && o.nG[C.trial_id].skus.includes(o.Si.TIER_0) ? (null != d ? d : t) : null != C && o.nG[C.trial_id].skus.includes(o.Si.TIER_2) ? (null != _ ? _ : t) : null != p && null != p.trialId && N === o.p9.TIER_0 ? (null != u ? u : t) : null != p && null != p.trialId && N === o.p9.TIER_2 ? (null != E ? E : t) : null != g ? (null != n ? n : t) : null == N ? (null != c ? c : t) : N === o.p9.TIER_0 || N === o.p9.TIER_1 ? (null != T ? T : t) : N === o.p9.TIER_2 ? (null != I ? I : t) : t;
}
