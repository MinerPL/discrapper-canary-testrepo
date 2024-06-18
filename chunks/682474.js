"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(786761),
  _ = n(592125),
  d = n(594174),
  c = n(823379),
  E = n(709054);
let I = {};

function T(e) {
  var t;
  let n = _.Z.getChannel(null == e ? void 0 : e.channel_id);
  if (null == n || !n.isForumPost()) return !1;
  let i = I[n.id];
  return E.default.compare(null == e ? void 0 : e.id, null == i ? void 0 : null === (t = i.message) || void 0 === t ? void 0 : t.id) > -1
}

function h(e, t) {
  let n = null == t ? null : (0, u.e5)(t);
  return I[e] = {
    loaded: !0,
    message: n
  }, !0
}

function S(e) {
  return I[e]
}

function f(e) {
  var t;
  return null === (t = I[e]) || void 0 === t ? void 0 : t.message
}

function N(e) {
  let {
    threads: t,
    mostRecentMessages: n
  } = e;
  t.forEach(e => h(e.id, null)), null == n || n.filter(c.lm).forEach(e => {
    h(e.channel_id, e)
  })
}
class A extends(o = a.ZP.Store) {
  initialize() {
    this.waitFor(_.Z, d.default)
  }
  getMessageState(e) {
    return !(e in I) && (I[e] = {
      loaded: !1,
      message: null
    }), I[e]
  }
}
s = "ForumPostRecentMessageStore", (r = "displayName") in(i = A) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, new A(l.Z, {
  CONNECTION_OPEN: function() {
    I = {}
  },
  MESSAGE_CREATE: function(e) {
    if (e.isPushNotification || !T(e.message)) return !1;
    e.message.channel_id === E.default.castMessageIdAsChannelId(e.message.id) ? h(e.message.channel_id, null) : h(e.message.channel_id, e.message)
  },
  MESSAGE_UPDATE: function(e) {
    if (!T(e.message) || e.message.channel_id === e.message.id) return !1;
    ! function(e, t) {
      let n = function(e) {
          return I[e]
        }(e),
        i = f(e);
      null != n && null != i && (I[e] = {
        ...n,
        message: (0, u.wi)(i, t)
      })
    }(e.message.channel_id, e.message)
  },
  MESSAGE_DELETE: function(e) {
    return function(e, t) {
      let n = f(e);
      return (null == n ? void 0 : n.id) === t && (delete I[e], !0)
    }(e.channelId, e.id)
  },
  LOAD_FORUM_POSTS: function(e) {
    let {
      threads: t
    } = e;
    for (let e in t) h(e, t[e].most_recent_message)
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: N,
  LOAD_THREADS_SUCCESS: N
})