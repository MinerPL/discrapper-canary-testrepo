n.d(t, {
    FI: function () {
        return S;
    },
    O1: function () {
        return i;
    },
    SJ: function () {
        return p;
    },
    Ur: function () {
        return g;
    },
    kQ: function () {
        return T;
    },
    n_: function () {
        return I;
    },
    xp: function () {
        return m;
    }
});
var r, i, a = n(512722), o = n.n(a), s = n(392711), l = n.n(s), u = n(729594);
n(442837);
var c = n(627420);
n(704215);
var d = n(277800);
n(605236);
var _ = n(430824);
n(496675);
var E = n(856651), f = n(981631), h = n(689938);
let p = [
    '426537812993638400',
    '1042836142560645130',
    '296023718839451649',
    '979802510766268446',
    '1031611223235637258',
    '512333785338216465'
];
function m(e) {
    let {query: t} = u.parse(e, !0), {
            code: n,
            state: r,
            error: i,
            error_description: a
        } = t;
    return o()(!Array.isArray(n), 'Received multiple query param values for code'), o()(!Array.isArray(r), 'Received multiple query param values for state'), o()(!Array.isArray(i), 'Received multiple query param values for error'), o()(!Array.isArray(a), 'Received multiple query param values for error_description'), {
        code: n,
        state: r,
        error: i,
        errorDescription: a
    };
}
function I(e) {
    let {
            connectionType: t,
            connectionMetadataField: n,
            operator: r,
            operatorText: i,
            value: a
        } = e, o = null, s = Math.round(Number(a));
    switch (r) {
    case E.iO.EQUAL:
        o = h.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_BE, t === f.ABu.PAYPAL && n === E.PC.PAYPAL_VERIFIED && (o = h.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_A);
        break;
    case E.iO.NOT_EQUAL:
        o = h.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_NOT_BE;
        break;
    case E.iO.LESS_THAN:
        o = h.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_MOST, s = Math.max(0, s - 1);
        break;
    case E.iO.GREATER_THAN:
        o = h.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_LEAST, s = Math.max(0, s + 1);
        break;
    case void 0:
    case null:
        return null;
    }
    if (null != i && (o = i), o instanceof c._H && null != r)
        switch (t) {
        case f.ABu.REDDIT:
            switch (n) {
            case E.PC.CREATED_AT:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({ days: s }) });
                break;
            case E.PC.REDDIT_TOTAL_KARMA:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_REDDIT_KARMA.format({ karma: s }) });
                break;
            case E.PC.REDDIT_GOLD:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_REDDIT_GOLD });
                break;
            case E.PC.REDDIT_MOD:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_REDDIT_MODERATOR });
                break;
            default:
                return null;
            }
            break;
        case f.ABu.STEAM:
            switch (n) {
            case E.PC.CREATED_AT:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({ days: s }) });
                break;
            case E.PC.STEAM_GAME_COUNT:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_STEAM_GAMES.format({ count: s }) });
                break;
            case E.PC.STEAM_ITEM_COUNT_TF2:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_STEAM_TF2_ITEMS.format({ count: s }) });
                break;
            case E.PC.STEAM_ITEM_COUNT_DOTA2:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_STEAM_DOTA2_ITEMS.format({ count: s }) });
                break;
            default:
                return null;
            }
            break;
        case f.ABu.TWITTER:
            switch (n) {
            case E.PC.CREATED_AT:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({ days: s }) });
                break;
            case E.PC.TWITTER_VERIFIED:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_TWITTER_VERIFIED });
                break;
            case E.PC.TWITTER_FOLLOWERS_COUNT:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_TWITTER_FOLLOWERS.format({ count: s }) });
                break;
            case E.PC.TWITTER_STATUSES_COUNT:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_TWITTER_STATUSES.format({ count: s }) });
                break;
            default:
                return null;
            }
            break;
        case f.ABu.PAYPAL:
            switch (n) {
            case E.PC.CREATED_AT:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({ days: s }) });
                break;
            case E.PC.PAYPAL_VERIFIED:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_PAYPAL_VERIFIED });
                break;
            default:
                return null;
            }
            break;
        case f.ABu.EBAY:
            switch (n) {
            case E.PC.CREATED_AT:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({ days: s }) });
                break;
            case E.PC.EBAY_TOP_RATED_SELLER:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER });
                break;
            case E.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE.format({ value: s }) });
                break;
            case E.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT.format({ count: s }) });
                break;
            case E.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT.format({ count: s }) });
                break;
            default:
                return null;
            }
            break;
        case f.ABu.TIKTOK:
            switch (n) {
            case E.PC.TIKTOK_VERIFIED:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_VERIFIED });
                break;
            case E.PC.TIKTOK_FOLLOWER_COUNT:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWER_COUNT.format({ count: s }) });
                break;
            case E.PC.TIKTOK_FOLLOWING_COUNT:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWING_COUNT.format({ count: s }) });
                break;
            case E.PC.TIKTOK_LIKES_COUNT:
                o = o.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_LIKES_COUNT.format({ count: s }) });
                break;
            default:
                return null;
            }
            break;
        default:
            return null;
        }
    return o;
}
function T(e, t) {
    return Object.values(t).some(e => {
        var t;
        return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null;
    });
}
function g(e) {
    var t, n;
    let {
        guildMember: r,
        guild: i,
        guildRoles: a,
        channel: s,
        onlyChannelConnectionRoles: u = !1
    } = e;
    if (null == r)
        return null;
    if (null == i && null != s && (i = _.Z.getGuild(s.getGuildId())), null == i)
        return null;
    let {id: c} = i;
    null == a && (a = _.Z.getRoles(c));
    let E = r.roles.map(e => a[e]).filter(e => {
            var t;
            return (null == e ? void 0 : null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null;
        }).sort((e, t) => (o()(null != e && null != t, 'roleA or roleB is null'), t.position - e.position)), f = l().intersection(E, (0, d.Z)(s));
    return f.length > 0 ? null !== (t = f[0]) && void 0 !== t ? t : null : u ? null : null !== (n = E[0]) && void 0 !== n ? n : null;
}
function S(e, t) {
    if (null == e || '' === e)
        return null;
    let n = new Date(e);
    return !(n instanceof Date) || isNaN(n.getTime()) ? null : n.toLocaleDateString(t, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}
(r = i || (i = {}))[r.AND = 0] = 'AND', r[r.OR = 1] = 'OR';
