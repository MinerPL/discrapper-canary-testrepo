"use strict";
n.d(t, {
  $l: function() {
    return g
  },
  G1: function() {
    return f
  },
  JR: function() {
    return O
  },
  U$: function() {
    return R
  },
  e7: function() {
    return A
  },
  wv: function() {
    return m
  },
  yK: function() {
    return N
  }
});
var i = n(470079),
  r = n(392711),
  s = n.n(r),
  o = n(399606),
  a = n(544891),
  l = n(570140),
  u = n(881052),
  _ = n(902840),
  d = n(38618),
  c = n(592125),
  E = n(70956),
  I = n(765104),
  T = n(981631);
let h = 30 * E.Z.Millis.SECOND;
async function S(e, t) {
  let n, i;
  if (!I.Z.shouldFetch(e, t)) return;
  let r = Date.now();
  l.Z.dispatch({
    type: "REQUEST_CHANNEL_SUMMARY",
    channelId: e,
    summaryId: t,
    requestedAt: r
  });
  try {
    let n = await a.tn.get(T.Z5c.CHANNEL_SUMMARY(e, t));
    i = null == n ? void 0 : n.body
  } catch (e) {
    n = new u.Hx(e)
  }
  l.Z.dispatch({
    type: "RECEIVE_CHANNEL_SUMMARY",
    channelId: e,
    summary: i,
    error: n,
    requestedAt: r,
    receivedAt: Date.now()
  })
}
async function f(e) {
  var t, n;
  let i, r;
  if (!I.Z.shouldFetch(e)) return;
  let o = Date.now();
  l.Z.dispatch({
    type: "REQUEST_CHANNEL_SUMMARIES",
    channelId: e,
    requestedAt: o
  });
  try {
    r = await a.tn.get(T.Z5c.CHANNEL_SUMMARIES(e))
  } catch (e) {
    i = new u.Hx(e)
  }
  let _ = (null == r ? void 0 : null === (t = r.body) || void 0 === t ? void 0 : t.summaries) instanceof Array ? r.body.summaries : null !== (n = null == r ? void 0 : r.body) && void 0 !== n ? n : [];
  _ = s().takeRight(_, 75), l.Z.dispatch({
    type: "RECEIVE_CHANNEL_SUMMARIES",
    channelId: e,
    summaries: _,
    error: null != i ? i : void 0,
    requestedAt: o,
    receivedAt: Date.now()
  })
}

function N(e, t) {
  l.Z.dispatch({
    type: "SET_HIGHLIGHTED_SUMMARY",
    channelId: e,
    summaryId: null != t ? t : null
  })
}

function A() {
  l.Z.dispatch({
    type: "TOGGLE_TOPICS_BAR"
  })
}

function m(e, t) {
  null != e && null != t && S(e, t), l.Z.dispatch({
    type: "SET_SELECTED_SUMMARY",
    channelId: e,
    summaryId: null != t ? t : null
  })
}

function O(e, t) {
  l.Z.dispatch({
    type: "UPDATE_VISIBLE_MESSAGES",
    topVisibleMessage: null != e ? e : null,
    bottomVisibleMessage: null != t ? t : null
  })
}

function R(e, t) {
  l.Z.dispatch({
    type: "SET_SUMMARY_FEEDBACK",
    summary: e,
    rating: t
  })
}
async function C() {
  var e;
  let t, n;
  if (!I.Z.shouldFetchChannelAffinities()) return Promise.resolve(null);
  let i = Date.now();
  l.Z.dispatch({
    type: "REQUEST_CHANNEL_AFFINITIES",
    requestedAt: i
  });
  try {
    n = await a.tn.get("/users/@me/affinities/channels")
  } catch (e) {
    t = new u.Hx(e)
  }
  let r = null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.channel_affinities;
  l.Z.dispatch({
    type: "RECEIVE_CHANNEL_AFFINITIES",
    affinities: r,
    error: null != t ? t : void 0,
    requestedAt: i,
    receivedAt: Date.now()
  })
}
async function p(e) {
  let t, n, {
    useQuickSwitcher: i = !0,
    useChannelAffinities: r = !0
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  e = null != e ? e : [];
  let s = Date.now();
  if (0 === (e = e.concat(I.Z.defaultChannelIds({
      withQuickSwitcher: i,
      withChannelAffinities: r
    })).filter(e => {
      let t = c.Z.getChannel(e);
      return (0, _.Lp)(t, !1, !0)
    }).filter(e => {
      let t = Date.now(),
        n = I.Z.status(e);
      if (null == n ? void 0 : n.fetching) return !1;
      let i = null == n ? void 0 : n.lastReceivedAt;
      return null == i || t - i > h
    }).slice(0, 50)).length) return Promise.resolve(null);
  l.Z.dispatch({
    type: "REQUEST_CHANNEL_SUMMARIES_BULK",
    channelIds: e,
    requestedAt: s
  });
  try {
    n = await a.tn.post({
      url: T.Z5c.USER_SUMMARIES,
      body: {
        channel_ids: e
      }
    })
  } catch (e) {
    t = new u.Hx(e)
  }
  let o = null == n ? void 0 : n.body.summaries;
  l.Z.dispatch({
    type: "RECEIVE_CHANNEL_SUMMARIES_BULK",
    requestedAt: s,
    receivedAt: Date.now(),
    summaries: o,
    requestArgs: {
      channelIds: e
    },
    error: t
  })
}
async function g(e) {
  try {
    await a.tn.del(T.Z5c.CHANNEL_SUMMARY(e.channelId, e.id)), l.Z.dispatch({
      type: "DELETE_SUMMARY",
      summary: e
    })
  } catch (e) {
    throw new u.Hx(e)
  }
}
let L = 12633 == n.j ? {
  setSummaryFeedback: R,
  updateVisibleMessages: O,
  setSelectedSummary: m,
  setHighlightedSummary: N,
  fetchSummaries: f,
  fetchSummariesBulk: p,
  useChannelSummaries: function(e) {
    let {
      channelIds: t = []
    } = e;
    return ! function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = (0, o.e7)([d.Z], () => d.Z.isConnected()),
        n = i.useMemo(() => e.join(","), [e]);
      i.useEffect(() => {
        t && e();
        async function e() {
          try {
            await C()
          } catch (e) {}
          await p(n.split(","))
        }
      }, [n, t])
    }(t), (0, o.Wu)([I.Z], () => I.Z.topSummaries(), [])
  },
  deleteSummary: g
} : null;
t.ZP = 12633 == n.j ? L : null