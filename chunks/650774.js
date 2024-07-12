var r, i, a, o, s = n(442837),
  l = n(570140);
let u = {},
  c = {};

function d(e) {
  let {
invite: t
  } = e, {
guild: n,
approximate_presence_count: r
  } = t;
  if ((null == n ? void 0 : n.id) == null || null == r)
return !1;
  c[n.id] = r;
}
class _ extends(o = s.ZP.Store) {
  getMemberCounts() {
return u;
  }
  getMemberCount(e) {
return null != e ? u[e] : null;
  }
  getOnlineCount(e) {
return null != e ? c[e] : null;
  }
}
a = 'GuildMemberCountStore', (i = 'displayName') in(r = _) ? Object.defineProperty(r, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = a, t.Z = new _(l.Z, {
  CONNECTION_OPEN: function(e) {
let {
  guilds: t
} = e;
u = {}, t.forEach(e => {
  u[e.id] = e.member_count;
});
  },
  OVERLAY_INITIALIZE: function(e) {
u = {
  ...e.guildMemberCounts
};
  },
  GUILD_CREATE: function(e) {
let {
  guild: t
} = e;
u[t.id] = t.member_count;
  },
  GUILD_DELETE: function(e) {
let {
  guild: t
} = e;
if (null == u[t.id] && null == c[t.id])
  return !1;
delete u[t.id], delete c[t.id];
  },
  GUILD_MEMBER_LIST_UPDATE: function(e) {
let {
  guildId: t,
  memberCount: n,
  onlineCount: r
} = e, i = !1;
return u[t] !== n && (u[t] = n, i = !0), c[t] !== r && (c[t] = r, i = !0), i;
  },
  INVITE_ACCEPT_SUCCESS: d,
  INVITE_RESOLVE_SUCCESS: d,
  ONLINE_GUILD_MEMBER_COUNT_UPDATE: function(e) {
let {
  guildId: t,
  count: n
} = e;
if (null == t || null == n)
  return !1;
c[t] = n;
  }
});