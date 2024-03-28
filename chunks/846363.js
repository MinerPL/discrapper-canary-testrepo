"use strict";
s.r(t), s.d(t, {
  useMarketingOptimizationExperiment: function() {
    return i
  }
});
let a = (0, s("818083").createExperiment)({
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
  i = function() {
    let {
      autoTrackExposure: e
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      autoTrackExposure: !1
    };
    return a.useExperiment({
      location: "experiment_hook"
    }, {
      autoTrackExposure: e
    }).enabled
  }