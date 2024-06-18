"use strict";
var i = n(818083);
t.Z = (0, i.B)({
  kind: "user",
  id: "2023-05_overlay_hook_crash_detection",
  label: "Detect and report crashes in the overlay hook",
  defaultConfig: {
    enableCrashReporting: !1,
    enableCrashTrigger: !1
  },
  treatments: [{
    id: 1,
    label: "EnableCrashReporting",
    config: {
      enableCrashReporting: !0,
      enableCrashTrigger: !1
    }
  }, {
    id: 2,
    label: "EnableCrashTrigger",
    config: {
      enableCrashReporting: !0,
      enableCrashTrigger: !0
    }
  }]
})