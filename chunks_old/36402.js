"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var l = n("446674"),
  u = n("913144");
let i = {},
  r = {};
class d extends l.default.Store {
  getRoleMemberCount(e) {
    return null != e ? i[e] : null
  }
  shouldFetch(e) {
    if (null == e) return !1;
    let t = r[e];
    return null == t || Date.now() - t > 12e4
  }
}
d.displayName = "GuildRoleMemberCountStore";
var a = new d(u.default, {
  GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      roleMemberCount: n
    } = e;
    i[t] = n, r[t] = Date.now()
  },
  GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
    let {
      guildId: t,
      roleId: n,
      count: l
    } = e, u = i[t];
    if (null == u) return !1;
    u[n] = l
  },
  GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
    let {
      guildId: t,
      roleId: n,
      added: l
    } = e, u = i[t];
    if (null == u || null == u[n]) return !1;
    let r = Object.keys(l).length;
    u[n] += r
  },
  GUILD_ROLE_MEMBER_ADD: function(e) {
    let {
      guildId: t,
      roleId: n
    } = e, l = i[t];
    if (null == l || null == l[n]) return !1;
    l[n] = l[n] + 1
  },
  GUILD_ROLE_MEMBER_REMOVE: function(e) {
    let {
      guildId: t,
      roleId: n
    } = e, l = i[t];
    if (null == l || null == l[n]) return !1;
    l[n] = Math.max(l[n] - 1, 0)
  },
  GUILD_ROLE_CREATE: function(e) {
    let {
      guildId: t,
      role: n
    } = e;
    null == i[t] && (i[t] = {}), i[t][n.id] = 0
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete i[t.id], delete r[t.id]
  }
})