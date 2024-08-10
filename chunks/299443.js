n.d(t, {
  j: function() {
return i;
  }
});
let r = (0, n(818083).B)({
  kind: 'user',
  id: '2024-08_iar_privacy_and_safety_settings_upsells',
  label: 'IAR Privacy & Safety Settings Upsells',
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
  } = r.getCurrentConfig({
location: e
  }, {
autoTrackExposure: !0
  });
  return t;
}