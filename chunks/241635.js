t.d(n, {
	Z: function () {
		return _;
	}
}),
	t(653041);
var i = t(735250);
t(470079);
var a = t(442837),
	s = t(481060),
	l = t(749210),
	r = t(240872),
	o = t(605436),
	d = t(228643),
	c = t(299206),
	u = t(496675),
	I = t(867108),
	m = t(689938);
function _(e, n) {
	var t;
	let _ = (0, a.e7)([u.Z], () => {
			let t = u.Z.getHighestRole(e);
			return !u.Z.isRoleHigher(e, t, n);
		}),
		N = [],
		E = (0, I.Z)(e, n);
	null != E && N.push(E);
	let T = (0, c.Z)({
		id: n.id,
		label: m.Z.Messages.COPY_ID_ROLE
	});
	null != T && N.push(T);
	let h = (null === (t = n.tags) || void 0 === t ? void 0 : t.guild_connections) === null,
		g = n.managed && !h,
		p = null != n && (0, o.pM)(e.id, n.id);
	return (
		!_ &&
			!g &&
			!p &&
			N.push(
				(0, i.jsx)(
					s.MenuGroup,
					{
						children: (0, i.jsx)(s.MenuItem, {
							id: 'delete-role',
							label: m.Z.Messages.DELETE,
							color: 'danger',
							icon: s.TrashIcon,
							action: () => {
								r.Z.show({
									title: m.Z.Messages.SETTINGS_ROLES_DELETE_TITLE,
									body: m.Z.Messages.SETTINGS_ROLES_DELETE_BODY.format({ name: n.name }),
									cancelText: m.Z.Messages.CANCEL,
									onConfirm: async () => {
										h && (await (0, d.L_)(e.id, n.id, [])), l.Z.deleteRole(e.id, n.id);
									}
								});
							}
						})
					},
					'delete-role'
				)
			),
		N
	);
}
