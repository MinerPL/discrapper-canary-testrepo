"use strict";
n.d(t, {
  _: function() {
    return r
  },
  n: function() {
    return i
  }
});
let i = (0, n(818083).B)({
    kind: "user",
    id: "2024-05_pride_month_perks_experiment",
    label: "Pride Month Perks Experiment",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enables new nitro perks related to Pride month",
      config: {
        enabled: !0
      }
    }]
  }),
  r = e => {
    let {
      location: t
    } = e;
    return i.useExperiment({
      location: t
    })
  }