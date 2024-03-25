"use strict";
n.r(t), n.d(t, {
  isMfaEmailVerificationEnabled: function() {
    return o
  }
});
var i = n("862205");
let a = (0, i.createExperiment)({
  kind: "user",
  id: "2023-07_mfa_email_verification",
  label: "Safety Experience Mfa Email Verification",
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

function o() {
  let {
    enabled: e
  } = a.getCurrentConfig({
    location: "41ef90_2"
  }, {
    autoTrackExposure: !0
  });
  return e
}