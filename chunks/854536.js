"use strict";
S.r(s);
var e = S("818083");
s.default = (0, e.createExperiment)({
  kind: "guild",
  id: "2024-01_voice_call_backgrounds_mobile",
  label: "Custom backgrounds for mobile voice calls",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable custom voice backgrounds (full set)",
    config: {
      enabled: !0
    }
  }, {
    id: 2,
    label: "Enable custom voice backgrounds (small set)",
    config: {
      enabled: !0,
      useSmallSet: !0
    }
  }]
})