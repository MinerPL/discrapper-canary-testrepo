"use strict";
n.r(t);
var a = n("818083");
t.default = (0, a.createExperiment)({
  kind: "guild",
  id: "2021-11_hub_events",
  label: "Hub Events",
  defaultConfig: {
    showHubEventsList: !1
  },
  treatments: [{
    id: 1,
    label: "Show Hub Events List",
    config: {
      showHubEventsList: !0
    }
  }]
})