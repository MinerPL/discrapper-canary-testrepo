n(47120);
var s = n(735250),
	a = n(470079),
	r = n(120356),
	i = n.n(r),
	l = n(887024),
	o = n(481060),
	c = n(410154),
	d = n(915296),
	_ = n(314684),
	u = n(565626),
	E = n(32173),
	T = n(391110),
	I = n(75077),
	R = n(320319),
	C = n(126274);
let g = (e) => {
	let { showAllPerksButton: t, leftAlignHeaders: n, title: a, headerClassname: r } = e,
		i = (0, s.jsx)(o.Heading, {
			variant: 'heading-xxl/extrabold',
			color: 'header-primary',
			className: null != r ? r : C.heading,
			children: a
		});
	return null == t
		? i
		: n
			? (0, s.jsxs)('div', {
					className: C.sectionHeader,
					children: [
						i,
						null != t &&
							(0, s.jsx)('div', {
								className: C.showAllPerksButton,
								children: t
							})
					]
				})
			: (0, s.jsx)('div', {
					className: C.container,
					children: (0, s.jsx)('div', {
						className: C.sectionHeaderSeeAll,
						children: i
					})
				});
};
t.Z = (e) => {
	var t;
	let {
			className: n,
			variant: r = T.R0.PERKS_DISCOVERABILITY,
			noBackground: p = !1,
			leftAlignHeaders: N = !1,
			showAllPerksButton: A,
			headerClassname: m,
			isFullScreen: f = !0
		} = e,
		S = a.useRef(null),
		h = (0, _.yQ)(),
		M = (0, u.Ag)(h),
		x = (0, c.ZP)('perks-discoverability');
	(0, u.I2)();
	let b = (0, d.HI)({ location: T.R0.PERKS_DISCOVERABILITY }),
		O = r === T.R0.WHATS_NEW,
		P = (0, _.IY)();
	a.useEffect(() => {
		O && !M && P();
	}, [P, O, M]),
		a.useEffect(() => {
			let e = S.current;
			if (null == e || !M || !O) return;
			let t = requestAnimationFrame(() => {
				e.scrollIntoView({ behavior: 'smooth' }), O && P();
			});
			return () => {
				cancelAnimationFrame(t), O && P();
			};
		}, [S, M, O, P]);
	let v = (0, I.Op)(O),
		L = (0, E.Z)(),
		Z = (0, I.mN)(),
		D = (0, I.sP)({
			perksCards: L,
			variant: r,
			shopMarketingVariation: x,
			isFullScreen: f,
			showTenureCard: null == h ? void 0 : h.showCard,
			tileOrderVariant: b,
			isPremiumSubscriber: Z
		}),
		B = D.some((e) => null != e.pillText),
		[j, U] = a.useState(null),
		G = a.useRef(new l.qA());
	return (0, s.jsxs)(s.Fragment, {
		children: [
			(null == L ? void 0 : null === (t = L.freeBoost) || void 0 === t ? void 0 : t.name) === E.u.FREE_BOOST &&
				(0, s.jsx)(l.O_, {
					ref: U,
					className: C.confettiCanvas,
					environment: G.current
				}),
			(0, s.jsxs)('div', {
				ref: S,
				className: i()(
					C.section,
					{
						[C.centerAlignSection]: !N,
						[C.leftAlignSection]: N
					},
					n
				),
				children: [
					(0, s.jsx)(g, {
						showAllPerksButton: A,
						leftAlignHeaders: N,
						title: v.title,
						headerClassname: m
					}),
					(0, s.jsx)(o.Text, {
						variant: 'text-lg/normal',
						color: 'header-primary',
						className: i()(C.subtitle, {
							[C.subtitle]: null == A || N,
							[C.subtitleWithButton]: null != A && !N,
							[C.fullWidth]: O || N,
							[C.moreSubtitleMargin]: B,
							[C.leftAlignSubtitle]: N,
							[C.centerAlignSubtitle]: !N
						}),
						children: v.subtitle
					}),
					!N &&
						null != A &&
						(0, s.jsx)('div', {
							className: i()(C.showAllPerksButtonCenter),
							children: A
						}),
					(0, s.jsx)('div', {
						className: i()({
							[C.cardContainer]: f,
							[C.cardContainerNarrowWidth]: !f
						}),
						children: D.map((e, t) =>
							(0, s.jsx)(
								R.Z,
								{
									confettiCanvas: e.name === E.u.FREE_BOOST ? j : void 0,
									...e,
									forceShadow: p
								},
								''.concat(e.name, '_').concat(t)
							)
						)
					})
				]
			})
		]
	});
};
