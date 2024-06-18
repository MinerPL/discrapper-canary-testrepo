"use strict";
let i;
var r, s, o, a, l = n(442837),
  u = n(570140);
let _ = [],
  d = _,
  c = null,
  E = e => {
    d = _, c = null
  };
class I extends(a = l.ZP.Store) {
  get analyticsLocations() {
    return d
  }
  get analyticsSource() {
    return c
  }
  get initialProductSkuId() {
    return i
  }
  getAnalytics() {
    return {
      analyticsLocations: d,
      analyticsSource: c
    }
  }
}
o = "CollectiblesShopStore", (s = "displayName") in(r = I) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new I(u.Z, {
  COLLECTIBLES_SHOP_OPEN: e => {
    var t, n;
    d = null !== (t = e.analyticsLocations) && void 0 !== t ? t : _, c = null !== (n = e.analyticsSource) && void 0 !== n ? n : null, i = e.initialProductSkuId
  },
  COLLECTIBLES_SHOP_CLOSE: E,
  COLLECTIBLES_PRODUCT_DETAILS_OPEN: e => {
    e.item.skuId === i && (i = void 0)
  },
  LOGOUT: E
})