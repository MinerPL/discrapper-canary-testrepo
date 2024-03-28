"use strict";
n.r(t), n.d(t, {
  isMemberListActivityHidden: function() {
    return l
  }
});
let a = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-02_hide_member_list_activities",
  label: "Hide member list activities",
  defaultConfig: {
    hideActivities: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled (hide activities)",
    config: {
      hideActivities: !0
    }
  }]
});

function l(e) {
  return a.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !0
  }).hideActivities
}