n.r(t),
    n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: function () {
            return E;
        },
        mergeUser: function () {
            return b;
        },
        transformUser: function () {
            return S;
        },
        users: function () {
            return m;
        }
    }),
    n(47120),
    n(789020),
    n(724458),
    n(51350),
    n(653041);
var r = n(392711),
    i = n(864106),
    a = n(502087),
    s = n(168232),
    o = n(598077),
    l = n(630388),
    u = n(823379),
    c = n(314897),
    d = n(412788),
    f = n(981631),
    _ = n(308083),
    h = n(474936);
function p(e, t, n) {
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
    g = 0,
    E = '47835198259242069';
function v(e, t, n) {
    let r = m[e];
    if (null == r) return !1;
    let i = r;
    (i = null == n ? r.removeGuildAvatarHash(t) : r.addGuildAvatarHash(t, n)), (m[r.id] = i);
    let a = r !== i;
    return a && g++, a;
}
function I(e, t) {
    let n = m[e];
    return !(null == n || (0, _.Dd)(n.clan, t.clan)) && (null == n.clan || null != t.clan) && ((n.clan = (0, _.yi)(t.clan)), (m[n.id] = n), g++, !0);
}
function S(e) {
    let t = e.mfa_enabled;
    null != t && ((e.mfaEnabled = t), delete e.mfa_enabled);
    let n = (0, s.G)(e.premium_type);
    void 0 !== n && ((e.premiumType = n), delete e.premium_type);
    let r = e.nsfw_allowed;
    null != r && ((e.nsfwAllowed = r), delete e.nsfw_allowed);
    let a = e.public_flags;
    null != a && ((e.publicFlags = a), delete e.public_flags);
    let o = e.purchased_flags;
    void 0 !== o && ((e.purchasedFlags = o), delete e.purchased_flags);
    let l = e.premium_usage_flags;
    void 0 !== l && ((e.premiumUsageFlags = l), delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
    let u = e.avatar_decoration_data;
    void 0 !== u && ((e.avatarDecorationData = (0, i.FG)(u)), delete e.avatar_decoration_data);
    let c = e.global_name;
    void 0 !== c && ((e.globalName = c), delete e.global_name);
    let d = e.clan;
    return void 0 !== d && (e.clan = (0, _.yi)(d)), e;
}
function T(e) {
    return e.id !== c.default.getId();
}
function b(e) {
    let t,
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = m[e.id],
        i = void 0 !== e.id && e.id === c.default.getId();
    if (null == r) void 0 !== (t = (r = new o.Z(e)).premiumType) && i && (r.premiumType = y((0, s.QI)(r), r.premiumType));
    else if (n) {
        var a;
        let n = S(e);
        void 0 !== (t = null !== (a = n.premium_type) && void 0 !== a ? a : n.premiumType) &&
            i &&
            (0, s.VR)(n) &&
            (n = (function (e) {
                var t;
                let n = null !== (t = e.premium_type) && void 0 !== t ? t : e.premiumType,
                    r = y((0, s.VR)(e), n);
                return void 0 !== e.premiumType ? (e.premiumType = r) : void 0 !== e.premium_type && (e.premium_type = r), e;
            })(n)),
            (n = (function (e, t) {
                switch (!0) {
                    case null == e.clan && null == t.clan:
                        break;
                    case null != e.clan && null == t.clan:
                    case (0, _.Dd)(e.clan, t.clan):
                        t.clan = e.clan;
                        break;
                    default:
                        t.clan = (0, _.yi)(t.clan);
                }
                return t;
            })(r, n)),
            (r = r.merge(n));
    }
    (0, s.jX)((0, s.QI)(r), t, r.premiumType);
    let l = m[e.id] !== r;
    return (m[e.id] = r), l && g++, l;
}
function y(e, t) {
    if (!e) return t;
    let n = a.Z.getPremiumTypeOverride(),
        r = a.Z.getPremiumTypeActual();
    return n === h.F_ ? r : n;
}
function A(e, t) {
    var n, r, i, a, s;
    if (
        (null != e.author && 'SENDING' !== e.state && T(e.author) && b(e.author, t),
        null === (n = e.mentions) ||
            void 0 === n ||
            n.forEach((e) => {
                T(e) && b(e, t);
            }),
        (null === (r = e.interaction) || void 0 === r ? void 0 : r.user) != null && T(null === (i = e.interaction) || void 0 === i ? void 0 : i.user) && b(e.interaction.user, t),
        null === (a = e.attachments) ||
            void 0 === a ||
            a.forEach((e) => {
                var n;
                null === (n = e.clip_participants) ||
                    void 0 === n ||
                    n.forEach((e) => {
                        T(e) && b(e, t);
                    });
            }),
        (null === (s = e.resolved) || void 0 === s ? void 0 : s.users) != null)
    )
        for (let n in e.resolved.users) {
            let r = e.resolved.users[n];
            T(r) && b(r, t);
        }
}
function N(e) {
    let { user: t, users: n, guilds: r } = e;
    delete t.premium,
        delete t.banner_color,
        b(t),
        n.forEach((e) => {
            b(e);
        }),
        r.forEach((e) => {
            e.members.forEach((t) => {
                v(t.user.id, e.id, t.avatar), I(t.user.id, t.user);
            });
        }),
        null != m[c.default.getId()] &&
            (m[E] = new o.Z({
                id: E,
                username: 'Wumpus',
                discriminator: '0',
                globalName: 'Wumpus',
                avatar: 'c1f86b313385cb97985f1b118851c28c'
            }));
}
function C(e) {
    let { guilds: t, lazyPrivateChannels: n } = e;
    t.forEach((e) => {
        e.members.forEach((t) => {
            v(t.user.id, e.id, t.avatar), I(t.user.id, t.user);
        });
    }),
        null == n ||
            n.forEach((e) => {
                var t;
                null === (t = e.rawRecipients) ||
                    void 0 === t ||
                    t.forEach((e) => {
                        b(e);
                    });
            });
}
function R(e) {
    return !('incomplete' in e);
}
function O(e) {
    if (null != e.users)
        for (let t of e.users) {
            if (!(t.id in m && R(t))) m[t.id] = new o.Z(t);
        }
}
function D(e) {
    let { user: t } = e;
    t.id !== c.default.getId() && b(t);
}
function L(e) {
    let { user: t } = e;
    b(t);
}
function x(e) {
    let { user: t } = e;
    b(t);
}
function w(e) {
    let { messages: t } = e;
    return t.forEach((e) => A(e, !0)), !1;
}
function M(e) {
    let { mostRecentMessages: t } = e;
    return null == t || t.forEach((e) => A(e, !1)), !1;
}
function P(e) {
    let { messages: t } = e;
    return t.forEach((e) => w({ messages: e })), !1;
}
function k(e) {
    let { firstMessages: t, owners: n } = e;
    null != t && t.forEach((e) => A(e, !0)), null != n && n.forEach((e) => b(e.user, !0));
}
function U(e) {
    let { threads: t } = e;
    Object.values(t).forEach((e) => {
        let { first_message: t, most_recent_message: n, owner: r } = e;
        null != t && A(t, !0), null != n && A(n, !0), null != r && null != r.user && b(r.user, !0);
    });
}
function G(e) {
    let { supplementalData: t } = e;
    Object.values(t).forEach((e) => {
        let { message_preview: t } = e;
        null != t && A(t, !0);
    });
}
function B(e) {
    let { guildScheduledEventUsers: t, guildId: n } = e;
    t.forEach((e) => {
        let { user: t, member: r } = e;
        if (null == t) return;
        b(t);
        let i = null == r ? void 0 : r.avatar;
        null != i && v(t.id, n, i);
    });
}
function Z(e) {
    let { items: t } = e;
    t.forEach((e) => {
        null != e.other_user && b(e.other_user);
    });
}
function F(e) {
    let { item: t } = e;
    null != t.other_user && b(t.other_user);
}
function V(e) {
    let { message: t } = e;
    if ((A(t, !0), null != t.flags && l.yE(t.flags, f.iLy.URGENT))) {
        let e = m[c.default.getId()];
        return null != e && ((m[c.default.getId()] = e.set('flags', l.mB(e.flags, f.xW$.HAS_UNREAD_URGENT_MESSAGES, !0))), !0);
    }
    return !1;
}
function j(e) {
    let {
        channel: { rawRecipients: t }
    } = e;
    return null != t && t.forEach((e) => b(e)), !1;
}
function H(e) {
    let { channels: t } = e;
    for (let { rawRecipients: e } of t) null != e && e.forEach((e) => b(e));
    return !1;
}
let Y = ['username', 'avatar', 'global_name', 'discriminator', 'bot', 'clan'];
function W(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let t = m[e.user.id];
            if (null == t) return !1;
            let n = Y.reduce((n, i) => {
                if (e.user.hasOwnProperty(i)) {
                    let a = t.set((0, r.camelCase)(i), e.user[i]);
                    (n = n || a !== t), (t = a);
                }
                return n;
            }, !1);
            return !!n && ((m[t.id] = t), n);
        })
        .some((e) => e);
}
function K(e) {
    let { bans: t } = e;
    t.forEach((e) => b(e.user));
}
function z(e) {
    let { bans: t } = e;
    t.forEach((e) => b(e.user));
}
function q(e) {
    return b(e.user);
}
function Q(e) {
    return !!e.isMember && b(e.user);
}
function X(e) {
    let t = b(e.user);
    return v(e.user.id, e.guildId, e.avatar) || t;
}
function J(e) {
    let { ops: t } = e;
    for (let e of t)
        if ('INSERT' === e.op || 'UPDATE' === e.op) {
            var n;
            let t = null === (n = e.item.member) || void 0 === n ? void 0 : n.user;
            if (null == t) continue;
            I(t.id, t);
        }
    return !1;
}
function $(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t)
        n =
            e.members.reduce((t, n) => {
                let r = b(n.user);
                return v(n.user.id, e.guildId, n.avatar) || r || t;
            }, !1) || n;
    return n;
}
function ee(e) {
    let t = !1;
    for (let n of e.members) b(n.user) && (t = !0), v(n.user.id, e.guildId, n.avatar) && (t = !0);
    return t;
}
function et(e) {
    var t;
    let n = !1;
    for (let r of null !== (t = e.users) && void 0 !== t ? t : []) !Object.hasOwn(m, r.id) && (n = b(r) || n);
    return n;
}
function en(e) {
    let { members: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            null != e.member && b(e.member.user) && (n = !0), null != e.presence && b(e.presence.user) && (n = !0);
        }),
        n
    );
}
function er(e) {
    let { addedMembers: t } = e,
        n = !1;
    return (
        null == t ||
            t.forEach((e) => {
                null != e.member && b(e.member.user) && (n = !0), null != e.presence && b(e.presence.user) && (n = !0);
            }),
        n
    );
}
function ei(e) {
    let { guild: t } = e;
    t.members.forEach((e) => {
        let {
            user: { id: n, username: r, avatar: i, discriminator: a, bot: s },
            avatar: o
        } = e;
        n !== c.default.getId() &&
            b({
                id: n,
                username: r,
                avatar: i,
                discriminator: a,
                bot: s
            }),
            v(n, t.id, o);
    });
}
function ea(e) {
    return b(e.relationship.user);
}
function es(e) {
    let { relationships: t } = e;
    return t.reduce((e, t) => b(t.user) || e, !1);
}
function eo(e) {
    return b(e.suggestion.suggested_user);
}
function el(e) {
    let { suggestions: t } = e;
    return t.reduce((e, t) => b(t.suggested_user) || e, !1);
}
function eu(e) {
    let { users: t } = e;
    t.forEach((e) => {
        null == m[e.id] && (m[e.id] = new o.Z(e));
    });
}
function ec(e) {
    let { giftCode: t } = e;
    return null != t.user && b(t.user);
}
function ed(e) {
    let { appliedBoosts: t } = e;
    t.forEach((e) => {
        let { user: t } = e;
        if (null != t) b(t);
    });
}
function ef(e) {
    let { request: t } = e,
        { user: n, actioned_by_user: r } = t,
        i = !1;
    return null != n && (i = i || b(n)), null != r && (i = i || b(r)), i;
}
function e_(e) {
    let { users: t, familyCenterTeenActivity: n } = e,
        { users: r } = n;
    return [...t, ...r].reduce((e, t) => b(t) || e, !1);
}
function eh(e) {
    let { users: t } = e;
    return t.reduce((e, t) => b(t) || e, !1);
}
function ep(e) {
    let { users: t } = e;
    return t.reduce((e, t) => b(t) || e, !1);
}
function em(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return;
    let { users: n } = t;
    return n.reduce((e, t) => b(t) || e, !1);
}
function eg(e) {
    let { familyCenterTeenActivity: t } = e,
        { users: n } = t;
    return n.reduce((e, t) => b(t) || e, !1);
}
function eE(e) {
    let { members: t } = e,
        n = c.default.getId();
    return t.reduce((e, t) => (t.member.user.id === n ? e : b(t.member.user) || e), !1);
}
function ev(e) {
    let { messageItems: t } = e;
    t.forEach((e) => {
        null != e.message && A(e.message, !0);
    }, !1);
}
function eI(e) {
    let { participants: t } = e;
    t.map((e) => {
        var t;
        return null === (t = e.member) || void 0 === t ? void 0 : t.user;
    })
        .filter(u.lm)
        .forEach((e) => {
            b(e);
        });
}
class eS extends d.Z {
    initialize() {
        this.waitFor(c.default, a.Z);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return {
            version: eS.LATEST_SNAPSHOT_VERSION,
            data: { users: [e].filter(u.lm) }
        };
    }
    handleLoadCache(e) {
        let t = this.readSnapshot(eS.LATEST_SNAPSHOT_VERSION);
        if (null != t) for (let e of t.users) m[e.id] = new o.Z(e);
        if (null != e.users)
            for (let t of e.users) {
                if (!(t.id in m && R(t))) m[t.id] = new o.Z(t);
            }
        for (let t of [e.privateChannels, e.initialGuildChannels])
            for (let e of t) {
                var n;
                null === (n = e.rawRecipients) || void 0 === n || n.forEach((e) => b(e, !1));
            }
    }
    getUserStoreVersion() {
        return g;
    }
    getUser(e) {
        if (null != e) return m[e];
    }
    getUsers() {
        return m;
    }
    forEach(e) {
        for (let t in m) if (!1 === e(m[t])) break;
    }
    findByTag(e, t) {
        for (let n in m) {
            let r = m[n];
            if (null != t && r.username === e && r.discriminator === t) return r;
            if (null == t && r.username === e && r.isPomelo()) return r;
        }
    }
    filter(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = [];
        for (let t in m) {
            let r = m[t];
            e(r) && n.push(r);
        }
        return t && n.sort((e, t) => (e.username > t.username ? 1 : e.username < t.username ? -1 : 0)), n;
    }
    getCurrentUser() {
        return m[c.default.getId()];
    }
    constructor() {
        super({
            CONNECTION_OPEN: N,
            CONNECTION_OPEN_SUPPLEMENTAL: C,
            UPDATE_CLIENT_PREMIUM_TYPE: x,
            OVERLAY_INITIALIZE: O,
            CACHE_LOADED: (e) => this.handleLoadCache(e),
            USER_UPDATE: D,
            CURRENT_USER_UPDATE: L,
            PRESENCE_UPDATES: W,
            SEARCH_FINISH: P,
            MOD_VIEW_SEARCH_FINISH: P,
            LOAD_MESSAGES_SUCCESS: w,
            LOAD_MESSAGES_AROUND_SUCCESS: w,
            LOAD_PINNED_MESSAGES_SUCCESS: w,
            LOAD_RECENT_MENTIONS_SUCCESS: w,
            THREAD_LIST_SYNC: M,
            MESSAGE_CREATE: V,
            MESSAGE_UPDATE: V,
            GUILD_SETTINGS_LOADED_BANS: K,
            GUILD_SETTINGS_LOADED_BANS_BATCH: z,
            GUILD_CREATE: ei,
            GUILD_BAN_ADD: q,
            GUILD_BAN_REMOVE: q,
            CHANNEL_RECIPIENT_ADD: Q,
            CHANNEL_RECIPIENT_REMOVE: Q,
            GUILD_JOIN_REQUEST_CREATE: ef,
            GUILD_JOIN_REQUEST_UPDATE: ef,
            GUILD_MEMBER_ADD: X,
            GUILD_MEMBER_UPDATE: X,
            GUILD_MEMBERS_CHUNK_BATCH: $,
            GUILD_MEMBER_LIST_UPDATE: J,
            THREAD_MEMBER_LIST_UPDATE: en,
            THREAD_MEMBERS_UPDATE: er,
            CHANNEL_CREATE: j,
            CHANNEL_UPDATES: H,
            RELATIONSHIP_ADD: ea,
            LOAD_RELATIONSHIPS_SUCCESS: es,
            FRIEND_SUGGESTION_CREATE: eo,
            LOAD_FRIEND_SUGGESTIONS_SUCCESS: el,
            AUDIT_LOG_FETCH_SUCCESS: eu,
            AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eu,
            GIFT_CODE_RESOLVE_SUCCESS: ec,
            GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: ed,
            LOAD_THREADS_SUCCESS: k,
            LOAD_ARCHIVED_THREADS_SUCCESS: k,
            LOAD_FORUM_POSTS: U,
            GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: B,
            LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: Z,
            NOTIFICATION_CENTER_ITEM_CREATE: F,
            LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: G,
            PASSIVE_UPDATE_V2: ee,
            LOCAL_MESSAGES_LOADED: et,
            FAMILY_CENTER_INITIAL_LOAD: e_,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eh,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: em,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eg,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: ep,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eE,
            LOAD_GRAVITY_HYDRATED: ev,
            EMBEDDED_ACTIVITY_UPDATE_V2: eI
        });
    }
}
p(eS, 'displayName', 'UserStore'), p(eS, 'LATEST_SNAPSHOT_VERSION', 1), (t.default = new eS());
