n.d(t, {
	J: function () {
		return h;
	},
	q: function () {
		return p;
	}
}),
	n(47120);
var r = n(470079),
	i = n(442837),
	a = n(524437),
	s = n(781391),
	o = n(740492),
	l = n(581883),
	u = n(626135),
	c = n(238302),
	d = n(514361),
	_ = n(981631),
	E = n(474936),
	f = n(874893);
let h = () => {
		let e = (0, i.e7)([d.Z], () => d.Z.gradientPreset),
			t = (0, i.e7)([o.ZP], () => o.ZP.useSystemTheme === f.K.ON),
			[n, a] = (0, r.useState)(t);
		return (
			(0, r.useEffect)(() => {
				if (null == e) a(t);
			}, [e, t]),
			(0, r.useCallback)(() => {
				if (null == e) return;
				if (((0, c.kj)(), !!n)) (0, s.hi)(f.K.ON);
			}, [e, n])
		);
	},
	p = () => {
		let { previewPaneVariant: e } = (0, i.cj)([d.Z], () => ({
				previewPaneVariant: d.Z.isPreview ? E.h1.FREE : E.h1.PREMIUM_STANDARD
			})),
			t = (0, i.e7)([l.Z], () => {
				var e;
				let t = null === (e = l.Z.settings.appearance) || void 0 === e ? void 0 : e.theme;
				return 'default '.concat(t === a.Q2.LIGHT ? _.BRd.LIGHT : _.BRd.DARK);
			});
		return (0, r.useCallback)(
			(n) => {
				u.default.track(n, {
					preview_pane_variant: e,
					original_theme: t
				});
			},
			[e, t]
		);
	};
