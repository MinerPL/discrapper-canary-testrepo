"use strict";
s.r(t);
let a = (0, s("818083").createExperiment)({
  kind: "user",
  id: "2023-12_pause_subscriptions_experiment",
  label: "Pause Subscriptions Experiment",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Pause Subscription Enabled",
    config: {
      enabled: !0
    }
  }]
});
t.default = e => {
  let {
    location: t,
    autoTrackExposure: s = !0,
    trackExposureOptions: n = {}
  } = e;
  return a.useExperiment({
    location: t
  }, {
    autoTrackExposure: s,
    trackExposureOptions: n
  })
}