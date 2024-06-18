"use strict";
n.d(t, {
  Dy: function() {
    return E
  },
  Rg: function() {
    return d
  },
  sA: function() {
    return o
  },
  wh: function() {
    return T
  },
  wm: function() {
    return a
  }
});
var i = n(818083);
let r = (0, i.B)({
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
    }, {
      id: 4,
      label: "Another Heuristic treatment for comparison ranking",
      config: {
        enabled: !0
      }
    }]
  }),
  s = (0, i.B)({
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

function o(e) {
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
  return t && s.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !0
  }), t
}

function a(e) {
  let {
    impressionCappingEnabled: t
  } = r.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !0
  });
  return !0 === t
}(0, i.B)({
  kind: "user",
  id: "2024-03_content_inventory_surface_holdout",
  label: "Content Inventory Surface Holdout",
  defaultConfig: {},
  treatments: []
});
let l = (0, i.B)({
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
  u = (0, i.B)({
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
  _ = (0, i.B)({
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

function d(e) {
  let {
    enabled: t
  } = _.useExperiment({
    location: e
  }, {
    autoTrackExposure: !0
  });
  return t
}
let c = (0, i.B)({
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
let I = (0, i.B)({
  kind: "user",
  id: "2024-05_content_inventory_games_rich_presence",
  label: "Content Inventory: Rich Presence for Games",
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

function T(e) {
  let {
    enabled: t
  } = I.useExperiment({
    location: e
  }, {
    autoTrackExposure: !0
  });
  return t
}