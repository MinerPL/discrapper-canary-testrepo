"use strict";
n.r(t), n.d(t, {
  useIsSafetyHubGuildViolationInAppAppealsEnabled: function() {
    return l
  }
});
var i = n("862205");
let a = (0, i.createExperiment)({
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

function l(e) {
  return !!a.useExperiment({
    location: e
  }, {
    autoTrackExposure: !0
  }).enabled
}