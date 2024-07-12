n.d(t, {
  Sv: function() {
return r;
  },
  Y$: function() {
return l;
  }
});
let i = (0, n(818083).B)({
  kind: 'user',
  id: '2024-07_global_discovery',
  label: 'Global Discovery',
  defaultConfig: {
mobileTabEnabled: !1,
discoverButtonTakeoverEnabled: !1
  },
  treatments: [{
  id: 1,
  label: 'Enable mobile tab',
  config: {
    mobileTabEnabled: !0,
    discoverButtonTakeoverEnabled: !1
  }
},
{
  id: 2,
  label: 'Enable discover button takeover',
  config: {
    mobileTabEnabled: !1,
    discoverButtonTakeoverEnabled: !0
  }
},
{
  id: 3,
  label: 'Enable mobile tab and discover button takeover',
  config: {
    mobileTabEnabled: !0,
    discoverButtonTakeoverEnabled: !0
  }
}
  ]
});

function l(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return i.useExperiment({
location: e
  }, {
autoTrackExposure: t
  }).discoverButtonTakeoverEnabled;
}

function r(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return i.getCurrentConfig({
location: e
  }, {
autoTrackExposure: t
  }).discoverButtonTakeoverEnabled;
}