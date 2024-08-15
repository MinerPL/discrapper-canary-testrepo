n.d(t, {
	O: function () {
		return o;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(864094),
	l = n(871499),
	r = n(689938);
function o(e) {
	let t,
		{
			hasPermission: n,
			streamActive: o,
			isSelfStream: c,
			centerButton: u,
			onMouseEnter: d,
			onMouseLeave: h,
			premiumGlow: m,
			buttonRef: p,
			..._
		} = e,
		f = u ? l.d : l.Z;
	t = o
		? c
			? r.Z.Messages.STOP_STREAMING
			: r.Z.Messages.STOP_WATCHING
		: n
			? r.Z.Messages.SHARE_YOUR_SCREEN
			: r.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE;
	let { Component: E, events: g, play: C } = (0, s.P)(o ? 'disable' : 'enable');
	return (
		a.useEffect(() => () => C(), [o, C]),
		(0, i.jsx)(f, {
			buttonRef: p,
			label: t,
			disabled: !n,
			iconComponent: E,
			isActive: o,
			onMouseEnter: (e) => {
				null == d || d(e), g.onMouseEnter();
			},
			onMouseLeave: (e) => {
				null == h || h(e), g.onMouseLeave();
			},
			premiumGlow: m,
			..._
		})
	);
}
