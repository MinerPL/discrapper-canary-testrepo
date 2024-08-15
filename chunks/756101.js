n.d(t, {
	Z: function () {
		return d;
	}
});
var i = n(735250);
n(470079);
var a = n(481060),
	s = n(410030),
	r = n(225784),
	l = n(766219),
	o = n(374939),
	c = n(239181);
function d(e) {
	let { tab: t, guilds: n, onScroll: d, onGuildCardClick: u, onGuildCardSeen: _ } = e,
		E = (0, s.ZP)(),
		h = (0, l.Mf)(t),
		m = (0, l.a$)(t),
		I = (0, l.QW)(t),
		g = (0, l.lg)(t);
	return (0, i.jsxs)(o.Z, {
		title: h,
		description: m,
		onScroll: d,
		children: [
			(0, i.jsx)(a.Heading, {
				className: c.sectionTitle,
				variant: 'heading-lg/semibold',
				color: 'header-primary',
				children: I
			}),
			(0, i.jsx)('div', {
				className: c.content,
				children: n.map((e, t) =>
					(0, i.jsx)(
						r.Z,
						{
							guild: e,
							onView: (e) => u(e, t, g),
							theme: E,
							onGuildCardSeen: (e) => _(e, g)
						},
						e.id
					)
				)
			})
		]
	});
}
