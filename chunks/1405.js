"use strict";
E.r(_), E.d(_, {
  isEligibleForContentInventoryV1: function() {
    return r
  }
});
var t = E("862205");
let o = (0, t.createExperiment)({
    kind: "user",
    id: "2024-02_v1_content_inventory_feed",
    label: "V1 Feed of the content inventory",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Show feed",
      config: {
        enabled: !0
      }
    }]
  }),
  n = (0, t.createExperiment)({
    kind: "user",
    id: "2024-03_content_inventory_surface_holdout",
    label: "Content Inventory Surface Holdout",
    defaultConfig: {},
    treatments: []
  });

function r(e) {
  n.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !0
  });
  let {
    enabled: _
  } = o.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !0
  });
  return _
}