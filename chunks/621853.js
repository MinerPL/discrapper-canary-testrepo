n(47120), n(789020);
var r = n(392711),
  i = n.n(r),
  a = n(726542),
  s = n(706454),
  o = n(598077),
  l = n(314897),
  u = n(430824),
  c = n(158776),
  d = n(412788),
  _ = n(771845),
  E = n(689938);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let h = new Set(),
  p = new Set(),
  m = {},
  I = {},
  T = {},
  g = {},
  S = {},
  A = !1;

function N() {
  h.clear(), p.clear(), m = {}, I = {}, T = {}, g = {}, S = {}, A = !1;
}

function v(e) {
  let {
userId: t
  } = e;
  p.add(t);
}

function O(e) {
  let {
userId: t
  } = e;
  p.delete(t);
}

function R(e) {
  return i()(e).map(e => ({
key: e.id,
user: new o.Z(e),
status: c.Z.getStatus(e.id)
  })).sortBy(e => {
let {
  user: t
} = e;
return t.username.toLowerCase();
  }).value();
}

function C(e) {
  p.delete(e.userId), T[e.userId] = R(e.mutualFriends), g[e.userId] = e.mutualFriends.length;
}

function y() {
  if (0 === Object.keys(S).length)
return !1;
  S = {};
}

function D(e) {
  if (null == S[e.user.id])
return !1;
  delete S[e.user.id];
}

function L(e) {
  var t, n, r, i, s, o, l, c, d, f, p, A, N, v, O, C;
  if (h.delete(e.user.id), null != e.mutual_guilds) {
let t = {};
e.mutual_guilds.forEach(e => {
  let {
    id: n,
    nick: r
  } = e, i = u.Z.getGuild(n);
  null != i && (t[n] = {
    guild: i,
    nick: r
  });
}), S[e.user.id] = _.ZP.getFlattenedGuildIds().filter(e => null != t[e]).map(e => ({
  guild: t[e].guild,
  nick: t[e].nick
}));
  }
  if (null != e.mutual_friends_count) {
let t = e.mutual_friends_count;
g[e.user.id] = t;
  }
  null != e.mutual_friends && (T[e.user.id] = R(e.mutual_friends), g[e.user.id] = e.mutual_friends.length);
  let y = null != e.premium_since ? new Date(e.premium_since) : null,
D = null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
L = e.application;
  if (m[e.user.id] = {
  userId: e.user.id,
  banner: null === (t = e.user_profile) || void 0 === t ? void 0 : t.banner,
  accentColor: null === (n = e.user_profile) || void 0 === n ? void 0 : n.accent_color,
  themeColors: null === (r = e.user_profile) || void 0 === r ? void 0 : r.theme_colors,
  popoutAnimationParticleType: null === (i = e.user_profile) || void 0 === i ? void 0 : i.popout_animation_particle_type,
  bio: null !== (d = null === (s = e.user_profile) || void 0 === s ? void 0 : s.bio) && void 0 !== d ? d : '',
  profileEffectId: null === (l = e.user_profile) || void 0 === l ? void 0 : null === (o = l.profile_effect) || void 0 === o ? void 0 : o.id,
  pronouns: null !== (f = null === (c = e.user_profile) || void 0 === c ? void 0 : c.pronouns) && void 0 !== f ? f : '',
  connectedAccounts: null !== (p = e.connected_accounts.filter(e => a.Z.isSupported(e.type))) && void 0 !== p ? p : [],
  applicationRoleConnections: null !== (A = e.application_role_connections) && void 0 !== A ? A : [],
  premiumSince: y,
  premiumType: e.premium_type,
  premiumGuildSince: D,
  lastFetched: Date.now(),
  legacyUsername: e.legacy_username,
  profileFetchFailed: !1,
  application: null != L ? {
    id: L.id,
    primarySkuId: L.primary_sku_id,
    customInstallUrl: L.custom_install_url,
    installParams: L.install_params,
    integrationTypesConfig: L.integration_types_config,
    flags: L.flags,
    popularApplicationCommandIds: L.popular_application_command_ids,
    storefront_available: L.storefront_available
  } : null,
  badges: null != e.badges ? e.badges.map(e => 'premium' === e.id && null != y ? {
    ...e,
    description: E.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({
      date: y
    })
  } : e.id.startsWith('guild_booster_lvl') && null != D ? {
    ...e,
    description: E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({
      date: D
    })
  } : e) : e.badges
}, null != e.guild_member_profile) {
let t = {
  userId: e.user.id,
  guildId: e.guild_member_profile.guild_id,
  banner: e.guild_member_profile.banner,
  accentColor: e.guild_member_profile.accent_color,
  themeColors: null === (N = e.guild_member_profile) || void 0 === N ? void 0 : N.theme_colors,
  popoutAnimationParticleType: null === (v = e.guild_member_profile) || void 0 === v ? void 0 : v.popout_animation_particle_type,
  profileEffectId: null === (C = e.guild_member_profile) || void 0 === C ? void 0 : null === (O = C.profile_effect) || void 0 === O ? void 0 : O.id,
  bio: e.guild_member_profile.bio,
  pronouns: e.guild_member_profile.pronouns,
  badges: e.guild_badges
};
null != I[e.user.id] ? I[e.user.id][e.guild_member_profile.guild_id] = t : I[e.user.id] = {
  [e.guild_member_profile.guild_id]: t
};
  }
}

function b(e) {
  let {
userId: t
  } = e;
  h.add(t);
}

function M(e) {
  var t;
  let {
userId: n
  } = e;
  m[n] = null !== (t = m[n]) && void 0 !== t ? t : {
connectedAccounts: [],
applicationRoleConnections: [],
premiumSince: null,
premiumGuildSince: null,
lastFetched: Date.now(),
profileFetchFailed: !0,
application: null,
legacyUsername: null,
userId: n,
banner: null,
accentColor: null,
bio: '',
pronouns: ''
  }, h.delete(n);
}

function P(e) {
  A = !0;
}

function U(e) {
  A = !1, null != e.guild_id ? ! function(e) {
let {
  userId: t,
  guild_id: n,
  accent_color: r,
  banner: i,
  bio: a,
  pronouns: s,
  popout_animation_particle_type: o,
  theme_colors: l,
  profileEffectId: u
} = e;
if (null == n || null == I[t])
  return !1;
let c = I[t][n];
if (null == c)
  return !1;
I[t][n] = {
  ...c,
  accentColor: r,
  banner: i,
  bio: a,
  pronouns: s,
  popoutAnimationParticleType: o,
  themeColors: l,
  profileEffectId: u
};
  }(e) : ! function(e) {
let {
  userId: t,
  accent_color: n,
  banner: r,
  bio: i,
  pronouns: a,
  popout_animation_particle_type: s,
  theme_colors: o,
  profileEffectId: l
} = e, u = m[t];
if (null == u)
  return !1;
m[t] = {
  ...u,
  accentColor: n,
  banner: r,
  bio: i,
  pronouns: a,
  popoutAnimationParticleType: s,
  themeColors: o,
  profileEffectId: l
};
  }(e);
}

function w(e) {
  A = !1;
}

function x(e) {
  let {
user: t
  } = e;
  if (h.has(t.id) || null == m[t.id])
return !1;
  m[t.id].lastFetched = 0;
}

function G() {
  h.clear(), m = {}, I = {};
}
class k extends d.Z {
  initialize() {
this.waitFor(_.ZP), this.syncWith([s.default], G);
  }
  isFetchingProfile(e) {
return h.has(e);
  }
  isFetchingFriends(e) {
return p.has(e);
  }
  get isSubmitting() {
return A;
  }
  getUserProfile(e) {
return m[e];
  }
  getGuildMemberProfile(e, t) {
var n;
return null == t ? null : null === (n = I[e]) || void 0 === n ? void 0 : n[t];
  }
  getMutualFriends(e) {
return T[e];
  }
  getMutualFriendsCount(e) {
return g[e];
  }
  getMutualGuilds(e) {
return S[e];
  }
  takeSnapshot() {
let e = l.default.getId();
return {
  version: k.LATEST_SNAPSHOT_VERSION,
  data: [{
    userId: e,
    profile: m[e]
  }]
};
  }
  constructor() {
super({
  CACHE_LOADED_LAZY: () => this.loadCache(),
  USER_PROFILE_FETCH_START: b,
  USER_PROFILE_FETCH_FAILURE: M,
  USER_PROFILE_FETCH_SUCCESS: L,
  USER_PROFILE_UPDATE_START: P,
  USER_PROFILE_UPDATE_SUCCESS: U,
  USER_PROFILE_UPDATE_FAILURE: w,
  MUTUAL_FRIENDS_FETCH_START: v,
  MUTUAL_FRIENDS_FETCH_SUCCESS: C,
  MUTUAL_FRIENDS_FETCH_FAILURE: O,
  GUILD_JOIN: y,
  GUILD_DELETE: y,
  GUILD_MEMBER_ADD: D,
  GUILD_MEMBER_REMOVE: D,
  GUILD_MEMBER_UPDATE: x,
  USER_UPDATE: x,
  LOGOUT: N
}), f(this, 'loadCache', () => {
  let e = this.readSnapshot(k.LATEST_SNAPSHOT_VERSION);
  null != e && e.forEach(e => {
    let {
      userId: t,
      profile: n
    } = e;
    m[t] = n;
  });
});
  }
}
f(k, 'displayName', 'UserProfileStore'), f(k, 'LATEST_SNAPSHOT_VERSION', 1), t.Z = new k();