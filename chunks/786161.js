"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var s = n("862205");
let a = (0, s.createExperiment)({
  kind: "user",
  id: "2024-01_reactivation_user_discount_offer_experiment",
  label: "Reactivation User Discount Offer",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 0,
    label: "users receive reactivation trial offers",
    config: {
      enabled: !0
    }
  }, {
    id: 1,
    label: "users receive neither reactivation trial offers nor reactivation discount offers",
    config: {
      enabled: !0
    }
  }, {
    id: 2,
    label: "users receive reactivation discount offers",
    config: {
      enabled: !0
    }
  }]
});
var l = a