"use strict";
n.d(t, {
  Y: function() {
    return i
  }
}), n(47120), n(653041);
var i, r, s, o = n(31775),
  a = n.n(o),
  l = n(442837),
  u = n(570140),
  _ = n(163268),
  d = n(786761),
  c = n(592125),
  E = n(375954),
  I = n(981631);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = i || (i = {}))[s.LOADED = 0] = "LOADED", s[s.NOT_LOADED = 1] = "NOT_LOADED", s[s.DELETED = 2] = "DELETED";
let h = Object.freeze({
    state: 1
  }),
  S = new Set;
class f {
  handleCacheDisposed(e, t) {
    this._cachedMessageIds.has(e) && (this._cachedMessageIds = new Set(this._cachedMessageIds), this._cachedMessageIds.delete(e))
  }
  set(e, t) {
    this._cachedMessages.set(e, t), !this._cachedMessageIds.has(e) && (this._cachedMessageIds = new Set(this._cachedMessageIds), this._cachedMessageIds.add(e))
  }
  has(e) {
    return this._cachedMessageIds.has(e)
  }
  get(e) {
    return this._cachedMessages.get(e)
  }
  getCachedMessageIds() {
    return this._cachedMessageIds
  }
  constructor() {
    T(this, "_cachedMessages", new(a())({
      max: 100,
      dispose: (e, t) => this.handleCacheDisposed(e, t)
    })), T(this, "_cachedMessageIds", new Set)
  }
}
let N = new class e {
  has(e, t) {
    var n, i;
    return null !== (i = null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.has(t)) && void 0 !== i && i
  }
  get(e, t) {
    var n;
    return null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.get(t)
  }
  set(e, t, n) {
    let i = this._channelCaches.get(e);
    null == i && (i = new f, this._channelCaches.set(e, i)), i.set(t, n)
  }
  updateExistingMessageIfCached(e) {
    let t = this._channelCaches.get(e.channel_id);
    return !!(null != t && t.has(e.id)) && (t.set(e.id, {
      state: 0,
      message: (0, d.e5)(e)
    }), !0)
  }
  deleteChannelCache(e) {
    return this._channelCaches.delete(e)
  }
  retainWhere(e) {
    let t = [];
    for (let [n] of this._channelCaches) !e(n) && t.push(n);
    for (let e of t) this.deleteChannelCache(e);
    return t.length
  }
  getCachedMessageIdsForChannel(e) {
    let t = this._channelCaches.get(e);
    return null == t ? null : t.getCachedMessageIds()
  }
  clear() {
    this._channelCaches.clear()
  }
  constructor() {
    T(this, "_channelCaches", new Map)
  }
};

function A(e) {
  let t = !1;
  if (N.updateExistingMessageIfCached(e) && (t = !0), I.OBS.has(e.type)) {
    let n = e.message_reference;
    if (null == n) return t;
    let i = n.message_id;
    if (null == i) return t;
    if ("referenced_message" in e) {
      let t = e.referenced_message;
      null != t ? (N.set(t.channel_id, t.id, {
        state: 0,
        message: (0, d.e5)(t)
      }), e.type === I.uaV.THREAD_STARTER_MESSAGE && A(t)) : N.set(e.channel_id, i, {
        state: 2
      })
    } else {
      let e = E.Z.getMessage(n.channel_id, i);
      null != e ? N.set(n.channel_id, i, {
        state: 0,
        message: e
      }) : N.set(n.channel_id, i, h)
    }
    t = !0
  }
  return t
}

function m(e, t) {
  let n = !1;
  for (let i of e) n = !1 !== t(i) || n;
  return n
}

function O(e) {
  let {
    messages: t
  } = e;
  return m(t, e => A(e))
}

function R(e) {
  let {
    messages: t
  } = e;
  return m(t, e => m(e, e => A(e)))
}

function C(e) {
  return N.deleteChannelCache(e.channel.id)
}

function p(e, t) {
  if (!N.has(e, t)) return !1;
  N.set(e, t, {
    state: 2
  })
}

function g() {
  N.clear()
}

function L(e) {
  let {
    firstMessages: t
  } = e;
  return null != t && m(t, e => A(e))
}
class v extends(r = l.ZP.Store) {
  initialize() {
    this.waitFor(E.Z, c.Z)
  }
  getMessageByReference(e) {
    let t;
    return null != e && (t = N.get(e.channel_id, e.message_id)), null != t ? t : h
  }
  getMessage(e, t) {
    var n;
    return null !== (n = N.get(e, t)) && void 0 !== n ? n : h
  }
  getReplyIdsForChannel(e) {
    let t;
    return null != e && (t = N.getCachedMessageIdsForChannel(e)), null != t ? t : S
  }
}
T(v, "displayName", "ReferencedMessageStore"), t.Z = new v(u.Z, {
  CACHE_LOADED: function(e) {
    let {
      messages: t
    } = e;
    return m(Object.values(t), e => m(Object.values(e), e => A(e)))
  },
  LOCAL_MESSAGES_LOADED: O,
  LOAD_MESSAGES_SUCCESS: O,
  LOAD_MESSAGES_AROUND_SUCCESS: O,
  SEARCH_FINISH: R,
  MOD_VIEW_SEARCH_FINISH: R,
  LOAD_THREADS_SUCCESS: L,
  LOAD_ARCHIVED_THREADS_SUCCESS: L,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
    let {
      messageId: t,
      channelId: n
    } = e;
    if (!N.has(n, t)) return !1;
    let i = N.get(n, t);
    if (null == i || 0 !== i.state) return !1;
    N.set(n, t, {
      state: 0,
      message: (0, _.Cm)(i.message)
    })
  },
  LOAD_FORUM_POSTS: function(e) {
    let {
      threads: t
    } = e;
    return m(Object.values(t), e => {
      let {
        first_message: t
      } = e;
      return null != t && A(t)
    })
  },
  MESSAGE_CREATE: function(e) {
    let {
      message: t
    } = e;
    return !!E.Z.getMessages(t.channel_id).ready && A(t)
  },
  MESSAGE_UPDATE: function(e) {
    let {
      message: t
    } = e, n = t.id, i = t.channel_id;
    if (!N.has(i, n)) return !1;
    let r = N.get(i, n);
    if (null == r || 0 !== r.state) return !1;
    N.set(i, n, {
      state: 0,
      message: (0, d.wi)(r.message, t)
    })
  },
  MESSAGE_DELETE: function(e) {
    let {
      id: t,
      channelId: n
    } = e;
    return p(n, t)
  },
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t,
      channelId: n
    } = e;
    return m(t, e => p(n, e))
  },
  CREATE_PENDING_REPLY: function(e) {
    let {
      message: t
    } = e;
    N.set(t.channel_id, t.id, {
      state: 0,
      message: t
    })
  },
  CHANNEL_DELETE: C,
  THREAD_DELETE: C,
  GUILD_DELETE: function() {
    if (0 === N.retainWhere(e => null != c.Z.getChannel(e))) return !1
  },
  CONNECTION_OPEN: g,
  LOGOUT: g
})