"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("862205");
let s = (0, a.createExperiment)({
  kind: "user",
  id: "2024-02_collectibles_anime_v2_marketing",
  label: "Anime V2 marketing Experiment",
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