"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("862205");
let l = (0, i.createExperiment)({
  kind: "user",
  id: "2024-01_expanded_gift_entry_points_profile_panel",
  label: "Expanded Gift Entry Points - Profile Panel",
  defaultConfig: {
    enabled: !1,
    hideChannelGiftButton: !1
  },
  treatments: [{
    id: 1,
    label: "Show Gift Entry Point in Profile Panel",
    config: {
      enabled: !0,
      hideChannelGiftButton: !1
    }
  }, {
    id: 2,
    label: "Show Gift Entry Point in Profile Panel and Hide Channel Gift Button",
    config: {
      enabled: !0,
      hideChannelGiftButton: !0
    }
  }]
});
var a = l