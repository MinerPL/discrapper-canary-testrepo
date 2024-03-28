"use strict";
n.r(t), n.d(t, {
  useIsSafetyConsumerEducationReportingEnabled: function() {
    return s
  }
});
let a = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2023-04_consumer_education_launch__reporting",
  label: "Consumer Education Launch - Reporting",
  defaultConfig: {
    bucket: 0,
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Reporting",
    config: {
      bucket: 1,
      enabled: !0
    }
  }]
});

function s() {
  return a.useExperiment({
    location: "183c74_1"
  }, {
    autoTrackExposure: !0
  }).enabled
}