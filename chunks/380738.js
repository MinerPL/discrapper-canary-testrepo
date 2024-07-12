n.d(t, {
  J: function() {
return i;
  }
});
let r = (0, n(818083).B)({
kind: 'user',
id: '2024-06_simplified_bot_profiles',
label: 'Simplified Bot Profiles Experiment',
defaultConfig: {
  botProfilesEnabled: !1
},
treatments: [{
  id: 1,
  label: 'Bot profiles enabled',
  config: {
    botProfilesEnabled: !0
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