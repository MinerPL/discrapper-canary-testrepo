"use strict";
s.r(t);
let a = (0, s("818083").createExperiment)({
  kind: "user",
  id: "2020-12_guild_delete_feedback",
  label: "Guild Delete Feedback experiment",
  defaultConfig: {
    showFeedback: !1
  },
  treatments: [{
    id: 1,
    label: "Show guild delete feedback",
    config: {
      showFeedback: !0
    }
  }]
});
t.default = a