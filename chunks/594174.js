"use strict";
n.r(t), n.d(t, {
  ASSISTANT_WUMPUS_VOICE_USER: function() {
    return m
  },
  mergeUser: function() {
    return g
  },
  transformUser: function() {
    return C
  },
  users: function() {
    return N
  }
}), n(47120), n(789020), n(724458), n(51350), n(653041);
var i = n(348327),
  r = n.n(i),
  s = n(392711),
  o = n(864106),
  a = n(502087),
  l = n(911955),
  u = n(168232),
  _ = n(598077),
  d = n(630388),
  c = n(823379),
  E = n(314897),
  I = n(412788),
  T = n(981631),
  h = n(308083),
  S = n(474936);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let N = {},
  A = 0,
  m = "47835198259242069";

function O(e, t, n) {
  let i = e;
  i = null == n ? e.removeGuildAvatarHash(t) : e.addGuildAvatarHash(t, n), N[e.id] = i;
  let r = e !== i;
  return r && A++, r
}

function R(e, t) {
  return !r()(e.clan, t.clan) && (null == e.clan || null != t.clan) && (e.clan = (0, h.yi)(t.clan), N[e.id] = e, !0)
}

function C(e) {
  let t = e.mfa_enabled;
  null != t && (e.mfaEnabled = t, delete e.mfa_enabled);
  let n = (0, u.G)(e.premium_type);
  void 0 !== n && (e.premiumType = n, delete e.premium_type);
  let i = e.nsfw_allowed;
  null != i && (e.nsfwAllowed = i, delete e.nsfw_allowed);
  let r = e.public_flags;
  null != r && (e.publicFlags = r, delete e.public_flags);
  let s = e.purchased_flags;
  void 0 !== s && (e.purchasedFlags = s, delete e.purchased_flags);
  let a = e.premium_usage_flags;
  void 0 !== a && (e.premiumUsageFlags = a, delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
  let l = e.avatar_decoration_data;
  void 0 !== l && (e.avatarDecorationData = (0, o.FG)(l), delete e.avatar_decoration_data);
  let _ = e.global_name;
  void 0 !== _ && (e.globalName = _, delete e.global_name);
  let d = e.clan;
  return void 0 !== d && (e.clan = (0, h.yi)(d)), e
}

function p(e) {
  return e.id !== E.default.getId()
}

function g(e) {
  let t, n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    i = N[e.id],
    s = void 0 !== e.id && e.id === E.default.getId();
  if (null == i) void 0 !== (t = (i = new _.Z(e)).premiumType) && s && (i.premiumType = L((0, u.QI)(i), i.premiumType));
  else if (n) {
    var o;
    let n = C(e);
    void 0 !== (t = null !== (o = n.premium_type) && void 0 !== o ? o : n.premiumType) && s && (0, u.VR)(n) && (n = function(e) {
      var t;
      let n = null !== (t = e.premium_type) && void 0 !== t ? t : e.premiumType,
        i = L((0, u.VR)(e), n);
      return void 0 !== e.premiumType ? e.premiumType = i : void 0 !== e.premium_type && (e.premium_type = i), e
    }(n)), n = function(e, t) {
      switch (!0) {
        case null == e.clan && null == t.clan:
          break;
        case null != e.clan && null == t.clan:
        case r()(e.clan, t.clan):
          t.clan = e.clan;
          break;
        default:
          t.clan = (0, h.yi)(t.clan)
      }
      return t
    }(i, n), i = i.merge(n)
  }(0, u.jX)((0, u.QI)(i), t, i.premiumType);
  let a = N[e.id] !== i;
  return N[e.id] = i, a && A++, a
}

function L(e, t) {
  if (!e) return t;
  let n = a.Z.getPremiumTypeOverride(),
    i = a.Z.getPremiumTypeActual();
  return n === S.F_ ? i : n
}

function v(e, t) {
  var n, i, r, s, o;
  if (null != e.author && "SENDING" !== e.state && p(e.author) && g(e.author, t), null === (n = e.mentions) || void 0 === n || n.forEach(e => {
      p(e) && g(e, t)
    }), (null === (i = e.interaction) || void 0 === i ? void 0 : i.user) != null && p(null === (r = e.interaction) || void 0 === r ? void 0 : r.user) && g(e.interaction.user, t), null === (s = e.attachments) || void 0 === s || s.forEach(e => {
      var n;
      null === (n = e.clip_participants) || void 0 === n || n.forEach(e => {
        p(e) && g(e, t)
      })
    }), (null === (o = e.resolved) || void 0 === o ? void 0 : o.users) != null)
    for (let n in e.resolved.users) {
      let i = e.resolved.users[n];
      p(i) && g(i, t)
    }
}

function D(e) {
  null != e.application.bot && g(e.application.bot)
}

function M(e) {
  let {
    user: t,
    users: n,
    guilds: i
  } = e;
  delete t.premium, delete t.banner_color, g(t), n.forEach(e => {
    g(e)
  }), i.forEach(e => {
    e.members.forEach(t => {
      let n = N[t.user.id];
      null != n && (O(n, e.id, t.avatar), R(n, t.user))
    })
  }), null != N[E.default.getId()] && (N[m] = new _.Z({
    id: m,
    username: "Wumpus",
    discriminator: "0",
    globalName: "Wumpus",
    avatar: "c1f86b313385cb97985f1b118851c28c"
  }))
}

function P(e) {
  let {
    guilds: t,
    lazyPrivateChannels: n
  } = e;
  t.forEach(e => {
    e.members.forEach(t => {
      let n = N[t.user.id];
      null != n && (O(n, e.id, t.avatar), R(n, t.user))
    })
  }), null == n || n.forEach(e => {
    var t;
    null === (t = e.rawRecipients) || void 0 === t || t.forEach(e => {
      g(e)
    })
  })
}

function y(e) {
  return !("incomplete" in e)
}

function U(e) {
  if (null != e.users)
    for (let t of e.users) {
      if (!(t.id in N && y(t))) N[t.id] = new _.Z(t)
    }
}

function b(e) {
  let {
    user: t
  } = e;
  t.id !== E.default.getId() && g(t)
}

function G(e) {
  let {
    user: t
  } = e;
  g(t)
}

function w(e) {
  let {
    user: t
  } = e;
  g(t)
}

function k(e) {
  let {
    messages: t
  } = e;
  return t.forEach(e => v(e, !0)), !1
}

function B(e) {
  let {
    mostRecentMessages: t
  } = e;
  return null == t || t.forEach(e => v(e, !1)), !1
}

function x(e) {
  let {
    messages: t
  } = e;
  return t.forEach(e => k({
    messages: e
  })), !1
}

function V(e) {
  let {
    firstMessages: t,
    owners: n
  } = e;
  null != t && t.forEach(e => v(e, !0)), null != n && n.forEach(e => g(e.user, !0))
}

function Z(e) {
  let {
    threads: t
  } = e;
  Object.values(t).forEach(e => {
    let {
      first_message: t,
      most_recent_message: n,
      owner: i
    } = e;
    null != t && v(t, !0), null != n && v(n, !0), null != i && null != i.user && g(i.user, !0)
  })
}

function H(e) {
  let {
    supplementalData: t
  } = e;
  Object.values(t).forEach(e => {
    let {
      message_preview: t
    } = e;
    null != t && v(t, !0)
  })
}

function F(e) {
  let {
    guildScheduledEventUsers: t,
    guildId: n
  } = e;
  t.forEach(e => {
    let {
      user: t,
      member: i
    } = e;
    if (null == t) return;
    g(t);
    let r = N[t.id],
      s = null == i ? void 0 : i.avatar;
    null != r && null != s && O(r, n, s)
  })
}

function Y(e) {
  let {
    items: t
  } = e;
  t.forEach(e => {
    null != e.other_user && g(e.other_user)
  })
}

function j(e) {
  let {
    item: t
  } = e;
  null != t.other_user && g(t.other_user)
}

function W(e) {
  let {
    message: t
  } = e;
  if (v(t, !0), null != t.flags && d.yE(t.flags, T.iLy.URGENT)) {
    let e = N[E.default.getId()];
    return null != e && (N[E.default.getId()] = e.set("flags", d.mB(e.flags, T.xW$.HAS_UNREAD_URGENT_MESSAGES, !0)), !0)
  }
  return !1
}

function K(e) {
  let {
    channel: {
      rawRecipients: t
    }
  } = e;
  return null != t && t.forEach(e => g(e)), !1
}

function z(e) {
  let {
    channels: t
  } = e;
  for (let {
      rawRecipients: e
    }
    of t) null != e && e.forEach(e => g(e));
  return !1
}
let q = ["username", "avatar", "global_name", "discriminator", "bot", "clan"];

function X(e) {
  let {
    updates: t
  } = e;
  return t.map(e => {
    let t = N[e.user.id];
    if (null == t) return !1;
    let n = q.reduce((n, i) => {
      if (e.user.hasOwnProperty(i)) {
        let r = t.set((0, s.camelCase)(i), e.user[i]);
        n = n || r !== t, t = r
      }
      return n
    }, !1);
    return !!n && (N[t.id] = t, n)
  }).some(e => e)
}

function Q(e) {
  let {
    bans: t
  } = e;
  t.forEach(e => g(e.user))
}

function J(e) {
  let {
    bans: t
  } = e;
  t.forEach(e => g(e.user))
}

function $(e) {
  return g(e.user)
}

function ee(e) {
  return !!e.isMember && g(e.user)
}

function et(e) {
  let t = g(e.user),
    n = N[e.user.id];
  if (null == n) return t;
  let {
    avatar: i,
    guildId: r
  } = e;
  return O(n, r, i) || t
}

function en(e) {
  let {
    ops: t
  } = e;
  for (let e of t)
    if ("INSERT" === e.op || "UPDATE" === e.op) {
      var n;
      let t = null === (n = e.item.member) || void 0 === n ? void 0 : n.user;
      if (null == t) continue;
      let i = N[t.id];
      if (null == i) continue;
      R(i, t)
    } return !1
}

function ei(e) {
  let {
    chunks: t
  } = e, n = !1;
  for (let e of t) n = e.members.reduce((t, n) => {
    let i = g(n.user),
      r = N[n.user.id];
    if (null == r) return i || t;
    let {
      avatar: s
    } = n;
    return O(r, e.guildId, s) || i || t
  }, !1) || n;
  return n
}

function er(e) {
  let t = !1;
  for (let n of e.members) g(n.user) && (t = !0), null != N[n.user.id] && O(N[n.user.id], e.guildId, n.avatar) && (t = !0);
  return t
}

function es(e) {
  var t;
  let n = !1;
  for (let i of null !== (t = e.users) && void 0 !== t ? t : []) !Object.hasOwn(N, i.id) && (n = g(i) || n);
  return n
}

function eo(e) {
  let {
    members: t
  } = e, n = !1;
  return t.forEach(e => {
    null != e.member && g(e.member.user) && (n = !0), null != e.presence && g(e.presence.user) && (n = !0)
  }), n
}

function ea(e) {
  let {
    addedMembers: t
  } = e, n = !1;
  return null == t || t.forEach(e => {
    null != e.member && g(e.member.user) && (n = !0), null != e.presence && g(e.presence.user) && (n = !0)
  }), n
}

function el(e) {
  let {
    guild: t
  } = e;
  t.members.forEach(e => {
    let {
      user: {
        id: n,
        username: i,
        avatar: r,
        discriminator: s,
        bot: o
      },
      avatar: a
    } = e;
    n !== E.default.getId() && g({
      id: n,
      username: i,
      avatar: r,
      discriminator: s,
      bot: o
    });
    let l = N[n];
    null != l && O(l, t.id, a)
  })
}

function eu(e) {
  return g(e.relationship.user)
}

function e_(e) {
  let {
    relationships: t
  } = e;
  return t.reduce((e, t) => g(t.user) || e, !1)
}

function ed(e) {
  return g(e.suggestion.suggested_user)
}

function ec(e) {
  let {
    suggestions: t
  } = e;
  return t.reduce((e, t) => g(t.suggested_user) || e, !1)
}

function eE(e) {
  let {
    users: t
  } = e;
  t.forEach(e => {
    null == N[e.id] && (N[e.id] = new _.Z(e))
  })
}

function eI(e) {
  let {
    giftCode: t
  } = e;
  return null != t.user && g(t.user)
}

function eT(e) {
  let {
    appliedBoosts: t
  } = e;
  t.forEach(e => {
    let {
      user: t
    } = e;
    if (null != t) g(t)
  })
}

function eh(e) {
  let {
    request: t
  } = e, {
    user: n,
    actioned_by_user: i
  } = t, r = !1;
  return null != n && (r = r || g(n)), null != i && (r = r || g(i)), r
}

function eS(e) {
  let {
    integrations: t
  } = e;
  t.forEach(e => D((0, l.F)(e)))
}

function ef(e) {
  let {
    integration: t
  } = e;
  D((0, l.F)(t))
}

function eN(e) {
  let {
    integration: t
  } = e;
  D((0, l.F)(t))
}

function eA(e) {
  let {
    users: t,
    familyCenterTeenActivity: n
  } = e, {
    users: i
  } = n;
  return [...t, ...i].reduce((e, t) => g(t) || e, !1)
}

function em(e) {
  let {
    users: t
  } = e;
  return t.reduce((e, t) => g(t) || e, !1)
}

function eO(e) {
  let {
    users: t
  } = e;
  return t.reduce((e, t) => g(t) || e, !1)
}

function eR(e) {
  let {
    familyCenterTeenActivity: t
  } = e;
  if (void 0 === t) return;
  let {
    users: n
  } = t;
  return n.reduce((e, t) => g(t) || e, !1)
}

function eC(e) {
  let {
    familyCenterTeenActivity: t
  } = e, {
    users: n
  } = t;
  return n.reduce((e, t) => g(t) || e, !1)
}

function ep(e) {
  let {
    members: t
  } = e, n = E.default.getId();
  return t.reduce((e, t) => t.member.user.id === n ? e : g(t.member.user) || e, !1)
}
class eg extends I.Z {
  initialize() {
    this.waitFor(E.default)
  }
  takeSnapshot() {
    let e = this.getCurrentUser();
    return {
      version: eg.LATEST_SNAPSHOT_VERSION,
      data: {
        users: [e].filter(c.lm)
      }
    }
  }
  handleLoadCache(e) {
    let t = this.readSnapshot(eg.LATEST_SNAPSHOT_VERSION);
    if (null != t)
      for (let e of t.users) N[e.id] = new _.Z(e);
    if (null != e.users)
      for (let t of e.users) {
        if (!(t.id in N && y(t))) N[t.id] = new _.Z(t)
      }
    for (let t of [e.privateChannels, e.initialGuildChannels])
      for (let e of t) {
        var n;
        null === (n = e.rawRecipients) || void 0 === n || n.forEach(e => g(e, !1))
      }
  }
  getUserStoreVersion() {
    return A
  }
  getUser(e) {
    if (null != e) return N[e]
  }
  getUsers() {
    return N
  }
  forEach(e) {
    for (let t in N)
      if (!1 === e(N[t])) break
  }
  findByTag(e, t) {
    for (let n in N) {
      let i = N[n];
      if (null != t && i.username === e && i.discriminator === t) return i;
      if (null == t && i.username === e && i.isPomelo()) return i
    }
  }
  filter(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = [];
    for (let t in N) {
      let i = N[t];
      e(i) && n.push(i)
    }
    return t && n.sort((e, t) => e.username > t.username ? 1 : e.username < t.username ? -1 : 0), n
  }
  getCurrentUser() {
    return N[E.default.getId()]
  }
  constructor() {
    super({
      CONNECTION_OPEN: M,
      CONNECTION_OPEN_SUPPLEMENTAL: P,
      UPDATE_CLIENT_PREMIUM_TYPE: w,
      OVERLAY_INITIALIZE: U,
      CACHE_LOADED: e => this.handleLoadCache(e),
      USER_UPDATE: b,
      CURRENT_USER_UPDATE: G,
      PRESENCE_UPDATES: X,
      SEARCH_FINISH: x,
      MOD_VIEW_SEARCH_FINISH: x,
      LOAD_MESSAGES_SUCCESS: k,
      LOAD_MESSAGES_AROUND_SUCCESS: k,
      LOAD_PINNED_MESSAGES_SUCCESS: k,
      LOAD_RECENT_MENTIONS_SUCCESS: k,
      THREAD_LIST_SYNC: B,
      MESSAGE_CREATE: W,
      MESSAGE_UPDATE: W,
      GUILD_SETTINGS_LOADED_BANS: Q,
      GUILD_SETTINGS_LOADED_BANS_BATCH: J,
      GUILD_CREATE: el,
      GUILD_BAN_ADD: $,
      GUILD_BAN_REMOVE: $,
      CHANNEL_RECIPIENT_ADD: ee,
      CHANNEL_RECIPIENT_REMOVE: ee,
      GUILD_JOIN_REQUEST_CREATE: eh,
      GUILD_JOIN_REQUEST_UPDATE: eh,
      GUILD_MEMBER_ADD: et,
      GUILD_MEMBER_UPDATE: et,
      GUILD_MEMBERS_CHUNK_BATCH: ei,
      GUILD_MEMBER_LIST_UPDATE: en,
      THREAD_MEMBER_LIST_UPDATE: eo,
      THREAD_MEMBERS_UPDATE: ea,
      CHANNEL_CREATE: K,
      CHANNEL_UPDATES: z,
      RELATIONSHIP_ADD: eu,
      LOAD_RELATIONSHIPS_SUCCESS: e_,
      FRIEND_SUGGESTION_CREATE: ed,
      LOAD_FRIEND_SUGGESTIONS_SUCCESS: ec,
      AUDIT_LOG_FETCH_SUCCESS: eE,
      AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eE,
      GIFT_CODE_RESOLVE_SUCCESS: eI,
      GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: eT,
      LOAD_THREADS_SUCCESS: V,
      LOAD_ARCHIVED_THREADS_SUCCESS: V,
      LOAD_FORUM_POSTS: Z,
      GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: F,
      LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: Y,
      NOTIFICATION_CENTER_ITEM_CREATE: j,
      LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: H,
      PASSIVE_UPDATE_V2: er,
      LOCAL_MESSAGES_LOADED: es,
      FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS: eS,
      PRIVATE_CHANNEL_INTEGRATION_CREATE: ef,
      PRIVATE_CHANNEL_INTEGRATION_UPDATE: eN,
      FAMILY_CENTER_INITIAL_LOAD: eA,
      FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: em,
      FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eR,
      FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eC,
      FAMILY_CENTER_REQUEST_LINK_SUCCESS: eO,
      MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: ep
    })
  }
}
f(eg, "displayName", "UserStore"), f(eg, "LATEST_SNAPSHOT_VERSION", 1), t.default = new eg