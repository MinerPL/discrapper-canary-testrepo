"use strict";
n.r(t), n.d(t, {
  getOnboardingDropdownExperiment: function() {
    return s
  },
  useOnboardingDropdownExperiment: function() {
    return l
  }
});
let a = (0, n("818083").createExperiment)({
  kind: "guild",
  id: "2023-02_onboardingdropdowns",
  label: "Enables dropdown selections from onboarding prompts",
  defaultConfig: {
    dropdownsAllowed: !1
  },
  treatments: [{
    id: 1,
    label: "On",
    config: {
      dropdownsAllowed: !0
    }
  }]
});

function l(e) {
  return a.useExperiment({
    guildId: e,
    location: "a12ce7_1"
  }, {
    autoTrackExposure: !1
  })
}

function s(e) {
  return a.getCurrentConfig({
    guildId: e,
    location: "a12ce7_2"
  })
}