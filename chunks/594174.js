n.r(t), n.d(t, {
    ASSISTANT_WUMPUS_VOICE_USER: function () {
        return S;
    },
    mergeUser: function () {
        return R;
    },
    transformUser: function () {
        return v;
    },
    users: function () {
        return T;
    }
}), n(47120), n(789020), n(724458), n(51350), n(653041);
var r = n(348327), i = n.n(r), a = n(392711), o = n(864106), s = n(502087), l = n(911955), u = n(168232), c = n(598077), d = n(630388), _ = n(823379), E = n(314897), f = n(412788), h = n(981631), p = n(308083), m = n(474936);
function I(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let T = {}, g = 0, S = '47835198259242069';
function A(e, t, n) {
    let r = e;
    r = null == n ? e.removeGuildAvatarHash(t) : e.addGuildAvatarHash(t, n), T[e.id] = r;
    let i = e !== r;
    return i && g++, i;
}
function N(e, t) {
    return !i()(e.clan, t.clan) && (null == e.clan || null != t.clan) && (e.clan = (0, p.yi)(t.clan), T[e.id] = e, !0);
}
function v(e) {
    let t = e.mfa_enabled;
    null != t && (e.mfaEnabled = t, delete e.mfa_enabled);
    let n = (0, u.G)(e.premium_type);
    void 0 !== n && (e.premiumType = n, delete e.premium_type);
    let r = e.nsfw_allowed;
    null != r && (e.nsfwAllowed = r, delete e.nsfw_allowed);
    let i = e.public_flags;
    null != i && (e.publicFlags = i, delete e.public_flags);
    let a = e.purchased_flags;
    void 0 !== a && (e.purchasedFlags = a, delete e.purchased_flags);
    let s = e.premium_usage_flags;
    void 0 !== s && (e.premiumUsageFlags = s, delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
    let l = e.avatar_decoration_data;
    void 0 !== l && (e.avatarDecorationData = (0, o.FG)(l), delete e.avatar_decoration_data);
    let c = e.global_name;
    void 0 !== c && (e.globalName = c, delete e.global_name);
    let d = e.clan;
    return void 0 !== d && (e.clan = (0, p.yi)(d)), e;
}
function O(e) {
    return e.id !== E.default.getId();
}
function R(e) {
    let t, n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], r = T[e.id], a = void 0 !== e.id && e.id === E.default.getId();
    if (null == r)
        void 0 !== (t = (r = new c.Z(e)).premiumType) && a && (r.premiumType = C((0, u.QI)(r), r.premiumType));
    else if (n) {
        var o;
        let n = v(e);
        void 0 !== (t = null !== (o = n.premium_type) && void 0 !== o ? o : n.premiumType) && a && (0, u.VR)(n) && (n = function (e) {
            var t;
            let n = null !== (t = e.premium_type) && void 0 !== t ? t : e.premiumType, r = C((0, u.VR)(e), n);
            return void 0 !== e.premiumType ? e.premiumType = r : void 0 !== e.premium_type && (e.premium_type = r), e;
        }(n)), n = function (e, t) {
            switch (!0) {
            case null == e.clan && null == t.clan:
                break;
            case null != e.clan && null == t.clan:
            case i()(e.clan, t.clan):
                t.clan = e.clan;
                break;
            default:
                t.clan = (0, p.yi)(t.clan);
            }
            return t;
        }(r, n), r = r.merge(n);
    }
    (0, u.jX)((0, u.QI)(r), t, r.premiumType);
    let s = T[e.id] !== r;
    return T[e.id] = r, s && g++, s;
}
function C(e, t) {
    if (!e)
        return t;
    let n = s.Z.getPremiumTypeOverride(), r = s.Z.getPremiumTypeActual();
    return n === m.F_ ? r : n;
}
function y(e, t) {
    var n, r, i, a, o;
    if (null != e.author && 'SENDING' !== e.state && O(e.author) && R(e.author, t), null === (n = e.mentions) || void 0 === n || n.forEach(e => {
            O(e) && R(e, t);
        }), (null === (r = e.interaction) || void 0 === r ? void 0 : r.user) != null && O(null === (i = e.interaction) || void 0 === i ? void 0 : i.user) && R(e.interaction.user, t), null === (a = e.attachments) || void 0 === a || a.forEach(e => {
            var n;
            null === (n = e.clip_participants) || void 0 === n || n.forEach(e => {
                O(e) && R(e, t);
            });
        }), (null === (o = e.resolved) || void 0 === o ? void 0 : o.users) != null)
        for (let n in e.resolved.users) {
            let r = e.resolved.users[n];
            O(r) && R(r, t);
        }
}
function D(e) {
    null != e.application.bot && R(e.application.bot);
}
function L(e) {
    let {
        user: t,
        users: n,
        guilds: r
    } = e;
    delete t.premium, delete t.banner_color, R(t), n.forEach(e => {
        R(e);
    }), r.forEach(e => {
        e.members.forEach(t => {
            let n = T[t.user.id];
            null != n && (A(n, e.id, t.avatar), N(n, t.user));
        });
    }), null != T[E.default.getId()] && (T[S] = new c.Z({
        id: S,
        username: 'Wumpus',
        discriminator: '0',
        globalName: 'Wumpus',
        avatar: 'c1f86b313385cb97985f1b118851c28c'
    }));
}
function b(e) {
    let {
        guilds: t,
        lazyPrivateChannels: n
    } = e;
    t.forEach(e => {
        e.members.forEach(t => {
            let n = T[t.user.id];
            null != n && (A(n, e.id, t.avatar), N(n, t.user));
        });
    }), null == n || n.forEach(e => {
        var t;
        null === (t = e.rawRecipients) || void 0 === t || t.forEach(e => {
            R(e);
        });
    });
}
function M(e) {
    return !('incomplete' in e);
}
function P(e) {
    if (null != e.users)
        for (let t of e.users) {
            if (!(t.id in T && M(t)))
                T[t.id] = new c.Z(t);
        }
}
function U(e) {
    let {user: t} = e;
    t.id !== E.default.getId() && R(t);
}
function w(e) {
    let {user: t} = e;
    R(t);
}
function x(e) {
    let {user: t} = e;
    R(t);
}
function G(e) {
    let {messages: t} = e;
    return t.forEach(e => y(e, !0)), !1;
}
function k(e) {
    let {mostRecentMessages: t} = e;
    return null == t || t.forEach(e => y(e, !1)), !1;
}
function B(e) {
    let {messages: t} = e;
    return t.forEach(e => G({ messages: e })), !1;
}
function F(e) {
    let {
        firstMessages: t,
        owners: n
    } = e;
    null != t && t.forEach(e => y(e, !0)), null != n && n.forEach(e => R(e.user, !0));
}
function V(e) {
    let {threads: t} = e;
    Object.values(t).forEach(e => {
        let {
            first_message: t,
            most_recent_message: n,
            owner: r
        } = e;
        null != t && y(t, !0), null != n && y(n, !0), null != r && null != r.user && R(r.user, !0);
    });
}
function H(e) {
    let {supplementalData: t} = e;
    Object.values(t).forEach(e => {
        let {message_preview: t} = e;
        null != t && y(t, !0);
    });
}
function Z(e) {
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
        R(t);
        let i = T[t.id], a = null == r ? void 0 : r.avatar;
        null != i && null != a && A(i, n, a);
    });
}
function Y(e) {
    let {items: t} = e;
    t.forEach(e => {
        null != e.other_user && R(e.other_user);
    });
}
function j(e) {
    let {item: t} = e;
    null != t.other_user && R(t.other_user);
}
function W(e) {
    let {message: t} = e;
    if (y(t, !0), null != t.flags && d.yE(t.flags, h.iLy.URGENT)) {
        let e = T[E.default.getId()];
        return null != e && (T[E.default.getId()] = e.set('flags', d.mB(e.flags, h.xW$.HAS_UNREAD_URGENT_MESSAGES, !0)), !0);
    }
    return !1;
}
function K(e) {
    let {
        channel: {rawRecipients: t}
    } = e;
    return null != t && t.forEach(e => R(e)), !1;
}
function z(e) {
    let {channels: t} = e;
    for (let {rawRecipients: e} of t)
        null != e && e.forEach(e => R(e));
    return !1;
}
let q = [
    'username',
    'avatar',
    'global_name',
    'discriminator',
    'bot',
    'clan'
];
function Q(e) {
    let {updates: t} = e;
    return t.map(e => {
        let t = T[e.user.id];
        if (null == t)
            return !1;
        let n = q.reduce((n, r) => {
            if (e.user.hasOwnProperty(r)) {
                let i = t.set((0, a.camelCase)(r), e.user[r]);
                n = n || i !== t, t = i;
            }
            return n;
        }, !1);
        return !!n && (T[t.id] = t, n);
    }).some(e => e);
}
function X(e) {
    let {bans: t} = e;
    t.forEach(e => R(e.user));
}
function $(e) {
    let {bans: t} = e;
    t.forEach(e => R(e.user));
}
function J(e) {
    return R(e.user);
}
function ee(e) {
    return !!e.isMember && R(e.user);
}
function et(e) {
    let t = R(e.user), n = T[e.user.id];
    if (null == n)
        return t;
    let {
        avatar: r,
        guildId: i
    } = e;
    return A(n, i, r) || t;
}
function en(e) {
    let {ops: t} = e;
    for (let e of t)
        if ('INSERT' === e.op || 'UPDATE' === e.op) {
            var n;
            let t = null === (n = e.item.member) || void 0 === n ? void 0 : n.user;
            if (null == t)
                continue;
            let r = T[t.id];
            if (null == r)
                continue;
            N(r, t);
        }
    return !1;
}
function er(e) {
    let {chunks: t} = e, n = !1;
    for (let e of t)
        n = e.members.reduce((t, n) => {
            let r = R(n.user), i = T[n.user.id];
            if (null == i)
                return r || t;
            let {avatar: a} = n;
            return A(i, e.guildId, a) || r || t;
        }, !1) || n;
    return n;
}
function ei(e) {
    let t = !1;
    for (let n of e.members)
        R(n.user) && (t = !0), null != T[n.user.id] && A(T[n.user.id], e.guildId, n.avatar) && (t = !0);
    return t;
}
function ea(e) {
    var t;
    let n = !1;
    for (let r of null !== (t = e.users) && void 0 !== t ? t : [])
        !Object.hasOwn(T, r.id) && (n = R(r) || n);
    return n;
}
function eo(e) {
    let {members: t} = e, n = !1;
    return t.forEach(e => {
        null != e.member && R(e.member.user) && (n = !0), null != e.presence && R(e.presence.user) && (n = !0);
    }), n;
}
function es(e) {
    let {addedMembers: t} = e, n = !1;
    return null == t || t.forEach(e => {
        null != e.member && R(e.member.user) && (n = !0), null != e.presence && R(e.presence.user) && (n = !0);
    }), n;
}
function el(e) {
    let {guild: t} = e;
    t.members.forEach(e => {
        let {
            user: {
                id: n,
                username: r,
                avatar: i,
                discriminator: a,
                bot: o
            },
            avatar: s
        } = e;
        n !== E.default.getId() && R({
            id: n,
            username: r,
            avatar: i,
            discriminator: a,
            bot: o
        });
        let l = T[n];
        null != l && A(l, t.id, s);
    });
}
function eu(e) {
    return R(e.relationship.user);
}
function ec(e) {
    let {relationships: t} = e;
    return t.reduce((e, t) => R(t.user) || e, !1);
}
function ed(e) {
    return R(e.suggestion.suggested_user);
}
function e_(e) {
    let {suggestions: t} = e;
    return t.reduce((e, t) => R(t.suggested_user) || e, !1);
}
function eE(e) {
    let {users: t} = e;
    t.forEach(e => {
        null == T[e.id] && (T[e.id] = new c.Z(e));
    });
}
function ef(e) {
    let {giftCode: t} = e;
    return null != t.user && R(t.user);
}
function eh(e) {
    let {appliedBoosts: t} = e;
    t.forEach(e => {
        let {user: t} = e;
        if (null != t)
            R(t);
    });
}
function ep(e) {
    let {request: t} = e, {
            user: n,
            actioned_by_user: r
        } = t, i = !1;
    return null != n && (i = i || R(n)), null != r && (i = i || R(r)), i;
}
function em(e) {
    let {integrations: t} = e;
    t.forEach(e => D((0, l.F)(e)));
}
function eI(e) {
    let {integration: t} = e;
    D((0, l.F)(t));
}
function eT(e) {
    let {integration: t} = e;
    D((0, l.F)(t));
}
function eg(e) {
    let {
            users: t,
            familyCenterTeenActivity: n
        } = e, {users: r} = n;
    return [
        ...t,
        ...r
    ].reduce((e, t) => R(t) || e, !1);
}
function eS(e) {
    let {users: t} = e;
    return t.reduce((e, t) => R(t) || e, !1);
}
function eA(e) {
    let {users: t} = e;
    return t.reduce((e, t) => R(t) || e, !1);
}
function eN(e) {
    let {familyCenterTeenActivity: t} = e;
    if (void 0 === t)
        return;
    let {users: n} = t;
    return n.reduce((e, t) => R(t) || e, !1);
}
function ev(e) {
    let {familyCenterTeenActivity: t} = e, {users: n} = t;
    return n.reduce((e, t) => R(t) || e, !1);
}
function eO(e) {
    let {members: t} = e, n = E.default.getId();
    return t.reduce((e, t) => t.member.user.id === n ? e : R(t.member.user) || e, !1);
}
class eR extends f.Z {
    initialize() {
        this.waitFor(E.default);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return {
            version: eR.LATEST_SNAPSHOT_VERSION,
            data: { users: [e].filter(_.lm) }
        };
    }
    handleLoadCache(e) {
        let t = this.readSnapshot(eR.LATEST_SNAPSHOT_VERSION);
        if (null != t)
            for (let e of t.users)
                T[e.id] = new c.Z(e);
        if (null != e.users)
            for (let t of e.users) {
                if (!(t.id in T && M(t)))
                    T[t.id] = new c.Z(t);
            }
        for (let t of [
                e.privateChannels,
                e.initialGuildChannels
            ])
            for (let e of t) {
                var n;
                null === (n = e.rawRecipients) || void 0 === n || n.forEach(e => R(e, !1));
            }
    }
    getUserStoreVersion() {
        return g;
    }
    getUser(e) {
        if (null != e)
            return T[e];
    }
    getUsers() {
        return T;
    }
    forEach(e) {
        for (let t in T)
            if (!1 === e(T[t]))
                break;
    }
    findByTag(e, t) {
        for (let n in T) {
            let r = T[n];
            if (null != t && r.username === e && r.discriminator === t)
                return r;
            if (null == t && r.username === e && r.isPomelo())
                return r;
        }
    }
    filter(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = [];
        for (let t in T) {
            let r = T[t];
            e(r) && n.push(r);
        }
        return t && n.sort((e, t) => e.username > t.username ? 1 : e.username < t.username ? -1 : 0), n;
    }
    getCurrentUser() {
        return T[E.default.getId()];
    }
    constructor() {
        super({
            CONNECTION_OPEN: L,
            CONNECTION_OPEN_SUPPLEMENTAL: b,
            UPDATE_CLIENT_PREMIUM_TYPE: x,
            OVERLAY_INITIALIZE: P,
            CACHE_LOADED: e => this.handleLoadCache(e),
            USER_UPDATE: U,
            CURRENT_USER_UPDATE: w,
            PRESENCE_UPDATES: Q,
            SEARCH_FINISH: B,
            MOD_VIEW_SEARCH_FINISH: B,
            LOAD_MESSAGES_SUCCESS: G,
            LOAD_MESSAGES_AROUND_SUCCESS: G,
            LOAD_PINNED_MESSAGES_SUCCESS: G,
            LOAD_RECENT_MENTIONS_SUCCESS: G,
            THREAD_LIST_SYNC: k,
            MESSAGE_CREATE: W,
            MESSAGE_UPDATE: W,
            GUILD_SETTINGS_LOADED_BANS: X,
            GUILD_SETTINGS_LOADED_BANS_BATCH: $,
            GUILD_CREATE: el,
            GUILD_BAN_ADD: J,
            GUILD_BAN_REMOVE: J,
            CHANNEL_RECIPIENT_ADD: ee,
            CHANNEL_RECIPIENT_REMOVE: ee,
            GUILD_JOIN_REQUEST_CREATE: ep,
            GUILD_JOIN_REQUEST_UPDATE: ep,
            GUILD_MEMBER_ADD: et,
            GUILD_MEMBER_UPDATE: et,
            GUILD_MEMBERS_CHUNK_BATCH: er,
            GUILD_MEMBER_LIST_UPDATE: en,
            THREAD_MEMBER_LIST_UPDATE: eo,
            THREAD_MEMBERS_UPDATE: es,
            CHANNEL_CREATE: K,
            CHANNEL_UPDATES: z,
            RELATIONSHIP_ADD: eu,
            LOAD_RELATIONSHIPS_SUCCESS: ec,
            FRIEND_SUGGESTION_CREATE: ed,
            LOAD_FRIEND_SUGGESTIONS_SUCCESS: e_,
            AUDIT_LOG_FETCH_SUCCESS: eE,
            AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eE,
            GIFT_CODE_RESOLVE_SUCCESS: ef,
            GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: eh,
            LOAD_THREADS_SUCCESS: F,
            LOAD_ARCHIVED_THREADS_SUCCESS: F,
            LOAD_FORUM_POSTS: V,
            GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: Z,
            LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: Y,
            NOTIFICATION_CENTER_ITEM_CREATE: j,
            LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: H,
            PASSIVE_UPDATE_V2: ei,
            LOCAL_MESSAGES_LOADED: ea,
            FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS: em,
            PRIVATE_CHANNEL_INTEGRATION_CREATE: eI,
            PRIVATE_CHANNEL_INTEGRATION_UPDATE: eT,
            FAMILY_CENTER_INITIAL_LOAD: eg,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eS,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eN,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: ev,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: eA,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eO
        });
    }
}
I(eR, 'displayName', 'UserStore'), I(eR, 'LATEST_SNAPSHOT_VERSION', 1), t.default = new eR();
