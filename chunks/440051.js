"use strict";
n.r(t), n.d(t, {
  ExpiringStatusExperiment: function() {
    return a
  }
});
let a = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-01_expiring_status",
  label: "Expiring status Experiment ",
  defaultConfig: {
    expiringStatus: !1
  },
  treatments: [{
    id: 1,
    label: "allow expiring status",
    config: {
      expiringStatus: !0
    }
  }]
})