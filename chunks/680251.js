"use strict";
n.r(t);
let a = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-01_shop_lunar_new_year_drop_upsell",
  label: "Shop Lunar New Year In App Marketing Experiment",
  defaultConfig: {
    newBadgeEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enables New Badge",
    config: {
      newBadgeEnabled: !0
    }
  }]
});
t.default = e => {
  let {
    location: t
  } = e;
  return a.useExperiment({
    location: t
  })
}