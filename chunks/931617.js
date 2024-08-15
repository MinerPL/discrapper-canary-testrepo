l.d(n, {
	Z: function () {
		return m;
	}
});
var t = l(735250);
l(470079);
var r = l(866442),
	i = l(442837),
	a = l(481060),
	s = l(607070),
	u = l(605436),
	d = l(910693),
	o = l(434404),
	c = l(271383),
	Z = l(430824),
	E = l(496675),
	M = l(823379),
	_ = l(981631),
	f = l(689938),
	g = l(522425);
function I(e, n) {
	var l, i;
	return (0, t.jsxs)('div', {
		className: g.roleRow,
		children: [
			'dot' === n
				? (0, t.jsx)(a.RoleDot, {
						className: g.roleDot,
						color: null !== (l = e.colorString) && void 0 !== l ? l : (0, r.Rf)(_.p6O),
						background: !1,
						tooltip: !1
					})
				: (0, t.jsx)(a.RoleCircle, {
						className: g.roleDot,
						color: null !== (i = e.colorString) && void 0 !== i ? i : (0, r.Rf)(_.p6O)
					}),
			(0, t.jsx)('div', { children: e.name })
		]
	});
}
function m(e, n) {
	let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
		r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
		g = (0, i.e7)([Z.Z], () => Z.Z.getGuild(n)),
		m = (0, i.e7)([Z.Z], () => Z.Z.getRoles(n)),
		R = (0, i.e7)([s.Z], () => s.Z.roleStyle),
		N = (0, d.sE)(n, {
			location: r,
			targetUserId: e
		}),
		{
			userRoles: A,
			isGuildMember: C,
			canManageRoles: O
		} = (0, i.cj)(
			[c.ZP, E.Z],
			() => {
				let l = c.ZP.getMember(n, e);
				return {
					userRoles: null != l ? l.roles : [],
					isGuildMember: null != l,
					canManageRoles: null != g && E.Z.can(_.Plq.MANAGE_ROLES, g)
				};
			},
			[e, n, g]
		);
	if (__OVERLAY__ || null == A || null == g || !C) return null;
	let T = E.Z.getHighestRole(g),
		v = Object.values(m).filter((e) => !(0, u.pM)(g.id, e.id)),
		x = O
			? v.map((l) => {
					let r = l.managed || !E.Z.isRoleHigher(g, T, l),
						i = -1 !== A.indexOf(l.id);
					return r && !i
						? null
						: (0, t.jsx)(
								a.MenuCheckboxItem,
								{
									id: l.id,
									label: () => I(l, R),
									disabled: r,
									action: () => {
										var t;
										return (
											(t = l),
											void (A.includes(t.id)
												? (o.Z.updateMemberRoles(
														n,
														e,
														A.filter((e) => e !== t.id),
														[],
														[t.id]
													),
													N(d.jQ.REMOVE_ROLE))
												: (o.Z.updateMemberRoles(n, e, A.concat([t.id]), [t.id], []), N(d.jQ.ADD_ROLE)))
										);
									},
									checked: i
								},
								l.id
							);
				})
			: v
					.filter((e) => -1 !== A.indexOf(e.id))
					.map((e) =>
						(0, u.pM)(g.id, e.id)
							? null
							: (0, t.jsx)(
									a.MenuItem,
									{
										id: e.id,
										label: () => I(e, R)
									},
									e.id
								)
					);
	return 0 === x.filter(M.lm).length
		? null
		: l
			? x
			: (0, t.jsx)(a.MenuItem, {
					id: 'roles',
					label: f.Z.Messages.ROLES_LIST.format({ numRoles: x.length }),
					children: x
				});
}
