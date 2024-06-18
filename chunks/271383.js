"use strict";
n.d(t, {
  O5: function() {
    return Z
  },
  V6: function() {
    return V
  }
}), n(47120), n(789020), n(653041);
var i, r, s, o, a, l, u = n(392711),
  _ = n.n(u),
  d = n(866442),
  c = n(442837),
  E = n(570140),
  I = n(710845),
  T = n(69882),
  h = n(134049),
  S = n(160404),
  f = n(630388),
  N = n(823379),
  A = n(709054),
  m = n(314897),
  O = n(592125),
  R = n(430824),
  C = n(372897);
let p = new I.Z("GuildMemberStore"),
  g = {},
  L = {},
  v = {},
  D = !1,
  M = 0,
  P = 0,
  y = {},
  U = {},
  b = {
    added: [],
    removed: []
  };

function G(e, t) {
  if (null == t.communicationDisabledUntil || !(0, T.b)(t)) return w(e, t.userId);
  let n = x(e, t.userId);
  v[n] !== t.communicationDisabledUntil && (0, T.b)(t) && (v[n] = t.communicationDisabledUntil, k(n))
}

function w(e, t) {
  if (null != t) {
    let n = x(e, t);
    null != v[n] && k(n), B(x(e, t))
  } else
    for (let t in v) Z(t) === e && (k(t), B(t))
}

function k(e) {
  M += 1, y[e] = M
}

function B(e) {
  V(e) === m.default.getId() && (0, h.l)(Z(e)), delete v[e]
}

function x(e, t) {
  let n = [];
  return n[0] = e, n[1] = t, n.join("-")
}

function V(e) {
  return e.split("-")[1]
}

function Z(e) {
  return e.split("-")[0]
}

function H(e, t) {
  let n, i, r, s, o;
  if (0 === t.length) return {
    colorString: void 0,
    colorRoleId: void 0,
    hoistRoleId: void 0,
    iconRoleId: void 0,
    highestRoleId: void 0
  };
  for (let n of t) {
    let t = e[n];
    if (null != t)(null == o || t.position > o.position) && (o = t), t.color > 0 && (null == i || t.position > i.position) && (i = t), t.hoist && (null == r || t.position > r.position) && (r = t), (null != t.icon || null != t.unicodeEmoji) && (null == s || t.position > s.position) && (s = t)
  }
  if (null != i) {
    var a;
    null == i.colorString && i.color > 0 && (i.colorString = (0, d.Rf)(i.color)), n = null !== (a = i.colorString) && void 0 !== a ? a : void 0
  }
  return {
    colorString: n,
    colorRoleId: null == i ? void 0 : i.id,
    iconRoleId: null == s ? void 0 : s.id,
    hoistRoleId: null == r ? void 0 : r.id,
    highestRoleId: null == o ? void 0 : o.id
  }
}

function F(e) {
  let {
    userId: t,
    nick: n,
    guildId: i,
    avatar: r,
    avatarDecoration: s,
    guildRoles: o,
    roles: a,
    premiumSince: l,
    isPending: u,
    joinedAt: _,
    communicationDisabledUntil: d,
    unusualDMActivityUntil: c,
    fullProfileLoadedTimestamp: E,
    flags: I
  } = e, {
    colorString: T,
    colorRoleId: h,
    iconRoleId: f,
    hoistRoleId: N,
    highestRoleId: O
  } = H(o, a), R = {
    userId: t,
    nick: n,
    guildId: i,
    avatar: r,
    avatarDecoration: s,
    roles: a,
    colorString: T,
    colorRoleId: h,
    iconRoleId: f,
    hoistRoleId: N,
    highestRoleId: O,
    premiumSince: l,
    isPending: u,
    joinedAt: _,
    communicationDisabledUntil: d,
    unusualDMActivityUntil: c,
    fullProfileLoadedTimestamp: E,
    flags: I
  };
  if (null == g[i]) return R;
  if (t === m.default.getId()) {
    if (S.Z.isViewingRoles(i) || S.Z.isFullServerPreview(i)) {
      let e = S.Z.getViewingRoles(i);
      L[i] = {
        ...R,
        ...S.Z.getMemberOptions(i),
        roles: null != e ? A.default.keys(e) : []
      }
    } else null != L[i] && delete L[i]
  }
  return R
}(s = i || (i = {}))[s.GUILD = 0] = "GUILD", s[s.USER = 1] = "USER";

function Y(e) {
  e.guilds.forEach(e => {
    z(e)
  })
}

function j(e) {
  var t;
  let {
    guildId: n,
    user: i,
    nick: r,
    avatar: s,
    avatarDecoration: o,
    roles: a,
    premiumSince: l,
    isPending: u,
    joinedAt: _,
    communicationDisabledUntil: d,
    unusualDMActivityUntil: c,
    flags: E
  } = e, I = g[n];
  if (null == I) return !1;
  let T = R.Z.getGuild(n);
  if (null == T) return p.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
  I[i.id] = F({
    userId: i.id,
    nick: r,
    guildId: n,
    avatar: s,
    avatarDecoration: null != o ? {
      asset: o.asset,
      skuId: o.sku_id
    } : void 0,
    guildRoles: R.Z.getRoles(T.id),
    roles: a,
    premiumSince: l,
    isPending: u,
    joinedAt: _,
    communicationDisabledUntil: d,
    unusualDMActivityUntil: c,
    fullProfileLoadedTimestamp: null === (t = I[i.id]) || void 0 === t ? void 0 : t.fullProfileLoadedTimestamp,
    flags: E
  }), G(n, I[i.id])
}

function W(e, t) {
  let n = g[e];
  if (null == n) return !1;
  let i = R.Z.getGuild(e);
  return null == i ? (p.warn("Guild ".concat(e, " not found during batchUpdateGuildMembers.")), !1) : (t.forEach(t => {
    var r;
    let s = n[t.user.id];
    n[t.user.id] = F({
      userId: t.user.id,
      nick: t.nick,
      guildId: e,
      avatar: t.avatar,
      avatarDecoration: K(t),
      guildRoles: R.Z.getRoles(i.id),
      roles: t.roles,
      premiumSince: t.premium_since,
      isPending: t.pending,
      joinedAt: t.joined_at,
      communicationDisabledUntil: t.communication_disabled_until,
      flags: t.flags,
      fullProfileLoadedTimestamp: null == s ? void 0 : s.fullProfileLoadedTimestamp,
      unusualDMActivityUntil: null !== (r = t.unusual_dm_activity_until) && void 0 !== r ? r : null == s ? void 0 : s.unusualDMActivityUntil
    }), G(e, n[t.user.id])
  }), P++, !0)
}

function K(e) {
  return null != e.avatar_decoration_data ? {
    asset: e.avatar_decoration_data.asset,
    skuId: e.avatar_decoration_data.sku_id
  } : void 0
}

function z(e) {
  let t = e.id;
  !(t in g) && (g[e.id] = {});
  let n = R.Z.getGuild(t);
  if (null == n) return !1;
  let i = g[t];
  for (let s of e.members) {
    var r;
    let o = s.user.id,
      a = i[o],
      l = F({
        userId: o,
        nick: s.nick,
        guildId: e.id,
        avatar: s.avatar,
        avatarDecoration: K(s),
        guildRoles: R.Z.getRoles(n.id),
        roles: s.roles,
        premiumSince: s.premium_since,
        isPending: s.pending,
        joinedAt: s.joined_at,
        communicationDisabledUntil: s.communication_disabled_until,
        fullProfileLoadedTimestamp: null == a ? void 0 : a.fullProfileLoadedTimestamp,
        flags: s.flags,
        unusualDMActivityUntil: null !== (r = s.unusual_dm_activity_until) && void 0 !== r ? r : null == a ? void 0 : a.unusualDMActivityUntil
      });
    i[o] = l, G(t, l)
  }
  return !0
}

function q(e) {
  let t = g[e.guildId];
  if (null == t) return !1;
  let n = R.Z.getGuild(e.guildId);
  if (null == n) return p.warn("Guild ".concat(e.guildId, " not found during ").concat(e.type, ".")), !1;
  for (let i of A.default.keys(t)) {
    let r = t[i];
    (null != r.roles && r.roles.length > 0 || null != r.colorString || null != r.hoistRoleId) && (t[i] = F({
      userId: i,
      nick: r.nick,
      guildId: e.guildId,
      avatar: r.avatar,
      avatarDecoration: r.avatarDecoration,
      guildRoles: R.Z.getRoles(n.id),
      roles: r.roles,
      premiumSince: r.premiumSince,
      isPending: r.isPending,
      joinedAt: r.joinedAt,
      flags: r.flags,
      fullProfileLoadedTimestamp: null == r ? void 0 : r.fullProfileLoadedTimestamp
    }), G(e.guildId, t[i]))
  }
}

function X(e) {
  let {
    guildId: t
  } = e, n = g[t];
  if (null == n) return !1;
  let i = R.Z.getGuild(t);
  if (null == i) return p.warn("Guild ".concat(t, " not found during IMPERSONATE_UPDATE.")), !1;
  let r = m.default.getId(),
    s = n[r];
  n[r] = F({
    userId: r,
    nick: s.nick,
    guildId: t,
    avatar: s.avatar,
    avatarDecoration: s.avatarDecoration,
    guildRoles: R.Z.getRoles(i.id),
    roles: s.roles,
    premiumSince: s.premiumSince,
    isPending: s.isPending,
    joinedAt: s.joinedAt,
    communicationDisabledUntil: s.communicationDisabledUntil,
    fullProfileLoadedTimestamp: s.fullProfileLoadedTimestamp,
    flags: s.flags
  })
}

function Q(e) {
  var t;
  let {
    message: n,
    guildId: i
  } = e;
  (null === (t = n.resolved) || void 0 === t ? void 0 : t.members) != null && null != i && z({
    id: i,
    members: Object.entries(n.resolved.members).map(e => {
      var t, i;
      let [r, s] = e, o = null === (i = n.resolved) || void 0 === i ? void 0 : null === (t = i.users) || void 0 === t ? void 0 : t[r];
      if (null != o) return {
        ...s,
        user: o
      }
    }).filter(e => null != e)
  })
}

function J(e) {
  let {
    messages: t
  } = e;
  t.forEach(e => (function(e) {
    var t;
    if ((null === (t = e.resolved) || void 0 === t ? void 0 : t.members) == null) return;
    let n = O.Z.getChannel(e.channel_id);
    !(null == n || n.isPrivate()) && z({
      id: n.guild_id,
      members: Object.entries(e.resolved.members).map(t => {
        var n, i;
        let [r, s] = t, o = null === (i = e.resolved) || void 0 === i ? void 0 : null === (n = i.users) || void 0 === n ? void 0 : n[r];
        if (null != o) return {
          ...s,
          user: o
        }
      }).filter(e => null != e)
    })
  })(e))
}

function $(e) {
  let {
    messages: t
  } = e;
  t.forEach(e => J({
    messages: e
  }))
}
class ee extends(r = c.ZP.Store) {
  initialize() {
    this.waitFor(R.Z, m.default, S.Z)
  }
  getMutableAllGuildsAndMembers() {
    return g
  }
  memberOf(e) {
    return _()(g).toPairs().filter(t => {
      let [n, i] = t;
      return null != i[e]
    }).map(e => {
      let [t] = e;
      return t
    }).value()
  }
  getNicknameGuildsMapping(e) {
    let t = {};
    for (let i in g) {
      var n;
      let r = null === (n = g[i][e]) || void 0 === n ? void 0 : n.nick;
      if (null != r) !Object.prototype.hasOwnProperty.call(t, r) && (t[r] = []), t[r].push(i)
    }
    return t
  }
  getNicknames(e) {
    return Object.keys(this.getNicknameGuildsMapping(e))
  }
  isMember(e, t) {
    if (null == e || null == t) return !1;
    let n = g[e];
    return null != n && null != n[t]
  }
  isGuestOrLurker(e, t) {
    var n;
    if (null == e || null == t) return !1;
    let i = g[e];
    return null != i && (null === (n = i[t]) || void 0 === n ? void 0 : n.joinedAt) == null
  }
  isCurrentUserGuest(e) {
    if (null == e) return !1;
    let t = m.default.getId(),
      n = g[e];
    if (null == n || null == n[t]) return !1;
    let i = n[t].flags;
    return null != i && (0, f.yE)(i, C.q.IS_GUEST)
  }
  getMemberIds(e) {
    if (null == e) return [];
    let t = g[e];
    return null == t ? [] : A.default.keys(t)
  }
  getMembers(e) {
    if (null == e) return [];
    let t = g[e];
    return null == t ? [] : Object.values(t)
  }
  getTrueMember(e, t) {
    let n = g[e];
    return null != n ? n[t] : null
  }
  getMember(e, t) {
    let n = this.getTrueMember(e, t);
    if (null != n && t === m.default.getId() && (S.Z.isViewingRoles(e) || S.Z.isFullServerPreview(e))) {
      var i;
      return null !== (i = L[e]) && void 0 !== i ? i : n
    }
    return n
  }
  getSelfMember(e) {
    return this.getMember(e, m.default.getId())
  }
  getNick(e, t) {
    if (null == e || null == t) return null;
    let n = this.getMember(e, t);
    return null != n ? n.nick : null
  }
  getCommunicationDisabledUserMap() {
    return v
  }
  getCommunicationDisabledVersion() {
    return M
  }
  getPendingRoleUpdates(e) {
    var t;
    return null !== (t = U[e]) && void 0 !== t ? t : b
  }
  getMemberRoleWithPendingUpdates(e, t) {
    var n, i;
    let r = null !== (i = null === (n = this.getMember(e, t)) || void 0 === n ? void 0 : n.roles) && void 0 !== i ? i : [],
      s = U[e];
    return null == s ? r : _().difference(_().union(r, s.added), s.removed)
  }
  getMemberVersion() {
    return P
  }
}
l = "GuildMemberStore", (a = "displayName") in(o = ee) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.ZP = new ee(E.Z, {
  CONNECTION_OPEN: function(e) {
    D ? D = !1 : g = {}, v = {}, Y(e)
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    Y(e)
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      guildMembers: t
    } = e;
    g = {
      ...t
    }
  },
  CACHE_LOADED: function(e) {
    let {
      guildMembers: t
    } = e;
    D = !0, g = {
      ...t
    }
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    return z(t)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete g[t.id], w(t.id)
  },
  GUILD_MEMBER_ADD: j,
  GUILD_MEMBER_UPDATE: j,
  GUILD_MEMBER_UPDATE_LOCAL: function(e) {
    var t, n, i;
    let {
      guildId: r,
      roles: s,
      addedRoleIds: o,
      removedRoleIds: a,
      flags: l
    } = e, u = m.default.getId(), d = g[r], c = null != d ? d[u] : null;
    if (null == c) return !1;
    let E = R.Z.getGuild(r);
    if (null == E) return !1;
    let I = null !== (t = U[r]) && void 0 !== t ? t : {};
    U[r] = {
      added: _().difference(_().union(null !== (n = I.added) && void 0 !== n ? n : [], o), null != a ? a : []),
      removed: _().difference(_().union(null !== (i = I.removed) && void 0 !== i ? i : [], a), null != o ? o : [])
    }, d[u] = F({
      userId: u,
      guildId: r,
      nick: c.nick,
      avatar: c.avatar,
      avatarDecoration: c.avatarDecoration,
      guildRoles: R.Z.getRoles(E.id),
      roles: null != s ? s : c.roles,
      premiumSince: c.premiumSince,
      isPending: c.isPending,
      joinedAt: c.joinedAt,
      flags: null != l ? l : c.flags,
      fullProfileLoadedTimestamp: c.fullProfileLoadedTimestamp
    })
  },
  GUILD_MEMBERS_CHUNK_BATCH: function(e) {
    let t = !1;
    for (let n of e.chunks) t = W(n.guildId, n.members) || t;
    return t
  },
  GUILD_MEMBER_REMOVE: function(e) {
    let {
      guildId: t,
      user: n
    } = e, i = g[t];
    if (null == i || null == i[n.id]) return !1;
    delete i[n.id], w(t, n.id), P++
  },
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      members: n
    } = e;
    return W(t, n.map(e => e.member).filter(N.lm))
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let {
      guildId: t,
      addedMembers: n
    } = e;
    return null != n && W(t, n.map(e => e.member).filter(N.lm))
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
    let {
      guildId: t,
      owners: n
    } = e;
    return W(t, n)
  },
  LOAD_FORUM_POSTS: function(e) {
    let {
      guildId: t,
      threads: n
    } = e;
    return W(t, Object.values(n).map(e => e.owner).filter(N.lm))
  },
  GUILD_ROLE_UPDATE: q,
  GUILD_ROLE_DELETE: q,
  GUILD_ROLE_MEMBER_REMOVE: function(e) {
    let {
      guildId: t,
      userId: n,
      roleId: i
    } = e, r = g[t];
    if (null == r) return !1;
    let s = R.Z.getGuild(t);
    if (null == s) return p.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
    let o = r[n];
    if (null == o || !o.roles.includes(i)) return !1;
    o.roles = o.roles.filter(e => e !== i);
    let a = H(R.Z.getRoles(s.id), o.roles);
    return r[n] = {
      ...o,
      ...a
    }, !0
  },
  GUILD_ROLE_MEMBER_ADD: function(e) {
    let {
      guildId: t,
      userId: n,
      roleId: i
    } = e, r = g[t];
    if (null == r) return !1;
    let s = R.Z.getGuild(t);
    if (null == s) return p.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
    let o = r[n];
    if (null == o || o.roles.includes(i)) return !1;
    o.roles = [...o.roles, i];
    let a = H(R.Z.getRoles(s.id), o.roles);
    return r[n] = {
      ...o,
      ...a
    }, !0
  },
  GUILD_MEMBER_PROFILE_UPDATE: function(e) {
    let {
      guildMember: t,
      guildId: n
    } = e, i = g[n];
    if (null == i) return !1;
    let r = R.Z.getGuild(n);
    if (null == r) return p.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
    i[t.user.id] = F({
      userId: t.user.id,
      nick: t.nick,
      guildId: n,
      avatar: t.avatar,
      avatarDecoration: K(t),
      guildRoles: R.Z.getRoles(r.id),
      roles: t.roles,
      premiumSince: t.premium_since,
      isPending: t.pending,
      joinedAt: t.joined_at,
      communicationDisabledUntil: t.communication_disabled_until,
      unusualDMActivityUntil: t.unusual_dm_activity_until,
      flags: t.flags,
      fullProfileLoadedTimestamp: Date.now()
    }), G(n, i[t.user.id])
  },
  IMPERSONATE_UPDATE: X,
  IMPERSONATE_STOP: X,
  PASSIVE_UPDATE_V2: function(e) {
    return !!(e.members.length > 0) && W(e.guildId, e.members)
  },
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function(e) {
    let {
      guildId: t
    } = e;
    if (null == t) return !1;
    delete U[t]
  },
  LOCAL_MESSAGES_LOADED: function(e) {
    var t, n;
    if (null == e.guildId || null == R.Z.getGuild(e.guildId)) return !1;
    D = !0, g[e.guildId] = null !== (t = g[e.guildId]) && void 0 !== t ? t : {};
    let i = !1;
    for (let t of (D = !0, g[e.guildId] = null !== (n = g[e.guildId]) && void 0 !== n ? n : {}, e.members)) null == g[e.guildId][t.userId] && (i = !0, g[e.guildId][t.userId] = t);
    return i
  },
  MESSAGE_CREATE: Q,
  MESSAGE_UPDATE: Q,
  LOAD_MESSAGES_SUCCESS: J,
  LOAD_MESSAGES_AROUND_SUCCESS: J,
  LOAD_PINNED_MESSAGES_SUCCESS: J,
  LOAD_RECENT_MENTIONS_SUCCESS: J,
  SEARCH_FINISH: $,
  MOD_VIEW_SEARCH_FINISH: $,
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
    let {
      guildId: t,
      members: n
    } = e;
    return W(t, n.map(e => {
      let {
        member: t
      } = e;
      return t
    }))
  }
})