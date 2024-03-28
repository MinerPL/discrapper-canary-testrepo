"use strict";
n.r(t);
var a, s, l, i, r = n("442837"),
  o = n("570140");
let u = {};
class d extends(i = r.default.Store) {
  getSkuIdForChannel(e) {
    return u[e]
  }
}
l = "ChannelSKUStore", (s = "displayName") in(a = d) ? Object.defineProperty(a, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = l, t.default = new d(o.default, {
  CONNECTION_OPEN: function() {
    u = {}
  },
  STORE_LISTING_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      storeListing: n
    } = e;
    null != t && (u[t] = n.sku.id)
  }
})