"use strict";
s.r(t), s.d(t, {
  isMfaEmailVerificationEnabled: function() {
    return n
  }
});
let a = (0, s("818083").createExperiment)({
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

function n() {
  let {
    enabled: e
  } = a.getCurrentConfig({
    location: "41ef90_2"
  }, {
    autoTrackExposure: !0
  });
  return e
}