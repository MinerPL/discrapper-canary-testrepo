"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var a = n("65597"),
  r = n("853987"),
  s = n("775416"),
  u = e => {
    let [t, n] = (0, a.useStateFromStoresArray)([r.default], () => [r.default.getCategoryForProduct(e), r.default.getProduct(e)]), u = (0, a.useStateFromStores)([s.default], () => s.default.getPurchase(e));
    return {
      category: t,
      product: n,
      purchase: u
    }
  }