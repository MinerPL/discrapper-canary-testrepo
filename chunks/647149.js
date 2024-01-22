"use strict";
a.r(e), a.d(e, {
  useIsInappAppealIngestionEnabled: function() {
    return s
  }
});
var n = a("862205");
let i = (0, n.createExperiment)({
  kind: "user",
  id: "2023-11_safety_hub_inapp_appeal_ingestion",
  label: "In-app Appeal Ingestion",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "EU user",
    config: {
      enabled: !0
    }
  }, {
    id: 2,
    label: "DSA E2E testing user",
    config: {
      enabled: !0
    }
  }]
});

function s() {
  return !!i.useExperiment({
    location: "appeal-ingestion-link"
  }, {
    autoTrackExposure: !0
  }).enabled
}