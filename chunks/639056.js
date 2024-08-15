t(47120);
var n = t(735250);
t(470079);
var a = t(120356),
	i = t.n(a),
	r = t(392711),
	o = t.n(r),
	l = t(442837),
	c = t(481060),
	d = t(594174),
	_ = t(509545),
	E = t(78839),
	u = t(74538),
	I = t(393411),
	T = t(474936),
	S = t(689938),
	N = t(32975);
function C(e) {
	let { user: s, planId: t, count: a, userPremiumSubscription: r } = e,
		[o, d] = (0, l.Wu)([_.Z], () => [_.Z.get(t), null != r ? _.Z.get(r.planId) : null]);
	if (null == o || u.ZP.getInterval(t).intervalType !== T.rV.MONTH) return null;
	let E = null != d ? d.skuId : null,
		I = o.skuId === E,
		C = u.ZP.getDisplayName(t);
	return (0, n.jsxs)('div', {
		className: N.accountCreditRow,
		children: [
			(0, n.jsx)('div', {
				className: i()({
					[N.iconBackgroundTier0]: o.skuId === T.Si.TIER_0,
					[N.iconBackgroundTier1]: o.skuId === T.Si.TIER_1,
					[N.iconBackgroundTier2]: o.skuId === T.Si.TIER_2
				}),
				children: (0, n.jsx)(c.NitroWheelIcon, {
					size: 'md',
					color: 'currentColor',
					className: N.icon
				})
			}),
			(0, n.jsxs)('div', {
				className: N.rowDetails,
				children: [
					(0, n.jsx)(c.Heading, {
						variant: 'heading-md/semibold',
						children: S.Z.Messages.PREMIUM_SUBSCRIPTION_CREDIT.format({ planName: C })
					}),
					s.hasFreePremium() || (null != r && r.isPurchasedExternally)
						? null
						: (0, n.jsx)(c.Heading, {
								className: N.rowApplied,
								variant: 'heading-sm/semibold',
								color: 'header-secondary',
								children:
									I && null != r
										? S.Z.Messages.PREMIUM_SUBSCRIPTION_CREDIT_APPLIED_ON.format({ date: r.currentPeriodEnd })
										: S.Z.Messages.PREMIUM_SUBSCRIPTION_CREDIT_APPLIED_MISMATCHED_PLAN.format({ planName: C })
							})
				]
			}),
			(0, n.jsx)(c.Text, {
				className: N.rowCreditCount,
				variant: 'text-md/semibold',
				children: S.Z.Messages.PREMIUM_SUBSCRIPTION_CREDIT_COUNT_MONTHS.format({ count: a })
			})
		]
	});
}
s.Z = function (e) {
	let { className: s, entitlements: t } = e,
		a = o()(Array.from(t))
			.filter((e) => {
				let { subscriptionPlanId: s, parentId: t, consumed: n } = e;
				return null != s && null != t && !n;
			})
			.groupBy((e) => e.subscriptionPlanId)
			.value(),
		r = (0, l.e7)([E.ZP], () => E.ZP.getPremiumSubscription()),
		_ = (0, l.e7)([E.ZP], () => null == E.ZP.getPremiumTypeSubscription()),
		u = Object.keys(a).some((e) => e === T.Xh.PREMIUM_MONTH_TIER_1),
		m = (0, l.e7)([d.default], () => d.default.getCurrentUser());
	return null == m
		? null
		: (0, n.jsxs)('div', {
				children: [
					(0, n.jsx)('div', {
						className: i()(s, N.premiumSubscriptionAccountCredit),
						children: Object.keys(a).map((e) =>
							(0, n.jsx)(
								C,
								{
									planId: e,
									count: a[e].length,
									userPremiumSubscription: r,
									user: m
								},
								e
							)
						)
					}),
					u &&
						_ &&
						(0, n.jsxs)('div', {
							children: [
								(0, n.jsx)(c.Text, {
									className: N.tier1AccountCreditHeader,
									variant: 'text-md/normal',
									children: S.Z.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_HEADER
								}),
								(0, n.jsx)(I.R, {})
							]
						})
				]
			});
};
