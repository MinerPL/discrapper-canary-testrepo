"use strict";
n.d(t, {
  l: function() {
    return r
  }
});
let i = (0, n(818083).B)({
  kind: "user",
  id: "2024-05_iar_spam_reorder",
  label: "IAR Spam Reorder",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }]
});

function r(e) {
  let {
    enabled: t
  } = i.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !0
  });
  return t
}