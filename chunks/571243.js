"use strict";
n.r(t), n.d(t, {
  useIsEligibleForMemberlistOneClickReply: function() {
    return l
  }
});
let a = (0, n("818083").createExperiment)({
    id: "2024-04_memberlist_one_click_reply",
    kind: "user",
    label: "Memberlist One Click Reply",
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
      label: "One click reply enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  l = e => {
    let {
      location: t,
      autoTrackExposure: n = !0
    } = e, {
      enabled: l
    } = a.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    });
    return l
  }