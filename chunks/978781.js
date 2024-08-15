n.d(t, {
	Z: function () {
		return w;
	},
	_: function () {
		return r;
	}
}),
	n(627341),
	n(47120);
var r,
	i,
	a = n(735250),
	s = n(470079),
	o = n(120356),
	l = n.n(o),
	u = n(278074),
	c = n(442837),
	d = n(481060),
	_ = n(230711),
	E = n(351773),
	f = n(100527),
	h = n(94795),
	p = n(327943),
	I = n(539873),
	m = n(207164),
	T = n(238302),
	g = n(514361),
	S = n(572397),
	A = n(705262),
	N = n(436774),
	v = n(768762),
	O = n(197115),
	R = n(727939),
	C = n(981631),
	y = n(921944),
	D = n(474936),
	L = n(689938),
	b = n(50103);
function M() {
	let e = (0, S.q)();
	return (
		s.useEffect(
			() => ((0, T.Kq)(), e(C.rMx.CLIENT_THEME_PREVIEW_VIEWED), () => e(C.rMx.CLIENT_THEME_PREVIEW_CLOSED)),
			[e]
		),
		(0, a.jsx)(A.ZP, {
			type: A.yH.EDITOR,
			children: (0, a.jsx)(A.ZP.BasicAndGradient, { isEditor: !0 })
		})
	);
}
function P() {
	let e = (0, m.Z)();
	return (
		s.useEffect(() => {
			(0, h.nJ)(), e();
		}, [e]),
		(0, a.jsx)(I.Z, { isEditor: !0 })
	);
}
function U(e) {
	let { tab: t, isPreview: r, isCoachmark: i, onClose: o } = e,
		c = s.useCallback(() => {
			o(), !i && _.Z.open();
		}, [o, i]),
		E = (0, u.EQ)({
			isPreview: r,
			isCoachmark: i
		})
			.with({ isCoachmark: !0 }, () => L.Z.Messages.CLOSE)
			.with({ isPreview: !0 }, () => L.Z.Messages.CLIENT_THEMES_EDITOR_EXIT_PREVIEW)
			.otherwise(() => L.Z.Messages.CLIENT_THEMES_EDITOR_RETURN_TO_SETTINGS),
		h = s.useCallback(() => {
			if (1 === t) {
				(0, d.openModalLazy)(async () => {
					let { default: e } = await n.e('69052').then(n.bind(n, 184250));
					return (t) =>
						(0, a.jsx)(e, {
							analyticsSource: f.Z.APP_ICON_EDITOR,
							analyticsLocation: { section: C.jXE.SETTINGS_APP_ICONS },
							...t
						});
				});
				return;
			}
			if (0 === t) {
				(0, d.openModalLazy)(async () => {
					let { default: e } = await n.e('68192').then(n.bind(n, 742234));
					return (t) =>
						(0, a.jsx)(e, {
							analyticsSource: f.Z.CLIENT_THEMES_EDITOR,
							analyticsLocation: { section: C.jXE.SETTINGS_CLIENT_THEMES },
							...t
						});
				});
				return;
			}
		}, [t]);
	return (0, a.jsxs)('div', {
		className: b.footerContainer,
		children: [
			r &&
				(0, a.jsxs)('div', {
					className: b.footerLabelContainer,
					children: [
						(0, a.jsx)(d.NitroWheelIcon, {
							className: b.footerNitro,
							size: 'xs',
							color: N.JX.PREMIUM_TIER_2
						}),
						(0, a.jsx)(d.Text, {
							className: b.footerText,
							variant: 'text-sm/medium',
							children: L.Z.Messages.PREMIUM_UPSELL_MAKE_DISCORD_YOURS.format({ onClick: h })
						})
					]
				}),
			(0, a.jsxs)('div', {
				className: b.footerButtonContainer,
				children: [
					(0, a.jsx)('div', {
						children: (0, a.jsx)(d.Button, {
							className: l()(b.footerButton, b.footerButtonBack),
							color: d.ButtonColors.PRIMARY,
							size: d.Button.Sizes.NONE,
							onClick: c,
							'aria-label': E,
							children: (0, a.jsx)(v.Z, { direction: v.Z.Directions.LEFT })
						})
					}),
					r &&
						(0, a.jsx)(O.Z, {
							className: b.footerButton,
							subscriptionTier: D.Si.TIER_2,
							showGradient: !0,
							fullWidth: !0,
							buttonText: L.Z.Messages.PREMIUM_UPSELL_GET_NITRO
						})
				]
			})
		]
	});
}
function w(e) {
	let { initialTab: t, markAsDismissed: n } = e,
		[r, i] = s.useState(t),
		o = s.useMemo(
			() => [
				{
					name: L.Z.Messages.THEME,
					value: 0
				},
				{
					name: L.Z.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE,
					value: 1
				}
			],
			[]
		),
		l = (0, c.e7)([g.Z], () => g.Z.isPreview),
		u = (0, c.e7)([p.Z], () => p.Z.isUpsellPreview),
		_ = l || u,
		f = (0, S.J)(),
		I = s.useCallback(() => {
			l && f(), u && (0, h.O7)();
		}, [l, u, f]),
		m = (0, E.Z)(null, _ ? I : C.dG4),
		A = s.useCallback(() => {
			(0, h.G8)(), (0, T.Mo)(), I(), null == n || n(y.L.DISMISS);
		}, [I, n]);
	return (0, a.jsx)(R.Z, {
		className: b.draggableContainer,
		children: (0, a.jsxs)('div', {
			ref: m,
			className: b.container,
			children: [
				(0, a.jsxs)('div', {
					className: b.headerParentContainer,
					children: [
						(0, a.jsxs)('div', {
							className: b.headerContainer,
							children: [
								(0, a.jsx)(d.Heading, {
									variant: 'heading-lg/extrabold',
									children: L.Z.Messages.PREMIUM_UPSELL_FEATURE_CLIENT_THEMES_APP_ICONS_PREVIEW_TITLE
								}),
								(0, a.jsx)(d.ModalCloseButton, {
									className: b.closeContainer,
									innerClassName: b.closeInner,
									withCircleBackground: !0,
									onClick: A
								})
							]
						}),
						(0, a.jsx)(d.SegmentedControl, {
							options: o,
							value: r,
							onChange: (e) => {
								let { value: t } = e;
								return i(t);
							},
							look: 'pill'
						})
					]
				}),
				(0, a.jsxs)(d.Scroller, {
					className: b.scrollContainer,
					children: [0 === r && (0, a.jsx)(M, {}), 1 === r && (0, a.jsx)(P, {})]
				}),
				(0, a.jsx)(U, {
					tab: r,
					isPreview: _,
					onClose: A,
					isCoachmark: !1
				})
			]
		})
	});
}
((i = r || (r = {}))[(i.CLIENT_THEMES = 0)] = 'CLIENT_THEMES'), (i[(i.APP_ICONS = 1)] = 'APP_ICONS');
