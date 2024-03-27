"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("446674"),
  s = n("913144");
let l = {};
class i extends a.default.Store {
  getSkuIdForChannel(e) {
    return l[e]
  }
}
i.displayName = "ChannelSKUStore";
var r = new i(s.default, {
  CONNECTION_OPEN: function() {
    l = {}
  },
  STORE_LISTING_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      storeListing: n
    } = e;
    null != t && (l[t] = n.sku.id)
  }
})