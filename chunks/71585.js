"use strict";
n.r(t), n("47120"), n("653041");
var a, l, s, i = n("442837"),
  r = n("570140");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = a || (a = {})).DIRECT_MESSAGE = "direct_message", s.CHANNEL = "channel";
let u = () => ({
    replyMode: "direct_message",
    itemImpressions: []
  }),
  d = u(),
  c = new Set,
  f = new Set,
  h = 0,
  m = !1,
  p = !1;

function E() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  if (!e && Date.now() < h) return;
  d.itemImpressions.length > 1e3 && (d.itemImpressions = []);
  let t = 0,
    n = Date.now() - 2592e5;
  for (let e = 0; e < d.itemImpressions.length; e++) {
    let [a, l] = d.itemImpressions[e];
    if (l < n) t = e + 1;
    else break
  }
  t > 0 && (d.itemImpressions = d.itemImpressions.slice(t));
  let a = p ? 1e3 : 216e5,
    l = new Set,
    s = new Set,
    i = Date.now() - a,
    r = null;
  for (let [e, t] of d.itemImpressions) t < i ? l.add(e) : null == r && (r = t + a), s.add(e);
  c = l, f = s, h = null != r ? r : 1 / 0, m = !0
}
class C extends(l = i.default.PersistedStore) {
  initialize(e) {
    d = {
      ...d,
      ...null != e ? e : {}
    }
  }
  getState() {
    return d
  }
  isChannelReplyMode() {
    return "channel" === d.replyMode
  }
  getImpressionCappedItemIds() {
    return E(), c
  }
  getDebugFastImpressionCappingEnabled() {
    return p
  }
  reset() {
    d = u()
  }
}
o(C, "displayName", "ContentInventoryPersistedStore"), o(C, "persistKey", "ContentInventoryPersistedStore"), t.default = new C(r.default, {
  CONTENT_INVENTORY_TOGGLE_REPLY_MODE: () => {
    "direct_message" === d.replyMode ? d.replyMode = "channel" : d.replyMode = "direct_message"
  },
  CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function(e) {
    let {
      itemIds: t
    } = e;
    !m && E();
    let n = Date.now(),
      a = !1;
    for (let e of t) !f.has(e) && (d.itemImpressions.push([e, n]), a = !0);
    return E(a), a
  },
  CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function() {
    d.itemImpressions = [], E(!0)
  },
  CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function() {
    return console.log("Item impressions:", d.itemImpressions), !1
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function() {
    p = !p
  }
})