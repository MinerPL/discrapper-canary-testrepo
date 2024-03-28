"use strict";
a.r(t), a("47120");
var s = a("399606"),
  r = a("597688"),
  l = a("1870");
t.default = e => {
  let [t, a] = (0, s.useStateFromStoresArray)([r.default], () => [r.default.getCategoryForProduct(e), r.default.getProduct(e)]);
  return {
    category: t,
    product: a,
    purchase: (0, s.useStateFromStores)([l.default], () => l.default.getPurchase(e))
  }
}