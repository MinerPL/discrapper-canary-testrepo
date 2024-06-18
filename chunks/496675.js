"use strict";
n(47120);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(149765),
  _ = n(442837),
  d = n(570140),
  c = n(160404),
  E = n(41776),
  I = n(427679),
  T = n(569471),
  h = n(195663),
  S = n(131704),
  f = n(601964),
  N = n(598077),
  A = n(386438),
  m = n(700785),
  O = n(592125),
  R = n(683301),
  C = n(271383),
  p = n(430824),
  g = n(594174),
  L = n(981631),
  v = n(478743);
let D = {},
  M = {},
  P = {},
  y = 0;

function U(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = D[e];
  if (null != n) return n;
  let i = g.default.getCurrentUser();
  if (null == i) return m.Hn;
  let r = p.Z.getGuild(e);
  return null == r ? m.Hn : D[e] = m.uB({
    user: i,
    context: r,
    checkElevated: t
  })
}

function b(e) {
  var t;
  let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    i = g.default.getCurrentUser();
  if (null == i) return m.Hn;
  let r = O.Z.getChannel(e);
  if (null == r) return m.Hn;
  let s = r.getGuildId(),
    o = null != s && (E.Z.isLurking(s) || (null === (t = C.ZP.getMember(s, i.id)) || void 0 === t ? void 0 : t.isPending));
  return !r.isScheduledForDeletion() && !o && l().isEmpty(r.permissionOverwrites) && null != s ? U(s) : m.uB({
    user: i,
    context: r,
    checkElevated: n
  })
}

function G(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = M[e];
  return null != n ? n : M[e] = b(e, t)
}

function w(e) {
  if (null != e) {
    var t;
    P[e] = (null !== (t = P[e]) && void 0 !== t ? t : 0) + 1
  }
}

function k() {
  for (let e in D = {}, M = {}, P) P[e] += 1;
  y += 1
}

function B() {
  k()
}

function x() {
  k()
}

function V(e) {
  var t;
  let {
    user: n
  } = e;
  if (n.id !== (null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
  k()
}

function Z() {
  return !0
}

function H(e) {
  let {
    messages: t,
    threads: n
  } = e;
  return !!(n.length > 0) || t.some(e => e.some(e => null != e.thread))
}

function F(e) {
  let {
    guildId: t
  } = e;
  delete D[t];
  let n = O.Z.getMutableBasicGuildChannelsForGuild(t);
  l().forEach(n, e => {
    delete M[e.id]
  }), y += 1, w(t)
}

function Y(e) {
  let {
    instance: t
  } = e, n = O.Z.getChannel(t.channel_id);
  if (null == n) return !1;
  let i = g.default.getCurrentUser(),
    r = m.uB({
      user: i,
      context: n
    });
  if (r === M[n.id]) return !1;
  M[n.id] = r, y += 1
}

function j(e) {
  let {
    guildId: t
  } = e;
  delete D[t];
  let n = O.Z.getMutableBasicGuildChannelsForGuild(t);
  l().forEach(n, e => {
    delete M[e.id]
  }), y += 1, w(t)
}

function W(e, t, n, i) {
  let r = m.Hn;
  if (e instanceof S.Sf) {
    if (S.Ec.has(e.type)) {
      let r = O.Z.getChannel(e.parent_id);
      return null == r ? m.Hn : m.Og(e, W(r, t, n, i), T.Z.hasJoined(e.id))
    }
    r = G(e.id)
  } else e instanceof f.ZP && (r = U(e.id));
  return void 0 !== t || void 0 !== n || void 0 !== i ? m.uB({
    user: g.default.getCurrentUser(),
    context: e,
    overwrites: t,
    roles: n,
    checkElevated: !0,
    excludeGuildPermissions: i
  }) : r
}
class K extends(i = _.ZP.Store) {
  initialize() {
    this.waitFor(g.default, p.Z, O.Z, C.ZP, R.ZP, T.Z, I.Z, c.Z)
  }
  getChannelPermissions(e) {
    return S.Ec.has(e.type) ? b(e.id) : G(e.id)
  }
  getGuildPermissions(e) {
    return U(e.id)
  }
  getGuildPermissionProps(e) {
    let t = g.default.getCurrentUser();
    return {
      canManageGuild: this.can(L.Plq.MANAGE_GUILD, e),
      canManageChannels: this.can(L.Plq.MANAGE_CHANNELS, e),
      canManageRoles: this.can(L.Plq.MANAGE_ROLES, e),
      canManageBans: this.can(L.Plq.BAN_MEMBERS, e),
      canManageNicknames: this.can(L.Plq.MANAGE_NICKNAMES, e),
      canManageGuildExpressions: this.can(L.Plq.MANAGE_GUILD_EXPRESSIONS, e) || this.can(L.Plq.CREATE_GUILD_EXPRESSIONS, e),
      canViewAuditLog: this.can(L.Plq.VIEW_AUDIT_LOG, e),
      canViewAuditLogV2: this.can(L.Plq.VIEW_AUDIT_LOG, e),
      canManageWebhooks: this.can(L.Plq.MANAGE_WEBHOOKS, e),
      canViewGuildAnalytics: this.can(L.Plq.VIEW_GUILD_ANALYTICS, e),
      canAccessMembersPage: this.canAccessMemberSafetyPage(e),
      isGuildAdmin: this.can(L.Plq.ADMINISTRATOR, e),
      isOwner: null != t && e.isOwner(t),
      isOwnerWithRequiredMfaLevel: null != t && e.isOwnerWithRequiredMfaLevel(t),
      guild: e
    }
  }
  canAccessMemberSafetyPage(e) {
    return u.Db(U(e.id), v.N)
  }
  canAccessGuildSettings(e) {
    return u.Db(U(e.id), m.ym)
  }
  canWithPartialContext(e, t) {
    return "channelId" in t && "string" == typeof t.channelId ? this.can(e, O.Z.getChannel(t.channelId)) : "guildId" in t && "string" == typeof t.guildId && this.can(e, p.Z.getGuild(t.guildId))
  }
  can(e, t, n, i, r) {
    let s = W(t, n, i, r);
    return u.e$(s, e)
  }
  canBasicChannel(e, t, n, i, r) {
    return "basicPermissions" in t ? A.Z.has(t.basicPermissions, e) : u.e$(W(t, n, i, r), A.Z.asBigFlag(e))
  }
  computePermissions(e, t, n, i) {
    return W(e, t, n, i)
  }
  computeBasicPermissions(e) {
    return "basicPermissions" in e ? e.basicPermissions : A.Z.asBasicFlag(W(e))
  }
  canManageUser(e, t, n) {
    let i = t instanceof N.Z ? t.id : t;
    if (n.isOwner(i)) return !1;
    let r = g.default.getCurrentUser();
    if (!this.can(e, n)) return !1;
    let s = null != r ? m.e9(n, r.id) : void 0,
      o = m.e9(n, i);
    return null != r && m.r6(n, r.id, s, o)
  }
  getHighestRole(e) {
    let t = g.default.getCurrentUser();
    return null != t ? m.e9(e, t.id) : null
  }
  isRoleHigher(e, t, n) {
    let i = g.default.getCurrentUser(),
      r = c.Z.isViewingRoles(e.id);
    return m.r6(e, r ? void 0 : null == i ? void 0 : i.id, t, n)
  }
  canImpersonateRole(e, t) {
    let n = this.getHighestRole(e),
      i = this.can(L.Plq.MANAGE_GUILD, e) && this.can(L.Plq.MANAGE_ROLES, e),
      r = this.isRoleHigher(e, n, t);
    return i && (r || t.id === (null == n ? void 0 : n.id))
  }
  getGuildVersion(e) {
    var t;
    return null !== (t = P[e]) && void 0 !== t ? t : 0
  }
  getChannelsVersion() {
    return y
  }
}

function z() {
  M = {}, D = {}, P = {}, y = 0
}
o = "PermissionStore", (s = "displayName") in(r = K) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new K(d.Z, {
  BACKGROUND_SYNC: B,
  CONNECTION_OPEN: B,
  OVERLAY_INITIALIZE: B,
  CACHE_LOADED: B,
  CACHE_LOADED_LAZY: B,
  CONNECTION_CLOSED: function() {
    z()
  },
  GUILD_CREATE: x,
  GUILD_UPDATE: x,
  GUILD_DELETE: x,
  GUILD_MEMBER_ADD: V,
  GUILD_MEMBER_UPDATE: V,
  CURRENT_USER_UPDATE: V,
  CHANNEL_CREATE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e, n = O.Z.getChannel(t);
    if (null == n || n.isPrivate()) return !1;
    let i = g.default.getCurrentUser(),
      r = m.uB({
        user: i,
        context: n
      });
    if (M[n.id] === r) return !1;
    M[n.id] = r, y += 1, w(n.getGuildId())
  },
  THREAD_CREATE: Z,
  THREAD_UPDATE: Z,
  THREAD_LIST_SYNC: Z,
  LOAD_THREADS_SUCCESS: Z,
  LOAD_ARCHIVED_THREADS_SUCCESS: Z,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    for (let {
        id: e
      }
      of t) {
      let t = O.Z.getChannel(e);
      if (null == t || t.isPrivate()) continue;
      let i = g.default.getCurrentUser(),
        r = m.uB({
          user: i,
          context: t
        });
      if (M[t.id] !== r) M[t.id] = r, w(t.getGuildId()), n = !0
    }
    return !!n && (y += 1, n)
  },
  LOAD_MESSAGES_SUCCESS: function(e) {
    let {
      messages: t
    } = e;
    return t.some(e => null != e.thread)
  },
  SEARCH_FINISH: H,
  MOD_VIEW_SEARCH_FINISH: H,
  THREAD_MEMBER_UPDATE: function(e) {
    var t;
    return (null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.userId && (w(e.guildId), !0)
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    return !!(0, h.s)(e) && (w(e.guildId), !0)
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return delete M[t.id], y += 1, w(t.guild_id), !1
  },
  GUILD_ROLE_CREATE: F,
  GUILD_ROLE_UPDATE: F,
  GUILD_ROLE_DELETE: F,
  LOGOUT: z,
  STAGE_INSTANCE_CREATE: Y,
  STAGE_INSTANCE_UPDATE: Y,
  STAGE_INSTANCE_DELETE: Y,
  IMPERSONATE_UPDATE: j,
  IMPERSONATE_STOP: j
})