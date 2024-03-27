"use strict";
a.r(e), a.d(e, {
  useIsSafetyHubGuildViolationInAppAppealsEnabled: function() {
    return s
  }
});
var n = a("862205");
let i = (0, n.createExperiment)({
  kind: "user",
  id: "2024-02_safety_hub_guild_violation_in_app_appeals",
  label: "Safety Hub Guild Violation In App Appeals",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Allow guild violations to be applied using the new appeals ingestion flow",
    config: {
      enabled: !0
    }
  }]
});

function s(t) {
  return !!i.useExperiment({
    location: t
  }, {
    autoTrackExposure: !0
  }).enabled
}