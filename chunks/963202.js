"use strict";
n.r(t), n.d(t, {
  ClanExperiment: function() {
    return a
  }
});
let a = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-02_clans",
  label: "Clans",
  defaultConfig: {
    enableClanCreation: !1
  },
  treatments: [{
    id: 1,
    label: "Enable creation of clan guilds",
    config: {
      enableClanCreation: !0
    }
  }]
})