"use strict";
n.r(t), n.d(t, {
  QuietModeExperiment: function() {
    return a
  }
});
let a = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-01_quiet_mode",
  label: "Quiet Mode (dnd-equivalent) Experiment ",
  defaultConfig: {
    allowQuietMode: !1
  },
  treatments: [{
    id: 1,
    label: "allow quiet mode",
    config: {
      allowQuietMode: !0
    }
  }]
})