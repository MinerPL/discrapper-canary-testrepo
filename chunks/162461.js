"use strict";
n.r(t), n.d(t, {
  isEligibleForContentInventoryV1: function() {
    return s
  },
  isEligibleForImpressionCapping: function() {
    return o
  },
  isEligibleForListenedMediaInventory: function() {
    return E
  },
  useIsEligibleForTopArtistInventory: function() {
    return _
  }
});
var i = n("818083");
let r = (0, i.createExperiment)({
    kind: "user",
    id: "2024-03_content_inventory_memberlist_and_ranker",
    label: "Enables the memberlist content feed",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Recency",
      config: {
        enabled: !0
      }
    }, {
      id: 2,
      label: "Heuristic",
      config: {
        enabled: !0
      }
    }, {
      id: 3,
      label: "Noteworthy",
      config: {
        enabled: !0,
        impressionCappingEnabled: !0
      }
    }]
  }),
  a = (0, i.createExperiment)({
    kind: "user",
    id: "2024-03_content_inventory_ranker_client_dummy",
    label: "Tracks exposure for which ranker bucket the user is in. This is here to test an exposure bug",
    defaultConfig: {},
    treatments: [{
      id: 1,
      label: "Heuristic",
      config: {}
    }]
  });

function s(e) {
  u.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !0
  }), l.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !0
  });
  let {
    enabled: t
  } = r.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !0
  });
  return t && a.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !0
  }), t
}

function o(e) {
  let {
    impressionCappingEnabled: t
  } = r.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !0
  });
  return !0 === t
}(0, i.createExperiment)({
  kind: "user",
  id: "2024-03_content_inventory_surface_holdout",
  label: "Content Inventory Surface Holdout",
  defaultConfig: {},
  treatments: []
});
let l = (0, i.createExperiment)({
    kind: "user",
    id: "2024-03_holdout_bug_main_wrong_way",
    label: "Holdout Bug Experiment Wrong Way (pls ignore)",
    defaultConfig: {},
    treatments: [{
      id: 1,
      label: "Treament",
      config: {}
    }]
  }),
  u = (0, i.createExperiment)({
    kind: "user",
    id: "2024-03_holdout_bug_main_right_way",
    label: "Holdout Bug Experiment Right Way (pls ignore)",
    defaultConfig: {},
    treatments: [{
      id: 1,
      label: "Treament",
      config: {}
    }]
  }),
  d = (0, i.createExperiment)({
    kind: "user",
    id: "2024-05_content_inventory_top_artist_cards",
    label: "Content Inventory: TOP_ARTIST cards",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enabled",
      config: {
        enabled: !0
      }
    }]
  });

function _(e) {
  let {
    enabled: t
  } = d.useExperiment({
    location: e
  }, {
    autoTrackExposure: !0
  });
  return t
}
let c = (0, i.createExperiment)({
  kind: "user",
  id: "2024-04_content_inventory_listened_media",
  label: "Content Inventory: LISTENED_MEDIA",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }]
});

function E(e) {
  let {
    enabled: t
  } = c.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !0
  });
  return t
}