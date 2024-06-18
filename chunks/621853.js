"use strict";
n(47120), n(789020);
var i = n(392711),
  r = n.n(i),
  s = n(726542),
  o = n(706454),
  a = n(598077),
  l = n(314897),
  u = n(430824),
  _ = n(158776),
  d = n(412788),
  c = n(771845);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let I = new Set,
  T = new Set,
  h = {},
  S = {},
  f = {},
  N = {},
  A = {},
  m = !1;

function O() {
  I.clear(), T.clear(), h = {}, S = {}, f = {}, N = {}, A = {}, m = !1
}

function R(e) {
  let {
    userId: t
  } = e;
  T.add(t)
}

function C(e) {
  let {
    userId: t
  } = e;
  T.delete(t)
}

function p(e) {
  return r()(e).map(e => ({
    key: e.id,
    user: new a.Z(e),
    status: _.Z.getStatus(e.id)
  })).sortBy(e => {
    let {
      user: t
    } = e;
    return t.username.toLowerCase()
  }).value()
}

function g(e) {
  T.delete(e.userId), f[e.userId] = p(e.mutualFriends), N[e.userId] = e.mutualFriends.length
}

function L() {
  if (0 === Object.keys(A).length) return !1;
  A = {}
}

function v(e) {
  if (null == A[e.user.id]) return !1;
  delete A[e.user.id]
}

function D(e) {
  var t, n, i, r, o, a, l, _, d, E, T, m, O, R, C, g, L;
  if (I.delete(e.user.id), null != e.mutual_guilds) {
    let t = {};
    e.mutual_guilds.forEach(e => {
      let {
        id: n,
        nick: i
      } = e, r = u.Z.getGuild(n);
      null != r && (t[n] = {
        guild: r,
        nick: i
      })
    }), A[e.user.id] = c.ZP.getFlattenedGuildIds().filter(e => null != t[e]).map(e => ({
      guild: t[e].guild,
      nick: t[e].nick
    }))
  }
  if (null != e.mutual_friends_count) {
    let t = e.mutual_friends_count;
    N[e.user.id] = t
  }
  null != e.mutual_friends && (f[e.user.id] = p(e.mutual_friends), N[e.user.id] = e.mutual_friends.length);
  let v = null !== (d = e.premium_since) && void 0 !== d ? d : null,
    D = e.application;
  if (h[e.user.id] = {
      userId: e.user.id,
      banner: null === (t = e.user_profile) || void 0 === t ? void 0 : t.banner,
      accentColor: null === (n = e.user_profile) || void 0 === n ? void 0 : n.accent_color,
      themeColors: null === (i = e.user_profile) || void 0 === i ? void 0 : i.theme_colors,
      popoutAnimationParticleType: null === (r = e.user_profile) || void 0 === r ? void 0 : r.popout_animation_particle_type,
      bio: null !== (E = null === (o = e.user_profile) || void 0 === o ? void 0 : o.bio) && void 0 !== E ? E : "",
      profileEffectId: null === (l = e.user_profile) || void 0 === l ? void 0 : null === (a = l.profile_effect) || void 0 === a ? void 0 : a.id,
      pronouns: null !== (T = null === (_ = e.user_profile) || void 0 === _ ? void 0 : _.pronouns) && void 0 !== T ? T : "",
      connectedAccounts: null !== (m = e.connected_accounts.filter(e => s.Z.isSupported(e.type))) && void 0 !== m ? m : [],
      applicationRoleConnections: null !== (O = e.application_role_connections) && void 0 !== O ? O : [],
      premiumSince: null != v ? new Date(v) : null,
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
      themeColors: null === (R = e.guild_member_profile) || void 0 === R ? void 0 : R.theme_colors,
      popoutAnimationParticleType: null === (C = e.guild_member_profile) || void 0 === C ? void 0 : C.popout_animation_particle_type,
      profileEffectId: null === (L = e.guild_member_profile) || void 0 === L ? void 0 : null === (g = L.profile_effect) || void 0 === g ? void 0 : g.id,
      bio: e.guild_member_profile.bio,
      pronouns: e.guild_member_profile.pronouns,
      badges: e.guild_badges
    };
    null != S[e.user.id] ? S[e.user.id][e.guild_member_profile.guild_id] = t : S[e.user.id] = {
      [e.guild_member_profile.guild_id]: t
    }
  }
}

function M(e) {
  let {
    userId: t
  } = e;
  I.add(t)
}

function P(e) {
  var t;
  let {
    userId: n
  } = e;
  h[n] = null !== (t = h[n]) && void 0 !== t ? t : {
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
    bio: "",
    pronouns: ""
  }, I.delete(n)
}

function y(e) {
  m = !0
}

function U(e) {
  m = !1, null != e.guild_id ? ! function(e) {
    let {
      userId: t,
      guild_id: n,
      accent_color: i,
      banner: r,
      bio: s,
      pronouns: o,
      popout_animation_particle_type: a,
      theme_colors: l,
      profileEffectId: u
    } = e;
    if (null == n || null == S[t]) return !1;
    let _ = S[t][n];
    if (null == _) return !1;
    S[t][n] = {
      ..._,
      accentColor: i,
      banner: r,
      bio: s,
      pronouns: o,
      popoutAnimationParticleType: a,
      themeColors: l,
      profileEffectId: u
    }
  }(e) : ! function(e) {
    let {
      userId: t,
      accent_color: n,
      banner: i,
      bio: r,
      pronouns: s,
      popout_animation_particle_type: o,
      theme_colors: a,
      profileEffectId: l
    } = e, u = h[t];
    if (null == u) return !1;
    h[t] = {
      ...u,
      accentColor: n,
      banner: i,
      bio: r,
      pronouns: s,
      popoutAnimationParticleType: o,
      themeColors: a,
      profileEffectId: l
    }
  }(e)
}

function b(e) {
  m = !1
}

function G(e) {
  let {
    user: t
  } = e;
  if (I.has(t.id) || null == h[t.id]) return !1;
  h[t.id].lastFetched = 0
}

function w() {
  I.clear(), h = {}, S = {}
}
class k extends d.Z {
  initialize() {
    this.waitFor(c.ZP), this.syncWith([o.default], w)
  }
  isFetchingProfile(e) {
    return I.has(e)
  }
  isFetchingFriends(e) {
    return T.has(e)
  }
  get isSubmitting() {
    return m
  }
  getUserProfile(e) {
    return h[e]
  }
  getGuildMemberProfile(e, t) {
    var n;
    return null == t ? null : null === (n = S[e]) || void 0 === n ? void 0 : n[t]
  }
  getMutualFriends(e) {
    return f[e]
  }
  getMutualFriendsCount(e) {
    return N[e]
  }
  getMutualGuilds(e) {
    return A[e]
  }
  takeSnapshot() {
    let e = l.default.getId();
    return {
      version: k.LATEST_SNAPSHOT_VERSION,
      data: [{
        userId: e,
        profile: h[e]
      }]
    }
  }
  constructor() {
    super({
      CACHE_LOADED_LAZY: () => this.loadCache(),
      USER_PROFILE_FETCH_START: M,
      USER_PROFILE_FETCH_FAILURE: P,
      USER_PROFILE_FETCH_SUCCESS: D,
      USER_PROFILE_UPDATE_START: y,
      USER_PROFILE_UPDATE_SUCCESS: U,
      USER_PROFILE_UPDATE_FAILURE: b,
      MUTUAL_FRIENDS_FETCH_START: R,
      MUTUAL_FRIENDS_FETCH_SUCCESS: g,
      MUTUAL_FRIENDS_FETCH_FAILURE: C,
      GUILD_JOIN: L,
      GUILD_DELETE: L,
      GUILD_MEMBER_ADD: v,
      GUILD_MEMBER_REMOVE: v,
      GUILD_MEMBER_UPDATE: G,
      USER_UPDATE: G,
      LOGOUT: O
    }), E(this, "loadCache", () => {
      let e = this.readSnapshot(k.LATEST_SNAPSHOT_VERSION);
      null != e && e.forEach(e => {
        let {
          userId: t,
          profile: n
        } = e;
        h[t] = n
      })
    })
  }
}
E(k, "displayName", "UserProfileStore"), E(k, "LATEST_SNAPSHOT_VERSION", 1), t.Z = new k