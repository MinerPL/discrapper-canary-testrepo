"use strict";
n.r(t);
var l = n("818083");
t.default = (0, l.createExperiment)({
  kind: "guild",
  id: "2022-05_vanity_url_target",
  label: "Vanity URL Targeting",
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
})