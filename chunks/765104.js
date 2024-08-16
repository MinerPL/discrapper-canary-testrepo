let r, i, a, s;
n(536091), n(47120), n(653041), n(724458);
var o,
    l,
    u,
    c,
    d,
    _,
    E = n(392711),
    f = n.n(E),
    h = n(442837),
    p = n(570140),
    m = n(902840),
    I = n(212819),
    T = n(353926),
    g = n(823385),
    S = n(592125),
    A = n(430824),
    N = n(306680),
    v = n(944486),
    O = n(9156),
    R = n(594174),
    C = n(70956),
    y = n(709054),
    D = n(418088),
    L = n(814249);
((u = o || (o = {})).FETCHING = 'fetching'), (u.OK = 'ok'), (u.ERROR = 'error');
let b = {},
    M = {},
    P = {},
    U = [],
    w = {},
    x = {
        status: 'ok',
        lastRequest: null,
        lastResponse: null
    },
    G = [],
    k = [];
function B() {
    G = g.Z.getProps()
        .results.filter((e) => e.type === I.h8.TEXT_CHANNEL && 0 === e.record.type)
        .map((e) => e.record.id);
}
class F extends (l = h.ZP.PersistedStore) {
    getState() {
        return { shouldShowTopicsBar: r };
    }
    initialize(e) {
        var t;
        (r = null === (t = null == e ? void 0 : e.shouldShowTopicsBar) || void 0 === t || t), this.waitFor(S.Z, R.default, v.Z, A.Z, T.Z), this.syncWith([g.Z], B);
    }
    allSummaries() {
        return b;
    }
    topSummaries() {
        return Object.values(b)
            .flat()
            .filter((e) => e.people.length > 1 && y.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * C.Z.Millis.HOUR)
            .sort((e, t) => y.default.extractTimestamp(t.endId) - y.default.extractTimestamp(e.endId));
    }
    summaries(e) {
        var t;
        return null !== (t = b[e]) && void 0 !== t ? t : k;
    }
    shouldShowTopicsBar() {
        return r;
    }
    findSummary(e, t) {
        var n;
        return null !== (n = this.summaries(e).find((e) => e.id === t)) && void 0 !== n ? n : null;
    }
    selectedSummary(e) {
        return null != s && s.channelId === e && null != s.summaryId ? this.findSummary(e, null == s ? void 0 : s.summaryId) : null;
    }
    summaryFeedback(e) {
        return null == e ? null : P[e.id];
    }
    isFetching(e, t) {
        var n, r;
        return null != t ? (null === (r = M[e]) || void 0 === r ? void 0 : r.summaryId) === t : (null === (n = M[e]) || void 0 === n ? void 0 : n.fetching) === !0;
    }
    status(e) {
        return M[e];
    }
    shouldFetch(e, t) {
        var n, r;
        let i = M[e],
            a = S.Z.getChannel(e);
        if (!(0, m.Lp)(a)) return !1;
        if (null != t) {
            let e = null !== (n = null == i ? void 0 : i.summaryIdLastRequestedAt) && void 0 !== n ? n : 0,
                r = Date.now() - e;
            return t !== (null == i ? void 0 : i.summaryId) || r > L.cS;
        }
        let s = null !== (r = null == i ? void 0 : i.lastReceivedAt) && void 0 !== r ? r : 0;
        return !(null == i ? void 0 : i.fetching) && 0 === s;
    }
    channelAffinities() {
        return U;
    }
    channelAffinitiesById(e) {
        return null == e ? w : w[e];
    }
    channelAffinitiesStatus() {
        return x;
    }
    shouldFetchChannelAffinities() {
        return !('fetching' === x.status || (null != x.lastResponse && Date.now() - x.lastResponse < 30 * C.Z.Millis.SECOND)) && !0;
    }
    defaultChannelIds(e) {
        let { withQuickSwitcher: t, withChannelAffinities: n, withUnreads: r, numChannels: i = 25 } = e,
            a = [];
        return (
            t && (a = a.concat(G)),
            n && (a = a.concat(U.map((e) => e.channel_id))),
            r &&
                (a = a.filter((e) => {
                    let t = S.Z.getChannel(e);
                    return null != t && !O.ZP.isChannelMuted(t.guild_id, e) && N.ZP.hasUnread(e);
                })),
            (a = a.filter((e) => {
                let t = S.Z.getChannel(e);
                return (0, m.Lp)(t, !1, !1);
            })).slice(0, i)
        );
    }
    visibleSummaryIndex() {
        return a;
    }
}
(_ = 'SummaryStore'),
    (d = 'persistKey') in (c = F)
        ? Object.defineProperty(c, d, {
              value: _,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[d] = _);
let V = new F(p.Z, {
    CONNECTION_OPEN: () => !1,
    CHANNEL_SELECT(e) {
        let { channelId: t } = e;
        (null == s ? void 0 : s.channelId) !== t && (s = null);
    },
    TOGGLE_TOPICS_BAR() {
        r = !r;
    },
    RECEIVE_CHANNEL_SUMMARY(e) {
        var t, n;
        let { summary: r, channelId: i, error: a, receivedAt: s } = e;
        if (null != r && Object.keys(r).length > 0) {
            let e = (0, D.b)(r, i),
                n = [...(null !== (t = b[i]) && void 0 !== t ? t : [])],
                a = n.findIndex((t) => t.id === (null == e ? void 0 : e.id));
            a > -1 ? (n[a] = e) : n.push(e), (b[i] = n);
        }
        let o = {
            ...(null !== (n = M[i]) && void 0 !== n ? n : { fetching: !1 }),
            summaryId: void 0,
            summaryIdLastReceivedAt: s,
            summaryIdError: a
        };
        M[i] = o;
    },
    REQUEST_CHANNEL_SUMMARY(e) {
        var t;
        let { channelId: n, summaryId: r, requestedAt: i } = e;
        M[n] = {
            ...(null !== (t = M[n]) && void 0 !== t ? t : { fetching: !1 }),
            summaryId: r,
            summaryIdLastRequestedAt: i
        };
    },
    RECEIVE_CHANNEL_SUMMARIES(e) {
        let { summaries: t, channelId: n, error: r, receivedAt: i } = e,
            a = t.filter((e) => Object.keys(e).length > 0).map((e) => (0, D.b)(e, n));
        if (null != s && s.channelId === n && !a.some((e) => e.id === (null == s ? void 0 : s.summaryId))) {
            var o;
            let e = (null !== (o = b[n]) && void 0 !== o ? o : []).find((e) => e.id === (null == s ? void 0 : s.summaryId));
            null != e && a.push(e);
        }
        b[n] = (0, E.sortBy)(a, (e) => y.default.extractTimestamp(e.startId)).reverse();
        let l = {
            ...M[n],
            fetching: !1,
            error: void 0,
            lastReceivedAt: i
        };
        null != r && (l.error = r), (M[n] = l);
    },
    REQUEST_CHANNEL_SUMMARIES(e) {
        var t;
        M[e.channelId] = {
            ...(null !== (t = M[e.channelId]) && void 0 !== t ? t : {}),
            fetching: !0,
            lastRequestedAt: e.requestedAt
        };
    },
    SET_HIGHLIGHTED_SUMMARY(e) {
        var t;
        if ((null == i && null == e.channelId) || (e.channelId === (null == i ? void 0 : i.channelId) && e.summaryId === (null == i ? void 0 : i.summaryId))) return !1;
        if (
            null !=
                (i =
                    null != e.channelId
                        ? {
                              channelId: e.channelId,
                              summaryId: null !== (t = e.summaryId) && void 0 !== t ? t : null
                          }
                        : null) &&
            i.channelId === e.channelId &&
            null != i.summaryId
        ) {
            let e = b[i.channelId];
            a = null == e ? void 0 : e.findIndex((e) => e.id === (null == i ? void 0 : i.summaryId));
        }
    },
    UPDATE_VISIBLE_MESSAGES(e) {
        let t = v.Z.getChannelId();
        if (null != t) {
            if (null != i && i.channelId === t && null != i.summaryId) {
                let e = b[i.channelId];
                a = null == e ? void 0 : e.findIndex((e) => e.id === (null == i ? void 0 : i.summaryId));
            } else {
                var n;
                a =
                    null === (n = b[t]) || void 0 === n
                        ? void 0
                        : n.findIndex((t) => {
                              var n, r, i, a;
                              return (n = e.topVisibleMessage), (r = e.bottomVisibleMessage), (i = t.startId), (a = t.endId), !(null == n || n > a) && !(null == r || r < i);
                          });
            }
        }
    },
    SET_SELECTED_SUMMARY(e) {
        var t;
        let n = e.channelId;
        return null == n
            ? null
            : (n !== (null == s ? void 0 : s.channelId) || e.summaryId !== (null == s ? void 0 : s.summaryId)) &&
                  void (s = {
                      channelId: n,
                      summaryId: null !== (t = e.summaryId) && void 0 !== t ? t : null
                  });
    },
    SET_SUMMARY_FEEDBACK(e) {
        let { summary: t, rating: n } = e;
        null != n ? (P[t.id] = n) : delete P[t.id];
    },
    REQUEST_CHANNEL_AFFINITIES() {
        x = {
            ...x,
            status: 'fetching',
            lastRequest: Date.now()
        };
    },
    RECEIVE_CHANNEL_AFFINITIES(e) {
        var t;
        let { affinities: n, error: r } = e;
        if (null != r) {
            (U = []),
                (w = {}),
                (x = {
                    ...x,
                    status: 'error',
                    lastResponse: Date.now()
                });
            return;
        }
        (U = null != n ? n : []),
            (w = null !== (t = null == n ? void 0 : n.reduce((e, t) => ((e[t.channel_id] = t.affinity), e), {})) && void 0 !== t ? t : {}),
            (x = {
                ...x,
                status: 'ok',
                lastResponse: Date.now()
            });
    },
    REQUEST_CHANNEL_SUMMARIES_BULK(e) {
        let { channelIds: t, requestedAt: n } = e,
            r = t.reduce((e, t) => {
                var r;
                let i = null !== (r = M[t]) && void 0 !== r ? r : {};
                return (
                    (e[t] = {
                        ...i,
                        fetching: !0,
                        lastRequestedAt: n,
                        error: void 0
                    }),
                    e
                );
            }, {});
        M = {
            ...M,
            ...r
        };
    },
    RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
        let {
                summaries: t,
                receivedAt: n,
                error: r,
                requestArgs: { channelIds: i }
            } = e,
            a = f()
                .toPairs(t)
                .reduce((e, t) => {
                    let [n, r] = t,
                        i = f()
                            .chain(r.map((e) => (0, D.b)(e, n)))
                            .sortBy((e) => y.default.extractTimestamp(e.startId))
                            .takeRight(75)
                            .reverse()
                            .filter((e) => Object.keys(e).length > 0)
                            .value();
                    return (e[n] = i), e;
                }, {}),
            s = i.reduce(
                (e, t) => {
                    var i;
                    let s = null !== (i = M[t]) && void 0 !== i ? i : {},
                        o = a[t];
                    return (
                        null != o && (e.summariesByChannel[t] = o),
                        (e.summaryFetchStatusByChannel[t] = {
                            ...s,
                            fetching: !1,
                            error: r,
                            lastReceivedAt: n
                        }),
                        e
                    );
                },
                {
                    summariesByChannel: {},
                    summaryFetchStatusByChannel: {}
                }
            );
        (b = {
            ...b,
            ...s.summariesByChannel
        }),
            (M = {
                ...M,
                ...s.summaryFetchStatusByChannel
            });
    },
    CONVERSATION_SUMMARY_UPDATE(e) {
        var t, n, r;
        let { channel_id: i, summaries: a, guild_id: s } = e,
            o = Date.now(),
            l = f()
                .chain(a)
                .sortBy((e) => y.default.extractTimestamp(e.start_id))
                .filter((e) => Object.keys(e).length > 0)
                .map((e) => (0, D.b)(e, i))
                .reverse()
                .value(),
            u = null !== (n = b[i]) && void 0 !== n ? n : [],
            c = f()
                .chain(l)
                .concat(u)
                .sortBy((e) => y.default.extractTimestamp(e.startId))
                .takeRight(75)
                .uniqBy('id')
                .reverse()
                .value();
        (b[i] = c),
            (M[i] = {
                ...M[i],
                error: void 0,
                fetching: null !== (r = null === (t = M[i]) || void 0 === t ? void 0 : t.fetching) && void 0 !== r && r,
                lastReceivedAt: o
            });
    },
    CLEAR_CONVERSATION_SUMMARIES() {
        (b = {}), (M = {});
    },
    DELETE_SUMMARY(e) {
        var t;
        let n = e.summary.channelId,
            r = (null !== (t = b[n]) && void 0 !== t ? t : []).indexOf(e.summary);
        -1 !== r && b[n].splice(r, 1);
    }
});
t.Z = V;
