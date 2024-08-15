n(653041);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(399606),
	o = n(481060),
	c = n(285173),
	u = n(422559),
	d = n(430824),
	h = n(233608),
	m = n(776767),
	p = n(351127),
	_ = n(50493),
	f = n(981631),
	E = n(689938),
	C = n(38031);
function g(e) {
	var t, n;
	let { permission: a, roleIds: s, guild: h, specMap: m } = e,
		_ = f.Plq[a],
		g = null !== (n = null === (t = m[_.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== n ? n : (0, u.wt)(_),
		I = p._o.has(_),
		x = (0, r.e7)([d.Z], () => d.Z.getRoles(h.id));
	return (0, i.jsx)(o.Tooltip, {
		'aria-label': E.Z.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY_ARIA_LABEL,
		tooltipClassName: C.roleTooltipContainer,
		tooltipContentClassName: C.roleTooltipContentContainer,
		allowOverflow: !0,
		text: (0, i.jsxs)(i.Fragment, {
			children: [
				(0, i.jsx)(o.Text, {
					variant: 'text-sm/normal',
					children: I ? E.Z.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION_GRANTED_BY : E.Z.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY
				}),
				s.map((e) =>
					(0, i.jsx)(
						'div',
						{
							className: C.roleTooltipItem,
							children: (0, i.jsx)(c.Z, {
								role: x[e],
								guildId: h.id
							})
						},
						e
					)
				)
			]
		}),
		children: (e) => {
			let { onMouseEnter: t, onMouseLeave: n } = e;
			return (0, i.jsxs)(o.Clickable, {
				className: l()(C.permissionChiplet, { [C.elevatedPermission]: I }),
				onMouseEnter: t,
				onMouseLeave: n,
				children: [
					I &&
						(0, i.jsx)(o.ShieldLockIcon, {
							size: 'custom',
							width: 16,
							height: 16,
							color: o.tokens.colors.TEXT_BRAND
						}),
					(0, i.jsx)(o.Text, {
						variant: 'text-xs/medium',
						color: 'interactive-normal',
						children: g
					})
				]
			});
		}
	});
}
t.Z = a.memo(function (e) {
	let { member: t, onNavigate: n } = e,
		s = (0, r.e7)([d.Z], () => d.Z.getGuild(t.guildId), [t.guildId]),
		c = (0, p.B2)(t.userId, t.guildId, p.Qn),
		u = (0, p.B2)(t.userId, t.guildId, p.pd),
		I = Object.keys(c).length,
		x = Object.keys(u).length,
		T = a.useMemo(() => (null != s ? h.Z.getGuildPermissionSpecMap(s) : null), [s]),
		N = a.useMemo(() => (null != s ? h.Z.generateGuildPermissionSpec(s) : null), [s]),
		v = a.useMemo(() => {
			if (null == s || null == T) return null;
			if (0 === I)
				return (0, i.jsx)('div', {
					className: l()(C.permissionChiplet, C.noModPerms),
					children: (0, i.jsx)(o.Text, {
						variant: 'text-sm/normal',
						color: 'text-positive',
						children: E.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_NO_MOD_PERMS_FOUND
					})
				});
			let e = [];
			return (
				null == N ||
					N.forEach((t) => {
						t.permissions.forEach((t) => {
							let n = t.flag,
								a = p.pd.find((e) => f.Plq[e] === n);
							if (null == a) return;
							let l = c[a];
							if (null != l)
								e.push(
									(0, i.jsx)(
										g,
										{
											permission: a,
											roleIds: l,
											guild: s,
											specMap: T
										},
										a
									)
								);
						});
					}),
				e
			);
		}, [s, I, c, N, T]);
	return null == s
		? null
		: (0, i.jsx)(o.FormItem, {
				title: (0, i.jsxs)('div', {
					className: C.headerContainer,
					children: [
						(0, i.jsx)(o.Text, {
							variant: 'eyebrow',
							color: 'header-secondary',
							children: E.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMSSISONS_TITLE
						}),
						(0, i.jsxs)(o.Clickable, {
							className: C.viewAllPermissions,
							onClick: () => n(_.k.PERMISSIONS),
							children: [
								(0, i.jsx)(o.Text, {
									variant: 'eyebrow',
									color: 'interactive-normal',
									children: E.Z.Messages.GUILD_MEMBER_MOD_VIEW_VIEW_ALL_PERMISSIONS.format({ count: x })
								}),
								(0, i.jsx)(o.ChevronSmallRightIcon, {
									size: 'custom',
									width: 16,
									height: 16
								})
							]
						})
					]
				}),
				children: (0, i.jsx)(m.WM, {
					children: (0, i.jsx)(m._2, {
						description: (0, i.jsx)('div', {
							className: C.permissionsContainer,
							children: v
						})
					})
				})
			});
});
