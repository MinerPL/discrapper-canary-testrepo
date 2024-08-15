n.d(t, {
	J: function () {
		return o.Hb;
	}
});
var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(385499),
	o = n(674563),
	l = n(769029);
t.Z = (e) => {
	let { name: t, discriminator: n, invertBotTagColor: i, nameColor: o, className: u, botType: c, usernameClass: d, discriminatorClass: _, botClass: E, botVerified: f = !1, style: h, useRemSizes: p = !1, usernameIcon: m } = e;
	return (0, r.jsxs)('div', {
		className: a()(u, l.nameTag),
		style: h,
		children: [
			(0, r.jsxs)('span', {
				className: a()(l.username, d),
				style: null != o ? { color: o } : void 0,
				children: [m, t]
			}),
			null != n
				? (0, r.jsxs)('span', {
						className: null != _ ? _ : void 0,
						children: ['#', n]
					})
				: null,
			null != c
				? (0, r.jsx)(s.Z, {
						type: c,
						invertColor: i,
						className: a()(E, l.bot),
						verified: f,
						useRemSizes: p
					})
				: null
		]
	});
};
