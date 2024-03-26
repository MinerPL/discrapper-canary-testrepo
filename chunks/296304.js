"use strict";
a.r(t), a.d(t, {
  usePurchasedCategoriesSort: function() {
    return n
  }
}), a("222007"), a("424973");
var r = a("884691"),
  s = a("65597"),
  l = a("775416");
let n = e => {
  let t = (0, s.useStateFromStores)([l.default], () => l.default.purchases),
    a = (0, r.useMemo)(() => {
      let a = [],
        r = [];
      for (let s of e.values()) {
        let e = s.products.every(e => !!t.get(e.skuId));
        e ? a.push(s) : r.push(s)
      }
      return r.concat(a)
    }, [e, t]);
  return a
}