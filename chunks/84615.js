n.d(t, {
	Ox: function () {
		return v;
	},
	QP: function () {
		return g;
	},
	ob: function () {
		return R;
	},
	q4: function () {
		return O;
	}
}),
	n(47120);
var r,
	i,
	a = n(735250),
	s = n(470079),
	o = n(97613),
	l = n.n(o),
	u = n(832706),
	c = n(435802),
	d = n(652874),
	_ = n(731965),
	E = n(477690),
	f = n(481060),
	h = n(714338),
	p = n(624138),
	m = n(314910),
	I = n(898770);
let T = (0, p.Mg)(E.Z.FULL_SCREEN_LAYER_ANIMATION_DURATION);
((i = r || (r = {}))[(i.ENTERING = 1)] = 'ENTERING'), (i[(i.ENTERED = 2)] = 'ENTERED'), (i[(i.EXITING = 3)] = 'EXITING'), (i[(i.EXITED = 4)] = 'EXITED');
let g = (0, d.Z)((e) => ({
	fullScreenLayers: [],
	addLayer: (t) =>
		(0, _.j)(() => {
			e((e) => {
				let { fullScreenLayers: n } = e;
				return {
					fullScreenLayers: [...n, t]
				};
			});
		})
}));
function S(e) {
	let { item: t } = e,
		n = s.useRef(null);
	return (
		(0, f.useFocusLock)(n),
		s.useEffect(
			() => (
				h.Z.disable(),
				h.Z.enableTemp(
					(function (e) {
						return {
							POP_LAYER: {
								binds: ['esc'],
								comboKeysBindGlobal: !0,
								action() {
									R(e);
								}
							}
						};
					})(t.key)
				),
				() => {
					h.Z.disableTemp();
				}
			),
			[t.key]
		),
		(0, a.jsx)(t.LayerComponent, {
			children: (0, a.jsxs)('div', {
				className: I.root,
				ref: n,
				children: [
					(0, a.jsx)('div', { className: I.drag }),
					t.render({
						transitionState: null != t ? t.transitionState : 3,
						closeLayer: () => R(t.key)
					})
				]
			})
		})
	);
}
let A = {
		enter: I.enter,
		enterActive: I.enterActive,
		enterDone: I.enterDone,
		exit: I.exit,
		exitActive: I.exitActive,
		exitDone: I.exitDone
	},
	N = {
		enter: I.enterReducedMotion,
		enterActive: I.enterActiveReducedMotion,
		enterDone: I.enterDoneReducedMotion,
		exit: I.exitReducedMotion,
		exitActive: I.exitActiveReducedMotion,
		exitDone: I.exitDoneReducedMotion
	};
function v() {
	let { reducedMotion: e } = s.useContext(f.AccessibilityPreferencesContext),
		t = e.enabled ? N : A,
		n = g((e) => e.fullScreenLayers);
	return (0, a.jsx)(u.Z, {
		children: n.map((e) =>
			(0, a.jsx)(
				c.Z,
				{
					classNames: t,
					timeout: T,
					onEntered: () => {
						(0, _.j)(() => {
							g.setState({
								fullScreenLayers: n.map((t) =>
									t.key === e.key
										? {
												...t,
												transitionState: 2
											}
										: t
								)
							});
						});
					},
					unmountOnExit: !0,
					children: (0, a.jsx)(S, { item: e })
				},
				e.key
			)
		)
	});
}
function O(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
		{ layerKey: n, Layer: r } = t,
		i = null != n ? n : l()();
	return (
		(0, _.j)(() => {
			g.setState((t) => ({
				fullScreenLayers: [
					...t.fullScreenLayers,
					{
						key: i,
						transitionState: 1,
						LayerComponent: null != r ? r : m.ZP,
						render: e
					}
				]
			}));
		}),
		i
	);
}
function R(e) {
	(0, _.j)(() => {
		g.setState((t) => ({ fullScreenLayers: t.fullScreenLayers.filter((t) => t.key !== e) }));
	});
}
