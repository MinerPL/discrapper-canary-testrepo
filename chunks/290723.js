"use strict";
n.r(t), n.d(t, {
  getExplicitMediaSenderFalsePositiveExpirationOverride: function() {
    return a
  },
  useIsEligibleForExplicitMediaSenderFalsePositive: function() {
    return i
  }
});
var s = n("862205");
let l = (0, s.createExperiment)({
  kind: "user",
  id: "2024-01_explicit_media_sender_false_positive",
  label: "Explicit Media Sender False Positive",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable explicit media sender false positive experience",
    config: {
      enabled: !0
    }
  }, {
    id: 2,
    label: "Enable explicit media sender false positive experience with 3 second submit report expiration window",
    config: {
      enabled: !0,
      expirationOverride: 3e3
    }
  }]
});

function a() {
  let {
    expirationOverride: e
  } = l.getCurrentConfig({
    location: ""
  }, {
    autoTrackExposure: !1
  });
  return e
}

function i(e) {
  return l.useExperiment({
    location: e
  }, {
    autoTrackExposure: !0
  }).enabled
}