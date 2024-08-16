n(47120), n(653041), n(733860), n(724458);
var i,
    a = n(876215),
    s = n(442837),
    r = n(570140),
    l = n(146282),
    o = n(26033),
    c = n(561308),
    d = n(353926),
    u = n(786761),
    _ = n(314897),
    E = n(592125),
    h = n(375954),
    m = n(306680),
    I = n(699516),
    g = n(9156),
    p = n(626135),
    T = n(70956),
    S = n(709054),
    f = n(761080),
    C = n(584925),
    N = n(207205),
    A = n(981631),
    v = n(206583);
function Z(e, t, n) {
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
let L = [],
    O = null,
    R = [],
    x = [],
    b = {},
    P = {},
    M = {},
    D = {},
    y = {},
    j = {},
    U = {},
    G = {},
    k = new Set(),
    w = 0,
    B = !1,
    H = !1,
    V = !1,
    F = null,
    Y = null,
    W = 0,
    z = [],
    K = [],
    q = 0;
function Q(e) {
    var t, n;
    let i = e.filter((e) => e.type !== f.Rr.ACTIVITY),
        s = new Set(i.map((e) => e.id)),
        r = {},
        d = null !== (n = null === (t = l.Z.getFeed(v.YN.GLOBAL_FEED)) || void 0 === t ? void 0 : t.entries) && void 0 !== n ? n : [];
    return (
        d.sort((e, t) => e.rank - t.rank),
        d.forEach((e, t) => {
            if (s.has(e.content.id) || (e.content.content_type !== a.s.PLAYED_GAME && e.content.content_type !== a.s.CUSTOM_STATUS && e.content.content_type !== a.s.TOP_GAME) || (0, c.n2)(e.content)) return;
            if ((0, o.dX)(e.content)) {
                if ((null == r[e.content.author_id] && (r[e.content.author_id] = new Set()), r[e.content.author_id].has(e.content.extra.application_id))) return;
                r[e.content.author_id].add(e.content.extra.application_id);
            }
            null == D[e.content.id] &&
                (D[e.content.id] = {
                    id: e.content.id,
                    type: f.Rr.ACTIVITY,
                    score: 50,
                    activity: e.content
                });
            let n = {
                id: e.content.id,
                type: f.Rr.ACTIVITY,
                score: 50,
                data: {
                    user_id: e.content.author_id,
                    content_id: e.content.id
                }
            };
            (M[n.id] = n), (t + 1) * 5 < i.length ? i.splice((t + 1) * 5, 0, n) : i.push(n);
        }),
        i
    );
}
function X(e) {
    if ((R.length > 0 && ((L = R), (R = []), (x = [])), w++, null != e)) (z = e.newUnread), (K = e.newRead);
    else {
        let [e, t] = J(L);
        (z = e), (K = t);
    }
    if (null != b.load_id && O !== b.load_id) {
        var t;
        p.default.track(A.rMx.FEED_LOADED, {
            ...b,
            unread_feed_item_ids: z.map((e) => e.id),
            read_feed_item_ids: K.map((e) => e.id),
            home_session_id: 'gravity'
        }),
            (O = null !== (t = b.load_id) && void 0 !== t ? t : null),
            (b = {});
    }
    (q = 0), (0, N.em)([...z, ...K], 0, f.xy);
}
function J(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let a = null != C.Z.getReadTimestamp(e.id);
            e.type === f.Rr.MESSAGE ? (a = a || !(0, N.$U)(e.data.channel_id, e.data.message_id)) : e.type === f.Rr.SUMMARY && (a = a || !(0, N.$U)(e.data.channel_id, e.data.summary_id)), a ? t.push(e) : e.type === f.Rr.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
        }),
        [[...i, ...n], t.sort((e, t) => (0, N.Rm)(e.id, t.id))]
    );
}
function $(e, t) {
    let n = [],
        i = new Set(L.map((e) => e.id));
    for (let a of e) {
        if (!i.has(a.id) && null == C.Z.getReadTimestamp(a.id) && (a.type !== f.Rr.MESSAGE || (!!(0, N.$U)(a.data.channel_id, a.data.message_id) && a.data.channel_id !== t)) && (a.type !== f.Rr.SUMMARY || (!!(0, N.$U)(a.data.channel_id, a.data.summary_id) && a.data.channel_id !== t))) n.push(a);
    }
    return n;
}
function ee(e, t) {
    if ((0, N.jv)(t) === N.aL.MUTED) (L = L.filter((t) => (t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY) || t.data.channel_id !== e)), (z = z.filter((t) => (t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY) || t.data.channel_id !== e)), (K = K.filter((t) => (t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY) || t.data.channel_id !== e)), (R = R.filter((t) => (t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY) || t.data.channel_id !== e)), (x = x.filter((t) => (t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY) || t.data.channel_id !== e));
}
function et(e, t) {
    if ((0, N.jv)(t) === N.aL.MUTED) (L = L.filter((t) => (t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY) || t.data.guild_id !== e)), (z = z.filter((t) => (t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY) || t.data.guild_id !== e)), (K = K.filter((t) => (t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY) || t.data.guild_id !== e)), (R = R.filter((t) => (t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY) || t.data.guild_id !== e)), (x = x.filter((t) => (t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY) || t.data.guild_id !== e));
}
function en(e) {
    let { type: t, messageId: n, userId: i, emoji: a, reactionType: s } = e,
        r = D[n];
    if (null == r || r.type !== f.Rr.MESSAGE) return !1;
    let l = _.default.getId() === i;
    'MESSAGE_REACTION_ADD' === t ? (r.message = r.message.addReaction(a, l, e.colors, s)) : (r.message = r.message.removeReaction(a, l, s));
}
function ei(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    z.forEach((e, a) => {
        a > q && (e.type === f.Rr.MESSAGE || e.type === f.Rr.SUMMARY) && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let a = H,
        [s, r] = J(R);
    if (((x = $(s, t)), (H = V ? x.length >= f.Lb : i.length > 0), 0 === n.length && a === H)) return !1;
    if (0 !== n.length) (z = i), (K = [...K, ...n]);
}
class ea extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(h.Z, E.Z, m.ZP, d.Z, g.ZP, _.default, C.Z, l.Z), null != e)) {
            var t, n, i, a, s;
            (L = null !== (t = e.dehydratedItems) && void 0 !== t ? t : []),
                (P = null !== (n = e.locallyAddedItems) && void 0 !== n ? n : {}),
                e.dehydratedItems.forEach((e) => {
                    M[e.id] = e;
                }),
                (j = null !== (i = e.customGuildScores) && void 0 !== i ? i : {}),
                (U = null !== (a = e.customChannelScoresByGuild) && void 0 !== a ? a : {}),
                (W = null !== (s = e.numOpens) && void 0 !== s ? s : 0);
        }
    }
    getVersion() {
        return w;
    }
    getDehydratedItems() {
        return L;
    }
    getNewDehydratedItems() {
        return R;
    }
    getDehydratedItem(e) {
        var t;
        return null !== (t = M[e]) && void 0 !== t ? t : null;
    }
    getHydratedItem(e) {
        var t;
        return null !== (t = D[e]) && void 0 !== t ? t : null;
    }
    getMessage(e) {
        let t = D[e];
        return null == t || t.type !== f.Rr.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return D;
    }
    getUnreadDisplayItems() {
        return z;
    }
    getNewUnreadDehydratedItems() {
        return x;
    }
    getReadDisplayItems() {
        return K;
    }
    getNextIndexToHydrate() {
        return q;
    }
    getMissingItems() {
        return y;
    }
    getCustomChannelScore(e, t) {
        return null == U[e] || null == U[e][t] ? N.aL.UNKNOWN : (0, N.jv)(U[e][t]);
    }
    getCustomGuildScore(e) {
        var t;
        return null !== (t = j[e]) && void 0 !== t ? t : 0;
    }
    getCustomGuildScores() {
        return j;
    }
    getNumLocallyAddedItems() {
        return Object.keys(P).length;
    }
    hasNewContent() {
        return H;
    }
    getSelectedSummary(e) {
        return null == F || F.channelId !== e ? null : F;
    }
    isGravitySelectedChannel(e) {
        return null != Y && Y === e;
    }
    getLoadId() {
        return O;
    }
    hasOpenedEnoughTimes() {
        return 5 === W;
    }
    hasOpened() {
        return V;
    }
    getState() {
        return {
            dehydratedItems: L,
            locallyAddedItems: P,
            numOpens: W,
            customGuildScores: j,
            customChannelScoresByGuild: U
        };
    }
}
Z(ea, 'displayName', 'GravityStore'),
    Z(ea, 'persistKey', 'GravityStore'),
    (t.Z = new ea(r.Z, {
        POST_CONNECTION_OPEN: function () {
            if (L.length > 0) {
                let [e, t] = J(L);
                (z = e), (K = t), (q = 0), (0, N.em)([...z, ...K], 0, f.xy);
            }
        },
        LOGOUT: function () {
            return !1;
        },
        MESSAGE_CREATE: function (e) {
            var t, n;
            let { message: i, guildId: a, channelId: s } = e;
            if (!(0, N.rK)('GravityStore-handleMessageCreate') || null == a || (null === (t = i.author) || void 0 === t ? void 0 : t.id) === _.default.getId() || I.Z.isBlocked(null === (n = i.author) || void 0 === n ? void 0 : n.id) || (a in j && j[a] < 0) || (null != U[a] && s in U[a] && null != U[a][s] && U[a][s] < 0)) return !1;
            let r = E.Z.getChannel(s);
            if (null == r || r.type !== A.d4z.GUILD_ANNOUNCEMENT || g.ZP.isChannelMuted(a, s)) return !1;
            let l = h.Z.getMessage(i.channel_id, i.id);
            null == l && (l = (0, u.e5)(i));
            let o = l.mentionEveryone;
            if (i.id in M) return !1;
            let c = {
                type: f.Rr.MESSAGE,
                id: i.id,
                score: Date.now(),
                data: {
                    channel_id: i.channel_id,
                    guild_id: a,
                    message_id: i.id,
                    channel_type: A.d4z.GUILD_ANNOUNCEMENT,
                    has_mention: o
                }
            };
            o && (null == G[s] && (G[s] = 0), G[s]++, k.add(a)),
                null == (R = 0 === R.length ? [...L] : [...R]).find((e) => e.id === i.id) && ((R = [c, ...R]), (P[i.id] = c)),
                (0, N.$U)(s, i.id) && (x = [c, ...x]),
                x.length >= f.Lb && w > 0 && (H = !0),
                (M[i.id] = c),
                (D[i.id] = {
                    ...c,
                    message: l
                });
        },
        LOAD_GRAVITY_DEHYDRATED: function (e) {
            let { items: t, loadId: n, startTime: i } = e;
            (R = t.filter((e) => f.zd.has(e.type))),
                !(function () {
                    let e = new Set();
                    R.forEach((t) => {
                        e.add(t.id);
                    }),
                        Object.values(P).forEach((t) => {
                            f.zd.has(t.type) && (e.has(t.id) || S.default.age(t.id) > T.Z.Millis.DAY || (t.type === f.Rr.MESSAGE && g.ZP.isChannelMuted(t.data.guild_id, t.data.channel_id)) ? delete P[t.id] : !e.has(t.id) && (R.unshift(t), e.add(t.id)));
                        }),
                        R.forEach((e) => {
                            (M[e.id] = e), e.type === f.Rr.CUSTOM_STATUS && (I.Z.isBlocked(e.data.user_id) ? (y[e.id] = !0) : (D[e.id] = (0, N.mV)(e)));
                        });
                })(),
                (R = Q(R)),
                (b = {
                    load_id: n,
                    load_time_millis: Date.now() - i,
                    feed_item_ids: R.map((e) => e.id)
                });
            let [a, s] = J(R);
            if (((x = $(a)), V && 0 !== w)) {
                let e = x.length > f.Lb;
                (H = e), e && (0, N.em)([...a, ...s], 0, f.xy);
            } else
                (w = 0),
                    a.length > 0 && !V && ((H = !0), (B = !0)),
                    X({
                        newUnread: a,
                        newRead: s
                    });
        },
        LOAD_GRAVITY_HYDRATED: function (e) {
            let { messageItems: t, summaryItems: n, activityItems: i, requestMessageItems: a, requestSummaryItems: s, requestActivityItems: r, startingIndex: l, endingIndex: o } = e;
            D = { ...D };
            let c = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
                d = n.reduce((e, t) => ((e[t.id] = t), e), {}),
                _ = i.reduce((e, t) => ((e[t.id] = t), e), {});
            a.forEach((e) => {
                let t = c[e.message_id];
                if (null == t) {
                    y[e.message_id] = !0;
                    return;
                }
                let n = M[e.message_id];
                if (null == n) {
                    y[e.message_id] = !0;
                    return;
                }
                null != h.Z.getMessage(t.channel_id, t.message.id)
                    ? (D[t.message.id] = {
                          ...n,
                          message: h.Z.getMessage(t.channel_id, t.message.id)
                      })
                    : (D[t.message.id] = {
                          ...n,
                          message: (0, u.e5)(t.message)
                      });
            }),
                s.forEach((e) => {
                    let t = d[e.summary_id];
                    if (null == t) {
                        y[e.summary_id] = !0;
                        return;
                    }
                    let n = M[e.summary_id];
                    if (null == n || n.type !== f.Rr.SUMMARY || t.messages.length < 3) {
                        y[e.summary_id] = !0;
                        return;
                    }
                    D[t.id] = {
                        ...n,
                        summary: (0, N.wV)(t, n.data.guild_id)
                    };
                }),
                r.forEach((e) => {
                    let t = _[e.content_id];
                    if (null == t) {
                        y[e.content_id] = !0;
                        return;
                    }
                    let n = M[e.content_id];
                    if (null == n) {
                        y[e.content_id] = !0;
                        return;
                    }
                    D[t.id] = {
                        ...n,
                        activity: t
                    };
                }),
                l === q && (q = o);
        },
        LOAD_GRAVITY_CUSTOM_SCORES: function (e) {
            let { scores: t } = e;
            for (let e of t) for (let t of ((j[e.guild_id] = e.guild_score), et(e.guild_id, e.guild_score), Object.keys(e.custom_channel_scores))) null == U[e.guild_id] && (U[e.guild_id] = {}), (U[e.guild_id][t] = e.custom_channel_scores[t]), ee(t, e.custom_channel_scores[t]);
            (j = { ...j }), (U = { ...U });
        },
        GRAVITY_CUSTOM_SCORES_UPDATED: function (e) {
            let { channelScores: t, guildId: n, guildScore: i } = e;
            null != i && ((j[n] = i), et(n, i), (j = { ...j })),
                null == t ||
                    t.forEach((e) => {
                        let { channelId: t, score: i } = e;
                        null == U[n] && (U[n] = {}), (U[n][t] = i), ee(t, i), (U = { ...U });
                    });
        },
        RELOAD_GRAVITY: function () {
            if (0 === R.length) return !1;
            X(), (H = !1);
        },
        GRAVITY_TAB_OPENED: function () {
            (V = !0), B && ((B = !1), (H = !1)), W < 5 && W++;
        },
        GRAVITY_FEEDBACK_GIVEN: function () {
            W = 6;
        },
        SET_GRAVITY_SELECTED_SUMMARY: function (e) {
            if (null == e.summaryId) {
                F = null;
                return;
            }
            let t = D[e.summaryId];
            if (null == t || t.type !== f.Rr.SUMMARY) {
                F = null;
                return;
            }
            F = t.summary;
        },
        SET_GRAVITY_SELECTED_CHANNEL: function (e) {
            Y = e.channelId;
        },
        MESSAGE_REACTION_ADD: en,
        MESSAGE_REACTION_ADD_MANY: function (e) {
            let { messageId: t, reactions: n } = e,
                i = D[t];
            if (null == i || i.type !== f.Rr.MESSAGE) return !1;
            let a = _.default.getId();
            i.message = i.message.addReactionBatch(n, a);
        },
        MESSAGE_REACTION_REMOVE: en,
        MESSAGE_REACTION_REMOVE_ALL: function (e) {
            let { messageId: t } = e,
                n = D[t];
            if (null == n || n.type !== f.Rr.MESSAGE) return !1;
            n.message = n.message.set('reactions', []);
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
            let { messageId: t, emoji: n } = e,
                i = D[t];
            if (null == i || i.type !== f.Rr.MESSAGE) return !1;
            i.message = i.message.removeReactionsForEmoji(n);
        },
        CHANNEL_ACK: ei,
        MESSAGE_ACK: ei,
        CONTENT_INVENTORY_SET_FEED: function (e) {
            let { feedId: t } = e;
            if (t !== v.YN.GLOBAL_FEED) return !1;
            if (!V) {
                let [e, t] = J((L = Q(L)));
                (z = e), (K = t);
            }
            let [n, i] = J((R = Q((R = 0 === R.length ? [...L] : R))));
            x = $(n);
        }
    }));
