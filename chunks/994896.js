"use strict";
a.r(t), a.d(t, {
  useCollectiblesCondensedBannersExperiment: function() {
    return s
  }
});
let l = (0, a("818083").createExperiment)({
    kind: "user",
    id: "2024-05_shop_condensed_category_banners",
    label: "Collectibles Shop Condensed Category Banners",
    defaultConfig: {
      condensedBannersEnabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enables condensed banners in the Shop",
      config: {
        condensedBannersEnabled: !0
      }
    }]
  }),
  s = e => {
    let {
      location: t
    } = e;
    return l.useExperiment({
      location: t
    })
  }