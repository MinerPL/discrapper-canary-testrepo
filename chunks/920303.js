"use strict";
let i;
n.d(t, {
  I: function() {
    return m
  }
}), n(47120);
var r, s, o, a, l = n(392711),
  u = n.n(l),
  _ = n(683860),
  d = n(442837),
  c = n(570140),
  E = n(882252),
  I = n(228392),
  T = n(131704),
  h = n(592125),
  S = n(306680),
  f = n(823379),
  N = n(709054),
  A = n(569471);
let m = 25,
  O = !1,
  R = !0,
  C = !1,
  p = !1,
  g = null,
  L = _.z.LATEST_ACTIVITY,
  v = [],
  D = 0;

function M() {
  O = !1, R = !0, C = !1, p = !1, g = null, L = _.z.LATEST_ACTIVITY, i = new Set, D = 0, v = []
}

function P(e, t) {
  return t === _.z.LATEST_ACTIVITY ? S.ZP.lastMessageId(e.id) : e.id
}

function y() {
  if (null == g) return !1;
  let e = !C,
    t = h.Z.getChannel(v[v.length - 1]),
    n = null == t ? null : P(t, L);
  v = u()(h.Z.getAllThreadsForParent(g)).filter(e => e.isArchivedThread()).filter(t => {
    var r;
    if (0 !== i.size && (null === (r = t.appliedTags) || void 0 === r ? void 0 : r.some(e => i.has(e))) !== !0) return !1;
    if (e || null == n) return !0;
    {
      let e = null == t ? null : P(t, L);
      return null != e && N.default.compare(e, n) >= 0
    }
  }).sort((e, t) => N.default.compare(P(e, L), P(t, L))).map(e => e.id).reverse().value()
}

function U(e) {
  if (!(v.indexOf(e) >= 0)) return !1;
  v = v.filter(t => t !== e)
}
let b = [];
class G extends(r = d.ZP.Store) {
  initialize() {
    this.waitFor(h.Z, A.Z, S.ZP)
  }
  get canLoadMore() {
    return C && !O && !p
  }
  get nextOffset() {
    return D
  }
  get isInitialLoad() {
    return R
  }
  isLoading(e, t, n) {
    return g === e && L === t && (0, f.OL)(i, n) ? O : (M(), !1)
  }
  getThreads(e, t, n) {
    return g === e && L === t && (0, f.OL)(i, n) ? v : b
  }
}
a = "ArchivedThreadsStore", (o = "displayName") in(s = G) ? Object.defineProperty(s, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = a, t.Z = new G(c.Z, {
  CONNECTION_OPEN: M,
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return U(t.id)
  },
  THREAD_UPDATE: function(e) {
    let {
      channel: t
    } = e;
    return g === t.parent_id && !!(0, E.yv)(t.id) && void U(t.id)
  },
  CHANNEL_DELETE: function(e) {
    if (e.channel.id !== g) return !1;
    M()
  },
  LOAD_ARCHIVED_THREADS: function(e) {
    (e.channelId !== g || e.sortOrder !== L || !(0, f.OL)(e.tagFilter, i)) && M(), g = e.channelId, L = e.sortOrder, i = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter), O = !0, R = !1
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
    if (e.channelId !== g || e.sortOrder !== L || !(0, f.OL)(e.tagFilter, i)) return !1;
    let t = e.threads.filter(e => T.AW.has(e.type)).map(e => e.id);
    v = v.concat(t);
    let n = h.Z.getChannel(g);
    null != n && n.isForumLikeChannel() && (0, I.Hr)({
      guildId: n.guild_id,
      channelId: n.id,
      numArchivedThreads: v.length,
      hasMoreThreads: e.hasMore,
      filterTagIds: Array.from(e.tagFilter),
      sortOrder: e.sortOrder
    }), y(), C = e.hasMore, D = e.offset + m, O = !1, R = !1
  },
  LOAD_ARCHIVED_THREADS_FAIL: function(e) {
    if (e.channelId !== g || e.sortOrder !== L || !(0, f.OL)(e.tagFilter, i)) return !1;
    O = !1, p = !0, R = !1
  },
  RESORT_THREADS: function(e) {
    return (null == g || null == e.channelId || g === e.channelId) && y()
  }
})