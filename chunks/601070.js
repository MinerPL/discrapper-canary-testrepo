"use strict";
n(47120), n(653041);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  d = n(131704),
  c = n(592125),
  E = n(430824),
  I = n(306680),
  T = n(944486),
  h = n(709054),
  S = n(344185),
  f = n(569471),
  N = n(819168),
  A = n(176505);
let m = {},
  O = {},
  R = {},
  C = {},
  p = {},
  g = {},
  L = null,
  v = {};

function D() {
  for (let e in m = {}, p = {}, O = {}, R = {}, C = {}, L = T.Z.getChannelId(), v) clearTimeout(v[e]);
  v = {}, S.Z.forEachGuild(e => {
    P(e)
  }), y()
}

function M(e) {
  for (let t in delete m[e], delete p[e], delete O[e], delete R[e], delete C[e], P(e), R[e]) b(e, t)
}

function P(e) {
  let t = S.Z.getThreadsForGuild(e);
  for (let e in t)
    for (let n in t[e]) {
      F(n);
      let e = c.Z.getChannel(n);
      if (null == e) continue;
      let t = f.Z.joinTimestamp(n);
      if (null != t) {
        let n = {
            channel: e,
            joinTimestamp: t.getTime()
          },
          {
            isUnread: i,
            isRelevant: r,
            isTimedRelevant: s
          } = Z(e);
        Y(m, e, n, !1), Y(p, e, r ? n : null, !1), Y(O, e, i ? n : null, !1), s && H(e, !0)
      } else {
        Y(R, e, e, !1);
        let t = I.ZP.isForumPostUnread(e.id);
        Y(C, e, t ? e : null, !1)
      }
    }
}

function y() {
  for (let e in g = {}, R)
    for (let t in R[e]) b(e, t)
}

function U(e) {
  let t = c.Z.getBasicChannel(e);
  null != t && d.uC.has(t.type) && b(t.guild_id, t.id)
}

function b(e, t) {
  let n = c.Z.getChannel(t);
  if (null == n || !n.isForumLikeChannel()) return;
  if (null == g[e] && (g[e] = {}), g[e][t] = 0, null == R[e] || null == R[e][t]) return;
  let i = E.Z.getGuild(e);
  if (null == i) return;
  let r = I.ZP.getTrackedAckMessageId(t);
  if (null == r) {
    let e = Date.now();
    null != i.joinedAt && (i.joinedAt instanceof Date ? e = i.joinedAt.getTime() : "string" == typeof i.joinedAt && (e = new Date(i.joinedAt).getTime())), r = h.default.fromTimestamp(e)
  }
  for (let n in R[e][t]) t === L ? I.ZP.isNewForumThread(n, t, i) && g[e][t]++ : h.default.compare(n, r) > 0 && !I.ZP.hasOpenedThread(n) && g[e][t]++
}

function G(e, t, n) {
  if (null == t) return !1;
  let i = c.Z.getChannel(n),
    r = f.Z.joinTimestamp(n);
  if (null != i && S.Z.isActive(e, t, n)) {
    if (null != r) {
      let e = {
          channel: i,
          joinTimestamp: r.getTime()
        },
        {
          isUnread: t,
          isRelevant: n,
          isTimedRelevant: s
        } = Z(i);
      Y(m, i, e, !0), Y(p, i, n ? e : null, !0), Y(O, i, t ? e : null, !0), Y(R, i, null, !0), Y(C, i, null, !0), H(i, s)
    } else {
      let e = I.ZP.isForumPostUnread(i.id);
      Y(m, i, null, !0), Y(O, i, null, !0), Y(p, i, null, !0), Y(R, i, i, !0), Y(C, i, e ? i : null, !0), F(i.id)
    }
    b(e, t)
  } else j(m, e, t, n), j(p, e, t, n), j(O, e, t, n), j(R, e, t, n), j(C, e, t, n), F(n), b(e, t)
}

function w(e) {
  return G(e.channel.guild_id, e.channel.parent_id, e.channel.id)
}

function k(e) {
  let t = c.Z.getChannel(e.id);
  return !!(null != t && S.Z.isActive(e.guildId, t.parent_id, e.id)) && G(t.guild_id, t.parent_id, t.id)
}

function B(e) {
  let t = c.Z.getChannel(e.channelId);
  if (null == t) x();
  else {
    let {
      guild_id: e,
      parent_id: i
    } = t;
    if (!d.Ec.has(t.type)) {
      var n;
      return !!(Number(null === (n = g[e]) || void 0 === n ? void 0 : n[t.id]) > 0) && (b(e, t.id), !0)
    }
    if (null == i) return !1;
    if (W(m, t)) {
      let {
        isUnread: n,
        isRelevant: r,
        isTimedRelevant: s
      } = Z(t);
      H(t, s);
      let o = W(O, t),
        a = W(p, t);
      if (n === o && r === a) return !1;
      let l = m[e][i][t.id],
        u = n ? l : null,
        _ = r ? l : null;
      Y(O, t, u, !0), Y(p, t, _, !0), b(e, i)
    } else {
      let e = W(C, t),
        n = I.ZP.isForumPostUnread(t.id);
      if (n === e) return !1;
      Y(C, t, n ? t : null, !0)
    }
  }
}

function x() {
  for (let e in O = {}, p = {}, m)
    for (let t in m[e])
      for (let n in m[e][t]) {
        let i = m[e][t][n],
          {
            isUnread: r,
            isRelevant: s,
            isTimedRelevant: o
          } = Z(i.channel);
        r && Y(O, i.channel, i, !1), s && Y(p, i.channel, i, !1), H(i.channel, o)
      }
  for (let e in C = {}, R)
    for (let t in R[e])
      for (let n in R[e][t]) {
        let i = R[e][t][n];
        I.ZP.isForumPostUnread(n) && Y(C, i, i, !1)
      }
  y()
}

function V() {
  let e = L;
  if ((L = T.Z.getChannelId()) === e) return !1;
  U(e), U(L)
}

function Z(e) {
  let t = I.ZP.getMentionCount(e.id) > 0,
    n = I.ZP.hasUnread(e.id) && !f.Z.isMuted(e.id),
    i = e.hasFlag(A.zZ.PINNED),
    r = e.isActiveThread(),
    s = r && (0, N.Z)(e) > Date.now();
  return {
    isUnread: (r || i) && n || t,
    isRelevant: s || i || n || t,
    isTimedRelevant: s
  }
}

function H(e, t) {
  F(e.id), t && function(e) {
    v[e.id] = setTimeout(() => {
      let t = c.Z.getChannel(e.id);
      null != t && _.Z.dispatch({
        type: "THREAD_UPDATE",
        channel: t
      })
    }, (0, N.Z)(e) - Date.now() + 1)
  }(e)
}

function F(e) {
  e in v && (clearTimeout(v[e]), delete v[e])
}

function Y(e, t, n, i) {
  let {
    guild_id: r,
    parent_id: s,
    id: o
  } = t;
  null != r && null != s && null != o && (!(r in e) && (e[r] = {}), !(s in e[r]) && (e[r][s] = {}), i && (e[r] = {
    ...e[r],
    [s]: {
      ...e[r][s]
    }
  }), null === n ? (delete e[r][s][o], l().isEmpty(e[r][s]) && delete e[r][s]) : e[r][s][o] = n)
}

function j(e, t, n, i) {
  if (null != t && null != n && null != i) K(e, t, n, i) && (e[t] = {
    ...e[t],
    [n]: {
      ...e[t][n]
    }
  }, delete e[t][n][i], l().isEmpty(e[t][n]) && delete e[t][n])
}

function W(e, t) {
  return K(e, t.guild_id, t.parent_id, t.id)
}

function K(e, t, n, i) {
  return t in e && n in e[t] && i in e[t][n]
}
let z = {},
  q = {},
  X = {},
  Q = {},
  J = {};
class $ extends(i = u.ZP.Store) {
  initialize() {
    this.waitFor(S.Z, c.Z, f.Z, I.ZP), this.syncWith([T.Z], V)
  }
  hasActiveJoinedUnreadThreads(e, t) {
    return e in O && t in O[e]
  }
  getActiveUnjoinedThreadsForParent(e, t) {
    var n;
    return e in R && null !== (n = R[e][t]) && void 0 !== n ? n : Q
  }
  getActiveJoinedThreadsForParent(e, t) {
    var n;
    return e in m && null !== (n = m[e][t]) && void 0 !== n ? n : X
  }
  getActiveJoinedThreadsForGuild(e) {
    var t;
    return null !== (t = m[e]) && void 0 !== t ? t : z
  }
  getActiveJoinedUnreadThreadsForGuild(e) {
    var t;
    return null !== (t = O[e]) && void 0 !== t ? t : z
  }
  getActiveJoinedUnreadThreadsForParent(e, t) {
    var n;
    return null !== (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : X
  }
  getActiveJoinedRelevantThreadsForGuild(e) {
    var t;
    return null !== (t = p[e]) && void 0 !== t ? t : z
  }
  getActiveJoinedRelevantThreadsForParent(e, t) {
    var n;
    return null !== (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) && void 0 !== n ? n : X
  }
  getActiveUnjoinedThreadsForGuild(e) {
    var t;
    return null !== (t = R[e]) && void 0 !== t ? t : q
  }
  getActiveUnjoinedUnreadThreadsForGuild(e) {
    var t;
    return null !== (t = C[e]) && void 0 !== t ? t : z
  }
  getActiveUnjoinedUnreadThreadsForParent(e, t) {
    var n;
    return null !== (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : X
  }
  getNewThreadCountsForGuild(e) {
    var t;
    return null !== (t = g[e]) && void 0 !== t ? t : J
  }
  computeAllActiveJoinedThreads(e) {
    let t = [];
    for (let n in m)
      if (n === e || null == e)
        for (let e in m[n])
          for (let i in m[n][e]) t.push(m[n][e][i].channel);
    return t
  }
  getNewThreadCount(e, t) {
    var n, i;
    return null !== (i = null === (n = g[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== i ? i : 0
  }
  getActiveThreadCount(e, t) {
    var n, i, r, s;
    let o = l().size(null !== (r = null === (n = m[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : {});
    return o + l().size(null !== (s = null === (i = R[e]) || void 0 === i ? void 0 : i[t]) && void 0 !== s ? s : {})
  }
}
o = "ActiveJoinedThreadsStore", (s = "displayName") in(r = $) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new $(_.Z, {
  CONNECTION_OPEN: D,
  OVERLAY_INITIALIZE: D,
  THREAD_LIST_SYNC: function(e) {
    let {
      guildId: t
    } = e;
    return M(t)
  },
  LOAD_THREADS_SUCCESS: D,
  LOAD_ARCHIVED_THREADS_SUCCESS: D,
  SEARCH_FINISH: D,
  MOD_VIEW_SEARCH_FINISH: D,
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    return M(t.id)
  },
  GUILD_DELETE: D,
  CURRENT_USER_UPDATE: D,
  THREAD_CREATE: w,
  THREAD_UPDATE: w,
  THREAD_DELETE: w,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    for (let e of t)
      if (e.isNSFW() !== function(e, t) {
          if (null == t) return !1;
          let n = m[e],
            i = null == n ? null : n[t];
          if (null != i) {
            for (let e in i)
              if (i[e].channel.isNSFW()) return !0
          }
          let r = R[e],
            s = null == r ? null : r[t];
          if (null != s) {
            for (let e in s)
              if (s[e].isNSFW()) return !0
          }
          return !1
        }(e.guild_id, e.parent_id)) {
        D();
        return
      } return !1
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e, n = !1;
    return null != t.guild_id && null != t.parent_id && (t.guild_id in m && t.parent_id in m[t.guild_id] && (delete m[t.guild_id][t.parent_id], n = !0), t.guild_id in O && t.parent_id in O[t.guild_id] && (delete O[t.guild_id][t.parent_id], n = !0), t.guild_id in p && t.parent_id in p[t.guild_id] && (h.default.keys(p[t.guild_id][t.parent_id]).forEach(F), delete p[t.guild_id][t.parent_id], n = !0), t.guild_id in R && t.parent_id in R[t.guild_id] && (delete R[t.guild_id][t.parent_id], n = !0), t.guild_id in C && t.parent_id in C[t.guild_id] && (delete C[t.guild_id][t.parent_id], n = !0), n && b(t.guild_id, t.parent_id)), n
  },
  THREAD_MEMBER_UPDATE: k,
  THREAD_MEMBERS_UPDATE: k,
  LOAD_MESSAGES_SUCCESS: B,
  MESSAGE_CREATE: B,
  MESSAGE_DELETE: B,
  MESSAGE_DELETE_BULK: B,
  MESSAGE_ACK: B,
  CHANNEL_ACK: B,
  CHANNEL_LOCAL_ACK: B,
  CHANNEL_SELECT: function(e) {
    B(e), V()
  },
  PASSIVE_UPDATE_V2: function(e) {
    if (e.channels.length > 0) return M(e.guildId)
  },
  WINDOW_FOCUS: x,
  UPDATE_CHANNEL_DIMENSIONS: x,
  DRAWER_OPEN: x,
  DRAWER_CLOSE: x,
  BULK_ACK: x
})