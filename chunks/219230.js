"use strict";
n.r(e), n.d(e, {
  useIsSafetyHubDisplayGuildViolationsEnabled: function() {
    return a
  }
});
let i = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-01_safety_hub_display_guild_violations",
  label: "Safety Hub Display Guild Violations",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Display guild violations in account standing",
    config: {
      enabled: !0
    }
  }]
});

function a(t) {
  return !!i.useExperiment({
    location: t
  }, {
    autoTrackExposure: !0
  }).enabled
}