t.d(s, {
  j: function() {
return a;
  }
});
let n = (0, t(818083).B)({
  kind: 'user',
  id: '2023-07_mfa_email_verification',
  label: 'Safety Experience Mfa Email Verification',
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
  let {
enabled: e
  } = n.getCurrentConfig({
location: '41ef90_2'
  }, {
autoTrackExposure: !0
  });
  return e;
}