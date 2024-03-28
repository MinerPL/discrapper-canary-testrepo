"use strict";
a.r(t), a.d(t, {
  GuildHomeHeaderRedesignExperiment: function() {
    return l
  }
});
let l = (0, a("818083").createExperiment)({
  kind: "guild",
  id: "2022-12_home_header_redesign",
  label: "Home New Header",
  defaultConfig: {
    hasNewHeader: !1
  },
  treatments: [{
    id: 1,
    label: "New Header",
    config: {
      hasNewHeader: !0
    }
  }]
})