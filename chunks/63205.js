"use strict";
n.r(t);
let s = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2023-07_announcement_views",
  label: "Announcement Views",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }]
});
t.default = s