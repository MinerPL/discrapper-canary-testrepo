"use strict";
n.r(t), n.d(t, {
  shouldShowNitroUpsell: function() {
    return l
  }
});
var s = n("862205");
let a = (0, s.createExperiment)({
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

function l(e) {
  let t = a.getCurrentConfig({
    location: e
  });
  return t.enabled
}