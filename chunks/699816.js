n.d(t, {
  Sx: function() {
return i;
  },
  zL: function() {
return a;
  }
});
let r = (0, n(818083).B)({
  kind: 'user',
  id: '2023-10_staff_teen_safety_assist_age_bypass',
  label: 'Staff Teen Safety Assist Age Bypass',
  defaultConfig: {
enabled: !1
  },
  treatments: [{
id: 1,
label: 'Enable staff teen safety assist age bypass (your account will behave as a teen user)',
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

function a(e) {
  return r.useExperiment({
location: e
  }, {
autoTrackExposure: !0
  }).enabled;
}