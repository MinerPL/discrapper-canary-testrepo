"use strict";
a.r(t), a.d(t, {
  GamingStatsPromptExperiment: function() {
    return n
  }
});
let n = (0, a("818083").createExperiment)({
  kind: "guild",
  id: "2023-09_gaming_stats_prompt_guild",
  label: "Gaming stats prompt",
  defaultConfig: {
    triggerGamingStats: !1
  },
  treatments: [{
    id: 1,
    label: "ability to trigger gaming stats prompt",
    config: {
      triggerGamingStats: !0
    }
  }, {
    id: 2,
    label: "ability to trigger gaming stats prompt (leaderboard)",
    config: {
      triggerGamingStats: !0
    }
  }]
})