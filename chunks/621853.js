n(47120), n(789020);
var r = n(392711),
  i = n.n(r),
  a = n(726542),
  o = n(706454),
  s = n(598077),
  l = n(314897),
  u = n(430824),
  c = n(158776),
  d = n(412788),
  _ = n(771845);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let f = new Set(),
  h = new Set(),
  p = {},
  m = {},
  I = {},
  T = {},
  g = {},
  S = !1;

function A() {
  f.clear(), h.clear(), p = {}, m = {}, I = {}, T = {}, g = {}, S = !1;
}

function N(e) {
  let {
userId: t
  } = e;
  h.add(t);
}

function v(e) {
  let {
userId: t
  } = e;
  h.delete(t);
}

function O(e) {
  return i()(e).map(e => ({
key: e.id,
user: new s.Z(e),
status: c.Z.getStatus(e.id)
  })).sortBy(e => {
let {
  user: t
} = e;
return t.username.toLowerCase();
  }).value();
}

function R(e) {
  h.delete(e.userId), I[e.userId] = O(e.mutualFriends), T[e.userId] = e.mutualFriends.length;
}

function C() {
  if (0 === Object.keys(g).length)
return !1;
  g = {};
}

function y(e) {
  if (null == g[e.user.id])
return !1;
  delete g[e.user.id];
}

function D(e) {
  var t, n, r, i, o, s, l, c, d, E, h, S, A, N, v, R, C;
  if (f.delete(e.user.id), null != e.mutual_guilds) {
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
}), g[e.user.id] = _.ZP.getFlattenedGuildIds().filter(e => null != t[e]).map(e => ({
  guild: t[e].guild,
  nick: t[e].nick
}));
  }
  if (null != e.mutual_friends_count) {
let t = e.mutual_friends_count;
T[e.user.id] = t;
  }
  null != e.mutual_friends && (I[e.user.id] = O(e.mutual_friends), T[e.user.id] = e.mutual_friends.length);
  let y = null !== (d = e.premium_since) && void 0 !== d ? d : null,
D = e.application;
  if (p[e.user.id] = {
  userId: e.user.id,
  banner: null === (t = e.user_profile) || void 0 === t ? void 0 : t.banner,
  accentColor: null === (n = e.user_profile) || void 0 === n ? void 0 : n.accent_color,
  themeColors: null === (r = e.user_profile) || void 0 === r ? void 0 : r.theme_colors,
  popoutAnimationParticleType: null === (i = e.user_profile) || void 0 === i ? void 0 : i.popout_animation_particle_type,
  bio: null !== (E = null === (o = e.user_profile) || void 0 === o ? void 0 : o.bio) && void 0 !== E ? E : '',
  profileEffectId: null === (l = e.user_profile) || void 0 === l ? void 0 : null === (s = l.profile_effect) || void 0 === s ? void 0 : s.id,
  pronouns: null !== (h = null === (c = e.user_profile) || void 0 === c ? void 0 : c.pronouns) && void 0 !== h ? h : '',
  connectedAccounts: null !== (S = e.connected_accounts.filter(e => a.Z.isSupported(e.type))) && void 0 !== S ? S : [],
  applicationRoleConnections: null !== (A = e.application_role_connections) && void 0 !== A ? A : [],
  premiumSince: null != y ? new Date(y) : null,
  premiumType: e.premium_type,
  premiumGuildSince: null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
  lastFetched: Date.now(),
  legacyUsername: e.legacy_username,
  profileFetchFailed: !1,
  application: null != D ? {
    id: D.id,
    primarySkuId: D.primary_sku_id,
    customInstallUrl: D.custom_install_url,
    installParams: D.install_params,
    integrationTypesConfig: D.integration_types_config,
    flags: D.flags,
    popularApplicationCommandIds: D.popular_application_command_ids,
    storefront_available: D.storefront_available
  } : null,
  badges: e.badges
}, null != e.guild_member_profile) {
let t = {
  userId: e.user.id,
  guildId: e.guild_member_profile.guild_id,
  banner: e.guild_member_profile.banner,
  accentColor: e.guild_member_profile.accent_color,
  themeColors: null === (N = e.guild_member_profile) || void 0 === N ? void 0 : N.theme_colors,
  popoutAnimationParticleType: null === (v = e.guild_member_profile) || void 0 === v ? void 0 : v.popout_animation_particle_type,
  profileEffectId: null === (C = e.guild_member_profile) || void 0 === C ? void 0 : null === (R = C.profile_effect) || void 0 === R ? void 0 : R.id,
  bio: e.guild_member_profile.bio,
  pronouns: e.guild_member_profile.pronouns,
  badges: e.guild_badges
};
null != m[e.user.id] ? m[e.user.id][e.guild_member_profile.guild_id] = t : m[e.user.id] = {
  [e.guild_member_profile.guild_id]: t
};
  }
}

function L(e) {
  let {
userId: t
  } = e;
  f.add(t);
}

function b(e) {
  var t;
  let {
userId: n
  } = e;
  p[n] = null !== (t = p[n]) && void 0 !== t ? t : {
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
  }, f.delete(n);
}

function M(e) {
  S = !0;
}

function P(e) {
  S = !1, null != e.guild_id ? ! function(e) {
let {
  userId: t,
  guild_id: n,
  accent_color: r,
  banner: i,
  bio: a,
  pronouns: o,
  popout_animation_particle_type: s,
  theme_colors: l,
  profileEffectId: u
} = e;
if (null == n || null == m[t])
  return !1;
let c = m[t][n];
if (null == c)
  return !1;
m[t][n] = {
  ...c,
  accentColor: r,
  banner: i,
  bio: a,
  pronouns: o,
  popoutAnimationParticleType: s,
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
  popout_animation_particle_type: o,
  theme_colors: s,
  profileEffectId: l
} = e, u = p[t];
if (null == u)
  return !1;
p[t] = {
  ...u,
  accentColor: n,
  banner: r,
  bio: i,
  pronouns: a,
  popoutAnimationParticleType: o,
  themeColors: s,
  profileEffectId: l
};
  }(e);
}

function U(e) {
  S = !1;
}

function w(e) {
  let {
user: t
  } = e;
  if (f.has(t.id) || null == p[t.id])
return !1;
  p[t.id].lastFetched = 0;
}

function x() {
  f.clear(), p = {}, m = {};
}
class G extends d.Z {
  initialize() {
this.waitFor(_.ZP), this.syncWith([o.default], x);
  }
  isFetchingProfile(e) {
return f.has(e);
  }
  isFetchingFriends(e) {
return h.has(e);
  }
  get isSubmitting() {
return S;
  }
  getUserProfile(e) {
return p[e];
  }
  getGuildMemberProfile(e, t) {
var n;
return null == t ? null : null === (n = m[e]) || void 0 === n ? void 0 : n[t];
  }
  getMutualFriends(e) {
return I[e];
  }
  getMutualFriendsCount(e) {
return T[e];
  }
  getMutualGuilds(e) {
return g[e];
  }
  takeSnapshot() {
let e = l.default.getId();
return {
  version: G.LATEST_SNAPSHOT_VERSION,
  data: [{
    userId: e,
    profile: p[e]
  }]
};
  }
  constructor() {
super({
  CACHE_LOADED_LAZY: () => this.loadCache(),
  USER_PROFILE_FETCH_START: L,
  USER_PROFILE_FETCH_FAILURE: b,
  USER_PROFILE_FETCH_SUCCESS: D,
  USER_PROFILE_UPDATE_START: M,
  USER_PROFILE_UPDATE_SUCCESS: P,
  USER_PROFILE_UPDATE_FAILURE: U,
  MUTUAL_FRIENDS_FETCH_START: N,
  MUTUAL_FRIENDS_FETCH_SUCCESS: R,
  MUTUAL_FRIENDS_FETCH_FAILURE: v,
  GUILD_JOIN: C,
  GUILD_DELETE: C,
  GUILD_MEMBER_ADD: y,
  GUILD_MEMBER_REMOVE: y,
  GUILD_MEMBER_UPDATE: w,
  USER_UPDATE: w,
  LOGOUT: A
}), E(this, 'loadCache', () => {
  let e = this.readSnapshot(G.LATEST_SNAPSHOT_VERSION);
  null != e && e.forEach(e => {
    let {
      userId: t,
      profile: n
    } = e;
    p[t] = n;
  });
});
  }
}
E(G, 'displayName', 'UserProfileStore'), E(G, 'LATEST_SNAPSHOT_VERSION', 1), t.Z = new G();