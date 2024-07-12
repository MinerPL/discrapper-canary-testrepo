s.d(t, {
  c3: function() {
return i;
  },
  eA: function() {
return a;
  }
});
let n = (0, s(818083).B)({
  kind: 'user',
  id: '2024-05_desktop_user_settings_search',
  label: 'Desktop User Settings Search',
  defaultConfig: {
enabled: !1,
showSearchCount: !1
  },
  treatments: [{
  id: 1,
  label: 'Enable User Settings Search on Desktop',
  config: {
    enabled: !0,
    showSearchCount: !1
  }
},
{
  id: 2,
  label: 'Enable User Settings Search on Desktop with Search Count',
  config: {
    enabled: !0,
    showSearchCount: !0
  }
}
  ]
});

function a(e) {
  let {
location: t
  } = e;
  return n.useExperiment({
location: t
  }, {
autoTrackExposure: !0
  }).enabled;
}

function i(e) {
  let {
location: t
  } = e, {
enabled: s,
showSearchCount: a
  } = n.useExperiment({
location: t
  }, {
autoTrackExposure: !0
  });
  return s && a;
}