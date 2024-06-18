"use strict";
let i;
n.d(t, {
  U: function() {
    return x
  }
}), n(47120);
var r, s, o, a, l = n(392711),
  u = n.n(l),
  _ = n(683860),
  d = n(442837),
  c = n(570140),
  E = n(344185),
  I = n(144140),
  T = n(314897),
  h = n(592125),
  S = n(306680),
  f = n(944486),
  N = n(823379),
  A = n(709054),
  m = n(882252);
let O = [],
  R = null,
  C = null,
  p = new Set,
  g = _.z.LATEST_ACTIVITY,
  L = 0,
  v = [],
  D = !1,
  M = [],
  P = u().chain(O),
  y = u().chain(O),
  U = new Set,
  b = new Set;

function G(e) {
  var t;
  return null !== (t = S.ZP.lastMessageId(e)) && void 0 !== t ? t : e
}

function w(e) {
  return function(t, n) {
    if ((0, m.yv)(t)) return -1;
    if ((0, m.yv)(n)) return 1;
    if (e === _.z.LATEST_ACTIVITY) return A.default.compare(G(n), G(t));
    else return A.default.compare(n, t)
  }
}

function k() {
  v = [], i = null, C = null, p = new Set, g = _.z.LATEST_ACTIVITY, L = 0, M = [], P = u().chain(O), y = u().chain(O), b.clear(), U.clear()
}

function B() {
  var e;
  let t = f.Z.getChannelId();
  if (null == t || !(null === (e = h.Z.getChannel(t)) || void 0 === e ? void 0 : e.isForumLikeChannel())) return k(), !1;
  V({
    refreshThreadIds: !0
  })
}

function x(e) {
  let t = h.Z.getChannel(e);
  return null == t ? [] : Object.values(E.Z.getThreadsForParent(t.guild_id, t.id)).map(e => {
    let {
      id: t
    } = e;
    return t
  }).sort(w(g))
}

function V(e) {
  var t;
  let n = h.Z.getChannel(C);
  if (null == n) return;
  (null == e ? void 0 : e.refreshThreadIds) && (M = Object.values(E.Z.getThreadsForParent(n.guild_id, n.id)).map(e => {
    let {
      id: t
    } = e;
    return t
  }), L = 0, D = !0), 0 !== U.size && (M = M.filter(e => !U.has(e)), U.clear()), 0 !== b.size && (M = Array.from(new Set([...M, ...b])), b.clear()), ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && (y = u().chain(M).sort(w(_.z.LATEST_ACTIVITY)), P = u().chain(M).sort(w(_.z.CREATION_DATE)));
  let r = (g === _.z.LATEST_ACTIVITY ? y : P).value();
  let s = (v = 0 === p.size ? r : r.filter((t = p, function(e) {
    var n;
    let i = null === (n = h.Z.getChannel(e)) || void 0 === n ? void 0 : n.appliedTags;
    return null != i && 0 !== i.length && i.some(e => t.has(e))
  }))).find(e => (function(e) {
    let t = I.Z.getCount(e);
    return null === t || 0 === t
  })(e));
  i = null == s ? null : s
}
class Z extends(r = d.ZP.Store) {
  initialize() {
    this.waitFor(h.Z, E.Z, f.Z, S.ZP)
  }
  getNewThreadCount() {
    return L
  }
  getCanAckThreads() {
    return D
  }
  getThreadIds(e, t, n) {
    let i = e !== C,
      r = !(0, N.OL)(n, p),
      s = t !== g;
    return C = e, p = n, g = t, i ? V({
      refreshThreadIds: !0
    }) : s ? V({
      sortThreadIds: !0
    }) : r && V(), v
  }
  getCurrentThreadIds() {
    return v
  }
  getAndDeleteMostRecentUserCreatedThreadId() {
    let e = R;
    return R = null, e
  }
  getFirstNoReplyThreadId() {
    return i
  }
}
a = "ForumActivePostStore", (o = "displayName") in(s = Z) ? Object.defineProperty(s, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = a, t.Z = new Z(c.Z, {
  CONNECTION_OPEN: B,
  OVERLAY_INITIALIZE: B,
  GUILD_CREATE: B,
  CHANNEL_SELECT: B,
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    if (null == t.parent_id || t.parent_id !== C) return !1;
    k()
  },
  THREAD_LIST_SYNC: function(e) {
    var t;
    let {
      guildId: n
    } = e;
    if (null == C || n !== (null === (t = h.Z.getChannel(C)) || void 0 === t ? void 0 : t.guild_id)) return !1;
    V({
      refreshThreadIds: !0
    })
  },
  THREAD_CREATE: function(e) {
    let {
      channel: t,
      isNewlyCreated: n
    } = e;
    if (null == t.parent_id || t.parent_id !== C || !n) return !1;
    t.ownerId !== T.default.getId() ? L++ : R = t.id
  },
  THREAD_UPDATE: function(e) {
    let {
      channel: t
    } = e;
    if (null == t.parent_id || t.parent_id !== C) return !1;
    let n = (0, m.yv)(t.id),
      i = b.has(t.id);
    if (n && !i) b.add(t.id), V({
      sortThreadIds: !0
    });
    else {
      if (n || !i) return !1;
      b.delete(t.id), V({
        sortThreadIds: !0
      })
    }
  },
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    if (null == t.parent_id || t.parent_id !== C) return !1;
    U.add(t.id), V({
      sortThreadIds: !0
    })
  },
  RESORT_THREADS: function(e) {
    let {
      channelId: t
    } = e;
    if (null == t || t !== C) return !1;
    V({
      refreshThreadIds: !0
    })
  },
  CHANNEL_ACK: function(e) {
    let {
      channelId: t
    } = e;
    if (null == t || t !== C) return !1;
    D = !1
  }
})