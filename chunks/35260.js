"use strict";
n(47120);
var i = n(147913),
  r = n(31996),
  s = n(981631);
let o = new Set;

function a(e) {
  var t, n, i;
  let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (a && !o.has(e.channel_id) || (null === (t = e.message_reference) || void 0 === t ? void 0 : t.type) !== s.Uvt.FORWARD) return;
  let l = null === (n = e.message_snapshots) || void 0 === n ? void 0 : n[0];
  if (null != l && (null === (i = l.guild) || void 0 === i ? void 0 : i.id) != null)(0, r.Q)(l.guild.id)
}
class l extends i.Z {
  handleConnectionOpen() {
    o.clear()
  }
  handleChannelSelect(e) {
    let {
      channelId: t
    } = e;
    null != t && o.add(t)
  }
  handleMessage(e) {
    let {
      message: t
    } = e;
    return a(t, !0)
  }
  handleLoadMessages(e) {
    let {
      channelId: t,
      messages: n
    } = e;
    o.add(t), n.forEach(e => a(e, !0))
  }
  handleLoadRecentMentions(e) {
    let {
      messages: t
    } = e;
    t.forEach(e => a(e))
  }
  handleLoadPinnedMessages(e) {
    let {
      messages: t
    } = e;
    t.forEach(e => a(e))
  }
  handleSearchFinish(e) {
    e.messages.forEach(e => {
      e.forEach(e => a(e))
    })
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      POST_CONNECTION_OPEN: this.handleConnectionOpen,
      MESSAGE_CREATE: {
        callback: this.handleMessage,
        autoSubscribe: !1
      },
      MESSAGE_UPDATE: this.handleMessage,
      LOAD_MESSAGES_SUCCESS: this.handleLoadMessages,
      LOAD_MESSAGES_AROUND_SUCCESS: this.handleLoadMessages,
      LOAD_RECENT_MENTIONS_SUCCESS: this.handleLoadRecentMentions,
      LOAD_PINNED_MESSAGES_SUCCESS: this.handleLoadPinnedMessages,
      SEARCH_FINISH: this.handleSearchFinish,
      MOD_VIEW_SEARCH_FINISH: this.handleSearchFinish,
      CHANNEL_SELECT: {
        callback: this.handleChannelSelect,
        autoSubscribe: !1
      }
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new l