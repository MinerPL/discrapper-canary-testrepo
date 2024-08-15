n(47120);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(470716),
	l = n(266067),
	u = n(873546),
	c = n(442837),
	d = n(316792),
	_ = n(481060),
	E = n(607070),
	f = n(168551),
	h = n(540059),
	p = n(19759),
	I = n(706454),
	m = n(210887),
	T = n(451478),
	g = n(792125),
	S = n(597952),
	A = n(252618),
	N = n(587061),
	v = n(392358),
	O = n(981631);
n(243997);
let R = new Set([O.Z5c.LOGIN, O.Z5c.REGISTER]);
t.Z = i.memo(function (e) {
	let { children: t, skipsSettingDefaultPageTitle: a } = e;
	(0, A.ZD)({ skipsSettingDefaultPageTitle: a });
	let { clientThemesClassName: O, clientThemesCSS: C } = (0, f.ZP)(),
		y = i.createElement('style', { [f.PQ]: !0 }, C);
	return (0, r.jsxs)(o.ql, {
		children: [
			(function (e) {
				let { locale: t, theme: n } = (0, c.cj)([m.Z, I.default], () => ({
						locale: I.default.locale,
						theme: m.Z.theme
					})),
					a = (0, c.e7)([T.Z], () => T.Z.isFocused(), []),
					{ reducedMotion: o, alwaysShowLinkDecorations: d } = i.useContext(_.AccessibilityPreferencesContext),
					{
						fontScale: f,
						fontScaleClass: A,
						keyboardModeEnabled: O,
						saturation: C,
						desaturateUserColors: y,
						useForcedColors: D,
						systemForcedColors: L
					} = (0, c.cj)([E.Z], () => {
						let {
							fontScale: e,
							fontScaleClass: t,
							keyboardModeEnabled: n,
							saturation: r,
							desaturateUserColors: i,
							useForcedColors: a,
							systemForcedColors: s
						} = E.Z;
						return {
							fontScale: e,
							fontScaleClass: t,
							keyboardModeEnabled: n,
							saturation: r,
							desaturateUserColors: i,
							useForcedColors: a,
							systemForcedColors: s
						};
					}),
					b = (0, l.TH)(),
					M = i.useMemo(() => R.has(b.pathname), [b.pathname]);
				(0, N.Z)(window, M);
				let P = (0, v.Z)(window, __OVERLAY__ || a),
					U = (0, c.e7)([p.Z], () => p.Z.sidebarWidth),
					w = (0, _.useRedesignIconContext)().enabled,
					x = window.CSS.supports('selector(::-webkit-scrollbar)'),
					G = (0, h.Q)('AppHelmet');
				return (0, r.jsx)('html', {
					lang: t,
					style: 'font-size: '
						.concat(f, '%; --saturation-factor: ')
						.concat(C, '; --devtools-sidebar-width: ')
						.concat(U, 'px;'),
					className: s()(
						e,
						{
							overlay: __OVERLAY__,
							'mouse-mode': P,
							'keyboard-mode': O,
							'reduce-motion': o.enabled,
							'full-motion': !o.enabled,
							'is-mobile': u.tq,
							'app-focused': a,
							'low-saturation': C <= _.LOW_SATURATION_THRESHOLD,
							'decorate-links': d,
							'desaturate-user-colors': y,
							'disable-forced-colors': !D && 'active' === L,
							'enable-forced-colors': D,
							'show-redesigned-icons': w,
							'no-webkit-scrollbar': !x,
							'has-webkit-scrollbar': x,
							'visual-refresh': G
						},
						(0, g.Q)(n),
						(0, S.Z)(),
						A
					)
				});
			})(O),
			(function () {
				let [e, t] = i.useState([]);
				return (
					i.useEffect(() => {
						Promise.all(
							d.L.map((e) =>
								n(529305)('./'.concat(e, '.woff2')).then((e) => {
									let { default: t } = e;
									return t;
								})
							)
						).then((e) => t(e));
					}, []),
					(0, r.jsx)(r.Fragment, {
						children: e.map((e, t) =>
							(0, r.jsx)(
								'link',
								{
									rel: 'preload',
									href: e,
									as: 'font',
									type: 'font/woff2',
									crossOrigin: 'true'
								},
								t
							)
						)
					})
				);
			})(),
			y,
			t
		]
	});
});
