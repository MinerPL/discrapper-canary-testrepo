t.d(n, {
	Z: function () {
		return T;
	}
}),
	t(47120);
var s = t(735250),
	i = t(470079),
	o = t(772848),
	l = t(924826),
	r = t(91192),
	a = t(442837),
	c = t(749210),
	d = t(434404),
	u = t(271383),
	I = t(430824),
	_ = t(496675),
	f = t(700785),
	E = t(785717),
	m = t(256226),
	p = t(678738),
	x = t(314172),
	Z = t(981631),
	v = t(689938),
	h = t(328156);
function S(e) {
	let { user: n, currentUser: t, guild: a, guildMember: c, roles: d, highestRole: u, canManageRoles: I, onAddRole: _, onRemoveRole: E } = e,
		p = I && null != c,
		S = i.useMemo(() => 'roles-'.concat((0, o.Z)()), []),
		T = (0, l.ZP)({
			id: S,
			isEnabled: !0,
			scrollToStart: Z.Cyb,
			scrollToEnd: Z.Cyb,
			wrap: !0
		}),
		A = d.length,
		g = 0 === A ? v.Z.Messages.ROLE_LIST_EMPTY : v.Z.Messages.ROLES_LIST.format({ numRoles: A }),
		N = d.map((e) => {
			var i;
			return (0, s.jsx)(
				m.Z,
				{
					role: e,
					guildId: a.id,
					disableBorderColor: !0,
					onRemove: () => E(e),
					canRemove: I ? f.r6(a, t.id, u, e) : (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) === null && n.id === t.id
				},
				e.id
			);
		});
	return (0, s.jsx)(r.bG, {
		navigator: T,
		children: (0, s.jsx)(r.SJ, {
			children: (e) => {
				let { ref: n, ...t } = e;
				return (0, s.jsxs)('div', {
					className: h.root,
					'aria-label': g,
					ref: n,
					...t,
					children: [
						N,
						p &&
							(0, s.jsx)(x.Z, {
								guild: a,
								guildMember: c,
								numRoles: A,
								highestRole: u,
								onAddRole: _
							})
					]
				});
			}
		})
	});
}
function T(e) {
	let { user: n, currentUser: t, guild: o, scrollIntoView: l } = e,
		{ trackUserProfileAction: r } = (0, E.KZ)(),
		m = (0, a.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)),
		x = (0, a.e7)([I.Z], () => I.Z.getRoles(o.id)),
		h = null == m ? void 0 : m.roles,
		T = i.useMemo(
			() =>
				null == h || 0 === h.length
					? []
					: Object.values(x)
							.filter((e) => h.includes(e.id))
							.sort((e, n) => {
								var t, s;
								let i = (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) !== null,
									o = (null === (s = n.tags) || void 0 === s ? void 0 : s.guild_connections) !== null;
								return i && !o ? 1 : !i && o ? -1 : 0;
							}),
			[x, h]
		),
		A = f.e9(o, t.id),
		[g] = (0, a.Wu)([_.Z], () => [_.Z.can(Z.Plq.MANAGE_ROLES, o), null != o ? _.Z.getGuildVersion(o.id) : null]),
		N = i.useCallback(
			(e) => {
				var t, s;
				r({ action: 'REMOVE_ROLE' });
				let i = null !== (s = null == h ? void 0 : h.filter((n) => n !== e.id)) && void 0 !== s ? s : [];
				(null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? c.Z.unassignGuildRoleConnection(o.id, e.id) : d.Z.updateMemberRoles(o.id, n.id, i, [], [e.id]);
			},
			[h, o.id, n.id, r]
		),
		j = i.useCallback(
			(e) => {
				r({ action: 'ADD_ROLE' });
				let t = null != h ? h : [];
				-1 === t.indexOf(e) && (t = t.concat([e])), d.Z.updateMemberRoles(o.id, n.id, t, [e], []);
			},
			[h, o.id, n.id, r]
		),
		L = g && null != m;
	return 0 !== T.length || L
		? (0, s.jsx)(p.Z, {
				heading: v.Z.Messages.ROLES,
				scrollIntoView: l,
				children: (0, s.jsx)(S, {
					user: n,
					currentUser: t,
					guild: o,
					guildMember: m,
					roles: T,
					highestRole: A,
					canManageRoles: g,
					onAddRole: j,
					onRemoveRole: N
				})
			})
		: null;
}
