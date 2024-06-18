"use strict";
n(47120);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  d = n(786761),
  c = n(131704),
  E = n(23750),
  I = n(598077),
  T = n(592125),
  h = n(375954),
  S = n(709054),
  f = n(124368),
  N = n(981631);
let A = new Set,
  m = {},
  O = {};

function R(e, t) {
  c.AW.has(e.type) && C(function(e) {
    if (!(e.id in m)) {
      var t;
      m[e.id] = {
        guildId: e.guild_id,
        parentId: e.parent_id,
        count: null !== (t = e.messageCount) && void 0 !== t ? t : 0,
        mostRecentRawMessage: null,
        mostRecentMessage: null
      }
    }
    return m[e.id]
  }(e), t)
}

function C(e, t) {
  var n;
  let i = (null !== (n = O[e.parentId]) && void 0 !== n ? n : 0) + 1;
  O[e.parentId] = i, t(e)
}

function p(e) {
  var t;
  null === (t = e.threads) || void 0 === t || t.forEach(g)
}

function g(e) {
  R(e, t => {
    var n;
    null != e.messageCount && (t.count = e.messageCount);
    let i = null !== (n = t.mostRecentRawMessage) && void 0 !== n ? n : t.mostRecentMessage;
    null != e.lastMessageId && (null == i ? void 0 : i.id) !== e.lastMessageId && (t.mostRecentRawMessage = null, t.mostRecentMessage = null)
  })
}

function L(e) {
  if (null != e && !(e.id in m)) {
    let t = T.Z.getChannel(e.id);
    if (null != t) return g(t), !0
  }
  return !1
}

function v(e) {
  let {
    channel: t
  } = e;
  g(t)
}

function D(e) {
  let {
    threads: t
  } = e;
  t.forEach(L)
}

function M(e) {
  let {
    messages: t,
    threads: n
  } = e;
  for (let e of t)
    for (let t of e) L(t.thread);
  n.forEach(L)
}
class P extends(i = u.ZP.Store) {
  initialize() {
    this.waitFor(T.Z, h.Z)
  }
  getCount(e) {
    var t, n;
    return null !== (n = null === (t = m[e]) || void 0 === t ? void 0 : t.count) && void 0 !== n ? n : null
  }
  getMostRecentMessage(e) {
    var t, n;
    let i = m[e];
    return null == i ? null : (null == i.mostRecentMessage && null != i.mostRecentRawMessage && (i.mostRecentMessage = null !== (t = h.Z.getMessage(e, i.mostRecentRawMessage.id)) && void 0 !== t ? t : (0, d.e5)(i.mostRecentRawMessage), i.mostRecentRawMessage = null), null !== (n = i.mostRecentMessage) && void 0 !== n ? n : null)
  }
  getChannelThreadsVersion(e) {
    return O[e]
  }
  getInitialOverlayState() {
    return m
  }
}
o = "ThreadMessageStore", (s = "displayName") in(r = P) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new P(_.Z, {
  CONNECTION_OPEN: function(e) {
    O = {}, A.clear(), e.guilds.forEach(p)
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      threadMessages: t
    } = e;
    for (let e in m = {
        ...t
      }) {
      let n = t[e].mostRecentMessage;
      null != n && (t[e].mostRecentMessage = new E.ZP({
        ...n,
        author: new I.Z(n.author)
      }))
    }
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    p(t)
  },
  GUILD_DELETE: function(e) {
    var t;
    let {
      guild: n
    } = e;
    t = n.id, m = l().omitBy(m, e => {
      let n = e.guildId === t;
      return n && delete O[e.parentId], n
    })
  },
  THREAD_CREATE: v,
  THREAD_UPDATE: v,
  THREAD_LIST_SYNC: function(e) {
    let {
      threads: t,
      mostRecentMessages: n
    } = e;
    t.forEach(g), null == n || n.forEach(e => {
      let t = T.Z.getChannel(e.channel_id);
      null != t && e.type !== N.uaV.THREAD_STARTER_MESSAGE && R(t, t => {
        t.mostRecentRawMessage = e, t.mostRecentMessage = null
      })
    })
  },
  LOAD_THREADS_SUCCESS: D,
  LOAD_ARCHIVED_THREADS_SUCCESS: D,
  SEARCH_FINISH: M,
  MOD_VIEW_SEARCH_FINISH: M,
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    delete m[t.id]
  },
  CHANNEL_DELETE: function(e) {
    var t;
    let {
      channel: n
    } = e;
    t = n.id, m = l().omitBy(m, e => e.parentId === t), delete O[t]
  },
  MESSAGE_CREATE: function(e) {
    let {
      message: t,
      optimistic: n,
      isPushNotification: i,
      sendMessageOptions: r
    } = e;
    if (n || i || null != r) return !1;
    let s = T.Z.getChannel(t.channel_id);
    if (null == s || !c.Ec.has(s.type) || ! function(e, t) {
        return !(t.type === N.uaV.THREAD_STARTER_MESSAGE || e.isForumPost() && t.id === S.default.castChannelIdAsMessageId(e.id)) && !0
      }(s, t)) return !1;
    R(s, e => {
      e.count = Math.min(e.count + 1, f.M3), e.mostRecentRawMessage = t, e.mostRecentMessage = null
    })
  },
  MESSAGE_UPDATE: function(e) {
    var t;
    let {
      message: n
    } = e, i = m[n.channel_id], r = null !== (t = null == i ? void 0 : i.mostRecentRawMessage) && void 0 !== t ? t : null == i ? void 0 : i.mostRecentMessage;
    if (null == i || null == r || r.id !== n.id) return !1;
    C(i, e => {
      null != e.mostRecentMessage && (e.mostRecentMessage = (0, d.wi)(e.mostRecentMessage, n)), null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, d.gx)(e.mostRecentRawMessage, n))
    })
  },
  MESSAGE_DELETE: function(e) {
    let {
      id: t,
      channelId: n
    } = e, i = m[n];
    if (null == i) return !1;
    let r = S.default.castChannelIdAsMessageId(n) !== t,
      s = !A.has(t);
    C(i, e => {
      var n;
      let i = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
      null != i && i.id === t && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count = r && s ? Math.max(e.count - 1, 0) : e.count, A.add(t)
    })
  },
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t,
      channelId: n
    } = e, i = m[n];
    if (null == i) return !1;
    let r = t.filter(e => {
      let t = S.default.castChannelIdAsMessageId(n) !== e,
        i = !A.has(e);
      return t && i
    }).length;
    r > 0 && C(i, e => {
      var n;
      let i = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
      null != i && t.includes(i.id) && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count -= r, t.forEach(e => A.add(e))
    })
  },
  LOAD_MESSAGES_SUCCESS: function(e) {
    let t = !1;
    for (let n of e.messages) t = L(n.thread) || t;
    if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
    let n = T.Z.getChannel(e.channelId);
    if (null == n || !c.Ec.has(n.type)) return t;
    R(n, t => {
      if (0 === e.messages.length) t.mostRecentRawMessage = null, t.mostRecentMessage = null, t.count = 0;
      else {
        var n;
        let i = null !== (n = e.messages[0]) && void 0 !== n ? n : null;
        t.count = e.messages.length >= f.M3 ? f.M3 : t.count, (null == i ? void 0 : i.type) !== N.uaV.THREAD_STARTER_MESSAGE && (t.mostRecentRawMessage = i, t.mostRecentMessage = null)
      }
    })
  }
})