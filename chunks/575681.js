"use strict";
n.r(t), n.d(t, {
  useChangeUsernameLivecheckEnabled: function() {
    return s
  }
});
let i = (0, n("818083").createExperiment)({
    kind: "user",
    id: "2023-06_unique_username_live_check_in_settings",
    label: "Username Livecheck in Settings",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Livecheck enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  s = () => {
    let {
      enabled: e
    } = i.useExperiment({
      location: "7e1108_1"
    }, {
      autoTrackExposure: !0
    });
    return e
  }