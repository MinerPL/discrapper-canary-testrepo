"use strict";
n.r(t), n.d(t, {
  isEligibleForQuestPlaytime: function() {
    return s
  },
  useIsEligibleForQuestPlaytime: function() {
    return o
  }
});
var i = n("818083"),
  r = n("977156");
let a = (0, i.createExperiment)({
    id: "2024-04_quest_playtime_task",
    kind: "user",
    label: "Quest Playtime Task",
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
      label: "Playtime enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  s = e => {
    let {
      location: t,
      autoTrackExposure: n = !1
    } = e;
    return a.getCurrentConfig({
      location: t
    }, {
      autoTrackExposure: n
    }).enabled
  },
  o = e => {
    let {
      location: t,
      autoTrackExposure: n = !1
    } = e, i = (0, r.useIsEligibleForQuests)({
      location: t
    }), {
      enabled: s
    } = a.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    });
    return i && s
  }