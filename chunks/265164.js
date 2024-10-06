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
    E = n(601964),
    h = n(314897),
    m = n(592125),
    I = n(165630),
    p = n(430824),
    g = n(375954),
    T = n(306680),
    f = n(699516),
    S = n(9156),
    C = n(626135),
    N = n(70956),
    A = n(900849),
    v = n(761080),
    Z = n(584925),
    L = n(207205),
    R = n(981631),
    O = n(206583);
function x(e, t, n) {
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
let b = [],
    M = null,
    P = 0,
    D = [],
    y = [],
    j = [],
    U = [],
    G = {},
    w = {},
    k = {},
    B = {},
    V = {},
    H = {},
    F = 0,
    Y = !1,
    z = !1,
    W = !1,
    K = null,
    q = null,
    Q = 0,
    X = [],
    J = [],
    $ = 0,
    ee = [];
function et(e) {
    return Date.now() - P > 2 * N.Z.Millis.HOUR && e.length + y.length + j.length >= v.Lb;
}
function en(e, t, n, i) {
    let a = e.filter((e) => e.type !== n);
    return (
        t.forEach((e, t) => {
            (t + 1) * i < a.length ? a.splice((t + 1) * i, 0, e) : a.push(e);
        }),
        a
    );
}
function ei() {
    (function () {
        let e = p.Z.getGuildIds(),
            t = [];
        for (let i of e) {
            if (null != V[i] && V[i] < 0) continue;
            let e = u.ZP.getGuildScheduledEventsForGuild(i),
                a = 0;
            for (let i of e) {
                if (!(0, u.Z2)(i)) {
                    if ((0, u.BQ)(i, 2 * N.Z.Seconds.DAY) || (0, u.xt)(i)) {
                        var n;
                        if (
                            (null == k[i.id] &&
                                (k[i.id] = {
                                    id: i.id,
                                    type: v.Rr.GUILD_EVENT,
                                    score: 50,
                                    event_id: i.id
                                }),
                            t.push({
                                id: i.id,
                                type: v.Rr.GUILD_EVENT,
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
            let n = I.Z.getGuildAffinity(e.data.guild_id),
                i = I.Z.getGuildAffinity(t.data.guild_id);
            return (null != i ? i.score : 0) - (null != n ? n.score : 0);
        });
        let i = [],
            a = [];
        t.forEach((e) => {
            (w[e.id] = e), null != Z.Z.getReadTimestamp(e.id) ? a.push(e) : i.push(e);
        }),
            (y = i),
            (X = en(X, i, v.Rr.GUILD_EVENT, 7)),
            (J = en(J, a, v.Rr.GUILD_EVENT, 7));
    })(),
        (function () {
            var e, t;
            let n = new Set(),
                i = {},
                s = [],
                r = [],
                d = null !== (t = null === (e = l.Z.getFeed(O.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.entries) && void 0 !== t ? t : [];
            d.sort((e, t) => e.rank - t.rank),
                d.forEach((e) => {
                    if (n.has(e.content.id) || (e.content.content_type !== a.s.PLAYED_GAME && e.content.content_type !== a.s.CUSTOM_STATUS && e.content.content_type !== a.s.TOP_GAME) || (0, c.n2)(e.content)) return;
                    if ((0, o.dX)(e.content)) {
                        if ((null == i[e.content.author_id] && (i[e.content.author_id] = new Set()), i[e.content.author_id].has(e.content.extra.application_id))) return;
                        i[e.content.author_id].add(e.content.extra.application_id);
                    }
                    null == k[e.content.id] &&
                        (k[e.content.id] = {
                            id: e.content.id,
                            type: v.Rr.ACTIVITY,
                            score: 50,
                            activity: e.content
                        });
                    let t = {
                        id: e.content.id,
                        type: v.Rr.ACTIVITY,
                        score: 50,
                        data: {
                            user_id: e.content.author_id,
                            content_id: e.content.id
                        }
                    };
                    n.add(e.content.id), (w[t.id] = t), null != Z.Z.getReadTimestamp(t.id) ? r.push(t) : s.push(t);
                }),
                (j = s),
                (X = en(X, s, v.Rr.ACTIVITY, 5)),
                (J = en(J, r, v.Rr.ACTIVITY, 5));
        })(),
        ea();
}
function ea() {
    X = X.filter((e) => e.type !== v.Rr.RECOMMENDED_GUILDS);
    let e = {
        id: 'recommendedGuilds',
        type: v.Rr.RECOMMENDED_GUILDS,
        score: 50
    };
    if (((k[e.id] = e), (w[e.id] = e), 0 === ee.length || X.length < 10)) {
        X = [...X, e];
        return;
    }
    let t = Math.floor(Math.random() * X.length);
    X.splice(t, 0, e);
}
function es(e) {
    if ((D.length > 0 && ((b = D), (D = []), (U = [])), F++, null != e)) (X = e.newUnread), (J = e.newRead);
    else {
        let [e, t] = er(b);
        (X = e), (J = t);
    }
    if ((ei(), null != G.load_id && M !== G.load_id)) {
        var t;
        C.default.track(R.rMx.FEED_LOADED, {
            ...G,
            unread_feed_item_ids: X.map((e) => e.id),
            read_feed_item_ids: J.map((e) => e.id),
            home_session_id: 'gravity'
        }),
            (M = null !== (t = G.load_id) && void 0 !== t ? t : null),
            (G = {});
    }
    ($ = 0), (0, L.em)([...X, ...J], 0, v.xy);
}
function er(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let a = null != Z.Z.getReadTimestamp(e.id);
            e.type === v.Rr.MESSAGE ? (a = a || !(0, L.$U)(e.data.channel_id, e.data.message_id)) : e.type === v.Rr.SUMMARY && (a = a || !(0, L.$U)(e.data.channel_id, e.data.summary_id)), a ? t.push(e) : e.type === v.Rr.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
        }),
        [[...i, ...n], t.sort((e, t) => (0, L.Rm)(e.id, t.id))]
    );
}
function el(e, t) {
    let n = [],
        i = new Set(b.map((e) => e.id));
    for (let a of e) {
        if (!(a.type === v.Rr.RECOMMENDED_GUILDS || i.has(a.id)) && null == Z.Z.getReadTimestamp(a.id) && (a.type !== v.Rr.MESSAGE || (!!(0, L.$U)(a.data.channel_id, a.data.message_id) && a.data.channel_id !== t)) && (a.type !== v.Rr.SUMMARY || (!!(0, L.$U)(a.data.channel_id, a.data.summary_id) && a.data.channel_id !== t))) n.push(a);
    }
    return n;
}
function eo(e, t) {
    return e.filter((e) => (e.type !== v.Rr.MESSAGE && e.type !== v.Rr.SUMMARY && e.type !== v.Rr.GUILD_EVENT) || e.data.channel_id !== t);
}
function ec(e, t) {
    if ((0, L.jv)(t) === L.aL.MUTED) (b = eo(b, e)), (X = eo(X, e)), (J = eo(J, e)), (D = eo(D, e)), (U = eo(U, e));
}
function ed(e, t) {
    return e.filter((e) => (e.type !== v.Rr.MESSAGE && e.type !== v.Rr.SUMMARY && e.type !== v.Rr.GUILD_EVENT) || e.data.guild_id !== t);
}
function eu(e, t) {
    if ((0, L.jv)(t) === L.aL.MUTED) (b = ed(b, e)), (X = ed(X, e)), (J = ed(J, e)), (D = ed(D, e)), (U = ed(U, e));
}
function e_(e) {
    let { type: t, messageId: n, userId: i, emoji: a, reactionType: s } = e,
        r = k[n];
    if (null == r || r.type !== v.Rr.MESSAGE) return !1;
    let l = h.default.getId() === i;
    'MESSAGE_REACTION_ADD' === t ? (r.message = r.message.addReaction(a, l, e.colors, s)) : (r.message = r.message.removeReaction(a, l, s));
}
function eE(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    X.forEach((e, a) => {
        a > $ && (e.type === v.Rr.MESSAGE || e.type === v.Rr.SUMMARY) && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let a = z,
        [s, r] = er(D);
    if (((U = el(s, t)), (z = W ? a && U.length >= v.Lb : a && et(i)), 0 === n.length && a === z)) return !1;
    if (0 !== n.length) (X = i), (J = [...J, ...n]);
}
class eh extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(g.Z, m.Z, T.ZP, d.Z, S.ZP, h.default, Z.Z, l.Z), null != e)) {
            var t, n, i, a, s;
            (b = null !== (t = e.dehydratedItems) && void 0 !== t ? t : []).forEach((e) => {
                w[e.id] = e;
            }),
                (V = null !== (n = e.customGuildScores) && void 0 !== n ? n : {}),
                (H = null !== (i = e.customChannelScoresByGuild) && void 0 !== i ? i : {}),
                (Q = null !== (a = e.numOpens) && void 0 !== a ? a : 0),
                (P = null !== (s = e.lastOpened) && void 0 !== s ? s : 0);
        }
    }
    getVersion() {
        return F;
    }
    getDehydratedItems() {
        return b;
    }
    getNewDehydratedItems() {
        return D;
    }
    getDehydratedItem(e) {
        var t;
        return null !== (t = w[e]) && void 0 !== t ? t : null;
    }
    getHydratedItem(e) {
        var t;
        return null !== (t = k[e]) && void 0 !== t ? t : null;
    }
    getMessage(e) {
        let t = k[e];
        return null == t || t.type !== v.Rr.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return k;
    }
    getUnreadDisplayItems() {
        return X;
    }
    getNewUnreadDehydratedItems() {
        return U;
    }
    getReadDisplayItems() {
        return J;
    }
    getNextIndexToHydrate() {
        return $;
    }
    getMissingItems() {
        return B;
    }
    getCustomChannelScore(e, t) {
        return null == H[e] || null == H[e][t] ? L.aL.UNKNOWN : (0, L.jv)(H[e][t]);
    }
    getCustomGuildScore(e) {
        var t;
        return null !== (t = V[e]) && void 0 !== t ? t : 0;
    }
    getCustomGuildScores() {
        return V;
    }
    hasNewContent() {
        return z;
    }
    getSelectedSummary(e) {
        return null == K || K.channelId !== e ? null : K;
    }
    isGravitySelectedChannel(e) {
        return null != q && q === e;
    }
    getLoadId() {
        return M;
    }
    hasOpenedEnoughTimes() {
        return 5 === Q;
    }
    hasOpened() {
        return W;
    }
    getDiscoverableGuilds() {
        return ee;
    }
    getState() {
        return {
            dehydratedItems: b,
            numOpens: Q,
            customGuildScores: V,
            customChannelScoresByGuild: H,
            lastOpened: P
        };
    }
}
x(eh, 'displayName', 'GravityStore'),
    x(eh, 'persistKey', 'GravityStore'),
    (t.Z = new eh(r.Z, {
        POST_CONNECTION_OPEN: function () {
            if (b.length > 0 && (!W || 0 === F)) {
                let [e, t] = er(b);
                (X = e), (J = t), ei(), ($ = 0), (0, L.em)([...X, ...J], 0, v.xy);
            }
        },
        LOGOUT: function () {
            return !1;
        },
        LOAD_GRAVITY_DEHYDRATED: function (e) {
            let { items: t, loadId: n, startTime: i, isReloading: a } = e;
            (D = t.filter((e) => v.zd.has(e.type))),
                !(function () {
                    let e = new Set();
                    D.forEach((t) => {
                        e.add(t.id);
                    }),
                        D.forEach((e) => {
                            (w[e.id] = e), e.type === v.Rr.CUSTOM_STATUS && (f.Z.isBlocked(e.data.user_id) ? (B[e.id] = !0) : (k[e.id] = (0, L.mV)(e)));
                        });
                })(),
                (G = {
                    load_id: n,
                    load_time_millis: Date.now() - i,
                    feed_item_ids: D.map((e) => e.id)
                });
            let [s, r] = er(D);
            if (((U = el(s)), W && 0 !== F)) {
                let e = U.length > v.Lb;
                !a && (z = e), e && (0, L.em)([...s, ...r], 0, v.xy);
            } else
                (F = 0),
                    !W && et(s) && ((z = !0), (Y = !0)),
                    es({
                        newUnread: s,
                        newRead: r
                    });
        },
        LOAD_GRAVITY_HYDRATED: function (e) {
            let { messageItems: t, summaryItems: n, activityItems: i, requestMessageItems: a, requestSummaryItems: s, requestActivityItems: r, startingIndex: l, endingIndex: o } = e;
            k = { ...k };
            let c = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
                d = n.reduce((e, t) => ((e[t.id] = t), e), {}),
                u = i.reduce((e, t) => ((e[t.id] = t), e), {});
            a.forEach((e) => {
                let t = c[e.message_id];
                if (null == t) {
                    B[e.message_id] = !0;
                    return;
                }
                let n = w[e.message_id];
                if (null == n) {
                    B[e.message_id] = !0;
                    return;
                }
                null != g.Z.getMessage(t.channel_id, t.message.id)
                    ? (k[t.message.id] = {
                          ...n,
                          message: g.Z.getMessage(t.channel_id, t.message.id)
                      })
                    : (k[t.message.id] = {
                          ...n,
                          message: (0, _.e5)(t.message)
                      });
            }),
                s.forEach((e) => {
                    let t = d[e.summary_id];
                    if (null == t) {
                        B[e.summary_id] = !0;
                        return;
                    }
                    let n = w[e.summary_id];
                    if (null == n || n.type !== v.Rr.SUMMARY || t.messages.length < 3) {
                        B[e.summary_id] = !0;
                        return;
                    }
                    k[t.id] = {
                        ...n,
                        summary: (0, L.wV)(t, n.data.guild_id)
                    };
                }),
                r.forEach((e) => {
                    let t = u[e.content_id];
                    if (null == t) {
                        B[e.content_id] = !0;
                        return;
                    }
                    let n = w[e.content_id];
                    if (null == n) {
                        B[e.content_id] = !0;
                        return;
                    }
                    k[t.id] = {
                        ...n,
                        activity: t
                    };
                }),
                l === $ && ($ = o);
        },
        LOAD_GRAVITY_CUSTOM_SCORES: function (e) {
            let { scores: t } = e;
            for (let e of t) for (let t of ((V[e.guild_id] = e.guild_score), eu(e.guild_id, e.guild_score), Object.keys(e.custom_channel_scores))) null == H[e.guild_id] && (H[e.guild_id] = {}), (H[e.guild_id][t] = e.custom_channel_scores[t]), ec(t, e.custom_channel_scores[t]);
            (V = { ...V }), (H = { ...H });
        },
        LOAD_GRAVITY_RECOMMENDED_GUILDS: function (e) {
            let { guilds: t } = e;
            (ee = t.map((e) => new E.ZP((0, A.PP)(e.guild)))), ea();
        },
        GRAVITY_CUSTOM_SCORES_UPDATED: function (e) {
            let { channelScores: t, guildId: n, guildScore: i } = e;
            null != i && ((V[n] = i), eu(n, i), (V = { ...V })),
                null == t ||
                    t.forEach((e) => {
                        let { channelId: t, score: i } = e;
                        null == H[n] && (H[n] = {}), (H[n][t] = i), ec(t, i), (H = { ...H });
                    });
        },
        RELOAD_GRAVITY: function () {
            if (0 === D.length) return !1;
            es(), (z = !1);
        },
        GRAVITY_TAB_OPENED: function () {
            (W = !0), (P = Date.now()), Y && ((Y = !1), (z = !1)), Q < 5 && Q++;
        },
        GRAVITY_FEEDBACK_GIVEN: function () {
            Q = 6;
        },
        SET_GRAVITY_SELECTED_SUMMARY: function (e) {
            if (null == e.summaryId) {
                K = null;
                return;
            }
            let t = k[e.summaryId];
            if (null == t || t.type !== v.Rr.SUMMARY) {
                K = null;
                return;
            }
            K = t.summary;
        },
        SET_GRAVITY_SELECTED_CHANNEL: function (e) {
            q = e.channelId;
        },
        MESSAGE_REACTION_ADD: e_,
        MESSAGE_REACTION_ADD_MANY: function (e) {
            let { messageId: t, reactions: n } = e,
                i = k[t];
            if (null == i || i.type !== v.Rr.MESSAGE) return !1;
            let a = h.default.getId();
            i.message = i.message.addReactionBatch(n, a);
        },
        MESSAGE_REACTION_REMOVE: e_,
        MESSAGE_REACTION_REMOVE_ALL: function (e) {
            let { messageId: t } = e,
                n = k[t];
            if (null == n || n.type !== v.Rr.MESSAGE) return !1;
            n.message = n.message.set('reactions', []);
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
            let { messageId: t, emoji: n } = e,
                i = k[t];
            if (null == i || i.type !== v.Rr.MESSAGE) return !1;
            i.message = i.message.removeReactionsForEmoji(n);
        },
        CHANNEL_ACK: eE,
        MESSAGE_ACK: eE,
        CONTENT_INVENTORY_SET_FEED: function (e) {
            let { feedId: t } = e;
            if (t !== O.YN.GLOBAL_FEED) return !1;
            if (!W) {
                let [e, t] = er(b);
                (X = e), (J = t), ei(), (z = et(e));
            }
        }
    }));
