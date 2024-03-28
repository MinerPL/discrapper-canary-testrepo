"use strict";
n.r(t);
let i = (0, n("818083").createExperiment)({
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
t.default = e => {
  let {
    location: t,
    autoTrackExposure: n = !0,
    trackExposureOptions: s = {}
  } = e;
  return i.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    trackExposureOptions: s
  })
}