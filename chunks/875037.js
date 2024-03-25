"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var s = n("862205");
let a = (0, s.createExperiment)({
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
var l = a