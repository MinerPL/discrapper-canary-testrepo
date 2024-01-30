"use strict";
l.r(i), l.d(i, {
  default: function() {
    return H
  }
}), l("222007"), l("702976");
var t = l("917351"),
  n = l.n(t),
  r = l("376556"),
  u = l("915639"),
  o = l("766274"),
  d = l("271938"),
  s = l("305961"),
  a = l("824563"),
  c = l("455079"),
  f = l("677099");
let m = new Set,
  _ = new Set,
  p = {},
  g = {},
  h = {},
  v = {},
  b = {},
  P = !1,
  E = !1;

function S() {
  m.clear(), _.clear(), p = {}, g = {}, h = {}, v = {}, b = {}, P = !1
}

function I(e) {
  let {
    userId: i
  } = e;
  _.add(i)
}

function U(e) {
  let {
    userId: i
  } = e;
  _.delete(i)
}

function C(e) {
  _.delete(e.userId), h[e.userId] = n(e.mutualFriends).map(e => ({
    key: e.id,
    user: new o.default(e),
    status: a.default.getStatus(e.id)
  })).sortBy(e => {
    let {
      user: i
    } = e;
    return i.username.toLowerCase()
  }).value(), v[e.userId] = e.mutualFriends.length
}

function T() {
  if (0 === Object.keys(b).length) return !1;
  b = {}
}

function F(e) {
  if (null == b[e.user.id]) return !1;
  delete b[e.user.id]
}

function y(e) {
  var i, l, t, n, u, o, d, a, c, _, h, P, E, S, I, U, C;
  if (m.delete(e.user.id), null != e.mutual_guilds) {
    let i = {};
    e.mutual_guilds.forEach(e => {
      let {
        id: l,
        nick: t
      } = e, n = s.default.getGuild(l);
      null != n && (i[l] = {
        guild: n,
        nick: t
      })
    }), b[e.user.id] = f.default.getFlattenedGuildIds().filter(e => null != i[e]).map(e => ({
      guild: i[e].guild,
      nick: i[e].nick
    }))
  }
  if (null != e.mutual_friends_count) {
    let i = e.mutual_friends_count;
    v[e.user.id] = i
  }
  let T = null !== (c = e.premium_since) && void 0 !== c ? c : null,
    F = e.application;
  if (p[e.user.id] = {
      userId: e.user.id,
      banner: null === (i = e.user_profile) || void 0 === i ? void 0 : i.banner,
      accentColor: null === (l = e.user_profile) || void 0 === l ? void 0 : l.accent_color,
      themeColors: null === (t = e.user_profile) || void 0 === t ? void 0 : t.theme_colors,
      popoutAnimationParticleType: null === (n = e.user_profile) || void 0 === n ? void 0 : n.popout_animation_particle_type,
      bio: null !== (_ = null === (u = e.user_profile) || void 0 === u ? void 0 : u.bio) && void 0 !== _ ? _ : "",
      profileEffectId: null === (d = e.user_profile) || void 0 === d ? void 0 : null === (o = d.profile_effect) || void 0 === o ? void 0 : o.id,
      pronouns: null !== (h = null === (a = e.user_profile) || void 0 === a ? void 0 : a.pronouns) && void 0 !== h ? h : "",
      connectedAccounts: null !== (P = e.connected_accounts.filter(e => r.default.isSupported(e.type))) && void 0 !== P ? P : [],
      applicationRoleConnections: null !== (E = e.application_role_connections) && void 0 !== E ? E : [],
      premiumSince: null != T ? new Date(T) : null,
      premiumType: e.premium_type,
      premiumGuildSince: null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
      lastFetched: Date.now(),
      legacyUsername: e.legacy_username,
      profileFetchFailed: !1,
      application: null != F ? {
        id: F.id,
        primarySkuId: F.primary_sku_id,
        customInstallUrl: F.custom_install_url,
        installParams: F.install_params,
        flags: F.flags,
        popularApplicationCommandIds: F.popular_application_command_ids
      } : null,
      badges: e.badges
    }, null != e.guild_member_profile) {
    let i = {
      userId: e.user.id,
      guildId: e.guild_member_profile.guild_id,
      banner: e.guild_member_profile.banner,
      accentColor: e.guild_member_profile.accent_color,
      themeColors: null === (S = e.guild_member_profile) || void 0 === S ? void 0 : S.theme_colors,
      popoutAnimationParticleType: null === (I = e.guild_member_profile) || void 0 === I ? void 0 : I.popout_animation_particle_type,
      profileEffectId: null === (C = e.guild_member_profile) || void 0 === C ? void 0 : null === (U = C.profile_effect) || void 0 === U ? void 0 : U.id,
      bio: e.guild_member_profile.bio,
      pronouns: e.guild_member_profile.pronouns,
      badges: e.guild_badges
    };
    null != g[e.user.id] ? g[e.user.id][e.guild_member_profile.guild_id] = i : g[e.user.id] = {
      [e.guild_member_profile.guild_id]: i
    }
  }
}

function A(e) {
  let {
    userId: i
  } = e;
  m.add(i)
}

function R(e) {
  var i;
  let {
    userId: l
  } = e;
  p[l] = null !== (i = p[l]) && void 0 !== i ? i : {
    connectedAccounts: [],
    applicationRoleConnections: [],
    premiumSince: null,
    premiumGuildSince: null,
    lastFetched: Date.now(),
    profileFetchFailed: !0,
    application: null,
    legacyUsername: null,
    userId: l,
    banner: null,
    accentColor: null,
    bio: "",
    pronouns: ""
  }, m.delete(l)
}

function M(e) {
  P = !0
}

function L(e) {
  P = !1, null != e.guild_id ? ! function(e) {
    let {
      userId: i,
      guild_id: l,
      accent_color: t,
      banner: n,
      bio: r,
      pronouns: u,
      popout_animation_particle_type: o,
      theme_colors: d,
      profileEffectId: s
    } = e;
    if (null == l || null == g[i]) return !1;
    let a = g[i][l];
    if (null == a) return !1;
    g[i][l] = {
      ...a,
      accentColor: t,
      banner: n,
      bio: r,
      pronouns: u,
      popoutAnimationParticleType: o,
      themeColors: d,
      profileEffectId: s
    }
  }(e) : ! function(e) {
    let {
      userId: i,
      accent_color: l,
      banner: t,
      bio: n,
      pronouns: r,
      popout_animation_particle_type: u,
      theme_colors: o,
      profileEffectId: d
    } = e, s = p[i];
    if (null == s) return !1;
    p[i] = {
      ...s,
      accentColor: l,
      banner: t,
      bio: n,
      pronouns: r,
      popoutAnimationParticleType: u,
      themeColors: o,
      profileEffectId: d
    }
  }(e)
}

function D(e) {
  P = !1
}

function G(e) {
  E = !0
}

function w(e) {
  let {
    user: i
  } = e;
  if (m.has(i.id) || null == p[i.id]) return !1;
  p[i.id].lastFetched = 0
}

function O() {
  m.clear(), p = {}, g = {}
}
class B extends c.default {
  isFetchingProfile(e) {
    return m.has(e)
  }
  isFetchingFriends(e) {
    return _.has(e)
  }
  get isSubmitting() {
    return P
  }
  getUserProfile(e) {
    return p[e]
  }
  getGuildMemberProfile(e, i) {
    var l;
    return null == i ? null : null === (l = g[e]) || void 0 === l ? void 0 : l[i]
  }
  getMutualFriends(e) {
    return h[e]
  }
  getMutualFriendsCount(e) {
    return v[e]
  }
  getMutualGuilds(e) {
    return b[e]
  }
  getIsAccessibilityTooltipViewed() {
    return E
  }
  takeSnapshot() {
    let e = d.default.getId();
    return {
      version: B.LATEST_SNAPSHOT_VERSION,
      data: [{
        userId: e,
        profile: p[e]
      }]
    }
  }
  constructor() {
    super(), this.loadCache = () => {
      let e = this.readSnapshot(B.LATEST_SNAPSHOT_VERSION);
      null != e && e.forEach(e => {
        let {
          userId: i,
          profile: l
        } = e;
        p[i] = l
      })
    }, this.registerActionHandlers({
      CACHE_LOADED_LAZY: this.loadCache,
      USER_PROFILE_FETCH_START: A,
      USER_PROFILE_FETCH_FAILURE: R,
      USER_PROFILE_FETCH_SUCCESS: y,
      USER_PROFILE_UPDATE_START: M,
      USER_PROFILE_UPDATE_SUCCESS: L,
      USER_PROFILE_UPDATE_FAILURE: D,
      USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED: G,
      MUTUAL_FRIENDS_FETCH_START: I,
      MUTUAL_FRIENDS_FETCH_SUCCESS: C,
      MUTUAL_FRIENDS_FETCH_FAILURE: U,
      GUILD_JOIN: T,
      GUILD_DELETE: T,
      GUILD_MEMBER_ADD: F,
      GUILD_MEMBER_REMOVE: F,
      GUILD_MEMBER_UPDATE: w,
      USER_UPDATE: w,
      LOGOUT: S
    }), this.waitFor(f.default), this.syncWith([u.default], O)
  }
}
B.displayName = "UserProfileStore", B.LATEST_SNAPSHOT_VERSION = 1;
var H = new B