"use strict";
a.r(t), a.d(t, {
  usePurchasedProductsSort: function() {
    return n
  }
}), a("222007"), a("424973");
var s = a("884691"),
  l = a("65597"),
  r = a("775416");
let n = e => {
  let t = (0, l.useStateFromStores)([r.default], () => r.default.purchases),
    a = (0, s.useMemo)(() => {
      let a = [],
        s = [];
      for (let l of e.values()) void 0 !== t.get(l.skuId) ? a.push(l) : s.push(l);
      return s.concat(a)
    }, [e, t]);
  return a
}