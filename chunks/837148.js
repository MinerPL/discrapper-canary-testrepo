"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var s = n("862205");
let r = (0, s.createExperiment)({
  kind: "user",
  id: "2023-12_collectibles_gifting_dm_entrypoint",
  label: "Collectibles Gifting From DM's",
  defaultConfig: {
    confirmUpsellEnabled: !1
  },
  treatments: [{
    id: 2,
    label: "Collectibles Gifting from DM's Enabled With Confirm Step Upsell",
    config: {
      confirmUpsellEnabled: !0
    }
  }]
});
var a = e => {
  let {
    location: t,
    autoTrackExposure: n = !0,
    trackExposureOptions: s = {}
  } = e;
  return r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    trackExposureOptions: s
  })
}