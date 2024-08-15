t.d(s, {
	$H: function () {
		return b;
	},
	GN: function () {
		return v;
	}
});
var n = t(735250),
	a = t(470079),
	o = t(120356),
	r = t.n(o),
	i = t(481060),
	c = t(774078),
	l = t(55935),
	u = t(74538),
	d = t(639119),
	f = t(474936),
	p = t(689938),
	g = t(706767);
function x(e) {
	let { isTabSelected: s, expiresAt: t, trialDuration: o } = e,
		u = a.useMemo(() => Date.parse(t), [t]),
		d = (0, c.Z)(u, 60000);
	return Object.values(d).every((e) => 0 === e)
		? null
		: (0, n.jsx)(i.Tooltip, {
				text: (0, l.QX)(d, {
					days: p.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_DAYS,
					hours: p.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_HOURS,
					minutes: p.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_MINUTES
				}),
				children: (e) =>
					(0, n.jsxs)('div', {
						...e,
						className: r()(g.premiumTrialBadge, g.premiumTrialAcknowledgedBadge, { [g.premiumTrialBadgeSelected]: s }),
						children: [
							(0, n.jsx)(i.ClockIcon, {
								size: 'custom',
								width: 20,
								height: 20,
								color: 'currentColor',
								className: g.premiumTrialBadgeIcon
							}),
							(0, n.jsxs)(i.Text, {
								variant: 'eyebrow',
								children: [' ', o, ' ']
							})
						]
					})
			});
}
function b(e) {
	var s;
	let { isTabSelected: t, trialOffer: a } = e,
		o = null === (s = (0, d.N)()) || void 0 === s ? void 0 : s.subscription_trial,
		r = (0, u.a5)({
			intervalType: null == o ? void 0 : o.interval,
			intervalCount: null == o ? void 0 : o.interval_count
		});
	return (0, n.jsx)(_, {
		isTabSelected: t,
		badgeCopy: r,
		offerExpiresAt: a.expires_at,
		className:
			(null == o ? void 0 : o.sku_id) === f.Si.TIER_2
				? g.premiumTrialTier2UnacknowledgedBadge
				: g.premiumTrialTier0UnacknowledgedBadge
	});
}
function v(e) {
	let { isTabSelected: s, userDiscount: t, includesAmountOff: a } = e,
		o = p.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({ percent: t.discount.amount });
	return (0, n.jsx)(_, {
		isTabSelected: s,
		badgeCopy: a ? o : p.Z.Messages.PREMIUM_DISCOUNT_BADGE,
		offerExpiresAt: t.expires_at,
		className: g.premiumDiscountUnacknowledgedBadge
	});
}
function _(e) {
	let { isTabSelected: s, badgeCopy: t, offerExpiresAt: a, className: o } = e;
	return null != a
		? (0, n.jsx)(x, {
				expiresAt: a,
				isTabSelected: s,
				trialDuration: t
			})
		: (0, n.jsx)('div', {
				className: r()(g.premiumTrialBadge, o),
				children: (0, n.jsx)(i.Text, {
					variant: 'eyebrow',
					className: g.premiumOfferBadgeCopy,
					children: t
				})
			});
}
