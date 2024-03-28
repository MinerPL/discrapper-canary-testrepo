"use strict";
n.r(t), n.d(t, {
  useIsRejectAllMessageRequestsEnabled: function() {
    return s
  }
});
let a = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2023-01_clear_all_message_requests",
  label: "Safety Experience Reject All Message Requests",
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
    location: "c10bec_1"
  }, {
    autoTrackExposure: !0
  }).enabled
}