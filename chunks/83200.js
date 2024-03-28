"use strict";
n.r(t), n.d(t, {
  useIsDmSpamFilterCoachmarkEnabled: function() {
    return s
  }
});
let a = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2023-04_dm_spam_filter_coachmark",
  label: "Safety DM Spam Filter Coachmark rollout",
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

function s() {
  return a.useExperiment({
    location: "acbeda_1"
  }, {
    autoTrackExposure: !1
  }).enabled
}