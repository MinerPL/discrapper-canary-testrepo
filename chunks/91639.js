"use strict";
n.r(t), n.d(t, {
  ExpiringStatusExperiment: function() {
    return s
  }
});
var a = n("862205");
let s = (0, a.createExperiment)({
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