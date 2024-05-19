"use strict";
let i;
n.r(t), n("47120");
var r, a, s, o, l = n("442837"),
  u = n("570140");
let d = new Map,
  _ = !1,
  c = !1;

function E(e) {
  e(d), d = new Map(d)
}
class I extends(r = l.default.Store) {
  getFeeds() {
    return d
  }
  getFeed(e) {
    return d.get(e)
  }
  getFilters() {
    return i
  }
  getFeedRequestId(e) {
    var t;
    return null === (t = this.getFeed(e)) || void 0 === t ? void 0 : t.request_id
  }
  getDebugImpressionCappingDisabled() {
    return c
  }
  get hidden() {
    return _
  }
}
o = "ContentInventoryStore", (s = "displayName") in(a = I) ? Object.defineProperty(a, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = o, t.default = new I(u.default, {
  CONNECTION_OPEN: function() {
    d = new Map, _ = !1
  },
  CONTENT_INVENTORY_SET_FEED: function(e) {
    let {
      feedId: t,
      feed: n
    } = e;
    E(e => e.set(t, n))
  },
  CONTENT_INVENTORY_SET_FILTERS: function(e) {
    let {
      filters: t
    } = e;
    i = t
  },
  CONTENT_INVENTORY_CLEAR_FEED: function(e) {
    let {
      feedId: t
    } = e;
    if (!d.has(t)) return !1;
    E(e => e.delete(t))
  },
  CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: function() {
    _ = !_
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: function() {
    c = !c
  }
})