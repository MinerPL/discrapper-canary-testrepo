"use strict";
n.d(t, {
  G: function() {
    return r
  },
  s: function() {
    return i
  }
});
let i = (0, n(818083).B)({
  kind: "user",
  id: "2024-04_dm_settings_upsell",
  label: "DM Settings Upsell",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable DM Settings Upsell (with upsell threshold at 2 rejected MRs)",
    config: {
      enabled: !0
    }
  }, {
    id: 2,
    label: "Enable DM Settings Upsell (with upsell threshold at 3 rejected MRs)",
    config: {
      enabled: !0
    }
  }]
});

function r(e) {
  let {
    location: t,
    autoTrackExposure: n = !1
  } = e;
  return i.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  }).enabled
}