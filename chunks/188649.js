"use strict";
n.r(t), n.d(t, {
  isEligibleForQuestsClientMonitoring: function() {
    return l
  }
});
var i = n("862205");
let r = (0, i.createExperiment)({
    id: "2024-03_quests_client_monitoring",
    kind: "user",
    label: "Quests client monitoring experiment",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 0,
      label: "disabled",
      config: {
        enabled: !1
      }
    }, {
      id: 1,
      label: "enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  l = e => r.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !1
  }).enabled