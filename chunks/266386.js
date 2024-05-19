"use strict";
a.r(t), a.d(t, {
  useCollectiblesHoverPreviewExperiment: function() {
    return s
  }
});
let l = (0, a("818083").createExperiment)({
    kind: "user",
    id: "2024-05_collectibles_hover_preview",
    label: "Collectibles Hover Preview Experiment",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Collectibles card with avatar deco hover preview",
      config: {
        enabled: !0
      }
    }]
  }),
  s = e => l.useExperiment({
    location: e
  }).enabled