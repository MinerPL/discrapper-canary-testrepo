"use strict";
n.r(t);
let s = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2023-11_xbox_game_invites",
  label: "Xbox Game Invites Experiment",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Xbox Game Invites UI Enabled",
    config: {
      enabled: !0
    }
  }]
});
t.default = s