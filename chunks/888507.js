"use strict";
n.r(t);
let a = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-03_collectibles_springtoons_marketing",
  label: "Springtoons marketing experiment",
  defaultConfig: {
    coachtipEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enables coachtip",
    config: {
      coachtipEnabled: !0
    }
  }]
});
t.default = e => {
  let {
    location: t
  } = e;
  return a.useExperiment({
    location: t
  })
}