"use strict";
n.d(t, {
  Q: function() {
    return r
  },
  i: function() {
    return i
  }
});
let i = (0, n(818083).B)({
  id: "2024-05_desktop_visual_refresh",
  label: "Desktop Visual Refresh",
  kind: "user",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 0,
    label: "Control",
    config: {
      enabled: !1
    }
  }, {
    id: 1,
    label: "Refresh Enabled",
    config: {
      enabled: !0
    }
  }]
});

function r(e) {
  return i.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !1
  }).enabled
}