"use strict";
n.r(t);
var a, l, s, i = n("442837"),
  r = n("570140");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(a = l || (l = {})).DIRECT_MESSAGE = "direct_message", a.CHANNEL = "channel";
let u = () => ({
    replyMode: "direct_message"
  }),
  d = u();
class c extends(s = i.default.PersistedStore) {
  initialize(e) {
    null != e && (d = e)
  }
  getState() {
    return d
  }
  isChannelReplyMode() {
    return "channel" === d.replyMode
  }
  reset() {
    d = u()
  }
}
o(c, "displayName", "ContentInventoryPersistedStore"), o(c, "persistKey", "ContentInventoryPersistedStore"), t.default = new c(r.default, {
  CONTENT_INVENTORY_TOGGLE_REPLY_MODE: () => {
    "direct_message" === d.replyMode ? d.replyMode = "channel" : d.replyMode = "direct_message"
  }
})