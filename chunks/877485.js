"use strict";
n.d(t, {
  V: function() {
    return a
  },
  c: function() {
    return o
  }
});
var i = n(818083),
  r = n(447452);
let s = (0, i.B)({
    kind: "user",
    id: "2024-05_simplified_profile_friending",
    label: "Simplified Profile Friending Experiment",
    defaultConfig: {
      originalFriendingEnabled: !1,
      improvedFriendingEnabled: !1
    },
    treatments: [{
      id: 1,
      label: "Original friending",
      config: {
        originalFriendingEnabled: !0,
        improvedFriendingEnabled: !1
      }
    }, {
      id: 2,
      label: "Improved friending",
      config: {
        originalFriendingEnabled: !1,
        improvedFriendingEnabled: !0
      }
    }]
  }),
  o = e => {
    let {
      location: t,
      autoTrackExposure: n = !0,
      trackExposureOptions: i = {}
    } = e;
    return s.getCurrentConfig({
      location: t
    }, {
      autoTrackExposure: n,
      trackExposureOptions: i
    })
  },
  a = e => {
    let {
      location: t,
      autoTrackExposure: n = !0,
      trackExposureOptions: i = {}
    } = e, {
      updatedOnAllSurfaces: o
    } = (0, r.t)({
      location: t,
      autoTrackExposure: n,
      trackExposureOptions: i
    }), {
      originalFriendingEnabled: a,
      improvedFriendingEnabled: l
    } = s.useExperiment({
      location: t
    }, {
      autoTrackExposure: n,
      trackExposureOptions: i
    });
    return {
      originalFriendingEnabled: a,
      improvedFriendingEnabled: l || !a && o
    }
  }