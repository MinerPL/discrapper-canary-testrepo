"use strict";
a.r(t);
var l = a("818083");
t.default = (0, l.createExperiment)({
  kind: "user",
  id: "2024-04_lightning_checkout",
  label: "Lightning Checkout Experiment",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Lightning Checkout Flow",
    config: {
      enabled: !0
    }
  }]
})