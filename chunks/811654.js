"use strict";
t.r(n), t.d(n, {
  MIN_REREQUEST_TIME: function() {
    return p
  },
  getSnowflakeSelectDefaultValues: function() {
    return S
  },
  queryChannels: function() {
    return C
  },
  queryMentionables: function() {
    return f
  }
}), t("47120");
var l = t("524846"),
  a = t("911969"),
  r = t("592125"),
  u = t("271383"),
  s = t("430824"),
  o = t("594174"),
  i = t("483360"),
  d = t("823379"),
  c = t("5192"),
  m = t("280501");
t("892902");
let p = 1e3;

function f(e, n, t) {
  let l = r.default.getChannel(t);
  if (null == l) return [];
  let u = e === a.ComponentType.USER_SELECT || e === a.ComponentType.MENTIONABLE_SELECT,
    s = e === a.ComponentType.ROLE_SELECT || e === a.ComponentType.MENTIONABLE_SELECT,
    {
      users: o,
      roles: d
    } = i.default.queryMentionResults({
      query: n,
      channel: l,
      canMentionEveryone: !1,
      canMentionHere: !1,
      canMentionUsers: u,
      canMentionRoles: s,
      includeAllGuildUsers: !0,
      includeNonMentionableRoles: !0,
      checkRecentlyTalkedOnEmptyQuery: !1,
      limit: 15
    }),
    p = o.map(e => {
      var n;
      let a = c.default.getNickname(l.getGuildId(), t, e.user);
      return {
        type: m.SelectOptionType.USER,
        value: e.user.id,
        label: null !== (n = null != a ? a : e.user.globalName) && void 0 !== n ? n : e.user.username
      }
    });
  return [...p, ...d.map(e => ({
    type: m.SelectOptionType.ROLE,
    value: e.id,
    label: e.name
  }))]
}

function C(e, n, t) {
  let l = r.default.getChannel(n);
  return null == l ? [] : i.default.queryApplicationCommandChannelResults({
    query: e,
    channel: l,
    channelTypes: t,
    limit: 15
  }).channels.map(e => ({
    type: m.SelectOptionType.CHANNEL,
    value: e.id,
    label: e.name
  }))
}

function S(e, n) {
  let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  if (null == e) return;
  let a = s.default.getGuild(n);
  return e.map(e => {
    switch (e.type) {
      case l.SnowflakeSelectDefaultValueTypes.USER: {
        var n;
        let t = o.default.getUser(e.id);
        if (null == t) return null;
        let l = null != a ? u.default.getNick(a.id, t.id) : void 0;
        return {
          type: m.SelectOptionType.USER,
          value: t.id,
          label: null !== (n = null != l ? l : t.globalName) && void 0 !== n ? n : t.username
        }
      }
      case l.SnowflakeSelectDefaultValueTypes.ROLE: {
        if (null == a) return null;
        let n = s.default.getRole(a.id, e.id);
        if (null == n) return null;
        return {
          type: m.SelectOptionType.ROLE,
          value: n.id,
          label: n.name
        }
      }
      case l.SnowflakeSelectDefaultValueTypes.CHANNEL: {
        if (null == a) return null;
        let n = r.default.getChannel(e.id);
        if (null == n || n.guild_id !== a.id || t.length > 0 && !t.includes(n.type)) return null;
        return {
          type: m.SelectOptionType.CHANNEL,
          value: n.id,
          label: n.name
        }
      }
    }
  }).filter(d.isNotNullish)
}