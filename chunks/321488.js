var i,
	a,
	s = n(735250);
n(470079);
var r = n(120356),
	l = n.n(r),
	o = n(873546),
	c = n(481060),
	d = n(907756);
function u(e) {
	let { icon: t, tooltip: n, onClick: i, actionType: a = 2, shouldHighlight: r } = e;
	return (0, s.jsx)(c.Tooltip, {
		text: n,
		children: (e) =>
			(0, s.jsx)(c.Clickable, {
				...e,
				'aria-label': n,
				onClick: i,
				className: l()(d.actionButton, {
					[d.actionAccept]: 0 === a,
					[d.actionDeny]: 1 === a,
					[d.highlight]: r,
					[d.actionButtonMobile]: o.tq
				}),
				children: (0, s.jsx)(t, {
					className: d.icon,
					color: 'currentColor'
				})
			})
	});
}
((i = a || (a = {}))[(i.ACCEPT = 0)] = 'ACCEPT'),
	(i[(i.DENY = 1)] = 'DENY'),
	(i[(i.DEFAULT = 2)] = 'DEFAULT'),
	(u.ActionTypes = a),
	(t.Z = u);
