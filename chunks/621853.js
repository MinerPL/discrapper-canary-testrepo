n(47120), n(789020);
var r = n(392711),
    i = n.n(r),
    a = n(846519),
    s = n(726542),
    o = n(706454),
    l = n(598077),
    u = n(314897),
    c = n(430824),
    d = n(158776),
    f = n(412788),
    _ = n(771845),
    h = n(291175),
    p = n(215023),
    m = n(388032);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let E = Symbol('NO GUILD ID'),
    v = new Map(),
    I = new Set(),
    S = new Map(),
    T = new Map(),
    b = new Map(),
    y = new Map(),
    A = new Map(),
    N = new Map(),
    C = new Map(),
    R = !1;
function O(e) {
    let t = S.get(e);
    if ((null == t ? void 0 : t.profileEffectExpiresAt) == null) return;
    let n = 1000 * t.profileEffectExpiresAt + p.Cm - Date.now();
    if (n <= 0) (t.profileEffectId = void 0), (t.profileEffectExpiresAt = void 0), b.delete(e), q.emitChange();
    else {
        let t = b.get(e);
        if (null == t) return;
        t.start(Math.min(2147483647, n), () => O(e));
    }
}
function D(e, t) {
    let n = T.get(e);
    if (null == n) return;
    let r = n.get(t);
    if ((null == r ? void 0 : r.profileEffectExpiresAt) == null) return;
    let i = y.get(e),
        a = 1000 * r.profileEffectExpiresAt + p.Cm - Date.now();
    if (a <= 0)
        n.set(t, {
            ...r,
            profileEffectId: void 0,
            profileEffectExpiresAt: void 0
        }),
            null != i && i.delete(t),
            q.emitChange();
    else {
        if (null == i) return;
        let n = i.get(t);
        if (null == n) return;
        n.start(Math.min(2147483647, a), () => D(e, t));
    }
}
function L() {
    v.clear(), I.clear(), S.clear(), T.clear(), A.clear(), N.clear(), C.clear(), (R = !1);
}
function x(e) {
    let { userId: t } = e;
    I.add(t);
}
function w(e) {
    let { userId: t } = e;
    I.delete(t);
}
function M(e) {
    return i()(e)
        .map((e) => ({
            key: e.id,
            user: new l.Z(e),
            status: d.Z.getStatus(e.id)
        }))
        .sortBy((e) => {
            let { user: t } = e;
            return t.username.toLowerCase();
        })
        .value();
}
function P(e) {
    I.delete(e.userId), A.set(e.userId, M(e.mutualFriends)), N.set(e.userId, e.mutualFriends.length);
}
function k(e) {
    var t, n, r, i, o, l, u, d, f, p, g, I, R, L, x, w, P, k, U, G, B, Z, F, V, j, H, Y;
    let W = null !== (x = null === (t = e.guild_member_profile) || void 0 === t ? void 0 : t.guild_id) && void 0 !== x ? x : E;
    if ((null === (n = v.get(e.user.id)) || void 0 === n || n.delete(W), null != e.mutual_guilds)) {
        let t = {};
        e.mutual_guilds.forEach((e) => {
            let { id: n, nick: r } = e,
                i = c.Z.getGuild(n);
            null != i &&
                (t[n] = {
                    guild: i,
                    nick: r
                });
        }),
            C.set(
                e.user.id,
                _.ZP.getFlattenedGuildIds()
                    .filter((e) => null != t[e])
                    .map((e) => ({
                        guild: t[e].guild,
                        nick: t[e].nick
                    }))
            );
    }
    if (null != e.mutual_friends_count) {
        let t = e.mutual_friends_count;
        N.set(e.user.id, t);
    }
    null != e.mutual_friends && (A.set(e.user.id, M(e.mutual_friends)), N.set(e.user.id, e.mutual_friends.length));
    let K = null != e.premium_since ? new Date(e.premium_since) : null,
        z = null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
        q = e.application;
    if (
        (S.set(e.user.id, {
            userId: e.user.id,
            banner: null === (r = e.user_profile) || void 0 === r ? void 0 : r.banner,
            accentColor: null === (i = e.user_profile) || void 0 === i ? void 0 : i.accent_color,
            themeColors: null === (o = e.user_profile) || void 0 === o ? void 0 : o.theme_colors,
            popoutAnimationParticleType: null === (l = e.user_profile) || void 0 === l ? void 0 : l.popout_animation_particle_type,
            bio: null !== (w = null === (u = e.user_profile) || void 0 === u ? void 0 : u.bio) && void 0 !== w ? w : '',
            profileEffectId: null === (f = e.user_profile) || void 0 === f ? void 0 : null === (d = f.profile_effect) || void 0 === d ? void 0 : d.id,
            profileEffectExpiresAt: null === (g = e.user_profile) || void 0 === g ? void 0 : null === (p = g.profile_effect) || void 0 === p ? void 0 : p.expires_at,
            pronouns: null !== (P = null === (I = e.user_profile) || void 0 === I ? void 0 : I.pronouns) && void 0 !== P ? P : '',
            connectedAccounts: null !== (k = e.connected_accounts.filter((e) => s.Z.isSupported(e.type))) && void 0 !== k ? k : [],
            applicationRoleConnections: null !== (U = e.application_role_connections) && void 0 !== U ? U : [],
            premiumSince: K,
            premiumType: e.premium_type,
            premiumGuildSince: z,
            lastFetched: Date.now(),
            legacyUsername: e.legacy_username,
            application:
                null != q
                    ? {
                          id: q.id,
                          primarySkuId: q.primary_sku_id,
                          customInstallUrl: q.custom_install_url,
                          installParams: q.install_params,
                          integrationTypesConfig: q.integration_types_config,
                          flags: q.flags,
                          popularApplicationCommandIds: q.popular_application_command_ids,
                          storefront_available: q.storefront_available,
                          name: q.name
                      }
                    : null,
            badges:
                null != e.badges
                    ? e.badges.map((e) => {
                          if ('premium' === e.id && null != K)
                              return {
                                  ...e,
                                  description: m.intl.formatToPlainString(m.t['8zbGNT'], { date: K })
                              };
                          let t = (0, h.gn)(e.id);
                          return null != t && null != K
                              ? {
                                    ...e,
                                    description: (0, h.sZ)(t, K)
                                }
                              : e.id.startsWith('guild_booster_lvl') && null != z
                                ? {
                                      ...e,
                                      description: m.intl.formatToPlainString(m.t.IWkAq6, { date: z })
                                  }
                                : e;
                      })
                    : e.badges
        }),
        (null === (L = e.user_profile) || void 0 === L ? void 0 : null === (R = L.profile_effect) || void 0 === R ? void 0 : R.expires_at) != null)
    ) {
        let t = new a.V7();
        b.set(e.user.id, t), O(e.user.id);
    }
    if (null != e.guild_member_profile) {
        let t = {
                userId: e.user.id,
                guildId: e.guild_member_profile.guild_id,
                banner: e.guild_member_profile.banner,
                accentColor: e.guild_member_profile.accent_color,
                themeColors: null === (G = e.guild_member_profile) || void 0 === G ? void 0 : G.theme_colors,
                popoutAnimationParticleType: null === (B = e.guild_member_profile) || void 0 === B ? void 0 : B.popout_animation_particle_type,
                profileEffectId: null === (F = e.guild_member_profile) || void 0 === F ? void 0 : null === (Z = F.profile_effect) || void 0 === Z ? void 0 : Z.id,
                profileEffectExpiresAt: null === (j = e.guild_member_profile) || void 0 === j ? void 0 : null === (V = j.profile_effect) || void 0 === V ? void 0 : V.expires_at,
                bio: e.guild_member_profile.bio,
                pronouns: e.guild_member_profile.pronouns,
                badges: e.guild_badges
            },
            n = T.get(e.user.id);
        if (null != n) n.set(e.guild_member_profile.guild_id, t);
        else {
            let n = new Map();
            n.set(e.guild_member_profile.guild_id, t), T.set(e.user.id, n);
        }
        if ((null === (Y = e.guild_member_profile) || void 0 === Y ? void 0 : null === (H = Y.profile_effect) || void 0 === H ? void 0 : H.expires_at) != null) {
            let t = new a.V7(),
                n = y.get(e.user.id);
            if (null != n) n.set(e.guild_member_profile.guild_id, t);
            else {
                let n = new Map();
                n.set(e.guild_member_profile.guild_id, t), y.set(e.user.id, n);
            }
            D(e.user.id, e.guild_member_profile.guild_id);
        }
    }
}
function U(e) {
    let { userId: t, guildId: n } = e,
        r = null != n ? n : E,
        i = v.get(t);
    if (null != i) i.add(r);
    else {
        let e = new Set();
        e.add(r), v.set(t, e);
    }
}
function G(e) {
    var t, n;
    let { userId: r, guildId: i, apiError: a } = e;
    null === (t = v.get(r)) || void 0 === t || t.delete(null != i ? i : E);
    let s =
        null !== (n = S.get(r)) && void 0 !== n
            ? n
            : {
                  connectedAccounts: [],
                  applicationRoleConnections: [],
                  premiumSince: null,
                  premiumGuildSince: null,
                  application: null,
                  legacyUsername: null,
                  userId: r,
                  banner: null,
                  accentColor: null,
                  bio: '',
                  pronouns: '',
                  premiumType: null,
                  lastFetched: 0,
                  fetchError: void 0
              };
    (s.lastFetched = Date.now()), (s.fetchError = a), S.set(r, s);
}
function B(e) {
    R = !0;
}
function Z(e) {
    (R = !1),
        null != e.guild_id
            ? !(function (e) {
                  let { userId: t, guild_id: n, accent_color: r, banner: i, bio: s, pronouns: o, popout_animation_particle_type: l, theme_colors: u, profileEffectId: c, profileEffectExpiresAt: d } = e,
                      f = T.get(t);
                  if (null == n || null == f) return !1;
                  let _ = f.get(n);
                  if (null == _) return !1;
                  if (
                      (f.set(n, {
                          ..._,
                          accentColor: r,
                          banner: i,
                          bio: s,
                          pronouns: o,
                          popoutAnimationParticleType: l,
                          themeColors: u,
                          profileEffectId: c,
                          profileEffectExpiresAt: d
                      }),
                      null != d)
                  ) {
                      let e = new a.V7(),
                          r = y.get(t);
                      if (null != r) r.set(n, e);
                      else {
                          let r = new Map();
                          r.set(n, e), y.set(t, r);
                      }
                      D(t, n);
                  }
              })(e)
            : !(function (e) {
                  let { userId: t, accent_color: n, banner: r, bio: i, pronouns: s, popout_animation_particle_type: o, theme_colors: l, profileEffectId: u, profileEffectExpiresAt: c } = e,
                      d = S.get(t);
                  if (null == d) return !1;
                  if (
                      (S.set(t, {
                          ...d,
                          accentColor: n,
                          banner: r,
                          bio: i,
                          pronouns: s,
                          popoutAnimationParticleType: o,
                          themeColors: l,
                          profileEffectId: u,
                          profileEffectExpiresAt: c
                      }),
                      null != c)
                  ) {
                      let e = new a.V7();
                      b.set(t, e), O(t);
                  }
              })(e);
}
function F(e) {
    R = !1;
}
function V(e) {
    var t, n;
    let r = e.user.id,
        i = S.get(r);
    if (null == i || (null !== (n = null === (t = v.get(r)) || void 0 === t ? void 0 : t.size) && void 0 !== n ? n : 0) > 0) return !1;
    K(i);
}
function j(e) {
    if (C.size < 1 && S.size < 1) return !1;
    for (let e of (C.clear(), S.values())) K(e);
}
function H(e) {
    let t = e.user.id,
        n = S.get(t);
    if (null == C.get(t) && null == n) return !1;
    C.delete(t), K(n);
}
function Y(e) {
    let t = e.relationship.id,
        n = S.get(t);
    if (!A.has(t) && !N.has(t) && null == n) return !1;
    A.delete(t), N.delete(t), K(n);
}
function W() {
    v.clear(), S.clear(), T.clear();
}
function K(e) {
    null != e && ((e.lastFetched = 0), (e.fetchError = void 0));
}
class z extends f.Z {
    initialize() {
        this.waitFor(_.ZP), this.syncWith([o.default], W);
    }
    isFetchingProfile(e, t) {
        let n = v.get(e);
        return null != n && n.has(null != t ? t : E);
    }
    isFetchingFriends(e) {
        return I.has(e);
    }
    get isSubmitting() {
        return R;
    }
    getUserProfile(e) {
        return S.get(e);
    }
    getGuildMemberProfile(e, t) {
        var n, r;
        return null == t ? null : null !== (r = null === (n = T.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== r ? r : null;
    }
    getMutualFriends(e) {
        return A.get(e);
    }
    getMutualFriendsCount(e) {
        return N.get(e);
    }
    getMutualGuilds(e) {
        return C.get(e);
    }
    takeSnapshot() {
        let e = u.default.getId(),
            t = S.get(e);
        return null != t
            ? {
                  version: z.LATEST_SNAPSHOT_VERSION,
                  data: [
                      {
                          userId: e,
                          profile: t
                      }
                  ]
              }
            : {
                  version: z.LATEST_SNAPSHOT_VERSION,
                  data: []
              };
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: U,
            USER_PROFILE_FETCH_FAILURE: G,
            USER_PROFILE_FETCH_SUCCESS: k,
            USER_PROFILE_UPDATE_START: B,
            USER_PROFILE_UPDATE_SUCCESS: Z,
            USER_PROFILE_UPDATE_FAILURE: F,
            MUTUAL_FRIENDS_FETCH_START: x,
            MUTUAL_FRIENDS_FETCH_SUCCESS: P,
            MUTUAL_FRIENDS_FETCH_FAILURE: w,
            USER_UPDATE: V,
            GUILD_MEMBER_UPDATE: V,
            GUILD_JOIN: j,
            GUILD_DELETE: j,
            GUILD_MEMBER_ADD: H,
            GUILD_MEMBER_REMOVE: H,
            RELATIONSHIP_ADD: Y,
            RELATIONSHIP_REMOVE: Y,
            RELATIONSHIP_UPDATE: Y,
            LOGOUT: L
        }),
            g(this, 'loadCache', () => {
                let e = this.readSnapshot(z.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: t, profile: n } = e;
                        null != t && (null != n ? S.set(t, n) : S.delete(t));
                    });
            });
    }
}
g(z, 'displayName', 'UserProfileStore'), g(z, 'LATEST_SNAPSHOT_VERSION', 1);
let q = new z();
t.Z = q;
