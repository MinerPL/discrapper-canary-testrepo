n.d(t, {
  x: function() {
return i;
  }
});
let r = (0, n(818083).B)({
  kind: 'user',
  id: '2024-06_game_profile_experiment',
  label: 'Enables the Game Profile',
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
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
{
  enabled: n
} = r.useExperiment({
  location: e
}, {
  autoTrackExposure: t
});
  return n;
}