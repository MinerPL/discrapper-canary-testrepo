"use strict";
l.r(t), l.d(t, {
  appStorefrontExperiment: function() {
    return a
  }
});
var n = l("862205");
let a = (0, n.createExperiment)({
  kind: "user",
  id: "2024-02_app_storefront",
  label: "App Storefront",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable App Storefront",
    config: {
      enabled: !0
    }
  }]
})