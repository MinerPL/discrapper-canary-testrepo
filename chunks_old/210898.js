"use strict";
a.r(t), a.d(t, {
  getPomeloAttempt: function() {
    return i
  }
});
var s = a("862205");
let n = (0, s.createExperiment)({
    kind: "user",
    label: "Pomelo Attempt",
    id: "2023-04_pomelo_attempt",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  i = () => n.getCurrentConfig({
    location: "c22166_1"
  }, {
    autoTrackExposure: !1
  }).enabled