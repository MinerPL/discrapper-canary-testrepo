t.d(n, {
	Z: function () {
		return d;
	}
});
var i = t(735250),
	a = t(470079),
	l = t(120356),
	o = t.n(l),
	r = t(768581),
	s = t(689938),
	c = t(799829);
function d(e) {
	let { application: n, src: t, className: l, size: d, botIconFirst: u, fallbackAvatar: m, rendersPlaceholder: p = !1 } = e,
		_ = a.useMemo(
			() =>
				null != n
					? r.ZP.getApplicationIconURL({
							id: n.id,
							icon: n.icon,
							bot: n.bot,
							size: d,
							botIconFirst: u,
							fallbackAvatar: m
						})
					: t,
			[n, t, d, u, m]
		);
	if (null == _) return p ? (0, i.jsx)('div', { className: o()(c.icon, c.placeholder, l) }) : null;
	return (0, i.jsx)('img', {
		className: o()(c.icon, l),
		alt: s.Z.Messages.IMAGE,
		src: _,
		'aria-hidden': !0,
		draggable: !1
	});
}
