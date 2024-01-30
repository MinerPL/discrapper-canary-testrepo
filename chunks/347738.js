"use strict";
let l, a, s, i;
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("834022"), n("222007"), n("424973"), n("808653");
var r, o, u = n("917351"),
  d = n.n(u),
  c = n("446674"),
  f = n("913144"),
  m = n("734575"),
  h = n("123225"),
  p = n("789563"),
  g = n("116460"),
  E = n("42203"),
  v = n("305961"),
  C = n("660478"),
  I = n("18494"),
  x = n("282109"),
  _ = n("697218"),
  S = n("718517"),
  N = n("299039"),
  M = n("204653");
(o = r || (r = {})).FETCHING = "fetching", o.OK = "ok", o.ERROR = "error";
let T = {},
  A = {},
  j = {},
  y = [],
  R = {},
  L = {
    status: "ok",
    lastRequest: null,
    lastResponse: null
  },
  O = [],
  b = [];

function D() {
  O = g.default.getProps().results.filter(e => e.type === h.AutocompleterResultTypes.TEXT_CHANNEL && 0 === e.record.type).map(e => e.record.id)
}
class P extends c.default.PersistedStore {
  getState() {
    return {
      shouldShowTopicsBar: l
    }
  }
  initialize(e) {
    var t;
    l = null === (t = null == e ? void 0 : e.shouldShowTopicsBar) || void 0 === t || t, this.waitFor(E.default, _.default, I.default, v.default, p.default), this.syncWith([g.default], D)
  }
  allSummaries() {
    return T
  }
  topSummaries() {
    let e = Object.values(T).flat().filter(e => e.people.length > 1 && N.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * S.default.Millis.HOUR).sort((e, t) => N.default.extractTimestamp(t.endId) - N.default.extractTimestamp(e.endId));
    return e
  }
  summaries(e) {
    var t;
    return null !== (t = T[e]) && void 0 !== t ? t : b
  }
  shouldShowTopicsBar() {
    return l
  }
  findSummary(e, t) {
    var n;
    return null !== (n = this.summaries(e).find(e => e.id === t)) && void 0 !== n ? n : null
  }
  selectedSummary(e) {
    return null != i && i.channelId === e && null != i.summaryId ? this.findSummary(e, null == i ? void 0 : i.summaryId) : null
  }
  summaryFeedback(e) {
    return null == e ? null : j[e.id]
  }
  isFetching(e, t) {
    var n, l;
    return null != t ? (null === (l = A[e]) || void 0 === l ? void 0 : l.summaryId) === t : (null === (n = A[e]) || void 0 === n ? void 0 : n.fetching) === !0
  }
  status(e) {
    return A[e]
  }
  shouldFetch(e, t) {
    var n, l, a;
    let s = T[e],
      i = A[e],
      r = E.default.getChannel(e);
    if (!(0, m.canSeeChannelSummaries)(r)) return !1;
    if (null != t) {
      let e = null !== (l = null == i ? void 0 : i.summaryIdLastRequestedAt) && void 0 !== l ? l : 0,
        n = Date.now() - e;
      return t !== (null == i ? void 0 : i.summaryId) || n > 5e3
    }
    let o = null !== (a = null == i ? void 0 : i.lastRequestedAt) && void 0 !== a ? a : 0,
      u = Date.now() - o;
    return (null === (n = A[e]) || void 0 === n ? void 0 : n.fetching) !== !0 && ((null == s ? void 0 : s.length) < 1 || u >= 5e3)
  }
  channelAffinities() {
    return y
  }
  channelAffinitiesById(e) {
    return null == e ? R : R[e]
  }
  channelAffinitiesStatus() {
    return L
  }
  shouldFetchChannelAffinities() {
    return !("fetching" === L.status || null != L.lastResponse && Date.now() - L.lastResponse < 30 * S.default.Millis.SECOND) && !0
  }
  defaultChannelIds(e) {
    let {
      withQuickSwitcher: t,
      withChannelAffinities: n,
      withUnreads: l,
      numChannels: a = 25
    } = e, s = [];
    return t && (s = s.concat(O)), n && (s = s.concat(y.map(e => e.channel_id))), l && (s = s.filter(e => {
      let t = E.default.getChannel(e);
      return null != t && !x.default.isChannelMuted(t.guild_id, e) && C.default.hasUnread(e)
    })), (s = s.filter(e => {
      let t = E.default.getChannel(e);
      return (0, m.canSeeChannelSummaries)(t, !1, !1)
    })).slice(0, a)
  }
  visibleSummaryIndex() {
    return s
  }
}
P.persistKey = "SummaryStore";
let w = new P(f.default, {
  CONNECTION_OPEN: () => !1,
  CHANNEL_SELECT(e) {
    let {
      channelId: t
    } = e;
    (null == i ? void 0 : i.channelId) !== t && (i = null)
  },
  TOGGLE_TOPICS_BAR() {
    l = !l
  },
  RECEIVE_CHANNEL_SUMMARY(e) {
    var t, n;
    let {
      summary: l,
      channelId: a,
      error: s,
      receivedAt: i
    } = e;
    if (null != l && Object.keys(l).length > 0) {
      let e = (0, M.createSummaryFromServer)(l, a),
        n = [...null !== (t = T[a]) && void 0 !== t ? t : []],
        s = n.findIndex(t => t.id === (null == e ? void 0 : e.id));
      s > -1 ? n[s] = e : n.push(e), T[a] = n
    }
    let r = {
      ...null !== (n = A[a]) && void 0 !== n ? n : {
        fetching: !1
      },
      summaryId: void 0,
      summaryIdLastReceivedAt: i,
      summaryIdError: s
    };
    A[a] = r
  },
  REQUEST_CHANNEL_SUMMARY(e) {
    var t;
    let {
      channelId: n,
      summaryId: l,
      requestedAt: a
    } = e;
    A[n] = {
      ...null !== (t = A[n]) && void 0 !== t ? t : {
        fetching: !1
      },
      summaryId: l,
      summaryIdLastRequestedAt: a
    }
  },
  RECEIVE_CHANNEL_SUMMARIES(e) {
    let {
      summaries: t,
      channelId: n,
      error: l,
      receivedAt: a
    } = e, s = t.filter(e => Object.keys(e).length > 0).map(e => (0, M.createSummaryFromServer)(e, n));
    if (null != i && i.channelId === n && !s.some(e => e.id === (null == i ? void 0 : i.summaryId))) {
      var r;
      let e = null !== (r = T[n]) && void 0 !== r ? r : [],
        t = e.find(e => e.id === (null == i ? void 0 : i.summaryId));
      null != t && s.push(t)
    }
    T[n] = (0, u.sortBy)(s, e => N.default.extractTimestamp(e.startId)).reverse();
    let o = {
      ...A[n],
      fetching: !1,
      error: void 0,
      lastReceivedAt: a
    };
    null != l && (o.error = l), A[n] = o
  },
  REQUEST_CHANNEL_SUMMARIES(e) {
    var t;
    A[e.channelId] = {
      ...null !== (t = A[e.channelId]) && void 0 !== t ? t : {},
      fetching: !0,
      lastRequestedAt: e.requestedAt
    }
  },
  SET_HIGHLIGHTED_SUMMARY(e) {
    var t;
    if (null == a && null == e.channelId || e.channelId === (null == a ? void 0 : a.channelId) && e.summaryId === (null == a ? void 0 : a.summaryId)) return !1;
    if (null != (a = null != e.channelId ? {
        channelId: e.channelId,
        summaryId: null !== (t = e.summaryId) && void 0 !== t ? t : null
      } : null) && a.channelId === e.channelId && null != a.summaryId) {
      let e = T[a.channelId];
      s = null == e ? void 0 : e.findIndex(e => e.id === (null == a ? void 0 : a.summaryId))
    }
  },
  UPDATE_VISIBLE_MESSAGES(e) {
    let t = I.default.getChannelId();
    if (null != t) {
      if (null != a && a.channelId === t && null != a.summaryId) {
        let e = T[a.channelId];
        s = null == e ? void 0 : e.findIndex(e => e.id === (null == a ? void 0 : a.summaryId))
      } else {
        var n;
        s = null === (n = T[t]) || void 0 === n ? void 0 : n.findIndex(t => {
          var n, l, a, s;
          return n = e.topVisibleMessage, l = e.bottomVisibleMessage, a = t.startId, s = t.endId, !(null == n || n > s) && !(null == l || l < a)
        })
      }
    }
  },
  SET_SELECTED_SUMMARY(e) {
    var t;
    let n = e.channelId;
    return null == n ? null : (n !== (null == i ? void 0 : i.channelId) || e.summaryId !== (null == i ? void 0 : i.summaryId)) && void(i = {
      channelId: n,
      summaryId: null !== (t = e.summaryId) && void 0 !== t ? t : null
    })
  },
  SET_SUMMARY_FEEDBACK(e) {
    let {
      summary: t,
      rating: n
    } = e;
    null != n ? j[t.id] = n : delete j[t.id]
  },
  REQUEST_CHANNEL_AFFINITIES() {
    L = {
      ...L,
      status: "fetching",
      lastRequest: Date.now()
    }
  },
  RECEIVE_CHANNEL_AFFINITIES(e) {
    var t;
    let {
      affinities: n,
      error: l
    } = e;
    if (null != l) {
      y = [], R = {}, L = {
        ...L,
        status: "error",
        lastResponse: Date.now()
      };
      return
    }
    y = null != n ? n : [], R = null !== (t = null == n ? void 0 : n.reduce((e, t) => (e[t.channel_id] = t.affinity, e), {})) && void 0 !== t ? t : {}, L = {
      ...L,
      status: "ok",
      lastResponse: Date.now()
    }
  },
  REQUEST_CHANNEL_SUMMARIES_BULK(e) {
    let {
      channelIds: t,
      requestedAt: n
    } = e, l = t.reduce((e, t) => {
      var l;
      let a = null !== (l = A[t]) && void 0 !== l ? l : {};
      return e[t] = {
        ...a,
        fetching: !0,
        lastRequestedAt: n,
        error: void 0
      }, e
    }, {});
    A = {
      ...A,
      ...l
    }
  },
  RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
    let {
      summaries: t,
      receivedAt: n,
      error: l,
      requestArgs: {
        channelIds: a
      }
    } = e, s = d.toPairs(t).reduce((e, t) => {
      let [n, l] = t, a = d.chain(l.map(e => (0, M.createSummaryFromServer)(e, n))).sortBy(e => N.default.extractTimestamp(e.startId)).takeRight(75).reverse().filter(e => Object.keys(e).length > 0).value();
      return e[n] = a, e
    }, {}), i = a.reduce((e, t) => {
      var a;
      let i = null !== (a = A[t]) && void 0 !== a ? a : {},
        r = s[t];
      return null != r && (e.summariesByChannel[t] = r), e.summaryFetchStatusByChannel[t] = {
        ...i,
        fetching: !1,
        error: l,
        lastReceivedAt: n
      }, e
    }, {
      summariesByChannel: {},
      summaryFetchStatusByChannel: {}
    });
    T = {
      ...T,
      ...i.summariesByChannel
    }, A = {
      ...A,
      ...i.summaryFetchStatusByChannel
    }
  },
  CONVERSATION_SUMMARY_UPDATE(e) {
    var t, n, l;
    let {
      channel_id: a,
      summaries: s,
      guild_id: i
    } = e, r = Date.now(), o = d.chain(s).sortBy(e => N.default.extractTimestamp(e.start_id)).filter(e => Object.keys(e).length > 0).map(e => (0, M.createSummaryFromServer)(e, a)).reverse().value(), u = null !== (n = T[a]) && void 0 !== n ? n : [], c = d.chain(o).concat(u).sortBy(e => N.default.extractTimestamp(e.startId)).takeRight(75).uniqBy("id").reverse().value();
    T[a] = c, A[a] = {
      ...A[a],
      error: void 0,
      fetching: null !== (l = null === (t = A[a]) || void 0 === t ? void 0 : t.fetching) && void 0 !== l && l,
      lastReceivedAt: r
    }
  },
  CLEAR_CONVERSATION_SUMMARIES() {
    T = {}, A = {}
  },
  DELETE_SUMMARY(e) {
    var t;
    let n = e.summary.channelId,
      l = null !== (t = T[n]) && void 0 !== t ? t : [],
      a = l.indexOf(e.summary); - 1 !== a && T[n].splice(a, 1)
  }
});
var U = w