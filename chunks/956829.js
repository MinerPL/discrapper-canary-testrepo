"use strict";
n.r(t), n.d(t, {
  CommunityEndlessInvitesExperiment: function() {
    return l
  }
});
let l = (0, n("818083").createExperiment)({
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