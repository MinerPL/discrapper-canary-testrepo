"use strict";
n.r(t);
var l = n("818083");
t.default = (0, l.createExperiment)({
  kind: "user",
  id: "2022-01_server_recommendations_rollout",
  label: "Rollout experiment for server recommendations.",
  defaultConfig: {
    showRecs: !1
  },
  treatments: [{
    id: 1,
    label: "Show server recommendations",
    config: {
      showRecs: !0
    }
  }]
})