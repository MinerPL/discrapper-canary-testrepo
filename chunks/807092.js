"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(375954);
let _ = {},
  d = {},
  c = {};

function E(e) {
  if (null == e) return !1;
  let t = d[e];
  if (null == t) return !1;
  let n = u.Z.getMessage(e, t.messageId);
  if (null == n) return !1;
  _[e] = {
    channel: t.channel,
    message: n,
    shouldMention: t.shouldMention,
    showMentionToggle: t.showMentionToggle
  }, delete d[e]
}

function I() {
  _ = {}, d = {}, c = {}
}
class T extends(o = a.ZP.Store) {
  initialize() {
    this.waitFor(u.Z)
  }
  getPendingReply(e) {
    return _[e]
  }
  getPendingReplyActionSource(e) {
    return c[e]
  }
}
s = "PendingReplyStore", (r = "displayName") in(i = T) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new T(l.Z, {
  CREATE_PENDING_REPLY: function(e) {
    let {
      channel: t,
      message: n,
      shouldMention: i = !0,
      showMentionToggle: r = !0,
      source: s
    } = e;
    _[t.id] = {
      channel: t,
      message: n,
      shouldMention: i,
      showMentionToggle: r
    }, c[t.id] = s
  },
  CREATE_SHALLOW_PENDING_REPLY: function(e) {
    let {
      channel: t,
      messageId: n,
      shouldMention: i = !0,
      showMentionToggle: r = !0
    } = e;
    d[t.id] = {
      channel: t,
      messageId: n,
      shouldMention: i,
      showMentionToggle: r
    }
  },
  SET_PENDING_REPLY_SHOULD_MENTION: function(e) {
    let {
      channelId: t,
      shouldMention: n
    } = e;
    t in _ && (_[t] = {
      ..._[t],
      shouldMention: n
    }), t in d && (d[t] = {
      ...d[t],
      shouldMention: n
    })
  },
  DELETE_PENDING_REPLY: function(e) {
    let {
      channelId: t
    } = e;
    delete _[t], delete d[t]
  },
  CONNECTION_OPEN: I,
  LOGOUT: I,
  MESSAGE_DELETE: function(e) {
    var t, n, i;
    let {
      id: r,
      channelId: s
    } = e;
    if ((null === (n = _[s]) || void 0 === n ? void 0 : null === (t = n.message) || void 0 === t ? void 0 : t.id) === r) delete _[s], delete c[s];
    else {
      if ((null === (i = d[s]) || void 0 === i ? void 0 : i.messageId) !== r) return !1;
      delete d[s], delete c[s]
    }
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    E(t)
  },
  LOAD_MESSAGES_SUCCESS: function(e) {
    let {
      channelId: t
    } = e;
    E(t)
  }
})