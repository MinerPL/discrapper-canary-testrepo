var r, i, a, s, o = n(442837),
  l = n(570140);
let u = {},
  c = {};
class d extends(s = o.ZP.Store) {
  getRoleMemberCount(e) {
return null != e ? u[e] : null;
  }
  shouldFetch(e) {
if (null == e)
  return !1;
let t = c[e];
return null == t || Date.now() - t > 120000;
  }
}
a = 'GuildRoleMemberCountStore', (i = 'displayName') in(r = d) ? Object.defineProperty(r, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = a, t.Z = new d(l.Z, {
  GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
let {
  guildId: t,
  roleMemberCount: n
} = e;
u[t] = n, c[t] = Date.now();
  },
  GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
let {
  guildId: t,
  roleId: n,
  count: r
} = e, i = u[t];
if (null == i)
  return !1;
i[n] = r;
  },
  GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
let {
  guildId: t,
  roleId: n,
  added: r
} = e, i = u[t];
if (null == i || null == i[n])
  return !1;
let a = Object.keys(r).length;
i[n] += a;
  },
  GUILD_ROLE_MEMBER_ADD: function(e) {
let {
  guildId: t,
  roleId: n
} = e, r = u[t];
if (null == r || null == r[n])
  return !1;
r[n] = r[n] + 1;
  },
  GUILD_ROLE_MEMBER_REMOVE: function(e) {
let {
  guildId: t,
  roleId: n
} = e, r = u[t];
if (null == r || null == r[n])
  return !1;
r[n] = Math.max(r[n] - 1, 0);
  },
  GUILD_ROLE_CREATE: function(e) {
let {
  guildId: t,
  role: n
} = e;
null == u[t] && (u[t] = {}), u[t][n.id] = 0;
  },
  GUILD_DELETE: function(e) {
let {
  guild: t
} = e;
delete u[t.id], delete c[t.id];
  }
});