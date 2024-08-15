var n = t(735250),
	a = t(470079),
	i = t(120356),
	r = t.n(i),
	o = t(481060),
	l = t(100527),
	c = t(906732),
	d = t(626135),
	_ = t(335131),
	E = t(410154),
	u = t(302800),
	I = t(981631),
	T = t(474936),
	S = t(689938),
	N = t(853601),
	C = t(353437),
	m = t(786792);
let A = (e) => {
	var s, t, a, i, l;
	let { displayOptions: c, marketingVariant: d } = e;
	return (0, n.jsxs)(n.Fragment, {
		children: [
			(0, n.jsx)('div', {
				className: N.artContainer,
				'aria-hidden': !0,
				role: 'presentation',
				children: (0, n.jsx)('img', {
					src: null !== (a = null == c ? void 0 : c.artSrc) && void 0 !== a ? a : C,
					className: r()(N.art, { [N.tideArt]: null != d && d === E.C5.TIDE }),
					alt: ''
				})
			}),
			(0, n.jsxs)('div', {
				className: N.mainColumn,
				children: [
					(0, n.jsx)(o.Heading, {
						variant: 'heading-lg/extrabold',
						color: 'currentColor',
						className: N.title,
						children:
							null !== (i = null == c ? void 0 : null === (s = c.title) || void 0 === s ? void 0 : s.call(c)) &&
							void 0 !== i
								? i
								: S.Z.Messages.COLLECTIBLES_BANNER_TITLE_2024
					}),
					(0, n.jsx)(o.Text, {
						variant: 'text-sm/normal',
						color: 'currentColor',
						children:
							null !== (l = null == c ? void 0 : null === (t = c.description) || void 0 === t ? void 0 : t.call(c)) &&
							void 0 !== l
								? l
								: S.Z.Messages.COLLECTIBLES_BANNER_DESCRIPTION_2024
					})
				]
			})
		]
	});
};
s.Z = () => {
	var e;
	let { analyticsLocations: s } = (0, c.ZP)(l.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
		t = a.useRef(null),
		i = (0, E.ZP)('CollectiblesUpsellBanner'),
		C = u.GX[i];
	return (
		a.useEffect(() => {
			d.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
				type: T.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
				location_stack: s
			});
		}, [s]),
		(0, n.jsxs)('div', {
			ref: t,
			className: r()(N.container, {
				[N.robertContainer]: i === E.C5.ROBERT,
				[N.stormContainer]: i === E.C5.STORM
			}),
			style: {
				backgroundImage: 'url('.concat(null !== (e = null == C ? void 0 : C.backgroundSrc) && void 0 !== e ? e : m, ')')
			},
			children: [
				(0, n.jsx)(A, {
					displayOptions: C,
					marketingVariant: i
				}),
				(0, n.jsx)(o.Button, {
					onClick: () => {
						(0, _.mK)({
							analyticsLocations: s,
							analyticsSource: l.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
						});
					},
					className: N.ctaButton,
					color: o.Button.Colors.BRAND_INVERTED,
					children: S.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
				})
			]
		})
	);
};
