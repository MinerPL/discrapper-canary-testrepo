"use strict";
s.r(t), s.d(t, {
  userInRefundExperiment: function() {
    return n
  }
});
let a = (0, s("818083").createExperiment)({
  id: "2021-08_user_initiated_refunds",
  label: "User Initiated Refunds",
  kind: "user",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 0,
    label: "Control",
    config: {
      enabled: !1
    }
  }, {
    id: 1,
    label: "Can refund",
    config: {
      enabled: !0
    }
  }]
});

function n() {
  let {
    enabled: e
  } = a.getCurrentConfig({
    location: "70b634_1"
  }, {
    autoTrackExposure: !1
  });
  return a.trackExposure({
    location: "70b634_2"
  }), e
}