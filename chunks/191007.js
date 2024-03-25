"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var s = n("862205");
let a = (0, s.createExperiment)({
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
var l = a