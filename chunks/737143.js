"use strict";
n.r(t);
let i = (0, n("818083").createExperiment)({
  id: "2023-07_checkout_optimization_browser_autofill",
  label: "Checkout Optimization Browser Autofill",
  kind: "user",
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
t.default = i