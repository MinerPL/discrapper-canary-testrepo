"use strict";
a.r(t), a.d(t, {
  useForceMigration: function() {
    return i
  }
});
var s = a("862205");
let l = (0, s.createExperiment)({
    kind: "user",
    id: "2024-01_uu_forced_migration",
    label: "Unique Username Forced Migration UI",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enable Forced Migration UI",
      config: {
        enabled: !0
      }
    }]
  }),
  i = () => {
    let {
      enabled: e
    } = l.useExperiment({
      location: "force_migration"
    }, {
      autoTrackExposure: !1
    });
    return e
  }