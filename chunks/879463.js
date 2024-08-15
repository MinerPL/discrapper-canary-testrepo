let n = (0, t(818083).B)({
  kind: 'user',
  id: '2023-12_pause_subscriptions_experiment',
  label: 'Pause Subscriptions Experiment',
  defaultConfig: {
enabled: !1
  },
  treatments: [{
id: 1,
label: 'Pause Subscription Enabled',
config: {
  enabled: !0
}
  }]
});
s.ZP = e => {
  let {
location: s,
autoTrackExposure: t = !0,
trackExposureOptions: a = {}
  } = e;
  return n.useExperiment({
location: s
  }, {
autoTrackExposure: t,
trackExposureOptions: a
  });
};