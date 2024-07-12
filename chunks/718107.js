n.d(t, {
  t: function() {
return i;
  }
});
let r = (0, n(818083).B)({
kind: 'user',
id: '2024-06_profile_react_reply',
label: 'Simplified Profile React Reply',
defaultConfig: {
  statusReactReplyEnabled: !1
},
treatments: [{
  id: 1,
  label: 'Enable Status React / Reply',
  config: {
    statusReactReplyEnabled: !0
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