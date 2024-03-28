"use strict";
t.r(s), t.d(s, {
  backToSchoolEnabled: function() {
    return l
  }
});
let a = (0, t("818083").createExperiment)({
  kind: "user",
  id: "2022-08_back_to_school",
  label: "Back to School Event",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Back to School experience enabled",
    config: {
      enabled: !0
    }
  }]
});

function l() {
  return a.getCurrentConfig({
    location: "68acbb_1"
  }, {
    autoTrackExposure: !1
  }).enabled
}
s.default = a