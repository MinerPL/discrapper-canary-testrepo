"use strict";
n.r(t), n.d(t, {
  getUserIdFromCommunicationDisabledUserKey: function() {
    return k
  },
  getGuildIdFromCommunicationDisabledUserKey: function() {
    return w
  },
  default: function() {
    return q
  }
}), n("222007"), n("702976"), n("424973");
var i, s, r = n("917351"),
  a = n.n(r),
  o = n("509043"),
  l = n("446674"),
  u = n("913144"),
  d = n("605250"),
  c = n("509"),
  f = n("564568"),
  _ = n("38654"),
  h = n("568734"),
  g = n("449008"),
  m = n("271938"),
  E = n("42203"),
  p = n("305961"),
  v = n("657944");
let S = new d.default("GuildMemberStore"),
  T = {},
  I = {},
  C = {},
  A = !1,
  y = 0,
  N = 0,
  R = {},
  O = {},
  D = {
    added: [],
    removed: []
  };

function P(e, t) {
  if (null == t.communicationDisabledUntil || !(0, c.isMemberCommunicationDisabled)(t)) return b(e, t.userId);
  let n = U(e, t.userId),
    i = C[n];
  i !== t.communicationDisabledUntil && (0, c.isMemberCommunicationDisabled)(t) && (C[n] = t.communicationDisabledUntil, L(n))
}

function b(e, t) {
  if (null != t) {
    let n = U(e, t);
    null != C[n] && L(n), M(U(e, t))
  } else
    for (let t in C) {
      let n = w(t);
      n === e && (L(t), M(t))
    }
}

function L(e) {
  y += 1, R[e] = y
}

function M(e) {
  k(e) === m.default.getId() && (0, f.clearCommunicationDisabledNotice)(w(e)), delete C[e]
}

function U(e, t) {
  let n = [];
  return n[0] = e, n[1] = t, n.join("-")
}

function k(e) {
  return e.split("-")[1]
}

function w(e) {
  return e.split("-")[0]
}

function V(e, t) {
  let n, i, s, r, a;
  if (0 === t.length) return {
    colorString: void 0,
    colorRoleId: void 0,
    hoistRoleId: void 0,
    iconRoleId: void 0,
    highestRoleId: void 0
  };
  for (let n of t) {
    let t = e[n];
    if (null == t) continue;
    (null == a || t.position > a.position) && (a = t), t.color > 0 && (null == i || t.position > i.position) && (i = t), t.hoist && (null == s || t.position > s.position) && (s = t);
    let o = null != t.icon || null != t.unicodeEmoji;
    o && (null == r || t.position > r.position) && (r = t)
  }
  if (null != i) {
    var l;
    null == i.colorString && i.color > 0 && (i.colorString = (0, o.int2hex)(i.color)), n = null !== (l = i.colorString) && void 0 !== l ? l : void 0
  }
  return {
    colorString: n,
    colorRoleId: null == i ? void 0 : i.id,
    iconRoleId: null == r ? void 0 : r.id,
    hoistRoleId: null == s ? void 0 : s.id,
    highestRoleId: null == a ? void 0 : a.id
  }
}

function G(e) {
  let {
    userId: t,
    nick: n,
    guildId: i,
    avatar: s,
    guildRoles: r,
    roles: a,
    premiumSince: o,
    isPending: l,
    joinedAt: u,
    communicationDisabledUntil: d,
    unusualDMActivityUntil: c,
    fullProfileLoadedTimestamp: f,
    flags: h
  } = e, {
    colorString: g,
    colorRoleId: E,
    iconRoleId: p,
    hoistRoleId: v,
    highestRoleId: S
  } = V(r, a), C = {
    userId: t,
    nick: n,
    guildId: i,
    avatar: s,
    roles: a,
    colorString: g,
    colorRoleId: E,
    iconRoleId: p,
    hoistRoleId: v,
    highestRoleId: S,
    premiumSince: o,
    isPending: l,
    joinedAt: u,
    communicationDisabledUntil: d,
    unusualDMActivityUntil: c,
    fullProfileLoadedTimestamp: f,
    flags: h
  }, A = T[i];
  if (null == A) return C;
  if (t === m.default.getId()) {
    if (_.default.isViewingRoles(i) || _.default.isFullServerPreview(i)) {
      let e = _.default.getViewingRoles(i);
      I[i] = {
        ...C,
        ..._.default.getMemberOptions(i),
        roles: null != e ? Object.keys(e) : []
      }
    } else null != I[i] && delete I[i]
  }
  return C
}(s = i || (i = {}))[s.GUILD = 0] = "GUILD", s[s.USER = 1] = "USER";

function F(e) {
  e.guilds.forEach(e => {
    H(e)
  })
}

function x(e) {
  var t;
  let {
    guildId: n,
    user: i,
    nick: s,
    avatar: r,
    roles: a,
    premiumSince: o,
    isPending: l,
    joinedAt: u,
    communicationDisabledUntil: d,
    unusualDMActivityUntil: c,
    flags: f
  } = e, _ = T[n];
  if (null == _) return !1;
  let h = p.default.getGuild(n);
  if (null == h) return S.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
  _[i.id] = G({
    userId: i.id,
    nick: s,
    guildId: n,
    avatar: r,
    guildRoles: h.roles,
    roles: a,
    premiumSince: o,
    isPending: l,
    joinedAt: u,
    communicationDisabledUntil: d,
    unusualDMActivityUntil: c,
    fullProfileLoadedTimestamp: null === (t = _[i.id]) || void 0 === t ? void 0 : t.fullProfileLoadedTimestamp,
    flags: f
  }), P(n, _[i.id])
}

function B(e, t) {
  let n = T[e];
  if (null == n) return !1;
  let i = p.default.getGuild(e);
  return null == i ? (S.warn("Guild ".concat(e, " not found during GUILD_MEMBERS_CHUNK.")), !1) : (t.forEach(t => {
    var s;
    let r = n[t.user.id];
    n[t.user.id] = G({
      userId: t.user.id,
      nick: t.nick,
      guildId: e,
      avatar: t.avatar,
      guildRoles: i.roles,
      roles: t.roles,
      premiumSince: t.premium_since,
      isPending: t.pending,
      joinedAt: t.joined_at,
      communicationDisabledUntil: t.communication_disabled_until,
      flags: t.flags,
      fullProfileLoadedTimestamp: null == r ? void 0 : r.fullProfileLoadedTimestamp,
      unusualDMActivityUntil: null !== (s = t.unusual_dm_activity_until) && void 0 !== s ? s : null == r ? void 0 : r.unusualDMActivityUntil
    }), P(e, n[t.user.id])
  }), N++, !0)
}

function H(e) {
  let t = e.id;
  !(t in T) && (T[e.id] = {});
  let n = p.default.getGuild(t);
  if (null == n) return !1;
  let i = T[t];
  for (let r of e.members) {
    var s;
    let a = r.user.id,
      o = i[a],
      l = G({
        userId: a,
        nick: r.nick,
        guildId: e.id,
        avatar: r.avatar,
        guildRoles: n.roles,
        roles: r.roles,
        premiumSince: r.premium_since,
        isPending: r.pending,
        joinedAt: r.joined_at,
        communicationDisabledUntil: r.communication_disabled_until,
        fullProfileLoadedTimestamp: null == o ? void 0 : o.fullProfileLoadedTimestamp,
        flags: r.flags,
        unusualDMActivityUntil: null !== (s = r.unusual_dm_activity_until) && void 0 !== s ? s : null == o ? void 0 : o.unusualDMActivityUntil
      });
    i[a] = l, P(t, l)
  }
  return !0
}

function Y(e) {
  let t = T[e.guildId];
  if (null == t) return !1;
  let n = p.default.getGuild(e.guildId);
  if (null == n) return S.warn("Guild ".concat(e.guildId, " not found during ").concat(e.type, ".")), !1;
  for (let i of Object.keys(t)) {
    let s = t[i];
    (null != s.roles && s.roles.length > 0 || null != s.colorString || null != s.hoistRoleId) && (t[i] = G({
      userId: i,
      nick: s.nick,
      guildId: e.guildId,
      avatar: s.avatar,
      guildRoles: n.roles,
      roles: s.roles,
      premiumSince: s.premiumSince,
      isPending: s.isPending,
      joinedAt: s.joinedAt,
      flags: s.flags,
      fullProfileLoadedTimestamp: null == s ? void 0 : s.fullProfileLoadedTimestamp
    }), P(e.guildId, t[i]))
  }
}

function j(e) {
  let {
    guildId: t
  } = e, n = T[t];
  if (null == n) return !1;
  let i = p.default.getGuild(t);
  if (null == i) return S.warn("Guild ".concat(t, " not found during IMPERSONATE_UPDATE.")), !1;
  let s = m.default.getId(),
    r = n[s];
  n[s] = G({
    userId: s,
    nick: r.nick,
    guildId: t,
    avatar: r.avatar,
    guildRoles: i.roles,
    roles: r.roles,
    premiumSince: r.premiumSince,
    isPending: r.isPending,
    joinedAt: r.joinedAt,
    communicationDisabledUntil: r.communicationDisabledUntil,
    fullProfileLoadedTimestamp: r.fullProfileLoadedTimestamp,
    flags: r.flags
  })
}

function W(e) {
  var t;
  let {
    message: n,
    guildId: i
  } = e;
  (null === (t = n.resolved) || void 0 === t ? void 0 : t.members) != null && null != i && H({
    id: i,
    members: Object.entries(n.resolved.members).map(e => {
      var t, i;
      let [s, r] = e, a = null === (i = n.resolved) || void 0 === i ? void 0 : null === (t = i.users) || void 0 === t ? void 0 : t[s];
      if (null != a) return {
        ...r,
        user: a
      }
    }).filter(e => null != e)
  })
}

function K(e) {
  let {
    messages: t
  } = e;
  t.forEach(e => (function(e) {
    var t;
    if ((null === (t = e.resolved) || void 0 === t ? void 0 : t.members) == null) return;
    let n = E.default.getChannel(e.channel_id);
    !(null == n || n.isPrivate()) && H({
      id: n.guild_id,
      members: Object.entries(e.resolved.members).map(t => {
        var n, i;
        let [s, r] = t, a = null === (i = e.resolved) || void 0 === i ? void 0 : null === (n = i.users) || void 0 === n ? void 0 : n[s];
        if (null != a) return {
          ...r,
          user: a
        }
      }).filter(e => null != e)
    })
  })(e))
}
class z extends l.default.Store {
  initialize() {
    this.waitFor(p.default, m.default, _.default)
  }
  getMutableAllGuildsAndMembers() {
    return T
  }
  memberOf(e) {
    return a(T).toPairs().filter(t => {
      let [n, i] = t;
      return null != i[e]
    }).map(e => {
      let [t] = e;
      return t
    }).value()
  }
  getNicknameGuildsMapping(e) {
    let t = {};
    for (let i in T) {
      var n;
      let s = T[i],
        r = null === (n = s[e]) || void 0 === n ? void 0 : n.nick;
      null != r && (!Object.prototype.hasOwnProperty.call(t, r) && (t[r] = []), t[r].push(i))
    }
    return t
  }
  getNicknames(e) {
    return Object.keys(this.getNicknameGuildsMapping(e))
  }
  isMember(e, t) {
    if (null == e || null == t) return !1;
    let n = T[e];
    return null != n && null != n[t]
  }
  isGuestOrLurker(e, t) {
    var n;
    if (null == e || null == t) return !1;
    let i = T[e];
    return null != i && (null === (n = i[t]) || void 0 === n ? void 0 : n.joinedAt) == null
  }
  isCurrentUserGuest(e) {
    if (null == e) return !1;
    let t = m.default.getId(),
      n = T[e];
    if (null == n || null == n[t]) return !1;
    let i = n[t].flags;
    return null != i && (0, h.hasFlag)(i, v.GuildMemberFlags.IS_GUEST)
  }
  getMemberIds(e) {
    if (null == e) return [];
    let t = T[e];
    return null == t ? [] : Object.keys(t)
  }
  getMembers(e) {
    if (null == e) return [];
    let t = T[e];
    return null == t ? [] : Object.values(t)
  }
  getTrueMember(e, t) {
    let n = T[e];
    return null != n ? n[t] : null
  }
  getMember(e, t) {
    let n = this.getTrueMember(e, t);
    if (null != n && t === m.default.getId() && (_.default.isViewingRoles(e) || _.default.isFullServerPreview(e))) {
      var i;
      return null !== (i = I[e]) && void 0 !== i ? i : n
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
    return C
  }
  getCommunicationDisabledVersion() {
    return y
  }
  getPendingRoleUpdates(e) {
    var t;
    return null !== (t = O[e]) && void 0 !== t ? t : D
  }
  getMemberRoleWithPendingUpdates(e, t) {
    var n, i;
    let s = null !== (i = null === (n = this.getMember(e, t)) || void 0 === n ? void 0 : n.roles) && void 0 !== i ? i : [],
      r = O[e];
    return null == r ? s : a.difference(a.union(s, r.added), r.removed)
  }
  getMemberVersion() {
    return N
  }
}
z.displayName = "GuildMemberStore";
var q = new z(u.default, {
  CONNECTION_OPEN: function(e) {
    A ? A = !1 : T = {}, C = {}, F(e)
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    F(e)
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      guildMembers: t
    } = e;
    T = {
      ...t
    }
  },
  CACHE_LOADED: function(e) {
    let {
      guildMembers: t
    } = e;
    A = !0, T = {
      ...t
    }
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    return H(t)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete T[t.id], b(t.id)
  },
  GUILD_MEMBER_ADD: x,
  GUILD_MEMBER_UPDATE: x,
  GUILD_MEMBER_UPDATE_LOCAL: function(e) {
    var t, n, i;
    let {
      guildId: s,
      roles: r,
      addedRoleIds: o,
      removedRoleIds: l,
      flags: u
    } = e, d = m.default.getId(), c = T[s], f = null != c ? c[d] : null;
    if (null == f) return !1;
    let _ = p.default.getGuild(s);
    if (null == _) return !1;
    let h = null !== (t = O[s]) && void 0 !== t ? t : {};
    O[s] = {
      added: a.difference(a.union(null !== (n = h.added) && void 0 !== n ? n : [], o), null != l ? l : []),
      removed: a.difference(a.union(null !== (i = h.removed) && void 0 !== i ? i : [], l), null != o ? o : [])
    }, c[d] = G({
      userId: d,
      guildId: s,
      nick: f.nick,
      avatar: f.avatar,
      guildRoles: _.roles,
      roles: null != r ? r : f.roles,
      premiumSince: f.premiumSince,
      isPending: f.isPending,
      joinedAt: f.joinedAt,
      flags: null != u ? u : f.flags,
      fullProfileLoadedTimestamp: f.fullProfileLoadedTimestamp
    })
  },
  GUILD_MEMBERS_CHUNK: function(e) {
    return B(e.guildId, e.members)
  },
  GUILD_MEMBER_REMOVE: function(e) {
    let {
      guildId: t,
      user: n
    } = e, i = T[t];
    if (null == i || null == i[n.id]) return !1;
    delete i[n.id], b(t, n.id), N++
  },
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      members: n
    } = e;
    return B(t, n.map(e => e.member).filter(g.isNotNullish))
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let {
      guildId: t,
      addedMembers: n
    } = e;
    return null != n && B(t, n.map(e => e.member).filter(g.isNotNullish))
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
    let {
      guildId: t,
      owners: n
    } = e;
    return B(t, n)
  },
  LOAD_FORUM_POSTS: function(e) {
    let {
      guildId: t,
      threads: n
    } = e;
    return B(t, Object.values(n).map(e => e.owner).filter(g.isNotNullish))
  },
  GUILD_ROLE_UPDATE: Y,
  GUILD_ROLE_DELETE: Y,
  GUILD_ROLE_MEMBER_REMOVE: function(e) {
    let {
      guildId: t,
      userId: n,
      roleId: i
    } = e, s = T[t];
    if (null == s) return !1;
    let r = p.default.getGuild(t);
    if (null == r) return S.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
    let a = s[n];
    if (null == a || !a.roles.includes(i)) return !1;
    a.roles = a.roles.filter(e => e !== i);
    let o = V(r.roles, a.roles);
    return s[n] = {
      ...a,
      ...o
    }, !0
  },
  GUILD_ROLE_MEMBER_ADD: function(e) {
    let {
      guildId: t,
      userId: n,
      roleId: i
    } = e, s = T[t];
    if (null == s) return !1;
    let r = p.default.getGuild(t);
    if (null == r) return S.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
    let a = s[n];
    if (null == a || a.roles.includes(i)) return !1;
    a.roles.push(i);
    let o = V(r.roles, a.roles);
    return s[n] = {
      ...a,
      ...o
    }, !0
  },
  GUILD_MEMBER_PROFILE_UPDATE: function(e) {
    let {
      guildMember: t,
      guildId: n
    } = e, i = T[n];
    if (null == i) return !1;
    let s = p.default.getGuild(n);
    if (null == s) return S.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
    i[t.user.id] = G({
      userId: t.user.id,
      nick: t.nick,
      guildId: n,
      avatar: t.avatar,
      guildRoles: s.roles,
      roles: t.roles,
      premiumSince: t.premium_since,
      isPending: t.pending,
      joinedAt: t.joined_at,
      communicationDisabledUntil: t.communication_disabled_until,
      unusualDMActivityUntil: t.unusual_dm_activity_until,
      flags: t.flags,
      fullProfileLoadedTimestamp: Date.now()
    }), P(n, i[t.user.id])
  },
  IMPERSONATE_UPDATE: j,
  IMPERSONATE_STOP: j,
  PASSIVE_UPDATE_V1: function(e) {
    return null != e.members && B(e.guildId, e.members)
  },
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function(e) {
    let {
      guildId: t
    } = e;
    if (null == t) return !1;
    delete O[t]
  },
  LOCAL_MESSAGES_LOADED: function(e) {
    var t, n;
    if (null == e.guildId || null == p.default.getGuild(e.guildId)) return !1;
    A = !0, T[e.guildId] = null !== (t = T[e.guildId]) && void 0 !== t ? t : {};
    let i = !1;
    for (let t of (A = !0, T[e.guildId] = null !== (n = T[e.guildId]) && void 0 !== n ? n : {}, e.members)) null == T[e.guildId][t.userId] && (i = !0, T[e.guildId][t.userId] = t);
    return i
  },
  MESSAGE_CREATE: W,
  MESSAGE_UPDATE: W,
  LOAD_MESSAGES_SUCCESS: K,
  LOAD_MESSAGES_AROUND_SUCCESS: K,
  LOAD_PINNED_MESSAGES_SUCCESS: K,
  LOAD_RECENT_MENTIONS_SUCCESS: K,
  SEARCH_FINISH: function(e) {
    let {
      messages: t
    } = e;
    t.forEach(e => K({
      messages: e
    }))
  },
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
    let {
      guildId: t,
      members: n
    } = e, i = n.map(e => {
      let {
        member: t
      } = e;
      return t
    });
    return B(t, i)
  }
})