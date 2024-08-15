var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(38068),
	l = n(689938),
	u = n(508140);
t.Z = i.forwardRef(function (e, t) {
	let { className: n, contentClassName: i, isUnread: a, children: c, id: d, role: _, 'aria-label': E } = e;
	return (0, r.jsxs)('div', {
		className: s()(n, {
			[u.divider]: !0,
			[u.isUnread]: a,
			[u.hasContent]: null != c
		}),
		ref: t,
		id: d,
		role: _,
		'aria-label': E,
		children: [
			null != c
				? (0, r.jsx)('span', {
						className: s()(u.content, i),
						children: c
					})
				: null,
			a
				? (0, r.jsxs)('span', {
						className: u.unreadPill,
						children: [
							(0, r.jsx)(o.Z, {
								foreground: u.unreadPillCapStroke,
								className: u.unreadPillCap
							}),
							l.Z.Messages.NEW
						]
					})
				: null
		]
	});
});
