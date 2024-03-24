"use strict";
a.r(t), a.d(t, {
  default: function() {
    return l
  }
});
var s = a("862205");
let r = (0, s.createExperiment)({
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
var l = e => {
  let {
    location: t
  } = e;
  return r.useExperiment({
    location: t
  })
}