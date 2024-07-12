n.d(t, {
  O: function() {
return i;
  }
});
let r = (0, n(818083).B)({
kind: 'user',
id: '2024-06_simplified_profile_panel_friending',
label: 'Simplified Profile Panel Friending Experiment',
defaultConfig: {
  improvedPanelFriendingEnabled: !1
},
treatments: [{
  id: 1,
  label: 'Improved friending',
  config: {
    improvedPanelFriendingEnabled: !0
  }
}]
  }),
  i = e => {
let {
  location: t,
  autoTrackExposure: n = !0,
  trackExposureOptions: i = {}
} = e;
return r.getCurrentConfig({
  location: t
}, {
  autoTrackExposure: n,
  trackExposureOptions: i
});
  };