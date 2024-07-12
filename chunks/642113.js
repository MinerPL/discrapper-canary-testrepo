n.d(t, {
  V: function() {
return i;
  }
});
let r = (0, n(818083).B)({
kind: 'user',
id: '2024-05_simplified_profile_friending',
label: 'Simplified Profile Friending Experiment',
defaultConfig: {
  originalFriendingEnabled: !1,
  improvedFriendingEnabled: !0
},
treatments: [{
    id: 1,
    label: 'Original friending',
    config: {
      originalFriendingEnabled: !0,
      improvedFriendingEnabled: !1
    }
  },
  {
    id: 2,
    label: 'Improved friending',
    config: {
      originalFriendingEnabled: !1,
      improvedFriendingEnabled: !0
    }
  }
]
  }),
  i = e => {
let {
  location: t,
  autoTrackExposure: n = !0,
  trackExposureOptions: i = {}
} = e;
return r.useExperiment({
  location: t
}, {
  autoTrackExposure: n,
  trackExposureOptions: i
});
  };