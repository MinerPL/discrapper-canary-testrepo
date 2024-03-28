"use strict";
s.r(t), s.d(t, {
  useUserIsRecentGamesExperimentEnabled: function() {
    return n
  }
});
let a = (0, s("818083").createExperiment)({
  id: "2024-03_user_recent_games",
  kind: "user",
  label: "Recent Games",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 0,
    label: "Control",
    config: {
      enabled: !1
    }
  }, {
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }]
});

function n(e) {
  let {
    location: t,
    autoTrackExposure: s = !1
  } = e;
  return a.useExperiment({
    location: t
  }, {
    autoTrackExposure: s
  }).enabled
}