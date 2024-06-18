"use strict";
n(47120);
var i = n(399606),
  r = n(597688),
  s = n(1870);
t.Z = e => {
  let [t, n] = (0, i.Wu)([r.Z], () => [r.Z.getCategoryForProduct(e), r.Z.getProduct(e)]);
  return {
    category: t,
    product: n,
    purchase: (0, i.e7)([s.Z], () => s.Z.getPurchase(e))
  }
}