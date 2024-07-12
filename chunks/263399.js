s.d(t, {
  H: function() {
return a;
  }
});
let n = (0, s(818083).B)({
kind: 'user',
id: '2024-05_server_settings_in_user_settings',
label: 'Server privacy settings in user settings menu',
defaultConfig: {
  enabled: !1
},
treatments: [{
  id: 1,
  label: 'Enable Server Settings in user settings',
  config: {
    enabled: !0
  }
}]
  }),
  a = e => {
let {
  location: t
} = e;
return n.useExperiment({
  location: t
}).enabled;
  };