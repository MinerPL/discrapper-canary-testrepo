n.d(t, {
  T: function() {
return i;
  },
  m1: function() {
return a;
  }
});
var r = n(818083);
let i = (0, r.B)({
kind: 'user',
id: '2023-11_app_launcher_desktop',
label: 'App Launcher - Desktop',
defaultConfig: {
  enabled: !1
},
treatments: [{
  id: 1,
  label: 'Enable the app launcher feature on desktop',
  config: {
    enabled: !0
  }
}]
  }),
  a = (0, r.B)({
kind: 'user',
id: '2024-06_desktop_app_launcher_in_activities_shelf',
label: 'Desktop App Launcher In Activities Shelf',
defaultConfig: {
  enabled: !1,
  clickOnHomeActivityOpensAppDetail: !1
},
treatments: [{
    id: 1,
    label: 'Enable the desktop app launcher in activities shelf: On home screen, clicking activity card -> performs activity action (i.e. launch)',
    config: {
      enabled: !0,
      clickOnHomeActivityOpensAppDetail: !1
    }
  },
  {
    id: 2,
    label: 'Enable the desktop app launcher in activities shelf: On home screen, clicking activity card -> activity detail page',
    config: {
      enabled: !0,
      clickOnHomeActivityOpensAppDetail: !0
    }
  }
]
  });
(0, r.B)({
  kind: 'user',
  id: '2024-06_mobile_app_launcher_in_activities_shelf',
  label: '[Mobile] App Launcher in Activities Shelf',
  defaultConfig: {
enabled: !1,
clickOnHomeActivityOpensAppDetail: !1
  },
  treatments: [{
  id: 1,
  label: 'Enable the activities shelf getting replaced by App Launcher on mobile',
  config: {
    enabled: !0,
    clickOnHomeActivityOpensAppDetail: !1
  }
},
{
  id: 2,
  label: 'On home screen, clicking activity card -> activity detail page',
  config: {
    enabled: !0,
    clickOnHomeActivityOpensAppDetail: !0
  }
}
  ]
}), (0, r.B)({
  kind: 'user',
  id: '2024-07_open_platform_app_launcher',
  label: 'Open Platform App Launcher',
  defaultConfig: {
enabled: !1
  },
  treatments: [{
id: 1,
label: 'Enable the App Launcher changes for Open Platform',
config: {
  enabled: !0
}
  }]
});