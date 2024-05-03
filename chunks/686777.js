"use strict";
n.r(t), n.d(t, {
  useIsEligibleForConcurrentQuests: function() {
    return l
  }
}), n("47120");
var s = n("818083");
let a = (0, s.createExperiment)({
    id: "2024-04_concurrent_quests",
    kind: "user",
    label: "Concurrent Quests",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 0,
      label: "Control",
      config: {
        enabled: !1
      }
    }, ...[1, 99, 100].map(e => ({
      id: e,
      label: "Concurrent Quests Enabled",
      config: {
        enabled: !0
      }
    }))]
  }),
  l = e => {
    let {
      location: t,
      autoTrackExposure: n = !1
    } = e;
    return a.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    }).enabled
  }