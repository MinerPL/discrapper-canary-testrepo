"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("862205");
let s = (0, a.createExperiment)({
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
var l = e => {
  let {
    location: t
  } = e;
  return s.useExperiment({
    location: t
  })
}