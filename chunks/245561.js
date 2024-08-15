t.d(n, {
	GU: function () {
		return u;
	}
});
var r = t(735250);
t(470079);
var i = t(120356),
	l = t.n(i),
	a = t(481060),
	s = t(596454),
	o = t(889989),
	c = t(164892);
function u(e) {
	let n,
		{ applicationId: t, storeListingBenefits: i, skuBenefits: a, className: s } = e;
	return (
		null != i
			? (n = i.map((e) =>
					(0, r.jsx)(
						m,
						{
							applicationId: t,
							benefit: e,
							className: l()(c.__invalid_benefit, s)
						},
						e.id
					)
				))
			: null != a &&
				(n = a.map((e, n) =>
					(0, r.jsx)(
						d,
						{
							benefit: e,
							className: l()(c.__invalid_benefit, s)
						},
						n
					)
				)),
		(0, r.jsx)(r.Fragment, { children: n })
	);
}
function d(e) {
	let { benefit: n, className: t, emojiContainerClassName: i, showsDescription: o = !0, nameTextVariant: u = 'text-md/medium', nameTextColor: d = 'header-primary' } = e;
	return (0, r.jsxs)('div', {
		className: l()(c.container, t),
		children: [
			null != n.emoji &&
				(0, r.jsx)('div', {
					className: l()(c.emojiContainer, i),
					children: (0, r.jsx)(s.Z, {
						emojiId: n.emoji.id,
						emojiName: n.emoji.name,
						animated: n.emoji.animated
					})
				}),
			(0, r.jsxs)('div', {
				className: c.infoContainer,
				children: [
					(0, r.jsx)(a.Text, {
						variant: u,
						color: d,
						className: c.name,
						children: n.name
					}),
					o &&
						(0, r.jsx)(a.Text, {
							color: 'interactive-normal',
							variant: 'text-sm/normal',
							children: n.description
						})
				]
			})
		]
	});
}
function m(e) {
	let { applicationId: n, benefit: t, className: i, emojiContainerClassName: s, showsDescription: u = !0, nameTextVariant: d = 'text-md/medium', nameTextColor: m = 'header-primary' } = e;
	return (0, r.jsxs)('div', {
		className: l()(c.container, i),
		children: [
			(0, r.jsx)('div', {
				className: l()(c.emojiContainer, s),
				children: (0, o.n)(n, t.icon)
			}),
			(0, r.jsxs)('div', {
				className: c.infoContainer,
				children: [
					(0, r.jsx)(a.Text, {
						variant: d,
						color: m,
						className: c.name,
						children: t.name
					}),
					u &&
						(0, r.jsx)(a.Text, {
							color: 'interactive-normal',
							variant: 'text-sm/normal',
							children: t.description
						})
				]
			})
		]
	});
}
