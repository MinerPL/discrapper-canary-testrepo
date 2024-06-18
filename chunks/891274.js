"use strict";
n(47120), n(411104), n(570140);
var i = n(147913);
n(674588);
var r = n(751189),
  s = n(409059);
n(652898), n(701190);
var o = n(960904),
  a = n(830121);
let l = new Set;

function u(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (t && !l.has(e.channel_id)) return;
  let n = (0, a.ZP)(e.content);
  null != n && 0 !== n.length && n.forEach(e => {
    let {
      type: t,
      code: n
    } = e;
    if (t === o.g.INVITE);
    else if (t === o.g.TEMPLATE) null == s.Z.getGuildTemplate(n) && r.Z.resolveGuildTemplate(n);
    else if (t === o.g.BUILD_OVERRIDE || t === o.g.MANUAL_BUILD_OVERRIDE);
    else if (t === o.g.EVENT);
    else if (t === o.g.CHANNEL_LINK);
    else if (t === o.g.APP_DIRECTORY_PROFILE);
    else if (t === o.g.ACTIVITY_BOOKMARK);
    else if (t === o.g.EMBEDDED_ACTIVITY_INVITE);
    else if (t === o.g.GUILD_PRODUCT);
    else if (t === o.g.SERVER_SHOP);
    else if (t === o.g.QUESTS_EMBED);
    else if (t === o.g.APP_DIRECTORY_STOREFRONT);
    else if (t === o.g.APP_DIRECTORY_STOREFRONT_SKU);
    else throw Error("Unknown coded link type: ".concat(t))
  })
}
class _ extends i.Z {
  handleConnectionOpen() {
    l.clear()
  }
  handleChannelSelect(e) {
    let {
      channelId: t
    } = e;
    null != t && l.add(t)
  }
  handleMessage(e) {
    let {
      message: t
    } = e;
    return u(t, !0)
  }
  handleLoadMessages(e) {
    let {
      channelId: t,
      messages: n
    } = e;
    l.add(t), n.forEach(e => u(e, !0))
  }
  handleLoadRecentMentions(e) {
    let {
      messages: t
    } = e;
    t.forEach(e => u(e))
  }
  handleLoadPinnedMessages(e) {
    let {
      messages: t
    } = e;
    t.forEach(e => u(e))
  }
  handleSearchFinish(e) {
    e.messages.forEach(e => {
      e.forEach(e => u(e))
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
t.Z = new _