n.r(t), n.d(t, {
  ASSISTANT_WUMPUS_VOICE_USER: function() {
return T;
  },
  mergeUser: function() {
return v;
  },
  transformUser: function() {
return A;
  },
  users: function() {
return m;
  }
}), n(47120), n(789020), n(724458), n(51350), n(653041);
var r = n(392711),
  i = n(864106),
  a = n(502087),
  s = n(911955),
  o = n(168232),
  l = n(598077),
  u = n(630388),
  c = n(823379),
  d = n(314897),
  _ = n(412788),
  E = n(981631),
  f = n(308083),
  h = n(474936);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let m = {},
  I = 0,
  T = '47835198259242069';

function g(e, t, n) {
  let r = m[e];
  if (null == r)
return !1;
  let i = r;
  i = null == n ? r.removeGuildAvatarHash(t) : r.addGuildAvatarHash(t, n), m[r.id] = i;
  let a = r !== i;
  return a && I++, a;
}

function S(e, t) {
  let n = m[e];
  return !(null == n || (0, f.Dd)(n.clan, t.clan)) && (null == n.clan || null != t.clan) && (n.clan = (0, f.yi)(t.clan), m[n.id] = n, I++, !0);
}

function A(e) {
  let t = e.mfa_enabled;
  null != t && (e.mfaEnabled = t, delete e.mfa_enabled);
  let n = (0, o.G)(e.premium_type);
  void 0 !== n && (e.premiumType = n, delete e.premium_type);
  let r = e.nsfw_allowed;
  null != r && (e.nsfwAllowed = r, delete e.nsfw_allowed);
  let a = e.public_flags;
  null != a && (e.publicFlags = a, delete e.public_flags);
  let s = e.purchased_flags;
  void 0 !== s && (e.purchasedFlags = s, delete e.purchased_flags);
  let l = e.premium_usage_flags;
  void 0 !== l && (e.premiumUsageFlags = l, delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
  let u = e.avatar_decoration_data;
  void 0 !== u && (e.avatarDecorationData = (0, i.FG)(u), delete e.avatar_decoration_data);
  let c = e.global_name;
  void 0 !== c && (e.globalName = c, delete e.global_name);
  let d = e.clan;
  return void 0 !== d && (e.clan = (0, f.yi)(d)), e;
}

function N(e) {
  return e.id !== d.default.getId();
}

function v(e) {
  let t, n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
r = m[e.id],
i = void 0 !== e.id && e.id === d.default.getId();
  if (null == r)
void 0 !== (t = (r = new l.Z(e)).premiumType) && i && (r.premiumType = O((0, o.QI)(r), r.premiumType));
  else if (n) {
var a;
let n = A(e);
void 0 !== (t = null !== (a = n.premium_type) && void 0 !== a ? a : n.premiumType) && i && (0, o.VR)(n) && (n = function(e) {
  var t;
  let n = null !== (t = e.premium_type) && void 0 !== t ? t : e.premiumType,
    r = O((0, o.VR)(e), n);
  return void 0 !== e.premiumType ? e.premiumType = r : void 0 !== e.premium_type && (e.premium_type = r), e;
}(n)), n = function(e, t) {
  switch (!0) {
    case null == e.clan && null == t.clan:
      break;
    case null != e.clan && null == t.clan:
    case (0, f.Dd)(e.clan, t.clan):
      t.clan = e.clan;
      break;
    default:
      t.clan = (0, f.yi)(t.clan);
  }
  return t;
}(r, n), r = r.merge(n);
  }
  (0, o.jX)((0, o.QI)(r), t, r.premiumType);
  let s = m[e.id] !== r;
  return m[e.id] = r, s && I++, s;
}

function O(e, t) {
  if (!e)
return t;
  let n = a.Z.getPremiumTypeOverride(),
r = a.Z.getPremiumTypeActual();
  return n === h.F_ ? r : n;
}

function R(e, t) {
  var n, r, i, a, s;
  if (null != e.author && 'SENDING' !== e.state && N(e.author) && v(e.author, t), null === (n = e.mentions) || void 0 === n || n.forEach(e => {
  N(e) && v(e, t);
}), (null === (r = e.interaction) || void 0 === r ? void 0 : r.user) != null && N(null === (i = e.interaction) || void 0 === i ? void 0 : i.user) && v(e.interaction.user, t), null === (a = e.attachments) || void 0 === a || a.forEach(e => {
  var n;
  null === (n = e.clip_participants) || void 0 === n || n.forEach(e => {
    N(e) && v(e, t);
  });
}), (null === (s = e.resolved) || void 0 === s ? void 0 : s.users) != null)
for (let n in e.resolved.users) {
  let r = e.resolved.users[n];
  N(r) && v(r, t);
}
}

function C(e) {
  null != e.application.bot && v(e.application.bot);
}

function y(e) {
  let {
user: t,
users: n,
guilds: r
  } = e;
  delete t.premium, delete t.banner_color, v(t), n.forEach(e => {
v(e);
  }), r.forEach(e => {
e.members.forEach(t => {
  g(t.user.id, e.id, t.avatar), S(t.user.id, t.user);
});
  }), null != m[d.default.getId()] && (m[T] = new l.Z({
id: T,
username: 'Wumpus',
discriminator: '0',
globalName: 'Wumpus',
avatar: 'c1f86b313385cb97985f1b118851c28c'
  }));
}

function D(e) {
  let {
guilds: t,
lazyPrivateChannels: n
  } = e;
  t.forEach(e => {
e.members.forEach(t => {
  g(t.user.id, e.id, t.avatar), S(t.user.id, t.user);
});
  }), null == n || n.forEach(e => {
var t;
null === (t = e.rawRecipients) || void 0 === t || t.forEach(e => {
  v(e);
});
  });
}

function L(e) {
  return !('incomplete' in e);
}

function b(e) {
  if (null != e.users)
for (let t of e.users) {
  if (!(t.id in m && L(t)))
    m[t.id] = new l.Z(t);
}
}

function M(e) {
  let {
user: t
  } = e;
  t.id !== d.default.getId() && v(t);
}

function P(e) {
  let {
user: t
  } = e;
  v(t);
}

function U(e) {
  let {
user: t
  } = e;
  v(t);
}

function w(e) {
  let {
messages: t
  } = e;
  return t.forEach(e => R(e, !0)), !1;
}

function x(e) {
  let {
mostRecentMessages: t
  } = e;
  return null == t || t.forEach(e => R(e, !1)), !1;
}

function G(e) {
  let {
messages: t
  } = e;
  return t.forEach(e => w({
messages: e
  })), !1;
}

function k(e) {
  let {
firstMessages: t,
owners: n
  } = e;
  null != t && t.forEach(e => R(e, !0)), null != n && n.forEach(e => v(e.user, !0));
}

function B(e) {
  let {
threads: t
  } = e;
  Object.values(t).forEach(e => {
let {
  first_message: t,
  most_recent_message: n,
  owner: r
} = e;
null != t && R(t, !0), null != n && R(n, !0), null != r && null != r.user && v(r.user, !0);
  });
}

function F(e) {
  let {
supplementalData: t
  } = e;
  Object.values(t).forEach(e => {
let {
  message_preview: t
} = e;
null != t && R(t, !0);
  });
}

function V(e) {
  let {
guildScheduledEventUsers: t,
guildId: n
  } = e;
  t.forEach(e => {
let {
  user: t,
  member: r
} = e;
if (null == t)
  return;
v(t);
let i = null == r ? void 0 : r.avatar;
null != i && g(t.id, n, i);
  });
}

function H(e) {
  let {
items: t
  } = e;
  t.forEach(e => {
null != e.other_user && v(e.other_user);
  });
}

function Z(e) {
  let {
item: t
  } = e;
  null != t.other_user && v(t.other_user);
}

function Y(e) {
  let {
message: t
  } = e;
  if (R(t, !0), null != t.flags && u.yE(t.flags, E.iLy.URGENT)) {
let e = m[d.default.getId()];
return null != e && (m[d.default.getId()] = e.set('flags', u.mB(e.flags, E.xW$.HAS_UNREAD_URGENT_MESSAGES, !0)), !0);
  }
  return !1;
}

function j(e) {
  let {
channel: {
  rawRecipients: t
}
  } = e;
  return null != t && t.forEach(e => v(e)), !1;
}

function W(e) {
  let {
channels: t
  } = e;
  for (let {
  rawRecipients: e
}
of t)
null != e && e.forEach(e => v(e));
  return !1;
}
let K = [
  'username',
  'avatar',
  'global_name',
  'discriminator',
  'bot',
  'clan'
];

function z(e) {
  let {
updates: t
  } = e;
  return t.map(e => {
let t = m[e.user.id];
if (null == t)
  return !1;
let n = K.reduce((n, i) => {
  if (e.user.hasOwnProperty(i)) {
    let a = t.set((0, r.camelCase)(i), e.user[i]);
    n = n || a !== t, t = a;
  }
  return n;
}, !1);
return !!n && (m[t.id] = t, n);
  }).some(e => e);
}

function q(e) {
  let {
bans: t
  } = e;
  t.forEach(e => v(e.user));
}

function Q(e) {
  let {
bans: t
  } = e;
  t.forEach(e => v(e.user));
}

function X(e) {
  return v(e.user);
}

function $(e) {
  return !!e.isMember && v(e.user);
}

function J(e) {
  let t = v(e.user);
  return g(e.user.id, e.guildId, e.avatar) || t;
}

function ee(e) {
  let {
ops: t
  } = e;
  for (let e of t)
if ('INSERT' === e.op || 'UPDATE' === e.op) {
  var n;
  let t = null === (n = e.item.member) || void 0 === n ? void 0 : n.user;
  if (null == t)
    continue;
  S(t.id, t);
}
  return !1;
}

function et(e) {
  let {
chunks: t
  } = e, n = !1;
  for (let e of t)
n = e.members.reduce((t, n) => {
  let r = v(n.user);
  return g(n.user.id, e.guildId, n.avatar) || r || t;
}, !1) || n;
  return n;
}

function en(e) {
  let t = !1;
  for (let n of e.members)
v(n.user) && (t = !0), g(n.user.id, e.guildId, n.avatar) && (t = !0);
  return t;
}

function er(e) {
  var t;
  let n = !1;
  for (let r of null !== (t = e.users) && void 0 !== t ? t : [])
!Object.hasOwn(m, r.id) && (n = v(r) || n);
  return n;
}

function ei(e) {
  let {
members: t
  } = e, n = !1;
  return t.forEach(e => {
null != e.member && v(e.member.user) && (n = !0), null != e.presence && v(e.presence.user) && (n = !0);
  }), n;
}

function ea(e) {
  let {
addedMembers: t
  } = e, n = !1;
  return null == t || t.forEach(e => {
null != e.member && v(e.member.user) && (n = !0), null != e.presence && v(e.presence.user) && (n = !0);
  }), n;
}

function es(e) {
  let {
guild: t
  } = e;
  t.members.forEach(e => {
let {
  user: {
    id: n,
    username: r,
    avatar: i,
    discriminator: a,
    bot: s
  },
  avatar: o
} = e;
n !== d.default.getId() && v({
  id: n,
  username: r,
  avatar: i,
  discriminator: a,
  bot: s
}), g(n, t.id, o);
  });
}

function eo(e) {
  return v(e.relationship.user);
}

function el(e) {
  let {
relationships: t
  } = e;
  return t.reduce((e, t) => v(t.user) || e, !1);
}

function eu(e) {
  return v(e.suggestion.suggested_user);
}

function ec(e) {
  let {
suggestions: t
  } = e;
  return t.reduce((e, t) => v(t.suggested_user) || e, !1);
}

function ed(e) {
  let {
users: t
  } = e;
  t.forEach(e => {
null == m[e.id] && (m[e.id] = new l.Z(e));
  });
}

function e_(e) {
  let {
giftCode: t
  } = e;
  return null != t.user && v(t.user);
}

function eE(e) {
  let {
appliedBoosts: t
  } = e;
  t.forEach(e => {
let {
  user: t
} = e;
if (null != t)
  v(t);
  });
}

function ef(e) {
  let {
request: t
  } = e, {
user: n,
actioned_by_user: r
  } = t, i = !1;
  return null != n && (i = i || v(n)), null != r && (i = i || v(r)), i;
}

function eh(e) {
  let {
integrations: t
  } = e;
  t.forEach(e => C((0, s.F)(e)));
}

function ep(e) {
  let {
integration: t
  } = e;
  C((0, s.F)(t));
}

function em(e) {
  let {
integration: t
  } = e;
  C((0, s.F)(t));
}

function eI(e) {
  let {
users: t,
familyCenterTeenActivity: n
  } = e, {
users: r
  } = n;
  return [
...t,
...r
  ].reduce((e, t) => v(t) || e, !1);
}

function eT(e) {
  let {
users: t
  } = e;
  return t.reduce((e, t) => v(t) || e, !1);
}

function eg(e) {
  let {
users: t
  } = e;
  return t.reduce((e, t) => v(t) || e, !1);
}

function eS(e) {
  let {
familyCenterTeenActivity: t
  } = e;
  if (void 0 === t)
return;
  let {
users: n
  } = t;
  return n.reduce((e, t) => v(t) || e, !1);
}

function eA(e) {
  let {
familyCenterTeenActivity: t
  } = e, {
users: n
  } = t;
  return n.reduce((e, t) => v(t) || e, !1);
}

function eN(e) {
  let {
members: t
  } = e, n = d.default.getId();
  return t.reduce((e, t) => t.member.user.id === n ? e : v(t.member.user) || e, !1);
}

function ev(e) {
  let {
messageItems: t
  } = e;
  t.forEach(e => {
null != e.message && R(e.message, !0);
  }, !1);
}
class eO extends _.Z {
  initialize() {
this.waitFor(d.default);
  }
  takeSnapshot() {
let e = this.getCurrentUser();
return {
  version: eO.LATEST_SNAPSHOT_VERSION,
  data: {
    users: [e].filter(c.lm)
  }
};
  }
  handleLoadCache(e) {
let t = this.readSnapshot(eO.LATEST_SNAPSHOT_VERSION);
if (null != t)
  for (let e of t.users)
    m[e.id] = new l.Z(e);
if (null != e.users)
  for (let t of e.users) {
    if (!(t.id in m && L(t)))
      m[t.id] = new l.Z(t);
  }
for (let t of [
    e.privateChannels,
    e.initialGuildChannels
  ])
  for (let e of t) {
    var n;
    null === (n = e.rawRecipients) || void 0 === n || n.forEach(e => v(e, !1));
  }
  }
  getUserStoreVersion() {
return I;
  }
  getUser(e) {
if (null != e)
  return m[e];
  }
  getUsers() {
return m;
  }
  forEach(e) {
for (let t in m)
  if (!1 === e(m[t]))
    break;
  }
  findByTag(e, t) {
for (let n in m) {
  let r = m[n];
  if (null != t && r.username === e && r.discriminator === t)
    return r;
  if (null == t && r.username === e && r.isPomelo())
    return r;
}
  }
  filter(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
  n = [];
for (let t in m) {
  let r = m[t];
  e(r) && n.push(r);
}
return t && n.sort((e, t) => e.username > t.username ? 1 : e.username < t.username ? -1 : 0), n;
  }
  getCurrentUser() {
return m[d.default.getId()];
  }
  constructor() {
super({
  CONNECTION_OPEN: y,
  CONNECTION_OPEN_SUPPLEMENTAL: D,
  UPDATE_CLIENT_PREMIUM_TYPE: U,
  OVERLAY_INITIALIZE: b,
  CACHE_LOADED: e => this.handleLoadCache(e),
  USER_UPDATE: M,
  CURRENT_USER_UPDATE: P,
  PRESENCE_UPDATES: z,
  SEARCH_FINISH: G,
  MOD_VIEW_SEARCH_FINISH: G,
  LOAD_MESSAGES_SUCCESS: w,
  LOAD_MESSAGES_AROUND_SUCCESS: w,
  LOAD_PINNED_MESSAGES_SUCCESS: w,
  LOAD_RECENT_MENTIONS_SUCCESS: w,
  THREAD_LIST_SYNC: x,
  MESSAGE_CREATE: Y,
  MESSAGE_UPDATE: Y,
  GUILD_SETTINGS_LOADED_BANS: q,
  GUILD_SETTINGS_LOADED_BANS_BATCH: Q,
  GUILD_CREATE: es,
  GUILD_BAN_ADD: X,
  GUILD_BAN_REMOVE: X,
  CHANNEL_RECIPIENT_ADD: $,
  CHANNEL_RECIPIENT_REMOVE: $,
  GUILD_JOIN_REQUEST_CREATE: ef,
  GUILD_JOIN_REQUEST_UPDATE: ef,
  GUILD_MEMBER_ADD: J,
  GUILD_MEMBER_UPDATE: J,
  GUILD_MEMBERS_CHUNK_BATCH: et,
  GUILD_MEMBER_LIST_UPDATE: ee,
  THREAD_MEMBER_LIST_UPDATE: ei,
  THREAD_MEMBERS_UPDATE: ea,
  CHANNEL_CREATE: j,
  CHANNEL_UPDATES: W,
  RELATIONSHIP_ADD: eo,
  LOAD_RELATIONSHIPS_SUCCESS: el,
  FRIEND_SUGGESTION_CREATE: eu,
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: ec,
  AUDIT_LOG_FETCH_SUCCESS: ed,
  AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: ed,
  GIFT_CODE_RESOLVE_SUCCESS: e_,
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: eE,
  LOAD_THREADS_SUCCESS: k,
  LOAD_ARCHIVED_THREADS_SUCCESS: k,
  LOAD_FORUM_POSTS: B,
  GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: V,
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: H,
  NOTIFICATION_CENTER_ITEM_CREATE: Z,
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: F,
  PASSIVE_UPDATE_V2: en,
  LOCAL_MESSAGES_LOADED: er,
  FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS: eh,
  PRIVATE_CHANNEL_INTEGRATION_CREATE: ep,
  PRIVATE_CHANNEL_INTEGRATION_UPDATE: em,
  FAMILY_CENTER_INITIAL_LOAD: eI,
  FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eT,
  FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eS,
  FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eA,
  FAMILY_CENTER_REQUEST_LINK_SUCCESS: eg,
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eN,
  LOAD_GRAVITY_HYDRATED: ev
});
  }
}
p(eO, 'displayName', 'UserStore'), p(eO, 'LATEST_SNAPSHOT_VERSION', 1), t.default = new eO();