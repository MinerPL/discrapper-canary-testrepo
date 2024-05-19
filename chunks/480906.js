"use strict";
n.r(t), n.d(t, {
  ExperimentDeathByAiMiniShelfBanner: function() {
    return a
  }
});
let a = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-05_activity_death_by_ai_mini_shelf_banner",
  label: "Actvity Death By AI Mini-Shelf Banner",
  defaultConfig: {
    enableDeathByAiMiniShelfBanner: !1
  },
  treatments: [{
    id: 1,
    label: "Enable mini-shelf banner",
    config: {
      enableDeathByAiMiniShelfBanner: !0
    }
  }]
})