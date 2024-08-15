t.r(n);
var r = t(735250);
t(470079);
var o = t(481060),
	u = t(239091),
	c = t(883385),
	i = t(108843),
	s = t(100527),
	a = t(299206),
	l = t(981631),
	d = t(689938);
n.default = (0, i.Z)(
	(0, c.Z)(
		function (e) {
			let { userId: n, onSelect: t } = e,
				c = (0, a.Z)({
					id: n,
					label: d.Z.Messages.COPY_ID_USER,
					showWithoutDeveloperMode: !0
				});
			return (0, r.jsx)(o.Menu, {
				navId: 'unknown-user-context',
				onClose: u.Zy,
				'aria-label': d.Z.Messages.USER_ACTIONS_MENU_LABEL,
				onSelect: t,
				children: (0, r.jsx)(o.MenuGroup, { children: c })
			});
		},
		{ object: l.qAy.CONTEXT_MENU }
	),
	[s.Z.CONTEXT_MENU, s.Z.UNKNOWN_USER_MENU]
);
