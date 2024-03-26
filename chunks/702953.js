"use strict";
a.r(t), a.d(t, {
  useCollectiblesShopTallerCardsExperiment: function() {
    return s
  }
});
var l = a("862205");
let r = (0, l.createExperiment)({
    kind: "user",
    id: "2023-11_collectibles_shop_taller_cards",
    label: "Collectibles Shop Taller Cards",
    defaultConfig: {
      tallerCardsEnabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enables taller cards in shop",
      config: {
        tallerCardsEnabled: !0
      }
    }]
  }),
  s = e => {
    let {
      location: t
    } = e;
    return r.useExperiment({
      location: t
    })
  }