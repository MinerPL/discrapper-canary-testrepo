"use strict";
s.r(t), s("733860");
var a, n, l, i, d = s("392711"),
  r = s.n(d),
  u = s("442837"),
  o = s("570140"),
  c = s("163268"),
  f = s("786761"),
  E = s("706454"),
  g = s("592125"),
  M = s("271383"),
  _ = s("430824"),
  h = s("375954"),
  m = s("699516"),
  N = s("594174");
let S = {};

function A(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
    s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    n = g.default.getChannel(e),
    l = null != n ? n.getGuildId() : null;
  return {
    id: e,
    messages: t.map(e => (0, f.createMessageRecord)(e)),
    guildId: l,
    loaded: s,
    loading: a
  }
}

function I(e) {
  let {
    channel: t
  } = e;
  delete S[t.id]
}

function C() {
  r().forEach(S, e => {
    e.messages = e.messages.map(e => e.set("blocked", m.default.isBlocked(e.author.id)))
  })
}
class p extends(a = u.default.Store) {
  initialize() {
    this.waitFor(g.default, _.default, M.default, h.default, N.default, E.default)
  }
  getPinnedMessages(e) {
    var t;
    return null !== (t = S[e]) && void 0 !== t ? t : void 0
  }
  loaded(e) {
    return null != S[e] && S[e].loaded
  }
}
i = "ChannelPinsStore", (l = "displayName") in(n = p) ? Object.defineProperty(n, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[l] = i, t.default = new p(o.default, {
  CONNECTION_OPEN: function() {
    S = {}
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    S = r()(S).filter(e => e.guildId !== t.id).keyBy("id").value()
  },
  MESSAGE_UPDATE: function(e) {
    let t = e.message.id,
      s = e.message.channel_id;
    if (null == s) return !1;
    let a = S[s];
    if (null == a && !e.message.pinned) return !1;
    if (null == e.message.author) {
      if (null != a) {
        let n = r().findIndex(a.messages, e => e.id === t);
        if (n >= 0) {
          let t = a.messages[n],
            l = (0, f.updateMessageRecord)(t, e.message);
          if (l !== t) {
            let e = a.messages.slice();
            e[n] = l, S[s].messages = e
          }
        }
      }
      return
    }
    if (e.message.pinned) {
      if (null == a) {
        a = A(s, [e.message], !1), S[s] = a;
        return
      }
      a.messages = a.messages.slice();
      let n = r().findIndex(a.messages, e => e.id === t); - 1 === n ? a.messages.unshift((0, f.createMessageRecord)(e.message)) : a.messages[n] = (0, f.updateMessageRecord)(a.messages[n], e.message), S[s] = a
    } else {
      if (null == a) return;
      let e = r().findIndex(a.messages, e => e.id === t);
      if (-1 === e) return;
      a.messages = a.messages.slice(), a.messages.splice(e, 1), S[s] = a
    }
  },
  MESSAGE_DELETE: function(e) {
    let {
      id: t,
      channelId: s
    } = e, a = S[s];
    if (null == a || 0 === r().remove(a.messages, e => e.id === t).length) return !1;
    a.messages = a.messages.slice(), S[s] = a
  },
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t,
      channelId: s
    } = e, a = S[s];
    null != a && (a.messages = a.messages.filter(e => -1 === t.indexOf(e.id)))
  },
  LOAD_PINNED_MESSAGES: function(e) {
    let {
      channelId: t
    } = e;
    S[t] = A(t, [], !1, !0)
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
    let {
      channelId: t,
      messages: s
    } = e;
    S[t] = A(t, s, !0)
  },
  LOAD_PINNED_MESSAGES_FAILURE: function(e) {
    let {
      channelId: t
    } = e;
    delete S[t]
  },
  CHANNEL_DELETE: I,
  THREAD_DELETE: I,
  RELATIONSHIP_ADD: C,
  RELATIONSHIP_REMOVE: C,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
    let {
      messageId: t,
      channelId: s
    } = e, a = S[s];
    if (null == a) return;
    let n = r().findIndex(a.messages, e => e.id === t); - 1 !== n && (a.messages = a.messages.slice(), a.messages[n] = (0, c.handleExplicitMediaScanTimeoutForMessage)(a.messages[n]), S[s] = a)
  }
})