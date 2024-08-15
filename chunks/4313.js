n.d(t, {
	Z: function () {
		return d;
	}
});
var r = n(175922),
	i = n(759202),
	a = n(316138),
	s = n(882159),
	o = n(977489),
	l = n(285363),
	u = n(538018),
	c = n(894417);
function d(e, t, n) {
	void 0 === n && (n = !1);
	var d,
		_,
		E,
		f,
		h = (0, s.Re)(t);
	var p =
			(0, s.Re)(t) &&
			((_ = (d = t).getBoundingClientRect()),
			(E = (0, c.NM)(_.width) / d.offsetWidth || 1),
			(f = (0, c.NM)(_.height) / d.offsetHeight || 1),
			1 !== E || 1 !== f),
		I = (0, l.Z)(t),
		m = (0, r.Z)(e, p, n),
		T = {
			scrollLeft: 0,
			scrollTop: 0
		},
		g = {
			x: 0,
			y: 0
		};
	return (
		(h || (!h && !n)) &&
			(('body' !== (0, a.Z)(t) || (0, u.Z)(I)) && (T = (0, i.Z)(t)),
			(0, s.Re)(t) ? ((g = (0, r.Z)(t, !0)), (g.x += t.clientLeft), (g.y += t.clientTop)) : I && (g.x = (0, o.Z)(I))),
		{
			x: m.left + T.scrollLeft - g.x,
			y: m.top + T.scrollTop - g.y,
			width: m.width,
			height: m.height
		}
	);
}
