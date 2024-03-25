"use strict";
a.r(t), a.d(t, {
  ShopCardHoverAnimationVariant: function() {
    return s
  },
  useShopCardHoverAnimationExperiment: function() {
    return i
  }
});
var l, s, r = a("862205");
(l = s || (s = {}))[l.CONTROL = 0] = "CONTROL", l[l.TRANSFORMATION = 1] = "TRANSFORMATION", l[l.NO_MOVEMENT = 2] = "NO_MOVEMENT";
let n = (0, r.createExperiment)({
    kind: "user",
    id: "2024-03_shop_card_hover_animation",
    label: "Shop card hover animation experiment",
    defaultConfig: {
      hoverVariant: 0
    },
    treatments: [{
      id: 1,
      label: "Use CSS Transformation",
      config: {
        hoverVariant: 1
      }
    }, {
      id: 2,
      label: "No hover movement",
      config: {
        hoverVariant: 2
      }
    }]
  }),
  i = e => n.useExperiment({
    location: e
  })