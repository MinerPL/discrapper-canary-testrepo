"use strict";
n.r(t), n.d(t, {
  usePremiumMarketingTabDisplayTimingExperiment: function() {
    return l
  }
});
var a = n("818083");
let s = (0, a.createExperiment)({
    kind: "user",
    id: "2024-04_premium_marketing_tab_display_timing_experiment",
    label: "2024 Premium Marketing Tab Display Timing Experiment",
    defaultConfig: {
      daysUntilDisplay: 2592e6
    },
    treatments: [{
      id: 1,
      label: ">7 day account age display",
      config: {
        daysUntilDisplay: 6048e5
      }
    }, {
      id: 2,
      label: ">14 day account age display",
      config: {
        daysUntilDisplay: 12096e5
      }
    }, {
      id: 3,
      label: ">21 day account age display",
      config: {
        daysUntilDisplay: 18144e5
      }
    }, {
      id: 4,
      label: ">28 day account age display",
      config: {
        daysUntilDisplay: 24192e5
      }
    }]
  }),
  l = e => {
    let {
      location: t,
      showTabForOtherReasons: n
    } = e;
    return s.useExperiment({
      location: t
    }, {
      autoTrackExposure: !n
    }).daysUntilDisplay
  }