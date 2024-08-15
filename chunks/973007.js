var t = n(735250);
n(470079);
var r = n(481060),
	i = n(823188),
	l = n(474936),
	a = n(964917);
function o(e) {
	let { onClick: s, isGift: n, priceOptions: l } = e;
	return (0, t.jsx)(r.Clickable, {
		onClick: s,
		style: { cursor: 'pointer' },
		children: (0, t.jsx)(i.wp, {
			className: a.tier2MarketingCard,
			ctaButton: null,
			showWumpus: !0,
			showYearlyPrice: !0,
			isGift: n,
			isModal: !0,
			priceOptions: l
		})
	});
}
function C(e) {
	let { onClick: s, isGift: n, priceOptions: l } = e;
	return (0, t.jsx)(r.Clickable, {
		onClick: s,
		style: { cursor: 'pointer' },
		children: (0, t.jsx)(i.Gq, {
			className: a.tier0MarketingCard,
			ctaButton: null,
			showWumpus: !0,
			showYearlyPrice: !0,
			isGift: n,
			priceOptions: l
		})
	});
}
s.Z = function (e) {
	let { onSelectSku: s, isGift: n, priceOptions: r } = e;
	return (0, t.jsxs)(t.Fragment, {
		children: [
			(0, t.jsx)(o, {
				onClick: () => s(l.Si.TIER_2),
				isGift: n,
				priceOptions: r
			}),
			(0, t.jsx)(C, {
				onClick: () => s(l.Si.TIER_0),
				isGift: n,
				priceOptions: r
			})
		]
	});
};
