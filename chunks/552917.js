"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var u = n("862205");
let r = (0, u.createExperiment)({
  kind: "user",
  id: "2022-12_premium_targeted_upsells",
  label: "Premium Targeted Upsells",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Use highest expected value to determine Nitro upsells",
    config: {
      enabled: !0,
      useExpectedValue: !0,
      useLikelihood: !1
    }
  }, {
    id: 2,
    label: "Use highest likelihood to determine Nitro upsells",
    config: {
      enabled: !0,
      useExpectedValue: !1,
      useLikelihood: !0
    }
  }]
});
var i = r