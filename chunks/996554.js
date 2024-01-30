"use strict";
n.r(t), n.d(t, {
  AppLauncherDesktopExperiment: function() {
    return i
  }
});
var l = n("862205");
(0, l.createExperiment)({
  kind: "user",
  id: "2023-06_app_launcher_mobile",
  label: "App Launcher - Mobile",
  defaultConfig: {
    entrypointEnabled: !1,
    appLauncherEnabled: !1,
    entrypointToSlashUIEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable the app launcher feature on mobile",
    config: {
      entrypointEnabled: !0,
      appLauncherEnabled: !0,
      entrypointToSlashUIEnabled: !1
    }
  }, {
    id: 2,
    label: 'Enable "Apps" button opening existing slash command UI',
    config: {
      entrypointEnabled: !0,
      appLauncherEnabled: !1,
      entrypointToSlashUIEnabled: !0
    }
  }]
});
let i = (0, l.createExperiment)({
  kind: "user",
  id: "2023-11_app_launcher_desktop",
  label: "App Launcher - Desktop",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable the app launcher feature on desktop",
    config: {
      enabled: !0
    }
  }]
})