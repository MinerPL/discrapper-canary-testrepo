n.d(t, {
	$g: function () {
		return l;
	},
	Kp: function () {
		return i;
	},
	nA: function () {
		return s;
	}
});
var r = n(74538),
	a = n(474936);
function i(e) {
	let { isTrial: t, isGift: n, selectedSkuId: r, startedPaymentFlowWithPaymentSources: i, inReverseTrial: l } = e;
	return !t && !n && !l && null != r && a.YQ.includes(r) && i;
}
function l(e, t, n) {
	let r = !1;
	return e && null != t && null == t.invoiceItems.find((e) => e.subscriptionPlanId === n.id) && (r = !0), r;
}
function s(e, t, n) {
	let i = null != t ? (0, r.Af)(t) : null,
		l = a.mn[e],
		s = null != n ? n : l;
	return (
		null != i
			? s === i.planId && s === a.IW[e]
				? (s = a.mn[e])
				: s === i.planId && s === a.mn[e]
					? (s = a.IW[e])
					: (i.planId === a.Xh.PREMIUM_YEAR_TIER_0 || i.planId === a.Xh.PREMIUM_YEAR_TIER_1) &&
						s === a.Xh.PREMIUM_MONTH_TIER_2 &&
						(s = a.Xh.PREMIUM_YEAR_TIER_2)
			: s === a.Xh.PREMIUM_YEAR_TIER_1 && (s = a.Xh.PREMIUM_MONTH_TIER_1),
		s
	);
}
