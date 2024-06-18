"use strict";
t.d(s, {
  T: function() {
    return l
  },
  v: function() {
    return r
  }
});
var n = t(735250);
t(470079);
var a = t(481060);
let i = "collectibles shop product details modal",
  l = e => {
    let {
      product: s,
      category: l,
      analyticsSource: r,
      analyticsLocations: o,
      returnRef: c
    } = e;
    (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("2026")]).then(t.bind(t, 702370));
      return t => (0, n.jsx)(e, {
        ...t,
        product: s,
        category: l,
        analyticsSource: r,
        analyticsLocations: o,
        returnRef: c
      })
    }, {
      modalKey: i
    })
  },
  r = () => {
    (0, a.closeModal)(i)
  }