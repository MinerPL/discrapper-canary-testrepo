"use strict";
n.d(t, {
  Sw: function() {
    return T
  },
  Uj: function() {
    return E
  },
  ZH: function() {
    return I
  },
  ZP: function() {
    return c
  },
  ij: function() {
    return h
  }
});
var i = n(512722),
  r = n.n(i),
  s = n(442837),
  o = n(592125),
  a = n(271383),
  l = n(430824),
  u = n(699516),
  _ = n(594174),
  d = n(51144);

function c(e) {
  let t = E(e);
  return r()(null != t, "Result cannot be null because the message is not null"), t
}

function E(e) {
  var t;
  let n = (0, s.e7)([o.Z], () => null == e ? null : o.Z.getChannel(e.channel_id)),
    i = null == e ? void 0 : null === (t = e.author) || void 0 === t ? void 0 : t.id,
    r = null == n ? void 0 : n.guild_id,
    c = (0, s.e7)([a.ZP], () => null == r || null == i ? null : a.ZP.getMember(r, i)),
    E = (0, s.e7)([_.default], () => _.default.getUser(i), [i]),
    I = d.ZP.useName((null == e ? void 0 : e.author.bot) ? null == e ? void 0 : e.author : E),
    {
      guild: T,
      guildRoles: h
    } = (0, s.cj)([l.Z], () => {
      let e = l.Z.getGuild(r),
        t = null != e ? l.Z.getRoles(e.id) : void 0;
      return {
        guild: e,
        guildRoles: t
      }
    }, [r]),
    f = (0, s.e7)([u.Z], () => null != i && (null == n ? void 0 : n.isPrivate()) ? u.Z.getNickname(i) : null);
  return null == e ? null : S({
    user: e.author,
    channel: n,
    guild: T,
    guildRoles: h,
    userName: I,
    member: c,
    friendNickname: f
  })
}

function I(e) {
  let t = o.Z.getChannel(e.channel_id);
  return h(e.author, t)
}

function T(e, t) {
  let n = null == e ? void 0 : e.id,
    i = null == t ? void 0 : t.guild_id,
    r = (0, s.e7)([a.ZP], () => null == i || null == n ? null : a.ZP.getMember(i, n)),
    {
      guild: o,
      guildRoles: _
    } = (0, s.cj)([l.Z], () => {
      let e = l.Z.getGuild(i),
        t = null != e ? l.Z.getRoles(e.id) : void 0;
      return {
        guild: e,
        guildRoles: t
      }
    }, [i]),
    c = (0, s.e7)([u.Z], () => null != n && (null == t ? void 0 : t.isPrivate()) ? u.Z.getNickname(n) : null),
    E = d.ZP.useName(e);
  return S({
    user: e,
    channel: t,
    guild: o,
    guildRoles: _,
    member: r,
    userName: E,
    friendNickname: c
  })
}

function h(e, t) {
  let n = null == e ? void 0 : e.id,
    i = null == t ? void 0 : t.guild_id,
    r = l.Z.getGuild(i),
    s = null != i ? l.Z.getRoles(i) : void 0,
    o = null == i || null == n ? null : a.ZP.getMember(i, n),
    _ = null != n && null != t && t.isPrivate() ? u.Z.getNickname(n) : null;
  return S({
    user: e,
    channel: t,
    guild: r,
    guildRoles: s,
    member: o,
    friendNickname: _
  })
}

function S(e) {
  var t, n, i, r;
  let {
    user: s,
    channel: o,
    guild: a,
    guildRoles: l,
    member: u,
    userName: _,
    friendNickname: c
  } = e, E = null == s ? "???" : null != _ ? _ : d.ZP.getName(s);
  return (null == s ? void 0 : s.id) == null || null == o ? {
    nick: E,
    colorString: void 0
  } : (null == a ? void 0 : a.id) == null ? {
    nick: null != c ? c : E,
    colorString: void 0
  } : null == u ? {
    nick: E,
    colorString: void 0
  } : {
    nick: null !== (n = u.nick) && void 0 !== n ? n : E,
    colorString: null !== (i = u.colorString) && void 0 !== i ? i : void 0,
    colorRoleName: null != u.colorRoleId && null != a ? null == l ? void 0 : null === (t = l[u.colorRoleId]) || void 0 === t ? void 0 : t.name : void 0,
    colorRoleId: u.colorRoleId,
    iconRoleId: u.iconRoleId,
    guildMemberAvatar: u.avatar,
    guildMemberAvatarDecoration: u.avatarDecoration,
    clan: null !== (r = s.clan) && void 0 !== r ? r : void 0
  }
}