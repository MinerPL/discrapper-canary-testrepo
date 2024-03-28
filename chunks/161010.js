"use strict";
n.r(t), n.d(t, {
  shouldShowNitroUpsell: function() {
    return a
  }
});
let s = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2023-10_social_proofing_file_size",
  label: "Social Proofing File Size",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Should show nitro upsell for large files",
    config: {
      enabled: !0
    }
  }]
});

function a(e) {
  return s.getCurrentConfig({
    location: e
  }).enabled
}