"use strict";
n.r(t);
let s = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2023-09_window_32_deprecation_message",
  label: "show deprecation message for 32-bit Windows",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "show message",
    config: {
      enabled: !0
    }
  }]
});
t.default = s