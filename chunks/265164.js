n(653041), n(47120), n(724458);
var i,
    a = n(876215),
    s = n(442837),
    r = n(570140),
    l = n(146282),
    o = n(26033),
    c = n(561308),
    d = n(353926),
    u = n(924301),
    _ = n(786761),
    E = n(314897),
    h = n(592125),
    m = n(165630),
    I = n(430824),
    g = n(375954),
    p = n(306680),
    T = n(699516),
    S = n(9156),
    C = n(626135),
    f = n(70956),
    N = n(761080),
    A = n(584925),
    v = n(207205),
    L = n(981631),
    Z = n(206583);
function R(e, t, n) {
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
let O = [],
    x = null,
    b = 0,
    P = [],
    M = [],
    D = [],
    y = [],
    j = {},
    U = {},
    G = {},
    w = {},
    k = {},
    B = {},
    H = 0,
    V = !1,
    F = !1,
    Y = !1,
    W = null,
    z = null,
    K = 0,
    q = [],
    Q = [],
    X = 0;
function J(e) {
    return Date.now() - b > 2 * f.Z.Millis.HOUR && e.length + M.length + D.length >= N.Lb;
}
function $(e, t, n, i) {
    let a = e.filter((e) => e.type !== n);
    return (
        t.forEach((e, t) => {
            (t + 1) * i < a.length ? a.splice((t + 1) * i, 0, e) : a.push(e);
        }),
        a
    );
}
function ee() {
    (function () {
        let e = I.Z.getGuildIds(),
            t = [];
        for (let i of e) {
            if (null != k[i] && k[i] < 0) continue;
            let e = u.ZP.getGuildScheduledEventsForGuild(i),
                a = 0;
            for (let i of e) {
                if (!(0, u.Z2)(i)) {
                    if ((0, u.BQ)(i, 2 * f.Z.Seconds.DAY) || (0, u.xt)(i)) {
                        var n;
                        if (
                            (null == G[i.id] &&
                                (G[i.id] = {
                                    id: i.id,
                                    type: N.Rr.GUILD_EVENT,
                                    score: 50,
                                    event_id: i.id
                                }),
                            t.push({
                                id: i.id,
                                type: N.Rr.GUILD_EVENT,
                                score: 50,
                                data: {
                                    guild_id: i.guild_id,
                                    event_id: i.id,
                                    channel_id: null !== (n = i.channel_id) && void 0 !== n ? n : void 0
                                }
                            }),
                            ++a >= 2)
                        )
                            break;
                    }
                }
            }
        }
        t.sort((e, t) => {
            let n = m.Z.getGuildAffinity(e.data.guild_id),
                i = m.Z.getGuildAffinity(t.data.guild_id);
            return (null != i ? i.score : 0) - (null != n ? n.score : 0);
        });
        let i = [],
            a = [];
        t.forEach((e) => {
            (U[e.id] = e), null != A.Z.getReadTimestamp(e.id) ? a.push(e) : i.push(e);
        }),
            (M = i),
            (q = $(q, i, N.Rr.GUILD_EVENT, 7)),
            (Q = $(Q, a, N.Rr.GUILD_EVENT, 7));
    })(),
        (function () {
            var e, t;
            let n = new Set(),
                i = {},
                s = [],
                r = [],
                d = null !== (t = null === (e = l.Z.getFeed(Z.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.entries) && void 0 !== t ? t : [];
            d.sort((e, t) => e.rank - t.rank),
                d.forEach((e) => {
                    if (n.has(e.content.id) || (e.content.content_type !== a.s.PLAYED_GAME && e.content.content_type !== a.s.CUSTOM_STATUS && e.content.content_type !== a.s.TOP_GAME) || (0, c.n2)(e.content)) return;
                    if ((0, o.dX)(e.content)) {
                        if ((null == i[e.content.author_id] && (i[e.content.author_id] = new Set()), i[e.content.author_id].has(e.content.extra.application_id))) return;
                        i[e.content.author_id].add(e.content.extra.application_id);
                    }
                    null == G[e.content.id] &&
                        (G[e.content.id] = {
                            id: e.content.id,
                            type: N.Rr.ACTIVITY,
                            score: 50,
                            activity: e.content
                        });
                    let t = {
                        id: e.content.id,
                        type: N.Rr.ACTIVITY,
                        score: 50,
                        data: {
                            user_id: e.content.author_id,
                            content_id: e.content.id
                        }
                    };
                    n.add(e.content.id), (U[t.id] = t), null != A.Z.getReadTimestamp(t.id) ? r.push(t) : s.push(t);
                }),
                (D = s),
                (q = $(q, s, N.Rr.ACTIVITY, 5)),
                (Q = $(Q, r, N.Rr.ACTIVITY, 5));
        })();
}
function et(e) {
    if ((P.length > 0 && ((O = P), (P = []), (y = [])), H++, null != e)) (q = e.newUnread), (Q = e.newRead);
    else {
        let [e, t] = en(O);
        (q = e), (Q = t);
    }
    if ((ee(), null != j.load_id && x !== j.load_id)) {
        var t;
        C.default.track(L.rMx.FEED_LOADED, {
            ...j,
            unread_feed_item_ids: q.map((e) => e.id),
            read_feed_item_ids: Q.map((e) => e.id),
            home_session_id: 'gravity'
        }),
            (x = null !== (t = j.load_id) && void 0 !== t ? t : null),
            (j = {});
    }
    (X = 0), (0, v.em)([...q, ...Q], 0, N.xy);
}
function en(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let a = null != A.Z.getReadTimestamp(e.id);
            e.type === N.Rr.MESSAGE ? (a = a || !(0, v.$U)(e.data.channel_id, e.data.message_id)) : e.type === N.Rr.SUMMARY && (a = a || !(0, v.$U)(e.data.channel_id, e.data.summary_id)), a ? t.push(e) : e.type === N.Rr.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
        }),
        [[...i, ...n], t.sort((e, t) => (0, v.Rm)(e.id, t.id))]
    );
}
function ei(e, t) {
    let n = [],
        i = new Set(O.map((e) => e.id));
    for (let a of e) {
        if (!i.has(a.id) && null == A.Z.getReadTimestamp(a.id) && (a.type !== N.Rr.MESSAGE || (!!(0, v.$U)(a.data.channel_id, a.data.message_id) && a.data.channel_id !== t)) && (a.type !== N.Rr.SUMMARY || (!!(0, v.$U)(a.data.channel_id, a.data.summary_id) && a.data.channel_id !== t))) n.push(a);
    }
    return n;
}
function ea(e, t) {
    return e.filter((e) => (e.type !== N.Rr.MESSAGE && e.type !== N.Rr.SUMMARY && e.type !== N.Rr.GUILD_EVENT) || e.data.channel_id !== t);
}
function es(e, t) {
    if ((0, v.jv)(t) === v.aL.MUTED) (O = ea(O, e)), (q = ea(q, e)), (Q = ea(Q, e)), (P = ea(P, e)), (y = ea(y, e));
}
function er(e, t) {
    return e.filter((e) => (e.type !== N.Rr.MESSAGE && e.type !== N.Rr.SUMMARY && e.type !== N.Rr.GUILD_EVENT) || e.data.guild_id !== t);
}
function el(e, t) {
    if ((0, v.jv)(t) === v.aL.MUTED) (O = er(O, e)), (q = er(q, e)), (Q = er(Q, e)), (P = er(P, e)), (y = er(y, e));
}
function eo(e) {
    let { type: t, messageId: n, userId: i, emoji: a, reactionType: s } = e,
        r = G[n];
    if (null == r || r.type !== N.Rr.MESSAGE) return !1;
    let l = E.default.getId() === i;
    'MESSAGE_REACTION_ADD' === t ? (r.message = r.message.addReaction(a, l, e.colors, s)) : (r.message = r.message.removeReaction(a, l, s));
}
function ec(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    q.forEach((e, a) => {
        a > X && (e.type === N.Rr.MESSAGE || e.type === N.Rr.SUMMARY) && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let a = F,
        [s, r] = en(P);
    if (((y = ei(s, t)), (F = Y ? a && y.length >= N.Lb : a && J(i)), 0 === n.length && a === F)) return !1;
    if (0 !== n.length) (q = i), (Q = [...Q, ...n]);
}
class ed extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(g.Z, h.Z, p.ZP, d.Z, S.ZP, E.default, A.Z, l.Z), null != e)) {
            var t, n, i, a, s;
            (O = null !== (t = e.dehydratedItems) && void 0 !== t ? t : []).forEach((e) => {
                U[e.id] = e;
            }),
                (k = null !== (n = e.customGuildScores) && void 0 !== n ? n : {}),
                (B = null !== (i = e.customChannelScoresByGuild) && void 0 !== i ? i : {}),
                (K = null !== (a = e.numOpens) && void 0 !== a ? a : 0),
                (b = null !== (s = e.lastOpened) && void 0 !== s ? s : 0);
        }
    }
    getVersion() {
        return H;
    }
    getDehydratedItems() {
        return O;
    }
    getNewDehydratedItems() {
        return P;
    }
    getDehydratedItem(e) {
        var t;
        return null !== (t = U[e]) && void 0 !== t ? t : null;
    }
    getHydratedItem(e) {
        var t;
        return null !== (t = G[e]) && void 0 !== t ? t : null;
    }
    getMessage(e) {
        let t = G[e];
        return null == t || t.type !== N.Rr.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return G;
    }
    getUnreadDisplayItems() {
        return q;
    }
    getNewUnreadDehydratedItems() {
        return y;
    }
    getReadDisplayItems() {
        return Q;
    }
    getNextIndexToHydrate() {
        return X;
    }
    getMissingItems() {
        return w;
    }
    getCustomChannelScore(e, t) {
        return null == B[e] || null == B[e][t] ? v.aL.UNKNOWN : (0, v.jv)(B[e][t]);
    }
    getCustomGuildScore(e) {
        var t;
        return null !== (t = k[e]) && void 0 !== t ? t : 0;
    }
    getCustomGuildScores() {
        return k;
    }
    hasNewContent() {
        return F;
    }
    getSelectedSummary(e) {
        return null == W || W.channelId !== e ? null : W;
    }
    isGravitySelectedChannel(e) {
        return null != z && z === e;
    }
    getLoadId() {
        return x;
    }
    hasOpenedEnoughTimes() {
        return 5 === K;
    }
    hasOpened() {
        return Y;
    }
    getState() {
        return {
            dehydratedItems: O,
            numOpens: K,
            customGuildScores: k,
            customChannelScoresByGuild: B,
            lastOpened: b
        };
    }
}
R(ed, 'displayName', 'GravityStore'),
    R(ed, 'persistKey', 'GravityStore'),
    (t.Z = new ed(r.Z, {
        POST_CONNECTION_OPEN: function () {
            if (O.length > 0) {
                let [e, t] = en(O);
                (q = e), (Q = t), ee(), (X = 0), (0, v.em)([...q, ...Q], 0, N.xy);
            }
        },
        LOGOUT: function () {
            return !1;
        },
        LOAD_GRAVITY_DEHYDRATED: function (e) {
            let { items: t, loadId: n, startTime: i, isReloading: a } = e;
            (P = t.filter((e) => N.zd.has(e.type))),
                !(function () {
                    let e = new Set();
                    P.forEach((t) => {
                        e.add(t.id);
                    }),
                        P.forEach((e) => {
                            (U[e.id] = e), e.type === N.Rr.CUSTOM_STATUS && (T.Z.isBlocked(e.data.user_id) ? (w[e.id] = !0) : (G[e.id] = (0, v.mV)(e)));
                        });
                })(),
                (j = {
                    load_id: n,
                    load_time_millis: Date.now() - i,
                    feed_item_ids: P.map((e) => e.id)
                });
            let [s, r] = en(P);
            if (((y = ei(s)), Y && 0 !== H)) {
                let e = y.length > N.Lb;
                !a && (F = e), e && (0, v.em)([...s, ...r], 0, N.xy);
            } else
                (H = 0),
                    !Y && J(s) && ((F = !0), (V = !0)),
                    et({
                        newUnread: s,
                        newRead: r
                    });
        },
        LOAD_GRAVITY_HYDRATED: function (e) {
            let { messageItems: t, summaryItems: n, activityItems: i, requestMessageItems: a, requestSummaryItems: s, requestActivityItems: r, startingIndex: l, endingIndex: o } = e;
            G = { ...G };
            let c = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
                d = n.reduce((e, t) => ((e[t.id] = t), e), {}),
                u = i.reduce((e, t) => ((e[t.id] = t), e), {});
            a.forEach((e) => {
                let t = c[e.message_id];
                if (null == t) {
                    w[e.message_id] = !0;
                    return;
                }
                let n = U[e.message_id];
                if (null == n) {
                    w[e.message_id] = !0;
                    return;
                }
                null != g.Z.getMessage(t.channel_id, t.message.id)
                    ? (G[t.message.id] = {
                          ...n,
                          message: g.Z.getMessage(t.channel_id, t.message.id)
                      })
                    : (G[t.message.id] = {
                          ...n,
                          message: (0, _.e5)(t.message)
                      });
            }),
                s.forEach((e) => {
                    let t = d[e.summary_id];
                    if (null == t) {
                        w[e.summary_id] = !0;
                        return;
                    }
                    let n = U[e.summary_id];
                    if (null == n || n.type !== N.Rr.SUMMARY || t.messages.length < 3) {
                        w[e.summary_id] = !0;
                        return;
                    }
                    G[t.id] = {
                        ...n,
                        summary: (0, v.wV)(t, n.data.guild_id)
                    };
                }),
                r.forEach((e) => {
                    let t = u[e.content_id];
                    if (null == t) {
                        w[e.content_id] = !0;
                        return;
                    }
                    let n = U[e.content_id];
                    if (null == n) {
                        w[e.content_id] = !0;
                        return;
                    }
                    G[t.id] = {
                        ...n,
                        activity: t
                    };
                }),
                l === X && (X = o);
        },
        LOAD_GRAVITY_CUSTOM_SCORES: function (e) {
            let { scores: t } = e;
            for (let e of t) for (let t of ((k[e.guild_id] = e.guild_score), el(e.guild_id, e.guild_score), Object.keys(e.custom_channel_scores))) null == B[e.guild_id] && (B[e.guild_id] = {}), (B[e.guild_id][t] = e.custom_channel_scores[t]), es(t, e.custom_channel_scores[t]);
            (k = { ...k }), (B = { ...B });
        },
        GRAVITY_CUSTOM_SCORES_UPDATED: function (e) {
            let { channelScores: t, guildId: n, guildScore: i } = e;
            null != i && ((k[n] = i), el(n, i), (k = { ...k })),
                null == t ||
                    t.forEach((e) => {
                        let { channelId: t, score: i } = e;
                        null == B[n] && (B[n] = {}), (B[n][t] = i), es(t, i), (B = { ...B });
                    });
        },
        RELOAD_GRAVITY: function () {
            if (0 === P.length) return !1;
            et(), (F = !1);
        },
        GRAVITY_TAB_OPENED: function () {
            (Y = !0), (b = Date.now()), V && ((V = !1), (F = !1)), K < 5 && K++;
        },
        GRAVITY_FEEDBACK_GIVEN: function () {
            K = 6;
        },
        SET_GRAVITY_SELECTED_SUMMARY: function (e) {
            if (null == e.summaryId) {
                W = null;
                return;
            }
            let t = G[e.summaryId];
            if (null == t || t.type !== N.Rr.SUMMARY) {
                W = null;
                return;
            }
            W = t.summary;
        },
        SET_GRAVITY_SELECTED_CHANNEL: function (e) {
            z = e.channelId;
        },
        MESSAGE_REACTION_ADD: eo,
        MESSAGE_REACTION_ADD_MANY: function (e) {
            let { messageId: t, reactions: n } = e,
                i = G[t];
            if (null == i || i.type !== N.Rr.MESSAGE) return !1;
            let a = E.default.getId();
            i.message = i.message.addReactionBatch(n, a);
        },
        MESSAGE_REACTION_REMOVE: eo,
        MESSAGE_REACTION_REMOVE_ALL: function (e) {
            let { messageId: t } = e,
                n = G[t];
            if (null == n || n.type !== N.Rr.MESSAGE) return !1;
            n.message = n.message.set('reactions', []);
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
            let { messageId: t, emoji: n } = e,
                i = G[t];
            if (null == i || i.type !== N.Rr.MESSAGE) return !1;
            i.message = i.message.removeReactionsForEmoji(n);
        },
        CHANNEL_ACK: ec,
        MESSAGE_ACK: ec,
        CONTENT_INVENTORY_SET_FEED: function (e) {
            let { feedId: t } = e;
            if (t !== Z.YN.GLOBAL_FEED) return !1;
            if (!Y) {
                let [e, t] = en(O);
                (q = e), (Q = t), ee(), (F = J(e));
            }
        }
    }));
