"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("862205");
let a = (0, i.createExperiment)({
  kind: "user",
  id: "2024-03_packages",
  label: "Packages",
  defaultConfig: {
    allowOpeningLootboxes: !1,
    showMainEntrypoints: !1
  },
  treatments: [{
    id: 1,
    label: "Allow users to open packages",
    config: {
      allowOpeningLootboxes: !0,
      showMainEntrypoints: !0
    }
  }, {
    id: 2,
    label: "Allow users to open packages 2",
    config: {
      allowOpeningLootboxes: !0,
      showMainEntrypoints: !1
    }
  }]
});
var s = a