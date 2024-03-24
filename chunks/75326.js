"use strict";
s.r(t), s.d(t, {
  useUserIsRecentGamesExperimentEnabled: function() {
    return l
  }
});
var a = s("862205");
let n = (0, a.createExperiment)({
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
  }),
  l = e => {
    let {
      location: t,
      autoTrackExposure: s = !1
    } = e, a = n.useExperiment({
      location: t
    }, {
      autoTrackExposure: s
    });
    return a.enabled
  }