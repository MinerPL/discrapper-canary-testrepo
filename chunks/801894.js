"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("862205");
let s = (0, a.createExperiment)({
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
var l = e => {
  let {
    location: t
  } = e;
  return s.useExperiment({
    location: t
  })
}