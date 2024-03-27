"use strict";
a.r(t), a.d(t, {
  openCollectiblesShopProductDetailsModal: function() {
    return n
  },
  closeCollectiblesShopProductDetailsModal: function() {
    return o
  }
});
var s = a("37983");
a("884691");
var l = a("77078");
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
      } = await a.el("179047").then(a.bind(a, "179047"));
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