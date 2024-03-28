"use strict";
a.r(t), a.d(t, {
  closeCollectiblesShopProductDetailsModal: function() {
    return o
  },
  openCollectiblesShopProductDetailsModal: function() {
    return n
  }
});
var s = a("735250");
a("470079");
var l = a("481060");
let r = "collectibles shop product details modal",
  n = e => {
    let {
      product: t,
      category: n,
      analyticsSource: o,
      analyticsLocations: i,
      returnRef: u
    } = e;
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("65866"), a.e("36848")]).then(a.bind(a, "702370"));
      return a => (0, s.jsx)(e, {
        ...a,
        product: t,
        category: n,
        analyticsSource: o,
        analyticsLocations: i,
        returnRef: u
      })
    }, {
      modalKey: r
    })
  },
  o = () => {
    (0, l.closeModal)(r)
  }