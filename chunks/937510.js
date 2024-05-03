"use strict";
a.r(t), a.d(t, {
  usePurchasedProductsSort: function() {
    return n
  }
}), a("47120"), a("653041");
var l = a("470079"),
  s = a("399606"),
  r = a("1870");
let n = e => {
  let t = (0, s.useStateFromStores)([r.default], () => r.default.purchases);
  return (0, l.useMemo)(() => {
    let a = [],
      l = [];
    for (let s of e.values()) void 0 !== t.get(s.skuId) ? a.push(s) : l.push(s);
    return l.concat(a)
  }, [e, t])
}