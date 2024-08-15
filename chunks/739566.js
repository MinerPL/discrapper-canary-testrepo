n.d(t, {
	Sw: function () {
		return h;
	},
	Uj: function () {
		return E;
	},
	ZH: function () {
		return f;
	},
	ZP: function () {
		return _;
	},
	ij: function () {
		return p;
	}
});
var r = n(512722),
	i = n.n(r),
	a = n(442837),
	s = n(592125),
	o = n(271383),
	l = n(430824),
	u = n(699516),
	c = n(594174),
	d = n(51144);
function _(e) {
	let t = E(e);
	return i()(null != t, 'Result cannot be null because the message is not null'), t;
}
function E(e) {
	var t;
	let n = (0, a.e7)([s.Z], () => (null == e ? null : s.Z.getChannel(e.channel_id))),
		r = null == e ? void 0 : null === (t = e.author) || void 0 === t ? void 0 : t.id,
		i = null == n ? void 0 : n.guild_id,
		_ = (0, a.e7)([o.ZP], () => (null == i || null == r ? null : o.ZP.getMember(i, r))),
		E = (0, a.e7)([c.default], () => c.default.getUser(r), [r]),
		f = d.ZP.useName((null == e ? void 0 : e.author.bot) ? (null == e ? void 0 : e.author) : E),
		{ guild: h, guildRoles: p } = (0, a.cj)(
			[l.Z],
			() => {
				let e = l.Z.getGuild(i),
					t = null != e ? l.Z.getRoles(e.id) : void 0;
				return {
					guild: e,
					guildRoles: t
				};
			},
			[i]
		),
		m = (0, a.e7)([u.Z], () => (null != r && (null == n ? void 0 : n.isPrivate()) ? u.Z.getNickname(r) : null));
	return null == e
		? null
		: I({
				user: e.author,
				channel: n,
				guild: h,
				guildRoles: p,
				userName: f,
				member: _,
				friendNickname: m
			});
}
function f(e) {
	let t = s.Z.getChannel(e.channel_id);
	return p(e.author, t);
}
function h(e, t) {
	let n = null == e ? void 0 : e.id,
		r = null == t ? void 0 : t.guild_id,
		i = (0, a.e7)([o.ZP], () => (null == r || null == n ? null : o.ZP.getMember(r, n))),
		{ guild: s, guildRoles: c } = (0, a.cj)(
			[l.Z],
			() => {
				let e = l.Z.getGuild(r),
					t = null != e ? l.Z.getRoles(e.id) : void 0;
				return {
					guild: e,
					guildRoles: t
				};
			},
			[r]
		),
		_ = (0, a.e7)([u.Z], () => (null != n && (null == t ? void 0 : t.isPrivate()) ? u.Z.getNickname(n) : null)),
		E = d.ZP.useName(e);
	return I({
		user: e,
		channel: t,
		guild: s,
		guildRoles: c,
		member: i,
		userName: E,
		friendNickname: _
	});
}
function p(e, t) {
	let n = null == e ? void 0 : e.id,
		r = null == t ? void 0 : t.guild_id,
		i = l.Z.getGuild(r),
		a = null != r ? l.Z.getRoles(r) : void 0,
		s = null == r || null == n ? null : o.ZP.getMember(r, n),
		c = null != n && null != t && t.isPrivate() ? u.Z.getNickname(n) : null;
	return I({
		user: e,
		channel: t,
		guild: i,
		guildRoles: a,
		member: s,
		friendNickname: c
	});
}
function I(e) {
	var t, n, r, i;
	let { user: a, channel: s, guild: o, guildRoles: l, member: u, userName: c, friendNickname: _ } = e,
		E = null == a ? '???' : null != c ? c : d.ZP.getName(a);
	return (null == a ? void 0 : a.id) == null || null == s
		? {
				nick: E,
				colorString: void 0
			}
		: (null == o ? void 0 : o.id) == null
			? {
					nick: null != _ ? _ : E,
					colorString: void 0
				}
			: null == u
				? {
						nick: E,
						colorString: void 0
					}
				: {
						nick: null !== (n = u.nick) && void 0 !== n ? n : E,
						colorString: null !== (r = u.colorString) && void 0 !== r ? r : void 0,
						colorRoleName:
							null != u.colorRoleId && null != o
								? null == l
									? void 0
									: null === (t = l[u.colorRoleId]) || void 0 === t
										? void 0
										: t.name
								: void 0,
						colorRoleId: u.colorRoleId,
						iconRoleId: u.iconRoleId,
						guildMemberAvatar: u.avatar,
						guildMemberAvatarDecoration: u.avatarDecoration,
						clan: null !== (i = a.clan) && void 0 !== i ? i : void 0
					};
}
