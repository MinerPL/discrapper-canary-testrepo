n.d(t, {
  A: function() {
return l;
  }
});
var r = n(442837),
  i = n(818083),
  a = n(592125),
  s = n(155647);
let o = (0, i.B)({
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

function l(e) {
  let {
location: t,
settingsUpsells: n,
channelId: i
  } = e, l = (0, r.e7)([a.Z], () => a.Z.getChannel(i));
  return (0, s.jc)(n, null == l ? void 0 : l.type).length > 0 && function(e) {
let {
  enabled: t
} = o.getCurrentConfig({
  location: e
}, {
  autoTrackExposure: !0
});
return t;
  }(t);
}