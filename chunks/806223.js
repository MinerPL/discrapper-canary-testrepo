"use strict";
l.r(t);
let s = (0, l("818083").createExperiment)({
  kind: "user",
  id: "2023-01_guild_onboarding_includes_rules",
  label: "Guild Onboarding includes rules experience",
  defaultConfig: {
    includeRules: !1
  },
  treatments: [{
    id: 1,
    label: "Last page of onboarding is rules",
    config: {
      includeRules: !0
    }
  }]
});
t.default = s