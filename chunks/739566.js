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
var r = n(512722), i = n.n(r), a = n(442837), o = n(592125), s = n(271383), l = n(430824), u = n(699516), c = n(594174), d = n(51144);
function _(e) {
    let t = E(e);
    return i()(null != t, 'Result cannot be null because the message is not null'), t;
}
function E(e) {
    var t;
    let n = (0, a.e7)([o.Z], () => null == e ? null : o.Z.getChannel(e.channel_id)), r = null == e ? void 0 : null === (t = e.author) || void 0 === t ? void 0 : t.id, i = null == n ? void 0 : n.guild_id, _ = (0, a.e7)([s.ZP], () => null == i || null == r ? null : s.ZP.getMember(i, r)), E = (0, a.e7)([c.default], () => c.default.getUser(r), [r]), f = d.ZP.useName((null == e ? void 0 : e.author.bot) ? null == e ? void 0 : e.author : E), {
            guild: h,
            guildRoles: p
        } = (0, a.cj)([l.Z], () => {
            let e = l.Z.getGuild(i), t = null != e ? l.Z.getRoles(e.id) : void 0;
            return {
                guild: e,
                guildRoles: t
            };
        }, [i]), I = (0, a.e7)([u.Z], () => null != r && (null == n ? void 0 : n.isPrivate()) ? u.Z.getNickname(r) : null);
    return null == e ? null : m({
        user: e.author,
        channel: n,
        guild: h,
        guildRoles: p,
        userName: f,
        member: _,
        friendNickname: I
    });
}
function f(e) {
    let t = o.Z.getChannel(e.channel_id);
    return p(e.author, t);
}
function h(e, t) {
    let n = null == e ? void 0 : e.id, r = null == t ? void 0 : t.guild_id, i = (0, a.e7)([s.ZP], () => null == r || null == n ? null : s.ZP.getMember(r, n)), {
            guild: o,
            guildRoles: c
        } = (0, a.cj)([l.Z], () => {
            let e = l.Z.getGuild(r), t = null != e ? l.Z.getRoles(e.id) : void 0;
            return {
                guild: e,
                guildRoles: t
            };
        }, [r]), _ = (0, a.e7)([u.Z], () => null != n && (null == t ? void 0 : t.isPrivate()) ? u.Z.getNickname(n) : null), E = d.ZP.useName(e);
    return m({
        user: e,
        channel: t,
        guild: o,
        guildRoles: c,
        member: i,
        userName: E,
        friendNickname: _
    });
}
function p(e, t) {
    let n = null == e ? void 0 : e.id, r = null == t ? void 0 : t.guild_id, i = l.Z.getGuild(r), a = null != r ? l.Z.getRoles(r) : void 0, o = null == r || null == n ? null : s.ZP.getMember(r, n), c = null != n && null != t && t.isPrivate() ? u.Z.getNickname(n) : null;
    return m({
        user: e,
        channel: t,
        guild: i,
        guildRoles: a,
        member: o,
        friendNickname: c
    });
}
function m(e) {
    var t, n, r, i;
    let {
            user: a,
            channel: o,
            guild: s,
            guildRoles: l,
            member: u,
            userName: c,
            friendNickname: _
        } = e, E = null == a ? '???' : null != c ? c : d.ZP.getName(a);
    return (null == a ? void 0 : a.id) == null || null == o ? {
        nick: E,
        colorString: void 0
    } : (null == s ? void 0 : s.id) == null ? {
        nick: null != _ ? _ : E,
        colorString: void 0
    } : null == u ? {
        nick: E,
        colorString: void 0
    } : {
        nick: null !== (n = u.nick) && void 0 !== n ? n : E,
        colorString: null !== (r = u.colorString) && void 0 !== r ? r : void 0,
        colorRoleName: null != u.colorRoleId && null != s ? null == l ? void 0 : null === (t = l[u.colorRoleId]) || void 0 === t ? void 0 : t.name : void 0,
        colorRoleId: u.colorRoleId,
        iconRoleId: u.iconRoleId,
        guildMemberAvatar: u.avatar,
        guildMemberAvatarDecoration: u.avatarDecoration,
        clan: null !== (i = a.clan) && void 0 !== i ? i : void 0
    };
}
