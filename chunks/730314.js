n.d(t, {
  wj: function() {
return a;
  }
});
let s = (0, n(818083).B)({
  kind: 'user',
  id: '2024-05_premium_tier_cards_experiment',
  label: 'Test tier card position and content modifications',
  defaultConfig: {
enabled: !1,
bucket: 0
  },
  treatments: [{
  id: 0,
  label: 'users see tier cards as they are now',
  config: {
    enabled: !1,
    bucket: 0
  }
},
{
  id: 1,
  label: 'users have tier cards with modified copy in nitro home and plan select',
  config: {
    enabled: !0,
    bucket: 1
  }
},
{
  id: 2,
  label: 'users see tier cards with modified copy below whats new section and in plan select',
  config: {
    enabled: !0,
    bucket: 2
  }
},
{
  id: 3,
  label: 'users only see sticky cta and no tier cards, modified copy in plan select',
  config: {
    enabled: !0,
    bucket: 3
  }
}
  ]
});

function a(e) {
  let {
enabled: t,
bucket: n
  } = s.useExperiment({
location: e
  }, {
autoTrackExposure: !0
  });
  return {
enabled: t,
bucket: n
  };
}