n.d(t, {
    $U: function () {
        return _;
    },
    Rm: function () {
        return C;
    },
    aL: function () {
        return i;
    },
    em: function () {
        return g;
    },
    jv: function () {
        return p;
    },
    mV: function () {
        return I;
    },
    rK: function () {
        return E;
    },
    wV: function () {
        return f;
    }
}),
    n(653041),
    n(536091),
    n(47120),
    n(724458);
var i,
    r,
    a = n(661869),
    l = n(876215);
n(442837), n(638395);
var s = n(786761);
n(375954);
var o = n(306680),
    c = n(709054),
    d = n(505369);
n(109911);
var u = n(265164),
    h = n(761080),
    m = n(584925);
n(981631);
function p(e) {
    return e < -1.5 ? 4 : e < 0 ? 3 : e > 0 ? 2 : 1;
}
async function g(e, t, n) {
    let i = u.Z.getHydratedItems(),
        r = e.slice(t, n);
    if (0 === r.length) return;
    let a = r.filter((e) => null == i[e.id]),
        l = a
            .filter((e) => e.type === h.Rr.MESSAGE)
            .map((e) => ({
                channel_id: e.data.channel_id,
                message_id: e.data.message_id
            })),
        s = a
            .map((e) => {
                if (e.type === h.Rr.MESSAGE) {
                    var t, n, i, r, a, l;
                    let s = [];
                    return (
                        (null === (t = e.data.message_context) || void 0 === t ? void 0 : t.reply_message_id) != null &&
                            0 !== parseInt(null === (n = e.data.message_context) || void 0 === n ? void 0 : n.reply_message_id) &&
                            s.push({
                                channel_id: e.data.channel_id,
                                message_id: e.data.message_context.reply_message_id
                            }),
                        (null === (i = e.data.message_context) || void 0 === i ? void 0 : i.before_message_id) != null &&
                            0 !== parseInt(null === (r = e.data.message_context) || void 0 === r ? void 0 : r.before_message_id) &&
                            s.push({
                                channel_id: e.data.channel_id,
                                message_id: e.data.message_context.before_message_id
                            }),
                        (null === (a = e.data.message_context) || void 0 === a ? void 0 : a.after_message_id) != null &&
                            0 !== parseInt(null === (l = e.data.message_context) || void 0 === l ? void 0 : l.after_message_id) &&
                            s.push({
                                channel_id: e.data.channel_id,
                                message_id: e.data.message_context.after_message_id
                            }),
                        s
                    );
                }
                return [];
            })
            .flat()
            .filter(Boolean),
        o = a
            .filter((e) => e.type === h.Rr.SUMMARY)
            .map((e) => ({
                guild_id: e.data.guild_id,
                channel_id: e.data.channel_id,
                summary_id: e.data.summary_id
            })),
        c = a
            .filter((e) => e.type === h.Rr.ACTIVITY)
            .map((e) => ({
                user_id: e.data.user_id,
                content_id: e.data.content_id
            }));
    await d.Z.fetchHydrated([...l, ...s], o, c, t, n);
}
((r = i || (i = {}))[(r.UNKNOWN = 0)] = 'UNKNOWN'), (r[(r.DEFAULT = 1)] = 'DEFAULT'), (r[(r.MORE = 2)] = 'MORE'), (r[(r.LESS = 3)] = 'LESS'), (r[(r.MUTED = 4)] = 'MUTED');
function f(e, t) {
    let n = [],
        i = [],
        r = 0;
    for (let t of e.messages)
        if (null != t.reactions) {
            if (n.length < 5)
                for (let e of t.reactions) {
                    var a, l;
                    (null == e.count_details || (null !== (a = e.count_details.burst) && void 0 !== a ? a : 0) > 0 || (null !== (l = e.count_details.normal) && void 0 !== l ? l : 0) > 0) && n.push(e);
                }
            r += (function (e) {
                let t = 0;
                if (null != e.reactions) {
                    let n = (null != e.reactions ? e.reactions : []).map((e) => {
                        var t, n;
                        return null == e.count_details ? 0 : (null !== (t = e.count_details.burst) && void 0 !== t ? t : 0) + (null !== (n = e.count_details.normal) && void 0 !== n ? n : 0);
                    });
                    n.length > 0 && (t = n.reduce((e, t) => e + t));
                }
                return t;
            })(t);
        }
    let o = null;
    for (let t of e.messages) if (null != t.author && o !== t.author.id && (i.push((0, s.e5)(t)), (o = t.author.id), i.length >= 3)) break;
    return {
        id: e.id,
        topic: e.topic,
        summShort: e.summ_short,
        people: Array.from(new Set(e.people)),
        startId: e.start_id,
        endId: e.end_id,
        count: e.count,
        channelId: e.channel_id,
        type: e.type,
        messages: i,
        reactions: n,
        messageIds: e.messages.map((e) => e.id),
        guildId: t,
        reactionCount: r,
        numTotalMessages: e.messages.length,
        source: e.source
    };
}
function _(e, t) {
    let n = o.ZP.getTrackedAckMessageId(e);
    return null == n || c.default.extractTimestamp(t) > c.default.extractTimestamp(n);
}
function E(e) {
    return !1;
}
function I(e) {
    var t;
    return {
        id: e.id,
        type: h.Rr.CUSTOM_STATUS,
        activity: {
            id: e.id,
            author_id: e.data.user_id,
            author_type: a.i.USER,
            traits: [],
            participants: [],
            content_type: l.s.CUSTOM_STATUS,
            extra: {
                type: 'custom_status_extra',
                status: null !== (t = e.data.text) && void 0 !== t ? t : '',
                emoji_id: e.data.emoji_id,
                emoji_name: e.data.emoji_name,
                emoji_animated: e.data.emoji_animated
            }
        },
        score: e.score,
        score_components: e.score_components
    };
}
function C(e, t, n) {
    let i = m.Z.getReadTimestamp(e);
    null == i && (i = null == n ? void 0 : n[e]);
    let r = m.Z.getReadTimestamp(t);
    return (null == r && (r = null == n ? void 0 : n[t]), null == i && null == r) ? 0 : null == i ? -1 : null == r ? 1 : r - i;
}
