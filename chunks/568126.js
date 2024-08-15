var s = n(735250);
n(470079);
var a = n(442837),
	r = n(481060),
	i = n(706454),
	l = n(78839),
	o = n(985754),
	c = n(222727),
	d = n(474494),
	_ = n(981631),
	u = n(538313);
t.Z = function (e) {
	let { localizedPricingPromo: t } = e,
		n = t.countryCode,
		E = (0, a.e7)([i.default], () => i.default.locale);
	(0, c.U)(_.jXE.SETTINGS_PREMIUM_BANNER, n);
	let T = (0, a.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
		{ localizedPricingBannerBody: I } = (0, o.vB)({
			localizedPricingPromo: t,
			subscription: T,
			forceSingleLine: !0,
			userLocale: E
		});
	return (0, s.jsxs)('div', {
		className: u.bannerContainer,
		children: [
			(0, s.jsx)(d.Z, {
				className: u.badge,
				countryCode: n
			}),
			(0, s.jsx)('div', {
				className: u.bannerBodyContainer,
				children: (0, s.jsx)(r.Text, {
					color: 'none',
					variant: 'text-md/normal',
					className: u.bannerBody,
					children: I
				})
			})
		]
	});
};
