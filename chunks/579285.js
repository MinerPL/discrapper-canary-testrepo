n.d(t, {
	Z: function () {
		return C;
	}
}),
	n(47120);
var r = n(735250),
	i = n(470079),
	a = n(512722),
	s = n.n(a),
	o = n(772848),
	l = n(924826),
	u = n(91192),
	c = n(442837),
	d = n(481060),
	_ = n(749210),
	E = n(112724),
	f = n(434404),
	h = n(271383),
	p = n(430824),
	m = n(496675),
	I = n(259580),
	T = n(700785),
	g = n(785717),
	S = n(256226),
	A = n(314172),
	N = n(981631),
	v = n(689938),
	O = n(304747);
let R = (0, E.Z)(function (e) {
	let { user: t, currentUser: n, guild: a, guildMember: c, roles: _, highestRole: E, canManageRoles: f, width: h, onAddRole: p, onRemoveRole: m } = e;
	s()(null != h, 'Unexpected null width');
	let R = i.useRef({}),
		C = (e, t) => {
			null != t ? (R.current[e] = t) : delete R.current[e];
		},
		[y, D] = i.useState(null),
		[L, b] = i.useState(!1),
		M = i.useMemo(() => (null == y || L ? _ : _.slice(0, y)), [_, y, L]),
		[P, U] = i.useState(h),
		w = _.length > M.length,
		x = f && null != c,
		G = i.useRef(null),
		k = i.useRef(null);
	i.useLayoutEffect(() => {
		var e, t, n, r, i, a, s, o;
		let l = null !== (i = null === (t = G.current) || void 0 === t ? void 0 : null === (e = t.getBoundingClientRect()) || void 0 === e ? void 0 : e.width) && void 0 !== i ? i : 0,
			u = null !== (a = null === (r = k.current) || void 0 === r ? void 0 : null === (n = r.getBoundingClientRect()) || void 0 === n ? void 0 : n.width) && void 0 !== a ? a : 0,
			c = h - (l > 0 ? l + 4 : 0) - (u > 0 ? u + 4 : 0),
			d = 0;
		for (let e = 0; e < 2; e++) {
			let t = 1 === e,
				n = 0;
			for (let e = d; e < M.length; e++) {
				let r = M[e],
					i = R.current[r.id];
				if (null == i) continue;
				let a = null !== (o = null === (s = i.getBoundingClientRect()) || void 0 === s ? void 0 : s.width) && void 0 !== o ? o : 0;
				if ((n > 0 && !t && n + a > h) || (n > 0 && t && n + a > c)) break;
				(n += a + 4), d++;
			}
		}
		D(d === _.length ? null : d), U(c);
	}, [h, _, M]);
	let B = i.useMemo(() => 'roles-'.concat((0, o.Z)()), []),
		F = (0, l.ZP)({
			id: B,
			isEnabled: !0,
			scrollToStart: N.Cyb,
			scrollToEnd: N.Cyb,
			wrap: !0
		}),
		V = _.length,
		H = 0 === V ? v.Z.Messages.ROLE_LIST_EMPTY : v.Z.Messages.ROLES_LIST.format({ numRoles: V }),
		Z = M.map((e, i) => {
			var s;
			return (0, r.jsx)(
				S.Z,
				{
					role: e,
					guildId: a.id,
					style: { maxWidth: i === M.length - 1 ? P : h },
					disableBorderColor: !0,
					ref: (t) => C(e.id, t),
					onRemove: () => m(e),
					canRemove: f ? T.r6(a, n.id, E, e) : (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null && t.id === n.id
				},
				e.id
			);
		}),
		{ trackUserProfileAction: Y } = (0, g.KZ)(),
		j = i.useCallback(() => {
			b(!0), Y({ action: 'EXPAND_ROLES' });
		}, [Y]),
		W = i.useCallback(() => {
			b(!1), Y({ action: 'COLLAPSE_ROLES' });
		}, [Y]);
	return (0, r.jsx)(u.bG, {
		navigator: F,
		children: (0, r.jsx)(u.SJ, {
			children: (e) => {
				let { ref: t, ...n } = e;
				return (0, r.jsxs)('div', {
					className: O.root,
					'aria-label': H,
					ref: t,
					...n,
					children: [
						Z,
						w &&
							(0, r.jsx)(d.TooltipContainer, {
								text: v.Z.Messages.VIEW_ALL_ROLES,
								children: (0, r.jsx)(d.Clickable, {
									innerRef: G,
									onClick: j,
									className: O.showMoreButton,
									children: (0, r.jsx)(d.Text, {
										variant: 'text-xs/medium',
										children: '+'.concat(_.length - M.length)
									})
								})
							}),
						L &&
							(0, r.jsx)(d.TooltipContainer, {
								text: v.Z.Messages.COLLAPSE_ROLES,
								children: (0, r.jsx)(d.Clickable, {
									onClick: W,
									className: O.collapseButton,
									children: (0, r.jsx)(I.Z, {
										direction: I.Z.Directions.LEFT,
										width: 12,
										height: 12
									})
								})
							}),
						x &&
							(0, r.jsx)(A.Z, {
								buttonRef: k,
								guild: a,
								guildMember: c,
								numRoles: V,
								highestRole: E,
								onAddRole: p
							})
					]
				});
			}
		})
	});
});
function C(e) {
	let { user: t, currentUser: n, guild: a } = e,
		{ trackUserProfileAction: s } = (0, g.KZ)(),
		o = (0, c.e7)([h.ZP], () => h.ZP.getMember(a.id, t.id)),
		l = (0, c.e7)([p.Z], () => p.Z.getRoles(a.id)),
		u = null == o ? void 0 : o.roles,
		d = i.useMemo(
			() =>
				null == u || 0 === u.length
					? []
					: Object.values(l)
							.filter((e) => u.includes(e.id))
							.sort((e, t) => {
								var n, r;
								let i = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
									a = (null === (r = t.tags) || void 0 === r ? void 0 : r.guild_connections) !== null;
								return i && !a ? 1 : !i && a ? -1 : 0;
							}),
			[l, u]
		),
		E = T.e9(a, n.id),
		[I] = (0, c.Wu)([m.Z], () => [m.Z.can(N.Plq.MANAGE_ROLES, a), null != a ? m.Z.getGuildVersion(a.id) : null]),
		S = i.useCallback(
			(e) => {
				var n, r;
				s({ action: 'REMOVE_ROLE' });
				let i = null !== (r = null == u ? void 0 : u.filter((t) => t !== e.id)) && void 0 !== r ? r : [];
				(null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null ? _.Z.unassignGuildRoleConnection(a.id, e.id) : f.Z.updateMemberRoles(a.id, t.id, i, [], [e.id]);
			},
			[u, a.id, t.id, s]
		),
		A = i.useCallback(
			(e) => {
				s({ action: 'ADD_ROLE' });
				let n = null != u ? u : [];
				-1 === n.indexOf(e) && (n = n.concat([e])), f.Z.updateMemberRoles(a.id, t.id, n, [e], []);
			},
			[u, a.id, t.id, s]
		),
		v = I && null != o;
	return 0 !== d.length || v
		? (0, r.jsx)('div', {
				children: (0, r.jsx)(R, {
					user: t,
					currentUser: n,
					guild: a,
					guildMember: o,
					roles: d,
					highestRole: E,
					canManageRoles: I,
					onAddRole: A,
					onRemoveRole: S
				})
			})
		: null;
}
