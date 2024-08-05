n.d(t, {
  T: function() {
return a;
  }
});
let i = (0, n(818083).B)({
  kind: 'user',
  id: '2023-05_clear_pending_incoming_friend_requests',
  label: 'Enable ability to clear incoming friend requests',
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

function a() {
  return i.useExperiment({
location: 'ca2288_1'
  }, {
autoTrackExposure: !0
  }).enabled;
}