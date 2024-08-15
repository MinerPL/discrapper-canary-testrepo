n.d(t, {
	Z: function () {
		return _;
	}
}),
	n(47120);
var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(866442),
	o = n(442837),
	l = n(692547),
	u = n(481060),
	c = n(607070),
	d = n(454867);
function _(e) {
	let t,
		{ color: n, size: i, forcedIconColor: _, className: E, iconClassName: f } = e,
		[h, p] = (0, o.Wu)([c.Z], () => [c.Z.desaturateUserColors, c.Z.saturation]),
		m = (0, u.useToken)(l.Z.unsafe_rawColors.PRIMARY_300).hex(),
		I = (0, s._i)(null != n ? n : m),
		T = (0, s.ho)(I, !1, h ? p : null);
	t = null != _ ? _ : 0.3 > (0, s.Bd)(I) ? l.Z.unsafe_rawColors.PRIMARY_630.css : l.Z.unsafe_rawColors.WHITE_500.css;
	let g = i / 8;
	return (0, r.jsx)('div', {
		style: {
			background: T,
			width: i,
			height: i,
			borderRadius: i,
			lineHeight: ''.concat(i, 'px')
		},
		className: E,
		children: (0, r.jsx)(u.LinkIcon, {
			size: 'custom',
			color: t,
			className: a()(d.linkIcon, f),
			width: i - 2 * g,
			height: i - 2 * g,
			style: { margin: g }
		})
	});
}
