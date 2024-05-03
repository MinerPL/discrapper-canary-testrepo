"use strict";
n.r(t), n.d(t, {
  isIarMessageDislikeEnabled: function() {
    return r
  }
});
let i = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-04_iar_message_dislike",
  label: "IAR Message Dislike",
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

function r(e) {
  let {
    enabled: t
  } = i.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !0
  });
  return t
}