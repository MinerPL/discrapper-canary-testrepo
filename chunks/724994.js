"use strict";
t.d(s, {
  L: function() {
    return o
  },
  U: function() {
    return r
  }
});
var n = t(24217),
  a = t.n(n),
  i = t(442837),
  l = t(1870);
let r = (e, s) => {
    var t;
    let n = null != e.getPurchase(s.skuId),
      i = null !== (t = s.items) && void 0 !== t ? t : [],
      l = a()(i.map(s => e.getPurchase(s.skuId)));
    return {
      isPurchased: n || i.length > 0 && l.length === i.length,
      isPartiallyPurchased: l.length > 0 && l.length < i.length
    }
  },
  o = e => (0, i.cj)([l.Z], () => r(l.Z, e))