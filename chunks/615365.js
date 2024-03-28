"use strict";
n.r(t);
let s = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2023-08_guild_usage_survey",
  label: "Guild Usage Survey",
  defaultConfig: {
    showSurvey: !1
  },
  treatments: [{
    id: 1,
    label: "show survey nag bar",
    config: {
      showSurvey: !0
    }
  }]
});
t.default = s