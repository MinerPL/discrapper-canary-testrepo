n.d(t, {
  oK: function() {
return r;
  }
});
let s = (0, n(818083).B)({
  kind: 'user',
  id: '2023-09_iar_dsa_webform',
  label: 'Safety Experience Unauthenticated Report Form',
  defaultConfig: {
enabled: !1
  },
  treatments: [{
  id: 1,
  label: 'EU user',
  config: {
    enabled: !0
  }
},
{
  id: 2,
  label: 'DSA E2E testing user',
  config: {
    enabled: !0
  }
}
  ]
});

function r(e) {
  return s.useExperiment({
location: e
  }, {
autoTrackExposure: !0
  }).enabled;
}