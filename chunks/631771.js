"use strict";
n.d(t, {
  MP: function() {
    return o
  },
  PC: function() {
    return s
  },
  YN: function() {
    return a
  }
});
var i = n(818083),
  r = n(474936);
let s = (0, i.B)({
    id: "2024-06_hd_streaming_desktop_upsell",
    label: "HD Streaming Desktop Upsell",
    kind: "user",
    defaultConfig: {
      enabled: !1,
      addSocialProof: !1
    },
    treatments: [{
      id: 1,
      label: "Enable new roadblock modal",
      config: {
        enabled: !0,
        addSocialProof: !1
      }
    }, {
      id: 2,
      label: "Enable new roadblock modal with social proof",
      config: {
        enabled: !0,
        addSocialProof: !0
      }
    }]
  }),
  o = (0, i.B)({
    id: "2024-05_file_upload_desktop_upsell",
    label: "File Upload Desktop Upsell",
    kind: "user",
    defaultConfig: {
      enabled: !1,
      addSocialProof: !1
    },
    treatments: [{
      id: 1,
      label: "Enable new roadblock modal",
      config: {
        enabled: !0,
        addSocialProof: !1
      }
    }, {
      id: 2,
      label: "Enable new roadblock modal with social proof",
      config: {
        enabled: !0,
        addSocialProof: !0
      }
    }]
  });

function a(e) {
  switch (e) {
    case r.cd.UPLOAD_ERROR_UPSELL:
      return o.getCurrentConfig({
        location: "File Upload Roadblock"
      }, {
        autoTrackExposure: !1
      }).addSocialProof;
    case r.cd.STREAM_QUALITY_UPSELL:
      return s.getCurrentConfig({
        location: "HD Streaming Roadblock"
      }, {
        autoTrackExposure: !1
      }).addSocialProof;
    default:
      return !1
  }
}