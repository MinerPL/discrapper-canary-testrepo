n.d(t, {
  a: function() {
return a;
  }
});
let i = (0, n(818083).B)({
id: '2024-04_memberlist_one_click_reply',
kind: 'user',
label: 'Memberlist One Click Reply',
defaultConfig: {
  enabled: !1
},
treatments: [{
    id: 0,
    label: 'Control',
    config: {
      enabled: !1
    }
  },
  {
    id: 1,
    label: 'One click reply enabled',
    config: {
      enabled: !0
    }
  }
]
  }),
  a = e => {
let {
  location: t,
  autoTrackExposure: n = !0
} = e, {
  enabled: a
} = i.useExperiment({
  location: t
}, {
  autoTrackExposure: n
});
return a;
  };