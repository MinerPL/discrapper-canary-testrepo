"use strict";
let i, r;
n(47120);
var s, o, a, l, u = n(442837),
  _ = n(570140);
let d = new Map,
  c = new Map,
  E = !1,
  I = !1;

function T(e) {
  e(d), d = new Map(d)
}
class h extends(s = u.ZP.Store) {
  getFeeds() {
    return d
  }
  getFeed(e) {
    return d.get(e)
  }
  getFeedState(e) {
    return c.get(e)
  }
  getLastFeedFetchDate() {
    return i
  }
  getFilters() {
    return r
  }
  getFeedRequestId(e) {
    var t;
    return null === (t = this.getFeed(e)) || void 0 === t ? void 0 : t.request_id
  }
  getDebugImpressionCappingDisabled() {
    return I
  }
  get hidden() {
    return E
  }
}
l = "ContentInventoryStore", (a = "displayName") in(o = h) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.Z = new h(_.Z, {
  CONNECTION_OPEN: function() {
    d = new Map, E = !1
  },
  CONTENT_INVENTORY_SET_FEED: function(e) {
    let {
      feedId: t,
      feed: n
    } = e;
    T(e => e.set(t, n)), i = new Date
  },
  CONTENT_INVENTORY_SET_FEED_STATE: function(e) {
    let {
      feedId: t,
      state: n
    } = e;
    c.set(t, n)
  },
  CONTENT_INVENTORY_SET_FILTERS: function(e) {
    let {
      filters: t
    } = e;
    r = t
  },
  CONTENT_INVENTORY_CLEAR_FEED: function(e) {
    let {
      feedId: t
    } = e;
    if (!d.has(t)) return !1;
    T(e => e.delete(t))
  },
  CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: function() {
    E = !E
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: function() {
    I = !I
  }
})