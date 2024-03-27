"use strict";
n.r(t), n.d(t, {
  isMemberListActivityHidden: function() {
    return s
  }
});
var a = n("862205");
let l = (0, a.createExperiment)({
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

function s(e) {
  return l.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !0
  }).hideActivities
}