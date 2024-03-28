"use strict";
s.r(t), s.d(t, {
  useAdvancedModeExperiment: function() {
    return l
  }
});
let a = (0, s("818083").createExperiment)({
  kind: "guild",
  id: "2023-02_onboarding_advanced_mode",
  label: "Enables setting up onboarding with advanced mode",
  defaultConfig: {
    advancedModeAllowed: !1
  },
  treatments: [{
    id: 1,
    label: "On",
    config: {
      advancedModeAllowed: !0
    }
  }]
});

function l(e) {
  return a.useExperiment({
    guildId: e,
    location: "ed5d33_1"
  }, {
    autoTrackExposure: !1
  })
}