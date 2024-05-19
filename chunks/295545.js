"use strict";
s.r(t), s.d(t, {
  useIsEligibleForUserSettingsSearchDesktop: function() {
    return n
  }
});
let a = (0, s("818083").createExperiment)({
  kind: "user",
  id: "2024-05_desktop_user_settings_search",
  label: "Desktop User Settings Search",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable User Settings Search on Desktop",
    config: {
      enabled: !0
    }
  }]
});

function n(e) {
  let {
    location: t
  } = e;
  return a.useExperiment({
    location: t
  }, {
    autoTrackExposure: !0
  }).enabled
}