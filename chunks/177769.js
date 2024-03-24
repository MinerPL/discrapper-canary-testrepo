"use strict";
s.r(a), s.d(a, {
  ClanExperiment: function() {
    return t
  }
});
var n = s("862205");
let t = (0, n.createExperiment)({
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