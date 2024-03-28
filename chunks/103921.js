"use strict";
a.r(t), a.d(t, {
  useIsForumPostPreviewEnabled: function() {
    return n
  }
});
let s = (0, a("818083").createExperiment)({
  kind: "user",
  id: "2023-10_forum_post_preview",
  label: "Enable preview of Forum post content before creation",
  defaultConfig: {
    isEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      isEnabled: !0
    }
  }]
});

function n() {
  let {
    isEnabled: e
  } = s.useExperiment({
    location: "forum_post_1"
  }, {
    autoTrackExposure: !0
  });
  return e
}