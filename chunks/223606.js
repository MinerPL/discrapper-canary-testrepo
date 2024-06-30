t(724458);
var r, i = t(442837), o = t(570140), l = t(673750), u = t(786761), s = t(592125), a = t(375954), c = t(709054), d = t(539573), _ = t(825829), f = t(981631);
function E(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e;
}
let I = {}, g = 0, p = {}, C = {}, T = (e, n) => {
        let t = (0, l.hc)(e), r = {
                id: t,
                isBlockedEdit: (0, l.Bz)(e),
                messageData: e,
                errorMessage: (0, d.uF)(e, n)
            };
        I[t] = r, g++;
    }, S = e => I[e], m = e => {
        null != I[e] && delete I[e], g++;
    };
function h(e) {
    let {
        messageData: n,
        errorResponseBody: t
    } = e;
    return T(n, t), !0;
}
function N(e) {
    var n;
    let {
            channelId: t,
            messages: r
        } = e, i = null === (n = s.Z.getChannel(t)) || void 0 === n ? void 0 : n.getGuildId();
    if (null == i)
        return !1;
    let o = C[i], l = r.reduce((e, n) => {
            var t;
            return n.type === f.uaV.AUTO_MODERATION_ACTION && (null === (t = n.embeds) || void 0 === t ? void 0 : t.some(e => {
                let {type: n} = e;
                return n === f.hBH.AUTO_MODERATION_NOTIFICATION;
            })) ? null == e || -1 === c.default.compare(e, n.id) ? n.id : void 0 : e;
        }, o);
    return null != l && C[i] !== l && (C[i] = l, !0);
}
class A extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(a.Z), null != e && (I = e.automodFailedMessages, p = e.mentionRaidDetectionByGuild);
    }
    getState() {
        return {
            automodFailedMessages: I,
            mentionRaidDetectionByGuild: p,
            lastIncidentAlertMessage: C
        };
    }
    getMessage(e) {
        var n;
        return null == e ? null : null !== (n = S(e)) && void 0 !== n ? n : null;
    }
    getMessagesVersion() {
        return g;
    }
    getMentionRaidDetected(e) {
        var n;
        return null !== (n = p[e]) && void 0 !== n ? n : null;
    }
    getLastIncidentAlertMessage(e) {
        var n;
        return null !== (n = C[e]) && void 0 !== n ? n : null;
    }
}
E(A, 'displayName', 'GuildAutomodMessageStore'), E(A, 'persistKey', 'GuildAutomodMessages'), n.Z = new A(o.Z, {
    CONNECTION_OPEN: function (e) {
        return I = {}, g++, !0;
    },
    LOAD_MESSAGES_SUCCESS: N,
    LOCAL_MESSAGES_LOADED: N,
    MESSAGE_CREATE: function (e) {
        let {
            guildId: n,
            message: t
        } = e;
        if (null == n || t.type !== f.uaV.AUTO_MODERATION_ACTION)
            return !1;
        let r = (0, u.e5)(t);
        return !!(0, _.nY)(r) && !!(0, _.OP)(r) && (C[n] = r.id, !0);
    },
    MESSAGE_SEND_FAILED_AUTOMOD: h,
    MESSAGE_EDIT_FAILED_AUTOMOD: h,
    REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
        let {messageId: n} = e;
        return m(n), !0;
    },
    MESSAGE_END_EDIT: function (e) {
        let {response: n} = e;
        if ((null == n ? void 0 : n.body) == null || n.body.code === f.evJ.AUTOMOD_MESSAGE_BLOCKED)
            return !1;
        let t = n.body.id;
        if (null == t)
            return !1;
        m(t);
    },
    AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
        let {
            guildId: n,
            decisionId: t,
            suspiciousMentionActivityUntil: r
        } = e;
        return p[n] = {
            guildId: n,
            decisionId: t,
            suspiciousMentionActivityUntil: r
        }, !0;
    },
    AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
        let {guildId: n} = e;
        return delete p[n], !0;
    }
});
