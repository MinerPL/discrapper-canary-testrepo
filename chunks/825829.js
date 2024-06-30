t.d(e, {
    FL: function () {
        return U;
    },
    Mq: function () {
        return S;
    },
    NK: function () {
        return G;
    },
    OP: function () {
        return d;
    },
    Sw: function () {
        return g;
    },
    ZP: function () {
        return f;
    },
    ge: function () {
        return P;
    },
    hU: function () {
        return C;
    },
    nY: function () {
        return M;
    },
    nj: function () {
        return m;
    }
}), t(47120);
var _ = t(470079), E = t(462382), r = t(259346), i = t(436817), u = t(189722), A = t(721355), a = t(999923), o = t(729917), O = t(932019), T = t(442837), N = t(592125), I = t(496675), l = t(313889), s = t(177862), c = t(981631), D = t(689938);
function M(n) {
    return n.type === c.uaV.AUTO_MODERATION_ACTION;
}
function d(n) {
    var e;
    return null === (e = n.embeds) || void 0 === e ? void 0 : e.some(n => {
        let {type: e} = n;
        return e === c.hBH.AUTO_MODERATION_NOTIFICATION;
    });
}
function L(n, e) {
    var t, _, E, r, i;
    let [u] = null !== (t = n.embeds) && void 0 !== t ? t : [];
    if (null != u) {
        if (u.type === c.hBH.AUTO_MODERATION_MESSAGE)
            return null == u ? void 0 : null === (E = u.fields) || void 0 === E ? void 0 : null === (_ = E.find(n => {
                let {rawName: t} = n;
                return t === e;
            })) || void 0 === _ ? void 0 : _.rawValue;
        if (u.type === c.hBH.AUTO_MODERATION_NOTIFICATION)
            return null == u ? void 0 : null === (i = u.fields) || void 0 === i ? void 0 : null === (r = i.find(n => {
                let {rawName: t} = n;
                return t === e;
            })) || void 0 === r ? void 0 : r.rawValue;
    }
}
function S(n, e) {
    var t, _;
    let A = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.VqG, O = arguments.length > 3 ? arguments[3] : void 0, T = arguments.length > 4 ? arguments[4] : void 0, N = function (n) {
            let e = L(n, u.G.BLOCK_PROFILE_UPDATE_TYPE);
            if (null != e)
                return e;
        }(n), l = function (n) {
            let e = L(n, u.G.QUARANTINE_USER_ACTION);
            if (null != e)
                return e;
        }(n), s = function (n) {
            let e = L(n, u.G.QUARANTINE_EVENT);
            if (null != e)
                return e;
        }(n), M = function (n) {
            let e = L(n, u.G.QUARANTINE_USER);
            if (null != e)
                return e;
        }(n), d = function (n) {
            let e = L(n, u.G.DECISION_OUTCOME);
            if (null != e)
                return e;
        }(n), S = L(n, u.G.INTERACTION_CALLBACK_TYPE), C = L(n, u.G.APPLICATION_NAME);
    if (null != M) {
        let n = function (n, e, t) {
            switch (e) {
            case o.z.BLOCK_PROFILE_UPDATE:
                return function (n) {
                    switch (n) {
                    case E.J.NICKNAME_UPDATE:
                        return D.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_UPDATE;
                    case E.J.NICKNAME_RESET:
                        return D.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_RESET;
                    default:
                        return;
                    }
                }(n);
            case o.z.QUARANTINE_USER:
                return function (n) {
                    switch (n) {
                    case a.B.MESSAGE_SEND:
                        return D.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_MESSAGE_SEND;
                    case a.B.GUILD_JOIN:
                        return D.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_ON_GUILD_JOIN;
                    case a.B.USERNAME_UPDATE:
                        return D.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USERNAME_UPDATE;
                    case a.B.CLAN_TAG_UPDATE:
                        return D.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_CLAN_TAG_UPDATE;
                    default:
                        return;
                    }
                }(t);
            case o.z.BLOCK_GUEST_JOIN:
                return function () {
                    return D.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_GUEST_ON_GUILD_JOIN;
                }();
            }
        }(N, l, s);
        if (null != n)
            return n;
    }
    let U = I.Z.can(c.Plq.VIEW_CHANNEL, e);
    let R = (t = e, U ? null !== (_ = null == t ? void 0 : t.name) && void 0 !== _ ? _ : D.Z.Messages.UNKNOWN_CHANNEL_PLACEHOLDER : D.Z.Messages.NO_ACCESS), f = null != e && U ? A : c.VqG, G = function (n, e, t) {
            let _ = L(n, u.G.VOICE_CHANNEL_STATUS_OUTCOME);
            return null == _ ? null : ('blocked' === _ ? D.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_VOICE_CHANNEL_STATUS_HOOK : D.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_VOICE_CHANNEL_STATUS_HOOK).format({
                channelName: e,
                channelHook: t
            });
        }(n, R, A);
    if (null != G)
        return G;
    if (null != C)
        return S === i.y.MODAL && null != T ? d !== r.P.BLOCKED ? D.Z.Messages.GUILD_AUTOMOD_LAUNCH_MODAL_HEADER_ACTION_APP_FLAGGED.format({
            applicationName: C,
            interactionUserHook: T,
            integrationOwnerHook: O
        }) : D.Z.Messages.GUILD_AUTOMOD_LAUNCH_MODAL_HEADER_ACTION_APP_BLOCKED.format({
            applicationName: C,
            interactionUserHook: T,
            integrationOwnerHook: O
        }) : d !== r.P.BLOCKED ? D.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_APP_FLAGGED_HOOK.format({
            applicationName: C,
            channelName: R,
            channelHook: f,
            integrationOwnerHook: O
        }) : D.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_APP_BLOCKED_HOOK.format({
            applicationName: C,
            channelName: R,
            channelHook: f,
            integrationOwnerHook: O
        });
    return d !== r.P.BLOCKED ? D.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_HOOK.format({
        channelName: R,
        channelHook: f
    }) : D.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_HOOK.format({
        channelName: R,
        channelHook: f
    });
}
function C(n) {
    switch (n) {
    case O.i.NICKNAME:
        return D.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_NICKNAME;
    case O.i.USERNAME:
        return D.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME;
    case O.i.GLOBAL_NAME:
        return D.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_GLOBAL_NAME;
    case O.i.CLAN_TAG:
        return D.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_CLAN_TAG;
    default:
        return D.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME;
    }
}
function U(n) {
    var e, t;
    let _ = L(n, A.D.NOTIFICATION_TYPE), E = L(n, A.D.JOIN_ATTEMPTS), r = L(n, A.D.RAID_DATETIME), i = L(n, A.D.DMS_SENT), u = L(n, A.D.RAID_TYPE), a = L(n, A.D.RESOLVED_REASON), o = L(n, A.D.DECISION_ID), O = L(n, A.D.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
    return {
        notificationType: null !== (e = null == (t = _) ? null : t) && void 0 !== e ? e : void 0,
        joinAttempts: null != E ? parseInt(E) : void 0,
        raidDatetime: null != r ? new Date(r) : void 0,
        dmsSent: null != i ? parseInt(i) : void 0,
        raidType: null != u ? u : void 0,
        resolvedReason: null != a ? a : void 0,
        decisionId: null != o ? o : void 0,
        suspiciousMentionActivityUntil: null != O ? new Date(O) : void 0
    };
}
function R(n) {
    let e = L(n, u.G.CHANNEL_ID), t = L(n, u.G.ALERT_ACTIONS_EXECUTION), _ = (0, l.t)(t);
    return {
        content: function (n) {
            var e, t;
            let [_] = null !== (e = n.embeds) && void 0 !== e ? e : [];
            return null !== (t = null == _ ? void 0 : _.rawDescription) && void 0 !== t ? t : '';
        }(n),
        ruleName: L(n, u.G.RULE_NAME),
        decisionId: L(n, u.G.DECISION_ID),
        keyword: L(n, u.G.KEYWORD),
        keywordMatchedContent: L(n, u.G.KEYWORD_MATCHED_CONTENT),
        flaggedMessageId: L(n, u.G.FLAGGED_MESSAGE_ID),
        timeoutDuration: L(n, u.G.TIMEOUT_DURATION),
        quarantineType: L(n, u.G.QUARANTINE_USER),
        quarantineAction: L(n, u.G.QUARANTINE_USER_ACTION),
        decisionReason: L(n, u.G.DECISION_REASON),
        applicationName: L(n, u.G.APPLICATION_NAME),
        interactionUserId: L(n, u.G.INTERACTION_USER_ID),
        interactionCallbackType: L(n, u.G.INTERACTION_CALLBACK_TYPE),
        embedChannel: N.Z.getChannel(e),
        embedChannelId: e,
        alertActionsExecution: null != _ ? _ : void 0
    };
}
function f(n) {
    let e = _.useMemo(() => R(n), [n]), t = (0, T.e7)([N.Z], () => N.Z.getChannel(e.embedChannelId), [e.embedChannelId]);
    return {
        ...e,
        embedChannel: t
    };
}
function G(n) {
    if (null == n)
        return null;
    let {alertActionsExecution: e} = R(n);
    return null != e ? e : null;
}
function P(n) {
    if (null == n)
        return D.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED;
    switch (n) {
    case s.$l.LEGITIMATE_ACTIVITY:
        return D.Z.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_NO_ACTION;
    case s.$l.DM_SPAM:
        return D.Z.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_DM_SPAM;
    case s.$l.JOIN_RAID:
        return D.Z.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_JOIN_RAID;
    default:
        return D.Z.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_OTHER;
    }
}
function g(n) {
    return L(n, A.D.ACTION_BY_USER_ID);
}
let m = void 0;
