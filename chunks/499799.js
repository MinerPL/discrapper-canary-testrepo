"use strict";
n.r(t), n.d(t, {
  isStaffTeenSafetyAssistAgeBypass: function() {
    return r
  },
  useStaffTeenSafetyAssistAgeBypass: function() {
    return s
  }
});
var i = n("862205");
let a = (0, i.createExperiment)({
  kind: "user",
  id: "2023-10_staff_teen_safety_assist_age_bypass",
  label: "Staff Teen Safety Assist Age Bypass",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable staff teen safety assist age bypass (your account will behave as a teen user)",
    config: {
      enabled: !0
    }
  }]
});

function r(e) {
  let {
    enabled: t
  } = a.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !0
  });
  return t
}

function s(e) {
  return a.useExperiment({
    location: e
  }, {
    autoTrackExposure: !0
  }).enabled
}