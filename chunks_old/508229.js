"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
}), s("843762");
var n = s("917351"),
  a = s.n(n),
  l = s("446674"),
  i = s("913144"),
  d = s("447435"),
  r = s("692038"),
  u = s("915639"),
  o = s("42203"),
  c = s("26989"),
  f = s("305961"),
  E = s("377253"),
  g = s("27618"),
  M = s("697218");
let _ = {};

function h(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
    s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    a = o.default.getChannel(e),
    l = null != a ? a.getGuildId() : null;
  return {
    id: e,
    messages: t.map(e => (0, r.createMessageRecord)(e)),
    guildId: l,
    loaded: s,
    loading: n
  }
}

function m(e) {
  let {
    channel: t
  } = e;
  delete _[t.id]
}

function N() {
  a.forEach(_, e => {
    e.messages = e.messages.map(e => e.set("blocked", g.default.isBlocked(e.author.id)))
  })
}
class S extends l.default.Store {
  initialize() {
    this.waitFor(o.default, f.default, c.default, E.default, M.default, u.default)
  }
  getPinnedMessages(e) {
    var t;
    return null !== (t = _[e]) && void 0 !== t ? t : void 0
  }
  loaded(e) {
    return null != _[e] && _[e].loaded
  }
}
S.displayName = "ChannelPinsStore";
var A = new S(i.default, {
  CONNECTION_OPEN: function() {
    _ = {}
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    _ = a(_).filter(e => e.guildId !== t.id).keyBy("id").value()
  },
  MESSAGE_UPDATE: function(e) {
    let t = e.message.id,
      s = e.message.channel_id;
    if (null == s) return !1;
    let n = _[s];
    if (null == n && !e.message.pinned) return !1;
    if (null == e.message.author) {
      if (null != n) {
        let l = a.findIndex(n.messages, e => e.id === t);
        if (l >= 0) {
          let t = n.messages[l],
            a = (0, r.updateMessageRecord)(t, e.message);
          if (a !== t) {
            let e = n.messages.slice();
            e[l] = a, _[s].messages = e
          }
        }
      }
      return
    }
    if (e.message.pinned) {
      if (null == n) {
        n = h(s, [e.message], !1), _[s] = n;
        return
      }
      n.messages = n.messages.slice();
      let l = a.findIndex(n.messages, e => e.id === t); - 1 === l ? n.messages.unshift((0, r.createMessageRecord)(e.message)) : n.messages[l] = (0, r.updateMessageRecord)(n.messages[l], e.message), _[s] = n
    } else {
      if (null == n) return;
      let e = a.findIndex(n.messages, e => e.id === t);
      if (-1 === e) return;
      n.messages = n.messages.slice(), n.messages.splice(e, 1), _[s] = n
    }
  },
  MESSAGE_DELETE: function(e) {
    let {
      id: t,
      channelId: s
    } = e, n = _[s];
    if (null == n) return !1;
    let l = a.remove(n.messages, e => e.id === t);
    if (0 === l.length) return !1;
    n.messages = n.messages.slice(), _[s] = n
  },
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t,
      channelId: s
    } = e, n = _[s];
    null != n && (n.messages = n.messages.filter(e => -1 === t.indexOf(e.id)))
  },
  LOAD_PINNED_MESSAGES: function(e) {
    let {
      channelId: t
    } = e;
    _[t] = h(t, [], !1, !0)
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
    let {
      channelId: t,
      messages: s
    } = e;
    _[t] = h(t, s, !0)
  },
  LOAD_PINNED_MESSAGES_FAILURE: function(e) {
    let {
      channelId: t
    } = e;
    delete _[t]
  },
  CHANNEL_DELETE: m,
  THREAD_DELETE: m,
  RELATIONSHIP_ADD: N,
  RELATIONSHIP_REMOVE: N,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
    let {
      messageId: t,
      channelId: s
    } = e, n = _[s];
    if (null == n) return;
    let l = a.findIndex(n.messages, e => e.id === t); - 1 !== l && (n.messages = n.messages.slice(), n.messages[l] = (0, d.handleExplicitMediaScanTimeoutForMessage)(n.messages[l]), _[s] = n)
  }
})