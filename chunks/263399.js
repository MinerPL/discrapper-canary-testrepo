"use strict";
s.r(t), s.d(t, {
  useServerPrivacySettingsInUserSettingsEnabled: function() {
    return n
  }
});
let a = (0, s("818083").createExperiment)({
    kind: "user",
    id: "2024-05_server_settings_in_user_settings",
    label: "Server privacy settings in user settings menu",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enable Server Settings in user settings",
      config: {
        enabled: !0
      }
    }]
  }),
  n = e => {
    let {
      location: t
    } = e;
    return a.useExperiment({
      location: t
    }).enabled
  }