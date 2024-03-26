"use strict";
a.r(t), a.d(t, {
  openCollectiblesShopProductDetailsModal: function() {
    return n
  },
  closeCollectiblesShopProductDetailsModal: function() {
    return i
  }
});
var r = a("37983");
a("884691");
var s = a("77078");
let l = "collectibles shop product details modal",
  n = e => {
    let {
      product: t,
      category: n,
      analyticsSource: i,
      analyticsLocations: o,
      returnRef: c
    } = e;
    (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await a.el("179047").then(a.bind(a, "179047"));
      return a => (0, r.jsx)(e, {
        ...a,
        product: t,
        category: n,
        analyticsSource: i,
        analyticsLocations: o,
        returnRef: c
      })
    }, {
      modalKey: l
    })
  },
  i = () => {
    (0, s.closeModal)(l)
  }