var s = n(735250);
n(470079);
var a = n(120356),
	r = n.n(a),
	i = n(481060),
	l = n(314684),
	o = n(176782),
	c = n(743612),
	d = n(735825),
	_ = n(817199),
	u = n(721239),
	E = n(557634),
	T = n(992429);
t.Z = (e) => {
	var t;
	let n,
		a,
		{ title: I, titleClassName: R, buttonClassName: C, perkImage: g, isCarousel: p, onCtaClick: N, perkComponent: A, subtitle: m = '', descriptionCta: f = '', cardVariant: S, subtitleClassName: h } = e,
		M = (0, o._)(S),
		x = (0, l.yQ)(),
		b = (null == x ? void 0 : x.nitroTenureStatus) === d.EB.REDEEMABLE;
	switch (null == x ? void 0 : x.nitroTenureStatus) {
		case d.EB.REDEEMABLE:
			(n = T), (a = 'unlocked icon');
			break;
		case d.EB.PENDING:
			(n = u), (a = 'locked icon');
			break;
		case d.EB.REDEEMED:
			(n = E), (a = 'thumbs up icon');
			break;
		default:
			(n = void 0), (a = '');
	}
	return (0, s.jsxs)(s.Fragment, {
		children: [
			(0, s.jsx)('div', { className: r()(_.cover, _.below) }),
			(0, s.jsx)(c.Z, {
				title: I,
				shouldShowElement: (e) => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
				cardVariantStyleInfo: M,
				titleClassName: R,
				subtitle: m,
				subtitleClassName: h
			}),
			null != g &&
				(0, s.jsx)('img', {
					src: g,
					alt: '',
					className: r()({
						[_.cardImage]: !p,
						[_.carouselCardImage]: p
					})
				}),
			null != A &&
				(0, s.jsx)(s.Fragment, {
					children: (0, s.jsxs)('div', {
						className: _.cardIllustrationNoHover,
						children: [
							(0, s.jsx)('div', {
								className: _.cardComponent,
								children: A
							}),
							0 !== f.length &&
								null != N &&
								(0, s.jsx)(i.Button, {
									className: C,
									disabled: !b,
									fullWidth: !0,
									onClick: N,
									children: (0, s.jsxs)('div', {
										className: null == M ? void 0 : null === (t = M.descriptionCta) || void 0 === t ? void 0 : t.className,
										children: [
											(0, s.jsx)('img', {
												alt: a,
												src: n
											}),
											f
										]
									})
								})
						]
					})
				})
		]
	});
};
