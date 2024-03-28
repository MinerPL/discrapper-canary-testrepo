"use strict";
n.r(t);
let l = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-03_gdm_facepiles_desktop",
  label: "Group DM Facepiles (Desktop)",
  defaultConfig: {
    isFacepileEnabled: !1,
    isStatusIndicatorEnabled: !1,
    isTypingIndicatorEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "Facepiles",
    config: {
      isFacepileEnabled: !0,
      isStatusIndicatorEnabled: !1,
      isTypingIndicatorEnabled: !1
    }
  }, {
    id: 2,
    label: "Facepiles + Status Indicator",
    config: {
      isFacepileEnabled: !0,
      isStatusIndicatorEnabled: !0,
      isTypingIndicatorEnabled: !1
    }
  }, {
    id: 3,
    label: "Facepiles + Status Indicator + Typing Indicator",
    config: {
      isFacepileEnabled: !0,
      isStatusIndicatorEnabled: !0,
      isTypingIndicatorEnabled: !0
    }
  }]
});
t.default = l