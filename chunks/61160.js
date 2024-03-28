"use strict";
s.r(t);
var a = s("818083");
t.default = (0, a.createExperiment)({
  kind: "user",
  id: "2023-05_speed_test",
  label: "Speed Test User Setting",
  defaultConfig: {
    showSettings: !1
  },
  treatments: [{
    id: 1,
    label: "Show speed test",
    config: {
      showSettings: !0
    }
  }]
})