"use strict";
n.d(t, {
  R: function() {
    return l
  }
});
var i = n(442837),
  r = n(570140),
  s = n(271383),
  o = n(9156),
  a = n(594174);

function l(e, t) {
  var n;
  let i = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
    l = o.ZP.isSuppressEveryoneEnabled(t),
    u = o.ZP.isSuppressRolesEnabled(t),
    _ = null != e.mentions && e.mentions.some(e => e.id === i),
    d = null == t || null == i ? null : s.ZP.getMember(t, i),
    c = null != e.mention_roles && null != d && null != d.roles && e.mention_roles.some(e => d.roles.includes(e));
  r.Z.dispatch({
    type: "MESSAGE_NOTIFICATION_SHOWN",
    guildId: t,
    mentioned: _,
    roleMentioned: c && !u,
    everyoneMentioned: !0 === e.mention_everyone && !l
  })
}
let u = null,
  _ = null,
  d = null,
  c = null,
  E = {},
  I = {},
  T = {},
  h = {};
class S extends i.ZP.Store {
  getGlobalStats() {
    let e = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
    return {
      approx_seconds_since_last_notification: e(u),
      approx_seconds_since_last_mention: e(_),
      approx_seconds_since_last_role_mention: e(d),
      approx_seconds_since_last_everyone_mention: e(c)
    }
  }
  getStats(e) {
    let t = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
    return {
      approx_seconds_since_last_notification: t(u),
      approx_seconds_since_last_mention: t(_),
      approx_seconds_since_last_role_mention: t(d),
      approx_seconds_since_last_everyone_mention: t(c),
      approx_seconds_since_last_guild_notification: null == e ? null : t(E[e]),
      approx_seconds_since_last_guild_mention: null == e ? null : t(I[e]),
      approx_seconds_since_last_guild_role_mention: null == e ? null : t(h[e]),
      approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(T[e])
    }
  }
}
t.Z = new S(r.Z, {
  CONNECTION_OPEN: function() {
    let e = e => null != e && Date.now() - e < 6e4;
    for (let t in !e(u) && (u = null), !e(_) && (_ = null), !e(d) && (d = null), !e(c) && (c = null), E) !e(E[t]) && delete E[t];
    for (let t in I) !e(I[t]) && delete I[t];
    for (let t in h) !e(h[t]) && delete h[t];
    for (let t in T) !e(T[t]) && delete T[t]
  },
  MESSAGE_NOTIFICATION_SHOWN: function(e) {
    let {
      guildId: t,
      mentioned: n,
      roleMentioned: i,
      everyoneMentioned: r
    } = e, s = Date.now();
    u = s, null != t && (E[t] = s), n && (_ = s, null != t && (I[t] = s)), i && (d = s, null != t && (h[t] = s)), r && (c = s, null != t && (T[t] = s))
  }
})