n.d(t, {
  K: function() {
return i;
  }
});
let r = (0, n(818083).B)({
kind: 'user',
id: '2024-06_enhanced_custom_status',
label: 'Enhanced Custom Status Experiment',
defaultConfig: {
  accountPopoutStatusEditEnabled: !1,
  profileStatusEditEnabled: !1
},
treatments: [{
    id: 1,
    label: 'Enables custom status bubble editing in the account popout',
    config: {
      accountPopoutStatusEditEnabled: !0,
      profileStatusEditEnabled: !1
    }
  },
  {
    id: 2,
    label: 'Enables custom status bubble editing in the user profile',
    config: {
      accountPopoutStatusEditEnabled: !1,
      profileStatusEditEnabled: !0
    }
  },
  {
    id: 3,
    label: 'Enables custom status bubble editing in the account popout and user profile',
    config: {
      accountPopoutStatusEditEnabled: !0,
      profileStatusEditEnabled: !0
    }
  }
]
  }),
  i = e => {
let {
  location: t,
  autoTrackExposure: n = !0,
  trackExposureOptions: i = {}
} = e;
return r.useExperiment({
  location: t
}, {
  autoTrackExposure: n,
  trackExposureOptions: i
});
  };