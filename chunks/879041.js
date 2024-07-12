n.d(t, {
  e: function() {
return l;
  }
});
let i = (0, n(818083).B)({
  kind: 'user',
  id: '2022-12_message_request_home_count',
  label: 'Safety Experience Message Request Home Count',
  defaultConfig: {
enabled: !1
  },
  treatments: [{
id: 1,
label: 'The Message Request home count uses new data stores',
config: {
  enabled: !0
}
  }]
});

function l(e) {
  let {
location: t
  } = e;
  return i.useExperiment({
location: t
  }, {
autoTrackExposure: !0
  }).enabled;
}