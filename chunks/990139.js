"use strict";
a.r(t), a.d(t, {
  ShopCardHoverAnimationVariant: function() {
    return r
  },
  useShopCardHoverAnimationExperiment: function() {
    return i
  }
});
var s, r, l = a("862205");
(s = r || (r = {}))[s.CONTROL = 0] = "CONTROL", s[s.TRANSFORMATION = 1] = "TRANSFORMATION", s[s.NO_MOVEMENT = 2] = "NO_MOVEMENT";
let n = (0, l.createExperiment)({
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