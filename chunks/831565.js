n.d(t, {
  a: function() {
return i;
  },
  v: function() {
return o;
  }
});
let s = (0, n(818083).B)({
  kind: 'user',
  id: '2024-07_global_discovery',
  label: 'Global Discovery',
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

function o(e) {
  let {
location: t,
autoTrackExposure: n = !0
  } = e, {
enabled: o
  } = s.useExperiment({
location: t
  }, {
autoTrackExposure: n
  });
  return o;
}

function i(e) {
  let {
location: t,
autoTrackExposure: n = !0
  } = e, {
enabled: o
  } = s.getCurrentConfig({
location: t
  }, {
autoTrackExposure: n
  });
  return o;
}