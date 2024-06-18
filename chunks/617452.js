"use strict";
n.d(t, {
  e: function() {
    return r
  }
});
let i = (0, n(818083).B)({
    kind: "user",
    id: "2024-05_collectibles_shop_bundle",
    label: "Collectibles Shop Bundle",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Shop with bundle",
      config: {
        enabled: !0
      }
    }]
  }),
  r = e => i.useExperiment({
    location: e
  }).enabled