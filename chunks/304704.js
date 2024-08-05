n.d(t, {
  Z: function() {
return i;
  }
});
let r = (0, n(818083).B)({
kind: 'user',
id: '2024-07_user_profile_new_activity_cards',
label: 'User Profile New Activity Cards Experiment',
defaultConfig: {
  newActivityCardsEnabled: !1
},
treatments: [{
  id: 1,
  label: 'New activity cards enabled',
  config: {
    newActivityCardsEnabled: !0
  }
}]
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