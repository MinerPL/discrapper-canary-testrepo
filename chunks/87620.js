"use strict";
a.r(s), a.d(s, {
  useIsIarUserReportingEnabled: function() {
    return t
  }
});
let n = (0, a("818083").createExperiment)({
  kind: "user",
  id: "2023-09_iar_user_reporting",
  label: "Safety Experience IAR User Reporting",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }]
});

function t(e) {
  return n.useExperiment({
    location: e
  }, {
    autoTrackExposure: !0
  }).enabled
}