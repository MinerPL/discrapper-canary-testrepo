n.d(t, {
	Z: function () {
		return o;
	}
});
var i = n(735250);
n(470079);
var a = n(592471),
	s = n(749280),
	l = n(424602),
	r = n(871499);
function o(e) {
	let t,
		n,
		o,
		c,
		{ isActivityActive: u, onMouseEnter: d, onMouseLeave: h, onClick: m, ...p } = e,
		{ enabled: _ } = l.nS.useExperiment({ location: 'ActivityButton' }, { autoTrackExposure: !0 }),
		{ Component: f, events: E, play: C } = (0, a.s)(),
		{ Component: g, events: I, play: x } = (0, s.w)();
	return (
		_ ? ((n = g), (o = I), (c = x)) : ((n = f), (o = E), (c = C)),
		(0, i.jsx)(r.d, {
			isActive: u,
			color: t,
			iconComponent: n,
			onMouseEnter: (e) => {
				null == d || d(e), o.onMouseEnter();
			},
			onMouseLeave: (e) => {
				null == h || h(e), o.onMouseLeave();
			},
			onClick: (e) => {
				null == m || m(e), c();
			},
			...p
		})
	);
}
