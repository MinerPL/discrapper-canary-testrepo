"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Q
  }
}), n("222007"), n("424973");
var i = n("917351"),
  s = n.n(i),
  r = n("249654"),
  a = n("446674"),
  o = n("913144"),
  l = n("233069"),
  u = n("42203"),
  d = n("305961"),
  c = n("660478"),
  f = n("18494"),
  _ = n("689275"),
  h = n("755624"),
  g = n("984674"),
  m = n("724210");
let E = {},
  p = {},
  v = {},
  S = {},
  T = {},
  I = {},
  C = null,
  A = {};

function y() {
  for (let e in E = {}, T = {}, p = {}, v = {}, S = {}, C = f.default.getChannelId(), A) clearTimeout(A[e]);
  A = {}, _.default.forEachGuild(e => {
    R(e)
  }), O()
}

function N(e) {
  for (let t in delete E[e], delete T[e], delete p[e], delete v[e], delete S[e], R(e), v[e]) P(e, t)
}

function R(e) {
  let t = _.default.getThreadsForGuild(e);
  for (let e in t)
    for (let n in t[e]) {
      F(n);
      let e = u.default.getChannel(n);
      if (null == e) continue;
      let t = h.default.joinTimestamp(n);
      if (null != t) {
        let n = {
            channel: e,
            joinTimestamp: t.getTime()
          },
          {
            isUnread: i,
            isRelevant: s,
            isTimedRelevant: r
          } = V(e);
        x(E, e, n, !1), x(T, e, s ? n : null, !1), x(p, e, i ? n : null, !1), r && G(e, !0)
      } else {
        x(v, e, e, !1);
        let t = c.default.isForumPostUnread(e.id);
        x(S, e, t ? e : null, !1)
      }
    }
}

function O() {
  for (let e in I = {}, v)
    for (let t in v[e]) P(e, t)
}

function D(e) {
  let t = u.default.getBasicChannel(e);
  null != t && l.THREADED_CHANNEL_TYPES.has(t.type) && P(t.guild_id, t.id)
}

function P(e, t) {
  let n = u.default.getChannel(t);
  if (null == n || !n.isForumLikeChannel()) return;
  if (null == I[e] && (I[e] = {}), I[e][t] = 0, null == v[e] || null == v[e][t]) return;
  let i = d.default.getGuild(e);
  if (null == i) return;
  let s = c.default.getTrackedAckMessageId(t);
  if (null == s) {
    let e = Date.now();
    null != i.joinedAt && (i.joinedAt instanceof Date ? e = i.joinedAt.getTime() : "string" == typeof i.joinedAt && (e = new Date(i.joinedAt).getTime())), s = r.default.fromTimestamp(e)
  }
  for (let n in v[e][t]) t === C ? c.default.isNewForumThread(n, t, i) && I[e][t]++ : r.default.compare(n, s) > 0 && !c.default.hasOpenedThread(n) && I[e][t]++
}

function b(e, t, n) {
  if (null == t) return !1;
  let i = u.default.getChannel(n),
    s = h.default.joinTimestamp(n);
  if (null != i && _.default.isActive(e, t, n)) {
    if (null != s) {
      let e = {
          channel: i,
          joinTimestamp: s.getTime()
        },
        {
          isUnread: t,
          isRelevant: n,
          isTimedRelevant: r
        } = V(i);
      x(E, i, e, !0), x(T, i, n ? e : null, !0), x(p, i, t ? e : null, !0), x(v, i, null, !0), x(S, i, null, !0), G(i, r)
    } else {
      let e = c.default.isForumPostUnread(i.id);
      x(E, i, null, !0), x(p, i, null, !0), x(T, i, null, !0), x(v, i, i, !0), x(S, i, e ? i : null, !0), F(i.id)
    }
    P(e, t)
  } else B(E, e, t, n), B(T, e, t, n), B(p, e, t, n), B(v, e, t, n), B(S, e, t, n), F(n), P(e, t)
}

function L(e) {
  return b(e.channel.guild_id, e.channel.parent_id, e.channel.id)
}

function M(e) {
  let t = u.default.getChannel(e.id);
  return !!(null != t && _.default.isActive(e.guildId, t.parent_id, e.id)) && b(t.guild_id, t.parent_id, t.id)
}

function U(e) {
  let t = u.default.getChannel(e.channelId);
  if (null == t) k();
  else {
    let {
      guild_id: e,
      parent_id: i
    } = t;
    if (!l.THREAD_CHANNEL_TYPES.has(t.type)) {
      var n;
      return !!(Number(null === (n = I[e]) || void 0 === n ? void 0 : n[t.id]) > 0) && (P(e, t.id), !0)
    }
    if (null == i) return !1;
    if (H(E, t)) {
      let {
        isUnread: n,
        isRelevant: s,
        isTimedRelevant: r
      } = V(t);
      G(t, r);
      let a = H(p, t),
        o = H(T, t);
      if (n === a && s === o) return !1;
      let l = E[e][i][t.id],
        u = n ? l : null,
        d = s ? l : null;
      x(p, t, u, !0), x(T, t, d, !0), P(e, i)
    } else {
      let e = H(S, t),
        n = c.default.isForumPostUnread(t.id);
      if (n === e) return !1;
      x(S, t, n ? t : null, !0)
    }
  }
}

function k() {
  for (let e in p = {}, T = {}, E)
    for (let t in E[e])
      for (let n in E[e][t]) {
        let i = E[e][t][n],
          {
            isUnread: s,
            isRelevant: r,
            isTimedRelevant: a
          } = V(i.channel);
        s && x(p, i.channel, i, !1), r && x(T, i.channel, i, !1), G(i.channel, a)
      }
  for (let e in S = {}, v)
    for (let t in v[e])
      for (let n in v[e][t]) {
        let i = v[e][t][n],
          s = c.default.isForumPostUnread(n);
        s && x(S, i, i, !1)
      }
  O()
}

function w() {
  let e = C;
  if ((C = f.default.getChannelId()) === e) return !1;
  D(e), D(C)
}

function V(e) {
  let t = c.default.getMentionCount(e.id) > 0,
    n = c.default.hasUnread(e.id) && (!h.default.isMuted(e.id) || t),
    i = e.hasFlag(m.ChannelFlags.PINNED),
    s = e.isActiveThread(),
    r = s && (0, g.default)(e) > Date.now();
  return {
    isUnread: (s || i) && n,
    isRelevant: r || i || n,
    isTimedRelevant: r
  }
}

function G(e, t) {
  F(e.id), t && function(e) {
    A[e.id] = setTimeout(() => {
      let t = u.default.getChannel(e.id);
      null != t && o.default.dispatch({
        type: "THREAD_UPDATE",
        channel: t
      })
    }, (0, g.default)(e) - Date.now() + 1)
  }(e)
}

function F(e) {
  e in A && (clearTimeout(A[e]), delete A[e])
}

function x(e, t, n, i) {
  let {
    guild_id: r,
    parent_id: a,
    id: o
  } = t;
  null != r && null != a && null != o && (!(r in e) && (e[r] = {}), !(a in e[r]) && (e[r][a] = {}), i && (e[r] = {
    ...e[r],
    [a]: {
      ...e[r][a]
    }
  }), null === n ? (delete e[r][a][o], s.isEmpty(e[r][a]) && delete e[r][a]) : e[r][a][o] = n)
}

function B(e, t, n, i) {
  if (null != t && null != n && null != i) Y(e, t, n, i) && (e[t] = {
    ...e[t],
    [n]: {
      ...e[t][n]
    }
  }, delete e[t][n][i], s.isEmpty(e[t][n]) && delete e[t][n])
}

function H(e, t) {
  return Y(e, t.guild_id, t.parent_id, t.id)
}

function Y(e, t, n, i) {
  return t in e && n in e[t] && i in e[t][n]
}
let j = {},
  W = {},
  K = {},
  z = {},
  q = {};
class X extends a.default.Store {
  initialize() {
    this.waitFor(_.default, u.default, h.default, c.default), this.syncWith([f.default], w)
  }
  hasActiveJoinedUnreadThreads(e, t) {
    return e in p && t in p[e]
  }
  getActiveUnjoinedThreadsForParent(e, t) {
    var n;
    return e in v && null !== (n = v[e][t]) && void 0 !== n ? n : z
  }
  getActiveJoinedThreadsForParent(e, t) {
    var n;
    return e in E && null !== (n = E[e][t]) && void 0 !== n ? n : K
  }
  getActiveJoinedThreadsForGuild(e) {
    var t;
    return null !== (t = E[e]) && void 0 !== t ? t : j
  }
  getActiveJoinedUnreadThreadsForGuild(e) {
    var t;
    return null !== (t = p[e]) && void 0 !== t ? t : j
  }
  getActiveJoinedUnreadThreadsForParent(e, t) {
    var n;
    return null !== (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : K
  }
  getActiveJoinedRelevantThreadsForGuild(e) {
    var t;
    return null !== (t = T[e]) && void 0 !== t ? t : j
  }
  getActiveJoinedRelevantThreadsForParent(e, t) {
    var n;
    return null !== (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) && void 0 !== n ? n : K
  }
  getActiveUnjoinedThreadsForGuild(e) {
    var t;
    return null !== (t = v[e]) && void 0 !== t ? t : W
  }
  getActiveUnjoinedUnreadThreadsForGuild(e) {
    var t;
    return null !== (t = S[e]) && void 0 !== t ? t : j
  }
  getActiveUnjoinedUnreadThreadsForParent(e, t) {
    var n;
    return null !== (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : K
  }
  getNewThreadCountsForGuild(e) {
    var t;
    return null !== (t = I[e]) && void 0 !== t ? t : q
  }
  computeAllActiveJoinedThreads(e) {
    let t = [];
    for (let n in E)
      if (n === e || null == e)
        for (let e in E[n])
          for (let i in E[n][e]) t.push(E[n][e][i].channel);
    return t
  }
  getNewThreadCount(e, t) {
    var n, i;
    return null !== (i = null === (n = I[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== i ? i : 0
  }
  getActiveThreadCount(e, t) {
    var n, i, r, a;
    let o = s.size(null !== (r = null === (n = E[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : {}),
      l = s.size(null !== (a = null === (i = v[e]) || void 0 === i ? void 0 : i[t]) && void 0 !== a ? a : {});
    return o + l
  }
}
X.displayName = "ActiveJoinedThreadsStore";
var Q = new X(o.default, {
  CONNECTION_OPEN: y,
  OVERLAY_INITIALIZE: y,
  THREAD_LIST_SYNC: function(e) {
    let {
      guildId: t
    } = e;
    return N(t)
  },
  LOAD_THREADS_SUCCESS: y,
  LOAD_ARCHIVED_THREADS_SUCCESS: y,
  SEARCH_FINISH: y,
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    return N(t.id)
  },
  GUILD_DELETE: y,
  CURRENT_USER_UPDATE: y,
  THREAD_CREATE: L,
  THREAD_UPDATE: L,
  THREAD_DELETE: L,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    for (let e of t)
      if (e.isNSFW() !== function(e, t) {
          if (null == t) return !1;
          let n = E[e],
            i = null == n ? null : n[t];
          if (null != i) {
            for (let e in i)
              if (i[e].channel.isNSFW()) return !0
          }
          let s = v[e],
            r = null == s ? null : s[t];
          if (null != r) {
            for (let e in r)
              if (r[e].isNSFW()) return !0
          }
          return !1
        }(e.guild_id, e.parent_id)) {
        y();
        return
      } return !1
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e, n = !1;
    return null != t.guild_id && null != t.parent_id && (t.guild_id in E && t.parent_id in E[t.guild_id] && (delete E[t.guild_id][t.parent_id], n = !0), t.guild_id in p && t.parent_id in p[t.guild_id] && (delete p[t.guild_id][t.parent_id], n = !0), t.guild_id in T && t.parent_id in T[t.guild_id] && (Object.keys(T[t.guild_id][t.parent_id]).forEach(F), delete T[t.guild_id][t.parent_id], n = !0), t.guild_id in v && t.parent_id in v[t.guild_id] && (delete v[t.guild_id][t.parent_id], n = !0), t.guild_id in S && t.parent_id in S[t.guild_id] && (delete S[t.guild_id][t.parent_id], n = !0), n && P(t.guild_id, t.parent_id)), n
  },
  THREAD_MEMBER_UPDATE: M,
  THREAD_MEMBERS_UPDATE: M,
  LOAD_MESSAGES_SUCCESS: U,
  MESSAGE_CREATE: U,
  MESSAGE_DELETE: U,
  MESSAGE_DELETE_BULK: U,
  MESSAGE_ACK: U,
  CHANNEL_ACK: U,
  CHANNEL_LOCAL_ACK: U,
  CHANNEL_SELECT: function(e) {
    U(e), w()
  },
  PASSIVE_UPDATE_V1: function(e) {
    null != e.channels && k()
  },
  WINDOW_FOCUS: k,
  UPDATE_CHANNEL_DIMENSIONS: k,
  DRAWER_OPEN: k,
  DRAWER_CLOSE: k,
  BULK_ACK: k
})