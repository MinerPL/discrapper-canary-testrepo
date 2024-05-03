"use strict";
n.r(t);
let i = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-04_changelog",
  label: "New Changelog Messages",
  defaultConfig: {
    canReceiveMessage: !1
  },
  treatments: [{
    id: 1,
    label: "Receive changelog updates as messages",
    config: {
      canReceiveMessage: !0
    }
  }]
});
t.default = i