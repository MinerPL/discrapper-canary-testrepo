"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140);
let u = {},
  _ = {};

function d(e) {
  let {
    invite: t
  } = e, {
    guild: n,
    approximate_presence_count: i
  } = t;
  if ((null == n ? void 0 : n.id) == null || null == i) return !1;
  _[n.id] = i
}
class c extends(o = a.ZP.Store) {
  getMemberCounts() {
    return u
  }
  getMemberCount(e) {
    return null != e ? u[e] : null
  }
  getOnlineCount(e) {
    return null != e ? _[e] : null
  }
}
s = "GuildMemberCountStore", (r = "displayName") in(i = c) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new c(l.Z, {
  CONNECTION_OPEN: function(e) {
    let {
      guilds: t
    } = e;
    u = {}, t.forEach(e => {
      u[e.id] = e.member_count
    })
  },
  OVERLAY_INITIALIZE: function(e) {
    u = {
      ...e.guildMemberCounts
    }
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    u[t.id] = t.member_count
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    if (null == u[t.id] && null == _[t.id]) return !1;
    delete u[t.id], delete _[t.id]
  },
  GUILD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      memberCount: n,
      onlineCount: i
    } = e, r = !1;
    return u[t] !== n && (u[t] = n, r = !0), _[t] !== i && (_[t] = i, r = !0), r
  },
  INVITE_ACCEPT_SUCCESS: d,
  INVITE_RESOLVE_SUCCESS: d,
  ONLINE_GUILD_MEMBER_COUNT_UPDATE: function(e) {
    let {
      guildId: t,
      count: n
    } = e;
    if (null == t || null == n) return !1;
    _[t] = n
  }
})