t.r(n);
var r = t(735250);
t(470079);
var s = t(481060),
	u = t(239091),
	i = t(410575),
	a = t(108843),
	c = t(100527),
	l = t(299206),
	o = t(88966),
	d = t(725119),
	Z = t(981631),
	E = t(689938);
n.default = (0, a.Z)(
	function (e) {
		let { user: n, analyticsContext: t, onSelect: a } = e,
			c = (0, d.Z)({ userId: n.id }),
			_ = (0, l.Z)({
				id: n.id,
				label: E.Z.Messages.COPY_ID_USER
			}),
			f = (0, o.Z)(n.id),
			M = n.isNonUserBot();
		return (0, r.jsx)(i.Z, {
			context: t,
			object: Z.qAy.CONTEXT_MENU,
			children: (0, r.jsxs)(s.Menu, {
				navId: 'user-context',
				onClose: u.Zy,
				'aria-label': E.Z.Messages.USER_ACTIONS_MENU_LABEL,
				onSelect: a,
				children: [
					(0, r.jsxs)(s.MenuGroup, {
						children: [!M && c, !M && f]
					}),
					(0, r.jsx)(s.MenuGroup, { children: _ })
				]
			})
		});
	},
	[c.Z.CONTEXT_MENU, c.Z.BANNED_USER_MENU]
);
