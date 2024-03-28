"use strict";
n.r(t);
let s = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-03_premium_offer_generic_endpoint",
  label: "Premium Offer Generic Endpoint",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Uses Generic Premium Offer Endpoint for all offers.",
    config: {
      enabled: !0
    }
  }]
});
t.default = s