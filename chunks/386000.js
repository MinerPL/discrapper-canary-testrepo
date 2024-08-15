n.d(t, {
	Z: function () {
		return o;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(652844),
	l = n(628581),
	r = n(871499);
function o(e) {
	let {
			selfMute: t,
			serverMute: n,
			suppress: o,
			centerButton: c = !1,
			awaitingRemote: u,
			onMouseEnter: d,
			onMouseLeave: h,
			...m
		} = e,
		p = t || n || o,
		_ = c ? r.d : r.Z,
		f = (0, l.Z)(t, n, o, u),
		{ Component: E, play: g, events: C } = (0, s.O)(p ? 'unmute' : 'mute');
	return (
		a.useEffect(() => () => g(), [g, p]),
		(0, i.jsx)(_, {
			isActive: !p,
			iconComponent: E,
			label: f,
			onMouseEnter: (e) => {
				null == d || d(e), C.onMouseEnter();
			},
			onMouseLeave: (e) => {
				null == h || h(e), C.onMouseLeave();
			},
			...m
		})
	);
}
