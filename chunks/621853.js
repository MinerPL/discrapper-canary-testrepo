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
    _ = n(412788),
    E = n(771845),
    f = n(291175),
    h = n(215023),
    p = n(689938);
function I(e, t, n) {
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
let m = {},
    T = new Set(),
    S = {},
    g = {},
    A = {},
    N = {},
    O = {},
    R = {},
    v = {},
    C = !1;
function y(e) {
    let t = S[e];
    if ((null == t ? void 0 : t.profileEffectExpiresAt) == null) return;
    let n = 1000 * t.profileEffectExpiresAt + h.Cm - Date.now();
    if (n <= 0)
        (S[e] = {
            ...t,
            profileEffectId: void 0,
            profileEffectExpiresAt: void 0
        }),
            delete A[e],
            K.emitChange();
    else {
        let t = A[e];
        if (null == t) return;
        t.start(Math.min(2147483647, n), () => y(e));
    }
}
function L(e, t) {
    let n = g[e];
    if (null == n) return;
    let r = n[t];
    if ((null == r ? void 0 : r.profileEffectExpiresAt) == null) return;
    let i = 1000 * r.profileEffectExpiresAt + h.Cm - Date.now();
    if (i <= 0)
        (n[t] = {
            ...r,
            profileEffectId: void 0,
            profileEffectExpiresAt: void 0
        }),
            null != N[e] && delete N[e][t],
            K.emitChange();
    else {
        let n = N[e];
        if (null == n) return;
        let r = n[t];
        if (null == r) return;
        r.start(Math.min(2147483647, i), () => L(e, t));
    }
}
function D() {
    (m = {}), T.clear(), (S = {}), (g = {}), (O = {}), (R = {}), (v = {}), (C = !1);
}
function b(e) {
    let { userId: t } = e;
    T.add(t);
}
function M(e) {
    let { userId: t } = e;
    T.delete(t);
}
function P(e) {
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
function U(e) {
    T.delete(e.userId), (O[e.userId] = P(e.mutualFriends)), (R[e.userId] = e.mutualFriends.length);
}
function w(e) {
    var t, n, r, i, o, l, u, d, _, h, I, T, C, D, b, M, U, w, x, G, k, B, F, V, H, Z;
    if ((null === (n = m[e.user.id]) || void 0 === n || n.delete(null === (t = e.guild_member_profile) || void 0 === t ? void 0 : t.guild_id), null != e.mutual_guilds)) {
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
            (v[e.user.id] = E.ZP.getFlattenedGuildIds()
                .filter((e) => null != t[e])
                .map((e) => ({
                    guild: t[e].guild,
                    nick: t[e].nick
                })));
    }
    if (null != e.mutual_friends_count) {
        let t = e.mutual_friends_count;
        R[e.user.id] = t;
    }
    null != e.mutual_friends && ((O[e.user.id] = P(e.mutual_friends)), (R[e.user.id] = e.mutual_friends.length));
    let Y = null != e.premium_since ? new Date(e.premium_since) : null,
        j = null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
        W = e.application;
    if (
        ((S[e.user.id] = {
            userId: e.user.id,
            banner: null === (r = e.user_profile) || void 0 === r ? void 0 : r.banner,
            accentColor: null === (i = e.user_profile) || void 0 === i ? void 0 : i.accent_color,
            themeColors: null === (o = e.user_profile) || void 0 === o ? void 0 : o.theme_colors,
            popoutAnimationParticleType: null === (l = e.user_profile) || void 0 === l ? void 0 : l.popout_animation_particle_type,
            bio: null !== (b = null === (u = e.user_profile) || void 0 === u ? void 0 : u.bio) && void 0 !== b ? b : '',
            profileEffectId: null === (_ = e.user_profile) || void 0 === _ ? void 0 : null === (d = _.profile_effect) || void 0 === d ? void 0 : d.id,
            profileEffectExpiresAt: null === (I = e.user_profile) || void 0 === I ? void 0 : null === (h = I.profile_effect) || void 0 === h ? void 0 : h.expires_at,
            pronouns: null !== (M = null === (T = e.user_profile) || void 0 === T ? void 0 : T.pronouns) && void 0 !== M ? M : '',
            connectedAccounts: null !== (U = e.connected_accounts.filter((e) => s.Z.isSupported(e.type))) && void 0 !== U ? U : [],
            applicationRoleConnections: null !== (w = e.application_role_connections) && void 0 !== w ? w : [],
            premiumSince: Y,
            premiumType: e.premium_type,
            premiumGuildSince: j,
            lastFetched: Date.now(),
            legacyUsername: e.legacy_username,
            application:
                null != W
                    ? {
                          id: W.id,
                          primarySkuId: W.primary_sku_id,
                          customInstallUrl: W.custom_install_url,
                          installParams: W.install_params,
                          integrationTypesConfig: W.integration_types_config,
                          flags: W.flags,
                          popularApplicationCommandIds: W.popular_application_command_ids,
                          storefront_available: W.storefront_available
                      }
                    : null,
            badges:
                null != e.badges
                    ? e.badges.map((e) => {
                          if ('premium' === e.id && null != Y)
                              return {
                                  ...e,
                                  description: p.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: Y })
                              };
                          let t = (0, f.gn)(e.id);
                          return null != t && null != Y
                              ? {
                                    ...e,
                                    description: (0, f.sZ)(t, Y)
                                }
                              : e.id.startsWith('guild_booster_lvl') && null != j
                                ? {
                                      ...e,
                                      description: p.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({ date: j })
                                  }
                                : e;
                      })
                    : e.badges
        }),
        (null === (D = e.user_profile) || void 0 === D ? void 0 : null === (C = D.profile_effect) || void 0 === C ? void 0 : C.expires_at) != null)
    ) {
        let t = new a.V7();
        (A[e.user.id] = t), y(e.user.id);
    }
    if (null != e.guild_member_profile) {
        let t = {
            userId: e.user.id,
            guildId: e.guild_member_profile.guild_id,
            banner: e.guild_member_profile.banner,
            accentColor: e.guild_member_profile.accent_color,
            themeColors: null === (x = e.guild_member_profile) || void 0 === x ? void 0 : x.theme_colors,
            popoutAnimationParticleType: null === (G = e.guild_member_profile) || void 0 === G ? void 0 : G.popout_animation_particle_type,
            profileEffectId: null === (B = e.guild_member_profile) || void 0 === B ? void 0 : null === (k = B.profile_effect) || void 0 === k ? void 0 : k.id,
            profileEffectExpiresAt: null === (V = e.guild_member_profile) || void 0 === V ? void 0 : null === (F = V.profile_effect) || void 0 === F ? void 0 : F.expires_at,
            bio: e.guild_member_profile.bio,
            pronouns: e.guild_member_profile.pronouns,
            badges: e.guild_badges
        };
        if ((null != g[e.user.id] ? (g[e.user.id][e.guild_member_profile.guild_id] = t) : (g[e.user.id] = { [e.guild_member_profile.guild_id]: t }), (null === (Z = e.guild_member_profile) || void 0 === Z ? void 0 : null === (H = Z.profile_effect) || void 0 === H ? void 0 : H.expires_at) != null)) {
            let t = new a.V7();
            (N[e.user.id][e.guild_member_profile.guild_id] = t), L(e.user.id, e.guild_member_profile.guild_id);
        }
    }
}
function x(e) {
    var t;
    let { userId: n, guildId: r } = e;
    (m[n] = null !== (t = m[n]) && void 0 !== t ? t : new Set()), m[n].add(r);
}
function G(e) {
    var t, n;
    let { userId: r, guildId: i, apiError: a } = e;
    null === (t = m[r]) || void 0 === t || t.delete(i);
    let s =
        null !== (n = S[r]) && void 0 !== n
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
                  pronouns: ''
              };
    S[r] = {
        ...s,
        lastFetched: Date.now(),
        fetchError: a
    };
}
function k(e) {
    C = !0;
}
function B(e) {
    (C = !1),
        null != e.guild_id
            ? !(function (e) {
                  let { userId: t, guild_id: n, accent_color: r, banner: i, bio: s, pronouns: o, popout_animation_particle_type: l, theme_colors: u, profileEffectId: c, profileEffectExpiresAt: d } = e;
                  if (null == n || null == g[t]) return !1;
                  let _ = g[t][n];
                  if (null == _) return !1;
                  if (
                      ((g[t][n] = {
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
                      let e = new a.V7();
                      null != N[t] ? (N[t][n] = e) : (N[t] = { [n]: e }), L(t, n);
                  }
              })(e)
            : !(function (e) {
                  let { userId: t, accent_color: n, banner: r, bio: i, pronouns: s, popout_animation_particle_type: o, theme_colors: l, profileEffectId: u, profileEffectExpiresAt: c } = e,
                      d = S[t];
                  if (null == d) return !1;
                  if (
                      ((S[t] = {
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
                      (A[t] = e), y(t);
                  }
              })(e);
}
function F(e) {
    C = !1;
}
function V(e) {
    let t = e.user.id;
    if (null == S[t] || (null != m[t] && m[t].size > 0)) return !1;
    (S[t].lastFetched = 0), (S[t].fetchError = void 0);
}
function H(e) {
    if (0 === Object.keys(v).length && 0 === Object.keys(S).length) return !1;
    (v = {}),
        Object.values(S).forEach((e) => {
            (e.lastFetched = 0), (e.fetchError = void 0);
        });
}
function Z(e) {
    let t = e.user.id;
    if (null == v[t] && null == S[t]) return !1;
    delete v[t], (S[t].lastFetched = 0), (S[t].fetchError = void 0);
}
function Y(e) {
    let t = e.relationship.id;
    if (null == O[t] && null == R[t] && null == S[t]) return !1;
    delete O[t], delete R[t], (S[t].lastFetched = 0), (S[t].fetchError = void 0);
}
function j() {
    (m = {}), (S = {}), (g = {});
}
class W extends _.Z {
    initialize() {
        this.waitFor(E.ZP), this.syncWith([o.default], j);
    }
    isFetchingProfile(e, t) {
        return null != m[e] && (null != t ? m[e].has(t) : m[e].size > 0);
    }
    isFetchingFriends(e) {
        return T.has(e);
    }
    get isSubmitting() {
        return C;
    }
    getUserProfile(e) {
        return S[e];
    }
    getGuildMemberProfile(e, t) {
        var n;
        return null == t ? null : null === (n = g[e]) || void 0 === n ? void 0 : n[t];
    }
    getMutualFriends(e) {
        return O[e];
    }
    getMutualFriendsCount(e) {
        return R[e];
    }
    getMutualGuilds(e) {
        return v[e];
    }
    takeSnapshot() {
        let e = u.default.getId();
        return {
            version: W.LATEST_SNAPSHOT_VERSION,
            data: [
                {
                    userId: e,
                    profile: S[e]
                }
            ]
        };
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: x,
            USER_PROFILE_FETCH_FAILURE: G,
            USER_PROFILE_FETCH_SUCCESS: w,
            USER_PROFILE_UPDATE_START: k,
            USER_PROFILE_UPDATE_SUCCESS: B,
            USER_PROFILE_UPDATE_FAILURE: F,
            MUTUAL_FRIENDS_FETCH_START: b,
            MUTUAL_FRIENDS_FETCH_SUCCESS: U,
            MUTUAL_FRIENDS_FETCH_FAILURE: M,
            USER_UPDATE: V,
            GUILD_MEMBER_UPDATE: V,
            GUILD_JOIN: H,
            GUILD_DELETE: H,
            GUILD_MEMBER_ADD: Z,
            GUILD_MEMBER_REMOVE: Z,
            RELATIONSHIP_ADD: Y,
            RELATIONSHIP_REMOVE: Y,
            RELATIONSHIP_UPDATE: Y,
            LOGOUT: D
        }),
            I(this, 'loadCache', () => {
                let e = this.readSnapshot(W.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: t, profile: n } = e;
                        S[t] = n;
                    });
            });
    }
}
I(W, 'displayName', 'UserProfileStore'), I(W, 'LATEST_SNAPSHOT_VERSION', 1);
let K = new W();
t.Z = K;
