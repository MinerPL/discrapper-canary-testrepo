n.d(t, {
    Ar: function () {
        return L;
    },
    DO: function () {
        return I;
    },
    Fn: function () {
        return O;
    },
    Jq: function () {
        return N;
    },
    QO: function () {
        return M;
    },
    Vb: function () {
        return d;
    },
    YN: function () {
        return R;
    },
    ZF: function () {
        return f;
    },
    ep: function () {
        return S;
    },
    km: function () {
        return c;
    },
    nC: function () {
        return A;
    },
    vo: function () {
        return T;
    }
}), n(47120), n(411104);
var r = n(581364), a = n(314897), i = n(866830), E = n(539573), _ = n(727072), u = n(85960), s = n(273504), l = n(689938);
let o = (e, t) => ''.concat(e, '-').concat(t, '-new-rule'), I = e => (null == e ? void 0 : e.triggerType) === s.fX.KEYWORD, T = e => (null == e ? void 0 : e.triggerType) === s.fX.ML_SPAM, O = e => (null == e ? void 0 : e.triggerType) === s.fX.DEFAULT_KEYWORD_LIST, A = e => (null == e ? void 0 : e.triggerType) === s.fX.MENTION_SPAM, N = e => (null == e ? void 0 : e.triggerType) === s.fX.USER_PROFILE;
function S(e, t) {
    let n = u.I6[t], r = (0, u.jp)(t, e), E = {
            id: o(e, t),
            name: n.getDefaultRuleName(),
            guildId: e,
            eventType: n.eventType,
            triggerType: t,
            triggerMetadata: r,
            enabled: !0,
            creatorId: a.default.getId(),
            actions: (0, i.qR)(n),
            position: 0,
            exemptChannels: new Set(),
            exemptRoles: new Set()
        };
    if (d(E))
        throw Error(l.Z.Messages.GUILD_AUTOMOD_NEW_RULE_ERROR);
    let s = (0, _.mY)(e, t);
    return s > 0 && (E.name += ' '.concat(s + 1)), E;
}
function c(e, t) {
    if (e.length > t)
        throw Error(l.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_TOO_MANY_KEYWORDS.format({ limit: t }));
    e.forEach(e => {
        if (e.length > s.hu || e.length < s.Vk)
            throw new E.V6(l.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_INVALID_KEYWORD_LENGTH.format({
                keyword: e,
                max: s.hu,
                min: s.Vk
            }));
    });
}
function M(e) {
    if (I(e)) {
        var t, n;
        let r = null !== (t = e.triggerMetadata.keywordFilter) && void 0 !== t ? t : [], a = null !== (n = e.triggerMetadata.regexPatterns) && void 0 !== n ? n : [];
        if (0 === r.length && 0 === a.length)
            throw Error(l.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_NO_KEYWORDS_OR_REGEX);
        c(r, s.RH), !function (e) {
            if (e.length > s.VW)
                throw Error(l.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_TOO_MANY_REGEX.format({ limit: s.VW }));
            e.forEach(e => {
                if (e.length > s.aj || e.length < s.uE)
                    throw new E.uS(l.Z.Messages.GUILD_AUTOMOD_REGEX_ERROR_INVALID_REGEX_LENGTH.format({
                        regex: e,
                        max: s.aj,
                        min: s.uE
                    }));
            });
        }(a);
    }
    if (0 === e.actions.length)
        throw Error(l.Z.Messages.GUILD_AUTOMOD_ERROR_NO_ACTIONS);
}
function d(e) {
    var t;
    return (0, r.BH)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : 'INVALID_SNOWFLAKE');
}
function R(e) {
    switch (e) {
    case s.q4.MESSAGE_SEND:
        return l.Z.Messages.GUILD_AUTOMOD_EVENT_TYPE_MESSAGE_SEND;
    case s.q4.GUILD_MEMBER_JOIN_OR_UPDATE:
        return l.Z.Messages.GUILD_AUTOMOD_EVENT_TYPE_GUILD_MEMBER_JOIN_OR_UPDATE;
    default:
        return l.Z.Messages.GUILD_AUTOMOD_UNKNOWN;
    }
}
function f(e) {
    switch (e) {
    case s.jj.BLOCK_MESSAGE:
        return l.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
    case s.jj.FLAG_TO_CHANNEL:
        return l.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
    case s.jj.USER_COMMUNICATION_DISABLED:
        return l.Z.Messages.GUILD_AUTOMOD_ACTIONS_USER_COMMUNICATION_DISABLED;
    case s.jj.QUARANTINE_USER:
        return l.Z.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER;
    default:
        return l.Z.Messages.GUILD_AUTOMOD_UNKNOWN;
    }
}
function L(e) {
    switch (e) {
    case s.fX.KEYWORD:
        return l.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME;
    case s.fX.ML_SPAM:
        return l.Z.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME;
    case s.fX.DEFAULT_KEYWORD_LIST:
        return l.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_FILTER_NAME;
    case s.fX.MENTION_SPAM:
        return l.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_NAME;
    case s.fX.USER_PROFILE:
        return l.Z.Messages.GUILD_AUTOMOD_USER_PROFILE_FILTER_NAME;
    default:
        return l.Z.Messages.GUILD_AUTOMOD_UNKNOWN;
    }
}
