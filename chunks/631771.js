n.d(t, {
  Gi: function() {
return a;
  },
  MP: function() {
return s;
  },
  PC: function() {
return o;
  },
  YN: function() {
return l;
  }
});
var r = n(818083),
  i = n(474936);
let a = (0, r.B)({
id: '2024-06_premium_emoji_desktop_upsell',
label: 'Premium Emoji Desktop Upsell',
kind: 'user',
defaultConfig: {
  enabled: !1,
  addSocialProof: !1
},
treatments: [{
    id: 1,
    label: 'Enable new roadblock experience',
    config: {
      enabled: !0,
      addSocialProof: !1
    }
  },
  {
    id: 2,
    label: 'Enable new roadblock experience with social proof',
    config: {
      enabled: !0,
      addSocialProof: !0
    }
  }
]
  }),
  o = (0, r.B)({
id: '2024-06_hd_streaming_desktop_upsell',
label: 'HD Streaming Desktop Upsell',
kind: 'user',
defaultConfig: {
  enabled: !1,
  addSocialProof: !1
},
treatments: [{
    id: 1,
    label: 'Enable new roadblock modal',
    config: {
      enabled: !0,
      addSocialProof: !1
    }
  },
  {
    id: 2,
    label: 'Enable new roadblock modal with social proof',
    config: {
      enabled: !0,
      addSocialProof: !0
    }
  }
]
  }),
  s = (0, r.B)({
id: '2024-05_file_upload_desktop_upsell',
label: 'File Upload Desktop Upsell',
kind: 'user',
defaultConfig: {
  enabled: !1,
  addSocialProof: !1
},
treatments: [{
    id: 1,
    label: 'Enable new roadblock modal',
    config: {
      enabled: !0,
      addSocialProof: !1
    }
  },
  {
    id: 2,
    label: 'Enable new roadblock modal with social proof',
    config: {
      enabled: !0,
      addSocialProof: !0
    }
  }
]
  });

function l(e) {
  switch (e) {
case i.cd.UPLOAD_ERROR_UPSELL:
  return s.getCurrentConfig({
    location: 'File Upload Roadblock'
  }, {
    autoTrackExposure: !1
  }).addSocialProof;
case i.cd.STREAM_QUALITY_UPSELL:
  return o.getCurrentConfig({
    location: 'HD Streaming Roadblock'
  }, {
    autoTrackExposure: !1
  }).addSocialProof;
default:
  return !1;
  }
}