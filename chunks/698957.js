"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var l = a("862205");
let s = (0, l.createExperiment)({
  kind: "user",
  id: "2024-02_collectibles_hide_shop_banner",
  label: "Hide shop banner Experiment",
  defaultConfig: {
    shopBannerHidden: !1
  },
  treatments: [{
    id: 1,
    label: "Enables hiding shop banner",
    config: {
      shopBannerHidden: !0
    }
  }]
});
var r = e => {
  let {
    location: t
  } = e;
  return s.useExperiment({
    location: t
  })
}