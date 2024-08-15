var i = t(735250);
t(470079);
var a = t(481060),
	r = t(37234),
	s = t(100527),
	l = t(906732),
	o = t(703656),
	c = t(335131),
	u = t(981631),
	d = t(689938),
	_ = t(715125);
n.Z = (e) => {
	let { onClose: n } = e,
		{ analyticsLocations: t } = (0, l.ZP)(),
		p = () => {
			n(),
				(0, o.uL)(u.Z5c.COLLECTIBLES_SHOP),
				(0, c.mK)({
					openInLayer: !1,
					analyticsSource: s.Z.PREMIUM_PAYMENT_MODAL,
					analyticsLocations: t
				}),
				(0, r.xf)();
		};
	return (0, i.jsxs)('div', {
		className: _.container,
		children: [
			(0, i.jsx)('div', {
				className: _.iconBackground,
				children: (0, i.jsx)(a.ShopIcon, {
					size: 'custom',
					width: 20,
					height: 20,
					color: a.tokens.colors.WHITE
				})
			}),
			(0, i.jsx)(a.Text, {
				variant: 'text-sm/normal',
				color: 'header-primary',
				children: d.Z.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format({
					checkItOut: (e) =>
						(0, i.jsx)(a.Clickable, {
							className: _.link,
							onClick: p,
							children: e
						})
				})
			})
		]
	});
};
