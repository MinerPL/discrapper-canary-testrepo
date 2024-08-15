n.d(t, {
	Z: function () {
		return m;
	}
});
var r = n(740078),
	i = n(365100),
	a = n(558376),
	s = n(620720),
	o = n(343713),
	l = n(285363),
	u = n(874900),
	c = n(882159),
	d = n(175922),
	_ = n(660027),
	E = n(67966),
	f = n(316138),
	h = n(6138),
	p = n(894417);
function I(e, t, n) {
	var s, o, u;
	return t === r.Pj
		? (0, h.Z)((0, i.Z)(e, n))
		: (0, c.kK)(t)
			? ((s = t),
				(o = n),
				((u = (0, d.Z)(s, !1, 'fixed' === o)).top = u.top + s.clientTop),
				(u.left = u.left + s.clientLeft),
				(u.bottom = u.top + s.clientHeight),
				(u.right = u.left + s.clientWidth),
				(u.width = s.clientWidth),
				(u.height = s.clientHeight),
				(u.x = u.left),
				(u.y = u.top),
				u)
			: (0, h.Z)((0, a.Z)((0, l.Z)(e)));
}
function m(e, t, n, r) {
	var i,
		a,
		l,
		d = [].concat(
			'clippingParents' === t
				? ((i = e),
					(a = (0, s.Z)((0, _.Z)(i))),
					(l = ['absolute', 'fixed'].indexOf((0, u.Z)(i).position) >= 0 && (0, c.Re)(i) ? (0, o.Z)(i) : i),
					(0, c.kK)(l)
						? a.filter(function (e) {
								return (0, c.kK)(e) && (0, E.Z)(e, l) && 'body' !== (0, f.Z)(e);
							})
						: [])
				: [].concat(t),
			[n]
		),
		h = d[0],
		m = d.reduce(
			function (t, n) {
				var i = I(e, n, r);
				return (
					(t.top = (0, p.Fp)(i.top, t.top)),
					(t.right = (0, p.VV)(i.right, t.right)),
					(t.bottom = (0, p.VV)(i.bottom, t.bottom)),
					(t.left = (0, p.Fp)(i.left, t.left)),
					t
				);
			},
			I(e, h, r)
		);
	return (m.width = m.right - m.left), (m.height = m.bottom - m.top), (m.x = m.left), (m.y = m.top), m;
}
