"use strict";
let i, r, s, o;
n(536091), n(47120), n(653041), n(724458);
var a, l, u, _, d, c, E = n(392711),
  I = n.n(E),
  T = n(442837),
  h = n(570140),
  S = n(902840),
  f = n(212819),
  N = n(353926),
  A = n(823385),
  m = n(592125),
  O = n(430824),
  R = n(306680),
  C = n(944486),
  p = n(9156),
  g = n(594174),
  L = n(70956),
  v = n(709054),
  D = n(418088),
  M = n(814249);
(u = a || (a = {})).FETCHING = "fetching", u.OK = "ok", u.ERROR = "error";
let P = {},
  y = {},
  U = {},
  b = [],
  G = {},
  w = {
    status: "ok",
    lastRequest: null,
    lastResponse: null
  },
  k = [],
  B = [];

function x() {
  k = A.Z.getProps().results.filter(e => e.type === f.h8.TEXT_CHANNEL && 0 === e.record.type).map(e => e.record.id)
}
class V extends(l = T.ZP.PersistedStore) {
  getState() {
    return {
      shouldShowTopicsBar: i
    }
  }
  initialize(e) {
    var t;
    i = null === (t = null == e ? void 0 : e.shouldShowTopicsBar) || void 0 === t || t, this.waitFor(m.Z, g.default, C.Z, O.Z, N.Z), this.syncWith([A.Z], x)
  }
  allSummaries() {
    return P
  }
  topSummaries() {
    return Object.values(P).flat().filter(e => e.people.length > 1 && v.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * L.Z.Millis.HOUR).sort((e, t) => v.default.extractTimestamp(t.endId) - v.default.extractTimestamp(e.endId))
  }
  summaries(e) {
    var t;
    return null !== (t = P[e]) && void 0 !== t ? t : B
  }
  shouldShowTopicsBar() {
    return i
  }
  findSummary(e, t) {
    var n;
    return null !== (n = this.summaries(e).find(e => e.id === t)) && void 0 !== n ? n : null
  }
  selectedSummary(e) {
    return null != o && o.channelId === e && null != o.summaryId ? this.findSummary(e, null == o ? void 0 : o.summaryId) : null
  }
  summaryFeedback(e) {
    return null == e ? null : U[e.id]
  }
  isFetching(e, t) {
    var n, i;
    return null != t ? (null === (i = y[e]) || void 0 === i ? void 0 : i.summaryId) === t : (null === (n = y[e]) || void 0 === n ? void 0 : n.fetching) === !0
  }
  status(e) {
    return y[e]
  }
  shouldFetch(e, t) {
    var n, i;
    let r = y[e],
      s = m.Z.getChannel(e);
    if (!(0, S.Lp)(s)) return !1;
    if (null != t) {
      let e = null !== (n = null == r ? void 0 : r.summaryIdLastRequestedAt) && void 0 !== n ? n : 0,
        i = Date.now() - e;
      return t !== (null == r ? void 0 : r.summaryId) || i > M.cS
    }
    let o = null !== (i = null == r ? void 0 : r.lastReceivedAt) && void 0 !== i ? i : 0;
    return !(null == r ? void 0 : r.fetching) && 0 === o
  }
  channelAffinities() {
    return b
  }
  channelAffinitiesById(e) {
    return null == e ? G : G[e]
  }
  channelAffinitiesStatus() {
    return w
  }
  shouldFetchChannelAffinities() {
    return !("fetching" === w.status || null != w.lastResponse && Date.now() - w.lastResponse < 30 * L.Z.Millis.SECOND) && !0
  }
  defaultChannelIds(e) {
    let {
      withQuickSwitcher: t,
      withChannelAffinities: n,
      withUnreads: i,
      numChannels: r = 25
    } = e, s = [];
    return t && (s = s.concat(k)), n && (s = s.concat(b.map(e => e.channel_id))), i && (s = s.filter(e => {
      let t = m.Z.getChannel(e);
      return null != t && !p.ZP.isChannelMuted(t.guild_id, e) && R.ZP.hasUnread(e)
    })), (s = s.filter(e => {
      let t = m.Z.getChannel(e);
      return (0, S.Lp)(t, !1, !1)
    })).slice(0, r)
  }
  visibleSummaryIndex() {
    return s
  }
}
c = "SummaryStore", (d = "persistKey") in(_ = V) ? Object.defineProperty(_, d, {
  value: c,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : _[d] = c;
let Z = new V(h.Z, {
  CONNECTION_OPEN: () => !1,
  CHANNEL_SELECT(e) {
    let {
      channelId: t
    } = e;
    (null == o ? void 0 : o.channelId) !== t && (o = null)
  },
  TOGGLE_TOPICS_BAR() {
    i = !i
  },
  RECEIVE_CHANNEL_SUMMARY(e) {
    var t, n;
    let {
      summary: i,
      channelId: r,
      error: s,
      receivedAt: o
    } = e;
    if (null != i && Object.keys(i).length > 0) {
      let e = (0, D.b)(i, r),
        n = [...null !== (t = P[r]) && void 0 !== t ? t : []],
        s = n.findIndex(t => t.id === (null == e ? void 0 : e.id));
      s > -1 ? n[s] = e : n.push(e), P[r] = n
    }
    let a = {
      ...null !== (n = y[r]) && void 0 !== n ? n : {
        fetching: !1
      },
      summaryId: void 0,
      summaryIdLastReceivedAt: o,
      summaryIdError: s
    };
    y[r] = a
  },
  REQUEST_CHANNEL_SUMMARY(e) {
    var t;
    let {
      channelId: n,
      summaryId: i,
      requestedAt: r
    } = e;
    y[n] = {
      ...null !== (t = y[n]) && void 0 !== t ? t : {
        fetching: !1
      },
      summaryId: i,
      summaryIdLastRequestedAt: r
    }
  },
  RECEIVE_CHANNEL_SUMMARIES(e) {
    let {
      summaries: t,
      channelId: n,
      error: i,
      receivedAt: r
    } = e, s = t.filter(e => Object.keys(e).length > 0).map(e => (0, D.b)(e, n));
    if (null != o && o.channelId === n && !s.some(e => e.id === (null == o ? void 0 : o.summaryId))) {
      var a;
      let e = (null !== (a = P[n]) && void 0 !== a ? a : []).find(e => e.id === (null == o ? void 0 : o.summaryId));
      null != e && s.push(e)
    }
    P[n] = (0, E.sortBy)(s, e => v.default.extractTimestamp(e.startId)).reverse();
    let l = {
      ...y[n],
      fetching: !1,
      error: void 0,
      lastReceivedAt: r
    };
    null != i && (l.error = i), y[n] = l
  },
  REQUEST_CHANNEL_SUMMARIES(e) {
    var t;
    y[e.channelId] = {
      ...null !== (t = y[e.channelId]) && void 0 !== t ? t : {},
      fetching: !0,
      lastRequestedAt: e.requestedAt
    }
  },
  SET_HIGHLIGHTED_SUMMARY(e) {
    var t;
    if (null == r && null == e.channelId || e.channelId === (null == r ? void 0 : r.channelId) && e.summaryId === (null == r ? void 0 : r.summaryId)) return !1;
    if (null != (r = null != e.channelId ? {
        channelId: e.channelId,
        summaryId: null !== (t = e.summaryId) && void 0 !== t ? t : null
      } : null) && r.channelId === e.channelId && null != r.summaryId) {
      let e = P[r.channelId];
      s = null == e ? void 0 : e.findIndex(e => e.id === (null == r ? void 0 : r.summaryId))
    }
  },
  UPDATE_VISIBLE_MESSAGES(e) {
    let t = C.Z.getChannelId();
    if (null != t) {
      if (null != r && r.channelId === t && null != r.summaryId) {
        let e = P[r.channelId];
        s = null == e ? void 0 : e.findIndex(e => e.id === (null == r ? void 0 : r.summaryId))
      } else {
        var n;
        s = null === (n = P[t]) || void 0 === n ? void 0 : n.findIndex(t => {
          var n, i, r, s;
          return n = e.topVisibleMessage, i = e.bottomVisibleMessage, r = t.startId, s = t.endId, !(null == n || n > s) && !(null == i || i < r)
        })
      }
    }
  },
  SET_SELECTED_SUMMARY(e) {
    var t;
    let n = e.channelId;
    return null == n ? null : (n !== (null == o ? void 0 : o.channelId) || e.summaryId !== (null == o ? void 0 : o.summaryId)) && void(o = {
      channelId: n,
      summaryId: null !== (t = e.summaryId) && void 0 !== t ? t : null
    })
  },
  SET_SUMMARY_FEEDBACK(e) {
    let {
      summary: t,
      rating: n
    } = e;
    null != n ? U[t.id] = n : delete U[t.id]
  },
  REQUEST_CHANNEL_AFFINITIES() {
    w = {
      ...w,
      status: "fetching",
      lastRequest: Date.now()
    }
  },
  RECEIVE_CHANNEL_AFFINITIES(e) {
    var t;
    let {
      affinities: n,
      error: i
    } = e;
    if (null != i) {
      b = [], G = {}, w = {
        ...w,
        status: "error",
        lastResponse: Date.now()
      };
      return
    }
    b = null != n ? n : [], G = null !== (t = null == n ? void 0 : n.reduce((e, t) => (e[t.channel_id] = t.affinity, e), {})) && void 0 !== t ? t : {}, w = {
      ...w,
      status: "ok",
      lastResponse: Date.now()
    }
  },
  REQUEST_CHANNEL_SUMMARIES_BULK(e) {
    let {
      channelIds: t,
      requestedAt: n
    } = e, i = t.reduce((e, t) => {
      var i;
      let r = null !== (i = y[t]) && void 0 !== i ? i : {};
      return e[t] = {
        ...r,
        fetching: !0,
        lastRequestedAt: n,
        error: void 0
      }, e
    }, {});
    y = {
      ...y,
      ...i
    }
  },
  RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
    let {
      summaries: t,
      receivedAt: n,
      error: i,
      requestArgs: {
        channelIds: r
      }
    } = e, s = I().toPairs(t).reduce((e, t) => {
      let [n, i] = t, r = I().chain(i.map(e => (0, D.b)(e, n))).sortBy(e => v.default.extractTimestamp(e.startId)).takeRight(75).reverse().filter(e => Object.keys(e).length > 0).value();
      return e[n] = r, e
    }, {}), o = r.reduce((e, t) => {
      var r;
      let o = null !== (r = y[t]) && void 0 !== r ? r : {},
        a = s[t];
      return null != a && (e.summariesByChannel[t] = a), e.summaryFetchStatusByChannel[t] = {
        ...o,
        fetching: !1,
        error: i,
        lastReceivedAt: n
      }, e
    }, {
      summariesByChannel: {},
      summaryFetchStatusByChannel: {}
    });
    P = {
      ...P,
      ...o.summariesByChannel
    }, y = {
      ...y,
      ...o.summaryFetchStatusByChannel
    }
  },
  CONVERSATION_SUMMARY_UPDATE(e) {
    var t, n, i;
    let {
      channel_id: r,
      summaries: s,
      guild_id: o
    } = e, a = Date.now(), l = I().chain(s).sortBy(e => v.default.extractTimestamp(e.start_id)).filter(e => Object.keys(e).length > 0).map(e => (0, D.b)(e, r)).reverse().value(), u = null !== (n = P[r]) && void 0 !== n ? n : [], _ = I().chain(l).concat(u).sortBy(e => v.default.extractTimestamp(e.startId)).takeRight(75).uniqBy("id").reverse().value();
    P[r] = _, y[r] = {
      ...y[r],
      error: void 0,
      fetching: null !== (i = null === (t = y[r]) || void 0 === t ? void 0 : t.fetching) && void 0 !== i && i,
      lastReceivedAt: a
    }
  },
  CLEAR_CONVERSATION_SUMMARIES() {
    P = {}, y = {}
  },
  DELETE_SUMMARY(e) {
    var t;
    let n = e.summary.channelId,
      i = (null !== (t = P[n]) && void 0 !== t ? t : []).indexOf(e.summary); - 1 !== i && P[n].splice(i, 1)
  }
});
t.Z = Z