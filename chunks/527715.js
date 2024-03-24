"use strict";
s.r(t), s.d(t, {
  useMarketingOptimizationExperiment: function() {
    return n
  }
});
var a = s("862205");
let r = (0, a.createExperiment)({
    kind: "user",
    id: "2024-02_all_marketing_page_optimization_phase_1",
    label: "Marketing Page Optimizations - Phase 1",
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
  }),
  n = function() {
    let {
      autoTrackExposure: e
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      autoTrackExposure: !1
    };
    return r.useExperiment({
      location: "experiment_hook"
    }, {
      autoTrackExposure: e
    }).enabled
  }