n.d(t, {
	Z: function () {
		return d;
	}
}),
	n(47120);
var r = n(735250);
n(470079);
var i = n(866442),
	a = n(442837),
	s = n(692547),
	o = n(481060),
	l = n(607070),
	u = n(297700),
	c = n(689938);
function d(e) {
	let t,
		{ color: n, size: d, forcedIconColor: _, className: E, iconClassName: f, tooltipText: h } = e,
		[p, m] = (0, a.Wu)([l.Z], () => [l.Z.desaturateUserColors, l.Z.saturation]),
		I = (0, o.useToken)(s.Z.unsafe_rawColors.PRIMARY_300).hex(),
		T = (0, i._i)(null != n ? n : I),
		g = (0, i.ho)(T, !1, p ? m : null);
	return (
		(t = null != _ ? _ : 0.3 > (0, i.Bd)(T) ? s.Z.unsafe_rawColors.PRIMARY_630.css : s.Z.unsafe_rawColors.WHITE_500.css),
		(0, r.jsx)(o.Tooltip, {
			text: null != h ? h : c.Z.Messages.CONNECTIONS_ROLE_OFFICIAL_ICON_TOOLTIP,
			children: (e) =>
				(0, r.jsx)(u.Z, {
					...e,
					className: E,
					color: g,
					size: d,
					children: (0, r.jsx)(o.CheckmarkSmallIcon, {
						size: 'custom',
						color: t,
						height: d,
						width: d,
						className: f
					})
				})
		})
	);
}
