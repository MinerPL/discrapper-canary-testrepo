n(47120), n(724458), n(653041);
var i,
    r = n(876215),
    a = n(442837),
    l = n(570140),
    s = n(146282),
    o = n(26033),
    c = n(561308),
    d = n(353926),
    u = n(924301),
    h = n(786761),
    m = n(601964),
    p = n(314897),
    g = n(592125),
    f = n(165630),
    _ = n(430824),
    E = n(375954),
    I = n(306680),
    C = n(699516),
    v = n(9156),
    S = n(626135),
    N = n(70956),
    T = n(900849),
    x = n(761080),
    b = n(584925),
    A = n(207205),
    Z = n(981631),
    y = n(206583);
function L(e, t, n) {
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
let R = 1 * N.Z.Millis.DAY,
    P = 3 * N.Z.Millis.DAY,
    O = [],
    j = null,
    D = 0,
    M = [],
    w = [],
    k = [],
    U = [],
    G = {},
    B = {},
    H = {},
    V = {},
    F = {},
    z = {},
    Y = 0,
    W = !1,
    K = !1,
    q = !1,
    X = null,
    Q = null,
    J = 0,
    $ = [],
    ee = [],
    et = 0,
    en = [],
    ei = 0,
    er = !0;
function ea(e) {
    return Date.now() - D > 6 * N.Z.Millis.HOUR && [...e, ...k, ...w].slice(0, 3).reduce((e, t) => e + t.score, 0) >= x.jp;
}
function el(e, t, n, i) {
    let r = e.filter((e) => e.type !== n);
    return (
        t.forEach((e, t) => {
            (t + 1) * i < r.length ? r.splice((t + 1) * i, 0, e) : r.push(e);
        }),
        r
    );
}
function es() {
    (function () {
        let e = _.Z.getGuildIds(),
            t = [];
        for (let i of e) {
            if (null != F[i] && F[i] < 0) continue;
            let e = u.ZP.getGuildScheduledEventsForGuild(i),
                r = 0;
            for (let i of e) {
                if (!(0, u.Z2)(i)) {
                    if ((0, u.BQ)(i, 2 * N.Z.Seconds.DAY) || (0, u.xt)(i)) {
                        var n;
                        if (
                            (null == H[i.id] &&
                                (H[i.id] = {
                                    id: i.id,
                                    type: x.Rr.GUILD_EVENT,
                                    score: 10,
                                    event_id: i.id
                                }),
                            t.push({
                                id: i.id,
                                type: x.Rr.GUILD_EVENT,
                                score: 10,
                                data: {
                                    guild_id: i.guild_id,
                                    event_id: i.id,
                                    channel_id: null !== (n = i.channel_id) && void 0 !== n ? n : void 0
                                }
                            }),
                            ++r >= 2)
                        )
                            break;
                    }
                }
            }
        }
        t.sort((e, t) => {
            let n = f.Z.getGuildAffinity(e.data.guild_id),
                i = f.Z.getGuildAffinity(t.data.guild_id);
            return (null != i ? i.score : 0) - (null != n ? n.score : 0);
        });
        let i = [],
            r = [];
        t.forEach((e) => {
            (B[e.id] = e), null != b.Z.getReadTimestamp(e.id) ? r.push(e) : i.push(e);
        }),
            (w = i),
            ($ = el($, i, x.Rr.GUILD_EVENT, 7)),
            (ee = el(ee, r, x.Rr.GUILD_EVENT, 7));
    })(),
        (function () {
            var e, t;
            let n = new Set(),
                i = {},
                a = [],
                l = [],
                d = null !== (t = null === (e = s.Z.getFeed(y.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.entries) && void 0 !== t ? t : [];
            d.sort((e, t) => e.rank - t.rank),
                d.forEach((e) => {
                    if (n.has(e.content.id) || (e.content.content_type !== r.s.PLAYED_GAME && e.content.content_type !== r.s.CUSTOM_STATUS && e.content.content_type !== r.s.TOP_GAME) || (0, c.n2)(e.content)) return;
                    if ((0, o.dX)(e.content)) {
                        if ((null == i[e.content.author_id] && (i[e.content.author_id] = new Set()), i[e.content.author_id].has(e.content.extra.application_id))) return;
                        i[e.content.author_id].add(e.content.extra.application_id);
                    }
                    null == H[e.content.id] &&
                        (H[e.content.id] = {
                            id: e.content.id,
                            type: x.Rr.ACTIVITY,
                            score: 15,
                            activity: e.content
                        });
                    let t = {
                        id: e.content.id,
                        type: x.Rr.ACTIVITY,
                        score: 15,
                        data: {
                            user_id: e.content.author_id,
                            content_id: e.content.id
                        }
                    };
                    n.add(e.content.id), (B[t.id] = t), null != b.Z.getReadTimestamp(t.id) ? l.push(t) : a.push(t);
                }),
                (k = a),
                ($ = el($, a, x.Rr.ACTIVITY, 5)),
                (ee = el(ee, l, x.Rr.ACTIVITY, 5));
        })(),
        eo();
}
function eo() {
    if ((($ = $.filter((e) => e.type !== x.Rr.RECOMMENDED_GUILDS)), (ee = ee.filter((e) => e.type !== x.Rr.RECOMMENDED_GUILDS)), 0 === en.length)) return;
    let e = 'recommendedGuilds',
        t = Object.values(_.Z.getGuilds()).filter((e) => e.isCommunity()).length >= 5,
        n = b.Z.getReadTimestamp(e);
    if (t && null != n && Date.now() - ei > R && Date.now() - n < P) return;
    let i = {
        id: e,
        type: x.Rr.RECOMMENDED_GUILDS,
        score: 50
    };
    if (((H[i.id] = i), (B[i.id] = i), 0 === $.length)) ee = [i, ...ee];
    else if ((!t && $.length < 5) || (t && $.length < 10)) $ = [...$, i];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        $.splice(e, 0, i);
    } else $.splice(5, 0, i);
}
function ec(e) {
    if ((M.length > 0 && ((O = M), (M = []), (U = [])), Y++, null != e)) ($ = e.newUnread), (ee = e.newRead);
    else {
        let [e, t] = ed(O);
        ($ = e), (ee = t);
    }
    if ((es(), null != G.load_id && j !== G.load_id)) {
        var t;
        S.default.track(Z.rMx.FEED_LOADED, {
            ...G,
            unread_feed_item_ids: $.map((e) => e.id),
            read_feed_item_ids: ee.map((e) => e.id),
            home_session_id: 'gravity',
            unread_feed_item_types: $.map((e) => (0, x.v$)(e)),
            read_feed_item_types: ee.map((e) => (0, x.v$)(e))
        }),
            (j = null !== (t = G.load_id) && void 0 !== t ? t : null),
            (G = {});
    }
    (et = 0), (0, A.em)([...$, ...ee], 0, x.xy);
}
function ed(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let r = null != b.Z.getReadTimestamp(e.id);
            e.type === x.Rr.MESSAGE ? (r = r || !(0, A.$U)(e.data.channel_id, e.data.message_id)) : e.type === x.Rr.SUMMARY && (r = r || !(0, A.$U)(e.data.channel_id, e.data.summary_id)), r ? t.push(e) : e.type === x.Rr.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
        }),
        [[...i, ...n], t.sort((e, t) => (0, A.Rm)(e.id, t.id))]
    );
}
function eu(e, t) {
    let n = [],
        i = new Set(O.map((e) => e.id));
    for (let r of e) {
        if (!(r.type === x.Rr.RECOMMENDED_GUILDS || i.has(r.id)) && null == b.Z.getReadTimestamp(r.id) && (r.type !== x.Rr.MESSAGE || (!!(0, A.$U)(r.data.channel_id, r.data.message_id) && r.data.channel_id !== t)) && (r.type !== x.Rr.SUMMARY || (!!(0, A.$U)(r.data.channel_id, r.data.summary_id) && r.data.channel_id !== t))) n.push(r);
    }
    return n;
}
function eh(e, t) {
    return e.filter((e) => (e.type !== x.Rr.MESSAGE && e.type !== x.Rr.SUMMARY && e.type !== x.Rr.GUILD_EVENT) || e.data.channel_id !== t);
}
function em(e, t) {
    if ((0, A.jv)(t) === A.aL.MUTED) (O = eh(O, e)), ($ = eh($, e)), (ee = eh(ee, e)), (M = eh(M, e)), (U = eh(U, e));
}
function ep(e, t) {
    return e.filter((e) => (e.type !== x.Rr.MESSAGE && e.type !== x.Rr.SUMMARY && e.type !== x.Rr.GUILD_EVENT) || e.data.guild_id !== t);
}
function eg(e, t) {
    if ((0, A.jv)(t) === A.aL.MUTED) (O = ep(O, e)), ($ = ep($, e)), (ee = ep(ee, e)), (M = ep(M, e)), (U = ep(U, e));
}
function ef(e) {
    let { type: t, messageId: n, userId: i, emoji: r, reactionType: a } = e,
        l = H[n];
    if (null == l || l.type !== x.Rr.MESSAGE) return !1;
    let s = p.default.getId() === i;
    'MESSAGE_REACTION_ADD' === t ? (l.message = l.message.addReaction(r, s, e.colors, a)) : (l.message = l.message.removeReaction(r, s, a));
}
function e_(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    $.forEach((e, r) => {
        (r > et || !q) && (e.type === x.Rr.MESSAGE || e.type === x.Rr.SUMMARY) && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let r = K,
        [a, l] = ed(M);
    if (((U = eu(a, t)), (K = q ? r && U.length >= x.Lb : r && ea(i)), 0 === n.length && r === K)) return !1;
    if (0 !== n.length) ($ = i), (ee = [...ee, ...n]);
}
class eE extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(E.Z, g.Z, I.ZP, d.Z, v.ZP, p.default, b.Z, s.Z), null != e)) {
            var t, n, i, r, a, l;
            (O = null !== (t = e.dehydratedItems) && void 0 !== t ? t : []).forEach((e) => {
                B[e.id] = e;
            }),
                (F = null !== (n = e.customGuildScores) && void 0 !== n ? n : {}),
                (z = null !== (i = e.customChannelScoresByGuild) && void 0 !== i ? i : {}),
                (J = null !== (r = e.numOpens) && void 0 !== r ? r : 0),
                (D = null !== (a = e.lastOpened) && void 0 !== a ? a : 0),
                (ei = null !== (l = e.lastJoinedRecommendedGuild) && void 0 !== l ? l : 0);
        }
    }
    getVersion() {
        return Y;
    }
    getDehydratedItems() {
        return O;
    }
    getNewDehydratedItems() {
        return M;
    }
    getDehydratedItem(e) {
        var t;
        return null !== (t = B[e]) && void 0 !== t ? t : null;
    }
    getHydratedItem(e) {
        var t;
        return null !== (t = H[e]) && void 0 !== t ? t : null;
    }
    getMessage(e) {
        let t = H[e];
        return null == t || t.type !== x.Rr.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return H;
    }
    getUnreadDisplayItems() {
        return $;
    }
    getNewUnreadDehydratedItems() {
        return U;
    }
    getReadDisplayItems() {
        return ee;
    }
    getNextIndexToHydrate() {
        return et;
    }
    getMissingItems() {
        return V;
    }
    getCustomChannelScore(e, t) {
        return null == z[e] || null == z[e][t] ? A.aL.UNKNOWN : (0, A.jv)(z[e][t]);
    }
    getCustomGuildScore(e) {
        var t;
        return null !== (t = F[e]) && void 0 !== t ? t : 0;
    }
    getCustomGuildScores() {
        return F;
    }
    hasNewContent() {
        return K;
    }
    getSelectedSummary(e) {
        return null == X || X.channelId !== e ? null : X;
    }
    isGravitySelectedChannel(e) {
        return null != Q && Q === e;
    }
    getLoadId() {
        return j;
    }
    hasOpenedEnoughTimes() {
        return 5 === J;
    }
    hasOpened() {
        return q;
    }
    getDiscoverableGuilds() {
        return en;
    }
    videosMuted() {
        return er;
    }
    getState() {
        return {
            dehydratedItems: O,
            numOpens: J,
            customGuildScores: F,
            customChannelScoresByGuild: z,
            lastOpened: D,
            lastJoinedRecommendedGuild: ei
        };
    }
}
L(eE, 'displayName', 'GravityStore'),
    L(eE, 'persistKey', 'GravityStore'),
    (t.Z = new eE(l.Z, {
        POST_CONNECTION_OPEN: function () {
            if (O.length > 0 && (!q || 0 === Y)) {
                let [e, t] = ed(O);
                ($ = e), (ee = t), es(), (et = 0), (0, A.em)([...$, ...ee], 0, x.xy);
            }
        },
        LOGOUT: function () {
            return !1;
        },
        LOAD_GRAVITY_FROM_NOTIFICATION: function (e) {
            let { messageItem: t } = e;
            if (null == t) return !1;
            let n = {
                id: t.message.id,
                type: x.Rr.MESSAGE,
                score: 50,
                data: {
                    channel_id: t.channel_id,
                    message_id: t.message.id,
                    guild_id: t.guild_id,
                    channel_type: Z.d4z.GUILD_TEXT
                }
            };
            if (
                ((B[t.message.id] = n),
                (H[t.message.id] = {
                    ...n,
                    message: (0, h.e5)(t.message)
                }),
                null == j && null == G)
            ) {
                let [e, t] = ed((O = [n, ...O]));
                ($ = e), (ee = t);
            } else (M = [n, ...M]), ec();
        },
        LOAD_GRAVITY_DEHYDRATED: function (e) {
            let { items: t, loadId: n, startTime: i, isReloading: r } = e;
            (M = t.filter((e) => x.zd.has(e.type))),
                !(function () {
                    let e = new Set();
                    M.forEach((t) => {
                        e.add(t.id);
                    }),
                        M.forEach((e) => {
                            (B[e.id] = e), e.type === x.Rr.CUSTOM_STATUS && (C.Z.isBlocked(e.data.user_id) ? (V[e.id] = !0) : (H[e.id] = (0, A.mV)(e)));
                        });
                })(),
                (G = {
                    load_id: n,
                    load_time_millis: Date.now() - i,
                    feed_item_ids: M.map((e) => e.id)
                });
            let [a, l] = ed(M);
            if (((U = eu(a)), q && 0 !== Y)) {
                let e = U.length > x.Lb;
                !r && (K = e), e && (0, A.em)([...a, ...l], 0, x.xy);
            } else
                (Y = 0),
                    !q && ea(a) && ((K = !0), (W = !0)),
                    ec({
                        newUnread: a,
                        newRead: l
                    });
        },
        LOAD_GRAVITY_HYDRATED: function (e) {
            let { messageItems: t, summaryItems: n, activityItems: i, requestMessageItems: r, requestSummaryItems: a, requestActivityItems: l, startingIndex: s, endingIndex: o } = e;
            H = { ...H };
            let c = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
                d = n.reduce((e, t) => ((e[t.id] = t), e), {}),
                u = i.reduce((e, t) => ((e[t.id] = t), e), {});
            r.forEach((e) => {
                let t = c[e.message_id];
                if (null == t) {
                    V[e.message_id] = !0;
                    return;
                }
                let n = B[e.message_id];
                null == n &&
                    (n = {
                        id: e.message_id,
                        type: x.Rr.MESSAGE,
                        score: -1,
                        data: {
                            guild_id: t.guild_id,
                            channel_id: t.channel_id,
                            message_id: t.message.id,
                            channel_type: Z.d4z.GUILD_TEXT,
                            has_mention: !1
                        }
                    }),
                    null != E.Z.getMessage(t.channel_id, t.message.id)
                        ? (H[t.message.id] = {
                              ...n,
                              message: E.Z.getMessage(t.channel_id, t.message.id)
                          })
                        : (H[t.message.id] = {
                              ...n,
                              message: (0, h.e5)(t.message)
                          });
            }),
                a.forEach((e) => {
                    let t = d[e.summary_id];
                    if (null == t) {
                        V[e.summary_id] = !0;
                        return;
                    }
                    let n = B[e.summary_id];
                    if (null == n || n.type !== x.Rr.SUMMARY || t.messages.length < 3) {
                        V[e.summary_id] = !0;
                        return;
                    }
                    H[t.id] = {
                        ...n,
                        summary: (0, A.wV)(t, n.data.guild_id)
                    };
                }),
                l.forEach((e) => {
                    let t = u[e.content_id];
                    if (null == t) {
                        V[e.content_id] = !0;
                        return;
                    }
                    let n = B[e.content_id];
                    if (null == n) {
                        V[e.content_id] = !0;
                        return;
                    }
                    H[t.id] = {
                        ...n,
                        activity: t
                    };
                }),
                s === et && (et = o);
        },
        LOAD_GRAVITY_CUSTOM_SCORES: function (e) {
            let { scores: t } = e;
            for (let e of t) for (let t of ((F[e.guild_id] = e.guild_score), eg(e.guild_id, e.guild_score), Object.keys(e.custom_channel_scores))) null == z[e.guild_id] && (z[e.guild_id] = {}), (z[e.guild_id][t] = e.custom_channel_scores[t]), em(t, e.custom_channel_scores[t]);
            (F = { ...F }), (z = { ...z });
        },
        LOAD_GRAVITY_RECOMMENDED_GUILDS: function (e) {
            let { guilds: t } = e;
            (en = t.map((e) => new m.ZP((0, T.PP)(e.guild)))), eo();
        },
        GRAVITY_CUSTOM_SCORES_UPDATED: function (e) {
            let { channelScores: t, guildId: n, guildScore: i } = e;
            null != i && ((F[n] = i), eg(n, i), (F = { ...F })),
                null == t ||
                    t.forEach((e) => {
                        let { channelId: t, score: i } = e;
                        null == z[n] && (z[n] = {}), (z[n][t] = i), em(t, i), (z = { ...z });
                    });
        },
        RELOAD_GRAVITY: function () {
            if (0 === M.length) return !1;
            ec(), (K = !1);
        },
        GRAVITY_TAB_OPENED: function () {
            (q = !0), (D = Date.now()), W && ((W = !1), (K = !1)), J < 5 && J++;
        },
        GRAVITY_FEEDBACK_GIVEN: function () {
            J = 6;
        },
        SET_GRAVITY_SELECTED_SUMMARY: function (e) {
            if (null == e.summaryId) {
                X = null;
                return;
            }
            let t = H[e.summaryId];
            if (null == t || t.type !== x.Rr.SUMMARY) {
                X = null;
                return;
            }
            X = t.summary;
        },
        SET_GRAVITY_SELECTED_CHANNEL: function (e) {
            Q = e.channelId;
        },
        MESSAGE_REACTION_ADD: ef,
        MESSAGE_REACTION_ADD_MANY: function (e) {
            let { messageId: t, reactions: n } = e,
                i = H[t];
            if (null == i || i.type !== x.Rr.MESSAGE) return !1;
            let r = p.default.getId();
            i.message = i.message.addReactionBatch(n, r);
        },
        MESSAGE_REACTION_REMOVE: ef,
        MESSAGE_REACTION_REMOVE_ALL: function (e) {
            let { messageId: t } = e,
                n = H[t];
            if (null == n || n.type !== x.Rr.MESSAGE) return !1;
            n.message = n.message.set('reactions', []);
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
            let { messageId: t, emoji: n } = e,
                i = H[t];
            if (null == i || i.type !== x.Rr.MESSAGE) return !1;
            i.message = i.message.removeReactionsForEmoji(n);
        },
        CHANNEL_ACK: e_,
        MESSAGE_ACK: e_,
        CONTENT_INVENTORY_SET_FEED: function (e) {
            let { feedId: t } = e;
            if (t !== y.YN.GLOBAL_FEED) return !1;
            if (!q) {
                let [e, t] = ed(O);
                ($ = e), (ee = t), es(), (K = ea(e));
            }
        },
        GRAVITY_JOINED_RECOMMENDED_GUILD: function () {
            ei = Date.now();
        },
        GRAVITY_SET_VIDEOS_MUTED: function (e) {
            let { muted: t } = e;
            er = t;
        }
    }));
