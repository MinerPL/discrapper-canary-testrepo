"use strict";
a.r(t), a.d(t, {
  usePurchasedProductsSort: function() {
    return n
  }
}), a("47120"), a("653041");
var s = a("470079"),
  l = a("399606"),
  r = a("1870");
let n = e => {
  let t = (0, l.useStateFromStores)([r.default], () => r.default.purchases);
  return (0, s.useMemo)(() => {
    let a = [],
      s = [];
    for (let l of e.values()) void 0 !== t.get(l.skuId) ? a.push(l) : s.push(l);
    return s.concat(a)
  }, [e, t])
}