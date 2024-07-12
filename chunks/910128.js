n.d(t, {
  l: function() {
return i;
  }
});
let r = (0, n(818083).B)({
kind: 'user',
id: '2024-06_profile_engagement_ctas',
label: 'Simplified Profile Primary Engagement Ctas',
defaultConfig: {
  messageCtaEnabled: !1,
  activeInviteToCallCtaEnabled: !1,
  persistentCallCtaEnabled: !1
},
treatments: [{
    id: 1,
    label: 'Message Cta on all profiles',
    config: {
      messageCtaEnabled: !0,
      activeInviteToCallCtaEnabled: !1,
      persistentCallCtaEnabled: !1
    }
  },
  {
    id: 2,
    label: 'Message Cta and invite to call Cta when active in call',
    config: {
      messageCtaEnabled: !0,
      activeInviteToCallCtaEnabled: !0,
      persistentCallCtaEnabled: !1
    }
  },
  {
    id: 3,
    label: 'Message Cta and persistent call Cta',
    config: {
      messageCtaEnabled: !0,
      activeInviteToCallCtaEnabled: !1,
      persistentCallCtaEnabled: !0
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