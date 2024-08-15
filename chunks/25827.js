n.d(t, {
	C: function () {
		return E;
	},
	Z: function () {
		return _;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(75735),
	l = n(40851),
	u = n(67844),
	c = n(871499),
	d = n(650041);
function _(e) {
	let t = (0, u.X)(e),
		{
			enabled: n,
			cameraUnavailable: a,
			onChange: s,
			onCameraUnavailable: c,
			hasPermission: d,
			children: _,
			channelLimitReached: E = !1,
			join: f
		} = e,
		h = (0, l.bp)(),
		p = a ? () => c() : () => s(!e.enabled, h),
		{ Component: I, play: m, events: T } = (0, o.o)(f || n ? 'disable' : 'enable');
	return (
		i.useEffect(() => () => m(), [n, m]),
		(0, r.jsx)(r.Fragment, {
			children: _({
				onClick: p,
				active: n,
				disabled: !n && (!d || E),
				iconComponent: I,
				label: t,
				unavailable: a,
				onMouseEnter: f ? void 0 : T.onMouseEnter,
				onMouseLeave: f ? void 0 : T.onMouseLeave
			})
		})
	);
}
function E(e) {
	let {
			enabled: t,
			join: n,
			channel: i,
			onChange: a,
			onCameraUnavailable: o,
			cameraUnavailable: l,
			hasPermission: u,
			className: E,
			channelLimitReached: f,
			channelLimit: h,
			centerButton: p = !1,
			onPopoutClick: I,
			...m
		} = e,
		T = p ? c.d : c.Z;
	return (0, r.jsx)(_, {
		enabled: t,
		join: n,
		channel: i,
		onChange: a,
		onCameraUnavailable: o,
		cameraUnavailable: l,
		hasPermission: u,
		channelLimitReached: f,
		channelLimit: h,
		children: (e) => {
			let { unavailable: n, onMouseEnter: i, onMouseLeave: a, ...o } = e;
			return (0, r.jsx)(T, {
				...o,
				...m,
				onMouseEnter: (e) => {
					var t;
					null === (t = m.onMouseEnter) || void 0 === t || t.call(m, e), null == i || i();
				},
				onMouseLeave: (e) => {
					var t;
					null === (t = m.onMouseLeave) || void 0 === t || t.call(m, e), null == a || a();
				},
				isActive: t,
				className: s()(E, { [d.fauxDisabled]: n }),
				onPopoutClick: I
			});
		}
	});
}
