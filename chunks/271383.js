n.d(t, {
  O5: function() {
return V;
  },
  V6: function() {
return F;
  }
}), n(47120), n(789020), n(653041);
var r, i, a, s, o, l, u = n(392711),
  c = n.n(u),
  d = n(866442),
  _ = n(442837),
  E = n(570140),
  f = n(710845),
  h = n(69882),
  p = n(134049),
  m = n(160404),
  I = n(630388),
  T = n(823379),
  g = n(709054),
  S = n(314897),
  A = n(592125),
  N = n(430824),
  v = n(372897);
let O = new f.Z('GuildMemberStore'),
  R = {},
  C = {},
  y = {},
  D = !1,
  L = 0,
  b = 0,
  M = {},
  P = {},
  U = {
added: [],
removed: []
  };

function w(e, t) {
  if (null == t.communicationDisabledUntil || !(0, h.b)(t))
return x(e, t.userId);
  let n = B(e, t.userId);
  y[n] !== t.communicationDisabledUntil && (0, h.b)(t) && (y[n] = t.communicationDisabledUntil, G(n));
}

function x(e, t) {
  if (null != t) {
let n = B(e, t);
null != y[n] && G(n), k(B(e, t));
  } else
for (let t in y)
  V(t) === e && (G(t), k(t));
}

function G(e) {
  L += 1, M[e] = L;
}

function k(e) {
  F(e) === S.default.getId() && (0, p.l)(V(e)), delete y[e];
}

function B(e, t) {
  let n = [];
  return n[0] = e, n[1] = t, n.join('-');
}

function F(e) {
  return e.split('-')[1];
}

function V(e) {
  return e.split('-')[0];
}

function H(e, t) {
  let n, r, i, a, s;
  if (0 === t.length)
return {
  colorString: void 0,
  colorRoleId: void 0,
  hoistRoleId: void 0,
  iconRoleId: void 0,
  highestRoleId: void 0
};
  for (let n of t) {
let t = e[n];
if (null != t)
  (null == s || t.position > s.position) && (s = t), t.color > 0 && (null == r || t.position > r.position) && (r = t), t.hoist && (null == i || t.position > i.position) && (i = t), (null != t.icon || null != t.unicodeEmoji) && (null == a || t.position > a.position) && (a = t);
  }
  if (null != r) {
var o;
null == r.colorString && r.color > 0 && (r.colorString = (0, d.Rf)(r.color)), n = null !== (o = r.colorString) && void 0 !== o ? o : void 0;
  }
  return {
colorString: n,
colorRoleId: null == r ? void 0 : r.id,
iconRoleId: null == a ? void 0 : a.id,
hoistRoleId: null == i ? void 0 : i.id,
highestRoleId: null == s ? void 0 : s.id
  };
}

function Z(e) {
  let {
userId: t,
nick: n,
guildId: r,
avatar: i,
avatarDecoration: a,
guildRoles: s,
roles: o,
premiumSince: l,
isPending: u,
joinedAt: c,
communicationDisabledUntil: d,
unusualDMActivityUntil: _,
fullProfileLoadedTimestamp: E,
flags: f
  } = e, {
colorString: h,
colorRoleId: p,
iconRoleId: I,
hoistRoleId: T,
highestRoleId: A
  } = H(s, o), N = {
userId: t,
nick: n,
guildId: r,
avatar: i,
avatarDecoration: a,
roles: o,
colorString: h,
colorRoleId: p,
iconRoleId: I,
hoistRoleId: T,
highestRoleId: A,
premiumSince: l,
isPending: u,
joinedAt: c,
communicationDisabledUntil: d,
unusualDMActivityUntil: _,
fullProfileLoadedTimestamp: E,
flags: f
  };
  if (null == R[r])
return N;
  if (t === S.default.getId()) {
if (m.Z.isViewingRoles(r) || m.Z.isFullServerPreview(r)) {
  let e = m.Z.getViewingRoles(r);
  C[r] = {
    ...N,
    ...m.Z.getMemberOptions(r),
    roles: null != e ? g.default.keys(e) : []
  };
} else
  null != C[r] && delete C[r];
  }
  return N;
}
(a = r || (r = {}))[a.GUILD = 0] = 'GUILD', a[a.USER = 1] = 'USER';

function Y(e) {
  var t;
  let {
guildId: n,
user: r,
nick: i,
avatar: a,
avatarDecoration: s,
roles: o,
premiumSince: l,
isPending: u,
joinedAt: c,
communicationDisabledUntil: d,
unusualDMActivityUntil: _,
flags: E
  } = e, f = R[n];
  if (null == f)
return !1;
  let h = N.Z.getGuild(n);
  if (null == h)
return O.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
  f[r.id] = Z({
userId: r.id,
nick: i,
guildId: n,
avatar: a,
avatarDecoration: null != s ? {
  asset: s.asset,
  skuId: s.sku_id
} : void 0,
guildRoles: N.Z.getRoles(h.id),
roles: o,
premiumSince: l,
isPending: u,
joinedAt: c,
communicationDisabledUntil: d,
unusualDMActivityUntil: _,
fullProfileLoadedTimestamp: null === (t = f[r.id]) || void 0 === t ? void 0 : t.fullProfileLoadedTimestamp,
flags: E
  }), w(n, f[r.id]);
}

function j(e, t) {
  let n = R[e];
  if (null == n)
return !1;
  let r = N.Z.getGuild(e);
  return null == r ? (O.warn('Guild '.concat(e, ' not found during batchUpdateGuildMembers.')), !1) : (t.forEach(t => {
var i;
let a = n[t.user.id];
n[t.user.id] = Z({
  userId: t.user.id,
  nick: t.nick,
  guildId: e,
  avatar: t.avatar,
  avatarDecoration: W(t),
  guildRoles: N.Z.getRoles(r.id),
  roles: t.roles,
  premiumSince: t.premium_since,
  isPending: t.pending,
  joinedAt: t.joined_at,
  communicationDisabledUntil: t.communication_disabled_until,
  flags: t.flags,
  fullProfileLoadedTimestamp: null == a ? void 0 : a.fullProfileLoadedTimestamp,
  unusualDMActivityUntil: null !== (i = t.unusual_dm_activity_until) && void 0 !== i ? i : null == a ? void 0 : a.unusualDMActivityUntil
}), w(e, n[t.user.id]);
  }), b++, !0);
}

function W(e) {
  return null != e.avatar_decoration_data ? {
asset: e.avatar_decoration_data.asset,
skuId: e.avatar_decoration_data.sku_id
  } : void 0;
}

function K(e, t) {
  z({
id: e,
members: t.map(e => e.member).filter(T.lm)
  });
}

function z(e) {
  let t = e.id;
  !(t in R) && (R[e.id] = {});
  let n = N.Z.getGuild(t);
  if (null == n)
return !1;
  let r = R[t];
  for (let a of e.members) {
var i;
let s = a.user.id,
  o = r[s],
  l = Z({
    userId: s,
    nick: a.nick,
    guildId: e.id,
    avatar: a.avatar,
    avatarDecoration: W(a),
    guildRoles: N.Z.getRoles(n.id),
    roles: a.roles,
    premiumSince: a.premium_since,
    isPending: a.pending,
    joinedAt: a.joined_at,
    communicationDisabledUntil: a.communication_disabled_until,
    fullProfileLoadedTimestamp: null == o ? void 0 : o.fullProfileLoadedTimestamp,
    flags: a.flags,
    unusualDMActivityUntil: null !== (i = a.unusual_dm_activity_until) && void 0 !== i ? i : null == o ? void 0 : o.unusualDMActivityUntil
  });
r[s] = l, w(t, l);
  }
  return !0;
}

function q(e) {
  let t = R[e.guildId];
  if (null == t)
return !1;
  let n = N.Z.getGuild(e.guildId);
  if (null == n)
return O.warn('Guild '.concat(e.guildId, ' not found during ').concat(e.type, '.')), !1;
  for (let r of g.default.keys(t)) {
let i = t[r];
(null != i.roles && i.roles.length > 0 || null != i.colorString || null != i.hoistRoleId) && (t[r] = Z({
  userId: r,
  nick: i.nick,
  guildId: e.guildId,
  avatar: i.avatar,
  avatarDecoration: i.avatarDecoration,
  guildRoles: N.Z.getRoles(n.id),
  roles: i.roles,
  premiumSince: i.premiumSince,
  isPending: i.isPending,
  joinedAt: i.joinedAt,
  flags: i.flags,
  fullProfileLoadedTimestamp: null == i ? void 0 : i.fullProfileLoadedTimestamp
}), w(e.guildId, t[r]));
  }
}

function Q(e) {
  let {
guildId: t
  } = e, n = R[t];
  if (null == n)
return !1;
  let r = N.Z.getGuild(t);
  if (null == r)
return O.warn('Guild '.concat(t, ' not found during IMPERSONATE_UPDATE.')), !1;
  let i = S.default.getId(),
a = n[i];
  n[i] = Z({
userId: i,
nick: a.nick,
guildId: t,
avatar: a.avatar,
avatarDecoration: a.avatarDecoration,
guildRoles: N.Z.getRoles(r.id),
roles: a.roles,
premiumSince: a.premiumSince,
isPending: a.isPending,
joinedAt: a.joinedAt,
communicationDisabledUntil: a.communicationDisabledUntil,
fullProfileLoadedTimestamp: a.fullProfileLoadedTimestamp,
flags: a.flags
  });
}

function X(e) {
  var t;
  let {
message: n,
guildId: r
  } = e;
  (null === (t = n.resolved) || void 0 === t ? void 0 : t.members) != null && null != r && z({
id: r,
members: Object.entries(n.resolved.members).map(e => {
  var t, r;
  let [i, a] = e, s = null === (r = n.resolved) || void 0 === r ? void 0 : null === (t = r.users) || void 0 === t ? void 0 : t[i];
  if (null != s)
    return {
      ...a,
      user: s
    };
}).filter(e => null != e)
  });
}

function $(e) {
  let {
messages: t
  } = e;
  t.forEach(e => function(e) {
var t;
if ((null === (t = e.resolved) || void 0 === t ? void 0 : t.members) == null)
  return;
let n = A.Z.getChannel(e.channel_id);
!(null == n || n.isPrivate()) && z({
  id: n.guild_id,
  members: Object.entries(e.resolved.members).map(t => {
    var n, r;
    let [i, a] = t, s = null === (r = e.resolved) || void 0 === r ? void 0 : null === (n = r.users) || void 0 === n ? void 0 : n[i];
    if (null != s)
      return {
        ...a,
        user: s
      };
  }).filter(e => null != e)
});
  }(e));
}

function J(e) {
  let {
messages: t
  } = e;
  t.forEach(e => $({
messages: e
  }));
}
class ee extends(i = _.ZP.Store) {
  initialize() {
this.waitFor(N.Z, S.default, m.Z);
  }
  getMutableAllGuildsAndMembers() {
return R;
  }
  memberOf(e) {
return c()(R).toPairs().filter(t => {
  let [n, r] = t;
  return null != r[e];
}).map(e => {
  let [t] = e;
  return t;
}).value();
  }
  getNicknameGuildsMapping(e) {
let t = {};
for (let r in R) {
  var n;
  let i = null === (n = R[r][e]) || void 0 === n ? void 0 : n.nick;
  if (null != i)
    !Object.prototype.hasOwnProperty.call(t, i) && (t[i] = []), t[i].push(r);
}
return t;
  }
  getNicknames(e) {
return Object.keys(this.getNicknameGuildsMapping(e));
  }
  isMember(e, t) {
if (null == e || null == t)
  return !1;
let n = R[e];
return null != n && null != n[t];
  }
  isGuestOrLurker(e, t) {
var n;
if (null == e || null == t)
  return !1;
let r = R[e];
return null != r && (null === (n = r[t]) || void 0 === n ? void 0 : n.joinedAt) == null;
  }
  isCurrentUserGuest(e) {
if (null == e)
  return !1;
let t = S.default.getId(),
  n = R[e];
if (null == n || null == n[t])
  return !1;
let r = n[t].flags;
return null != r && (0, I.yE)(r, v.q.IS_GUEST);
  }
  getMemberIds(e) {
if (null == e)
  return [];
let t = R[e];
return null == t ? [] : g.default.keys(t);
  }
  getMembers(e) {
if (null == e)
  return [];
let t = R[e];
return null == t ? [] : Object.values(t);
  }
  getTrueMember(e, t) {
let n = R[e];
return null != n ? n[t] : null;
  }
  getMember(e, t) {
let n = this.getTrueMember(e, t);
if (null != n && t === S.default.getId() && (m.Z.isViewingRoles(e) || m.Z.isFullServerPreview(e))) {
  var r;
  return null !== (r = C[e]) && void 0 !== r ? r : n;
}
return n;
  }
  getSelfMember(e) {
return this.getMember(e, S.default.getId());
  }
  getNick(e, t) {
if (null == e || null == t)
  return null;
let n = this.getMember(e, t);
return null != n ? n.nick : null;
  }
  getCommunicationDisabledUserMap() {
return y;
  }
  getCommunicationDisabledVersion() {
return L;
  }
  getPendingRoleUpdates(e) {
var t;
return null !== (t = P[e]) && void 0 !== t ? t : U;
  }
  getMemberRoleWithPendingUpdates(e, t) {
var n, r;
let i = null !== (r = null === (n = this.getMember(e, t)) || void 0 === n ? void 0 : n.roles) && void 0 !== r ? r : [],
  a = P[e];
return null == a ? i : c().difference(c().union(i, a.added), a.removed);
  }
  getMemberVersion() {
return b;
  }
}
l = 'GuildMemberStore', (o = 'displayName') in(s = ee) ? Object.defineProperty(s, o, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = l, t.ZP = new ee(E.Z, {
  CONNECTION_OPEN: function(e) {
D ? D = !1 : R = {}, y = {},
  function(e) {
    e.guilds.forEach(e => {
      z(e);
    });
  }(e);
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
e.guilds.forEach(e => {
  var t;
  let n = e.id;
  z({
    id: n,
    members: e.members
  }), null === (t = e.activity_instances) || void 0 === t || t.forEach(e => {
    K(n, e.participants);
  });
});
  },
  OVERLAY_INITIALIZE: function(e) {
let {
  guildMembers: t
} = e;
R = {
  ...t
};
  },
  CACHE_LOADED: function(e) {
let {
  guildMembers: t
} = e;
D = !0, R = {
  ...t
};
  },
  GUILD_CREATE: function(e) {
let {
  guild: t
} = e;
return z(t);
  },
  GUILD_DELETE: function(e) {
let {
  guild: t
} = e;
delete R[t.id], x(t.id);
  },
  GUILD_MEMBER_ADD: Y,
  GUILD_MEMBER_UPDATE: Y,
  GUILD_MEMBER_UPDATE_LOCAL: function(e) {
var t, n, r;
let {
  guildId: i,
  roles: a,
  addedRoleIds: s,
  removedRoleIds: o,
  flags: l
} = e, u = S.default.getId(), d = R[i], _ = null != d ? d[u] : null;
if (null == _)
  return !1;
let E = N.Z.getGuild(i);
if (null == E)
  return !1;
let f = null !== (t = P[i]) && void 0 !== t ? t : {};
P[i] = {
  added: c().difference(c().union(null !== (n = f.added) && void 0 !== n ? n : [], s), null != o ? o : []),
  removed: c().difference(c().union(null !== (r = f.removed) && void 0 !== r ? r : [], o), null != s ? s : [])
}, d[u] = Z({
  userId: u,
  guildId: i,
  nick: _.nick,
  avatar: _.avatar,
  avatarDecoration: _.avatarDecoration,
  guildRoles: N.Z.getRoles(E.id),
  roles: null != a ? a : _.roles,
  premiumSince: _.premiumSince,
  isPending: _.isPending,
  joinedAt: _.joinedAt,
  flags: null != l ? l : _.flags,
  fullProfileLoadedTimestamp: _.fullProfileLoadedTimestamp
});
  },
  GUILD_MEMBERS_CHUNK_BATCH: function(e) {
let t = !1;
for (let n of e.chunks)
  t = j(n.guildId, n.members) || t;
return t;
  },
  GUILD_MEMBER_REMOVE: function(e) {
let {
  guildId: t,
  user: n
} = e, r = R[t];
if (null == r || null == r[n.id])
  return !1;
delete r[n.id], x(t, n.id), b++;
  },
  THREAD_MEMBER_LIST_UPDATE: function(e) {
let {
  guildId: t,
  members: n
} = e;
return j(t, n.map(e => e.member).filter(T.lm));
  },
  THREAD_MEMBERS_UPDATE: function(e) {
let {
  guildId: t,
  addedMembers: n
} = e;
return null != n && j(t, n.map(e => e.member).filter(T.lm));
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
let {
  guildId: t,
  owners: n
} = e;
return j(t, n);
  },
  LOAD_FORUM_POSTS: function(e) {
let {
  guildId: t,
  threads: n
} = e;
return j(t, Object.values(n).map(e => e.owner).filter(T.lm));
  },
  GUILD_ROLE_UPDATE: q,
  GUILD_ROLE_DELETE: q,
  GUILD_ROLE_MEMBER_REMOVE: function(e) {
let {
  guildId: t,
  userId: n,
  roleId: r
} = e, i = R[t];
if (null == i)
  return !1;
let a = N.Z.getGuild(t);
if (null == a)
  return O.warn('Guild '.concat(t, ' not found during GUILD_MEMBER_UPDATE.')), !1;
let s = i[n];
if (null == s || !s.roles.includes(r))
  return !1;
s.roles = s.roles.filter(e => e !== r);
let o = H(N.Z.getRoles(a.id), s.roles);
return i[n] = {
  ...s,
  ...o
}, !0;
  },
  GUILD_ROLE_MEMBER_ADD: function(e) {
let {
  guildId: t,
  userId: n,
  roleId: r
} = e, i = R[t];
if (null == i)
  return !1;
let a = N.Z.getGuild(t);
if (null == a)
  return O.warn('Guild '.concat(t, ' not found during GUILD_MEMBER_UPDATE.')), !1;
let s = i[n];
if (null == s || s.roles.includes(r))
  return !1;
s.roles = [
  ...s.roles,
  r
];
let o = H(N.Z.getRoles(a.id), s.roles);
return i[n] = {
  ...s,
  ...o
}, !0;
  },
  GUILD_MEMBER_PROFILE_UPDATE: function(e) {
let {
  guildMember: t,
  guildId: n
} = e, r = R[n];
if (null == r)
  return !1;
let i = N.Z.getGuild(n);
if (null == i)
  return O.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
r[t.user.id] = Z({
  userId: t.user.id,
  nick: t.nick,
  guildId: n,
  avatar: t.avatar,
  avatarDecoration: W(t),
  guildRoles: N.Z.getRoles(i.id),
  roles: t.roles,
  premiumSince: t.premium_since,
  isPending: t.pending,
  joinedAt: t.joined_at,
  communicationDisabledUntil: t.communication_disabled_until,
  unusualDMActivityUntil: t.unusual_dm_activity_until,
  flags: t.flags,
  fullProfileLoadedTimestamp: Date.now()
}), w(n, r[t.user.id]);
  },
  IMPERSONATE_UPDATE: Q,
  IMPERSONATE_STOP: Q,
  PASSIVE_UPDATE_V2: function(e) {
return !!(e.members.length > 0) && j(e.guildId, e.members);
  },
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function(e) {
let {
  guildId: t
} = e;
if (null == t)
  return !1;
delete P[t];
  },
  LOCAL_MESSAGES_LOADED: function(e) {
var t, n;
if (null == e.guildId || null == N.Z.getGuild(e.guildId))
  return !1;
D = !0, R[e.guildId] = null !== (t = R[e.guildId]) && void 0 !== t ? t : {};
let r = !1;
for (let t of (D = !0, R[e.guildId] = null !== (n = R[e.guildId]) && void 0 !== n ? n : {}, e.members))
  null == R[e.guildId][t.userId] && (r = !0, R[e.guildId][t.userId] = t);
return r;
  },
  MESSAGE_CREATE: X,
  MESSAGE_UPDATE: X,
  LOAD_MESSAGES_SUCCESS: $,
  LOAD_MESSAGES_AROUND_SUCCESS: $,
  LOAD_PINNED_MESSAGES_SUCCESS: $,
  LOAD_RECENT_MENTIONS_SUCCESS: $,
  SEARCH_FINISH: J,
  MOD_VIEW_SEARCH_FINISH: J,
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
let {
  guildId: t,
  members: n
} = e;
return j(t, n.map(e => {
  let {
    member: t
  } = e;
  return t;
}));
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function(e) {
let {
  location: t,
  participants: n
} = e;
null != t.guild_id && K(t.guild_id, n);
  }
});