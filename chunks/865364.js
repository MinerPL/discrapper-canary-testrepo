"use strict";
n.r(t), n.d(t, {
  useIsEligibleForQuestBarProgressCTA: function() {
    return i
  }
});
var a = n("818083"),
  s = n("977156");
let l = (0, a.createExperiment)({
    id: "2024-03_quest_bar_progress_cta",
    kind: "user",
    label: "Quest Bar Progress CTA",
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
      label: "Quest Bar Progress CTA enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  i = e => {
    let {
      location: t,
      autoTrackExposure: n = !1
    } = e, a = (0, s.useIsEligibleForQuests)({
      location: t
    }), {
      enabled: i
    } = l.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    });
    return a && i
  }