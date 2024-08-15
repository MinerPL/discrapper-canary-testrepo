n.d(t, {
  P: function() {
return i;
  }
});
let r = (0, n(818083).B)({
  kind: 'user',
  id: '2023-09_soundmoji',
  label: 'Soundmoji',
  defaultConfig: {
enabled: !1
  },
  treatments: [{
id: 1,
label: 'Enabled',
config: {
  enabled: !0
}
  }]
});

function i(e) {
  let {
enabled: t
  } = r.useExperiment({
location: e
  }, {
autoTrackExposure: !0
  });
  return t;
}