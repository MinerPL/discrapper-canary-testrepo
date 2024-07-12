n.d(t, {
  R: function() {
return i;
  }
});
let r = (0, n(818083).B)({
  kind: 'user',
  id: '2022-09_remote_audio_settings',
  label: 'Remote Audio Settings',
  defaultConfig: {
readWriteRemoteSettings: !1
  },
  treatments: [{
id: 1,
label: 'Read/write remote audio settings',
config: {
  readWriteRemoteSettings: !0
}
  }]
});

function i() {
  return r.getCurrentConfig({
location: 'da0fa6_1'
  }, {
autoTrackExposure: !1
  }).readWriteRemoteSettings;
}