"use strict";
s.r(t), s.d(t, {
  GameSettingsMergeExperiment: function() {
    return a
  }
});
let a = (0, s("818083").createExperiment)({
  kind: "user",
  id: "2024-04_game_settings_merge",
  label: "Game Settings Merge",
  defaultConfig: {
    shouldMergeGameSettings: !1
  },
  treatments: [{
    id: 1,
    label: "Merge Game Settings",
    config: {
      shouldMergeGameSettings: !0
    }
  }]
})