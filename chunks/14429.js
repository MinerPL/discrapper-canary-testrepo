"use strict";
n.r(t);
let l = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2021-02_staff_qc_debugging",
  label: "Display QS scores in results. Not a real experiment",
  defaultConfig: {
    showScores: !1
  },
  treatments: [{
    id: 1,
    label: "Show scores in QS results",
    config: {
      showScores: !0
    }
  }]
});
t.default = l