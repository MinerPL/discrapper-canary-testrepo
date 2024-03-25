"use strict";
n.r(t), n.d(t, {
  CommunityEndlessInvitesExperiment: function() {
    return a
  }
});
var l = n("862205");
let a = (0, l.createExperiment)({
  kind: "guild",
  id: "2023-04_community_endless_invites",
  label: "Community Endless Invites",
  defaultConfig: {
    defaultInvitesToNeverExpire: !1
  },
  treatments: [{
    id: 1,
    label: "Causes invites to never expire (by default) in the Guild",
    config: {
      defaultInvitesToNeverExpire: !0
    }
  }]
})