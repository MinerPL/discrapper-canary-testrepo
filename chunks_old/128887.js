"use strict";
n.r(t), n.d(t, {
  QuietModeExperiment: function() {
    return s
  }
});
var a = n("862205");
let s = (0, a.createExperiment)({
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