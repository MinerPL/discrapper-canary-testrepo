"use strict";
a.r(t), a.d(t, {
  usePurchasedProductsSort: function() {
    return n
  }
}), a("222007"), a("424973");
var l = a("884691"),
  r = a("65597"),
  s = a("775416");
let n = e => {
  let t = (0, r.useStateFromStores)([s.default], () => s.default.purchases),
    a = (0, l.useMemo)(() => {
      let a = [],
        l = [];
      for (let r of e.values()) void 0 !== t.get(r.skuId) ? a.push(r) : l.push(r);
      return l.concat(a)
    }, [e, t]);
  return a
}