"use strict";
l.r(t), l.d(t, {
  PremiumHDStreamingUpsellCopyExperiment: function() {
    return a
  }
});
let a = (0, l("818083").createExperiment)({
  kind: "user",
  id: "2024-04_premium_hd_streaming_upsell_copy",
  label: "Premium HD Streaming Upsell New Copy",
  defaultConfig: {
    showNewRoadblockCopy: !1,
    showNewRoadblockRoute: !1,
    showNewUpsellCopy: !1
  },
  treatments: [{
    id: 1,
    label: "show new roadblock copy",
    config: {
      showNewRoadblockCopy: !0,
      showNewRoadblockRoute: !1,
      showNewUpsellCopy: !1
    }
  }, {
    id: 2,
    label: 'show new roadblock copy + new "View All" route',
    config: {
      showNewRoadblockCopy: !0,
      showNewRoadblockRoute: !0,
      showNewUpsellCopy: !1
    }
  }, {
    id: 3,
    label: 'show new upsell copy + new roadblock copy + new "View All" route',
    config: {
      showNewRoadblockCopy: !0,
      showNewRoadblockRoute: !0,
      showNewUpsellCopy: !0
    }
  }]
})