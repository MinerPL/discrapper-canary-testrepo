"use strict";
s.r(t);
var a = s("442837"),
  i = s("570140"),
  l = s("731433");
let n = !1;
class r extends a.default.Store {
  get isAprilMarketingDecoEntitlementCreated() {
    return n
  }
}
t.default = new r(i.default, {
  ENTITLEMENT_CREATE: function(e) {
    e.entitlement.sku_id === l.DECO_SKU_ID && (n = !0)
  },
  PREMIUM_APRIL_MARKETING_DECO_ENTITLEMENT_RESET: function() {
    n = !1
  },
  LOGOUT: function() {
    n = !1
  }
})