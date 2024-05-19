"use strict";
n.r(t);
var s = n("818083");
let a = (0, s.createExperiment)({
  kind: "user",
  id: "2024-05_brand_refresh_desktop_may_24",
  label: "Brand Refresh Desktop Experiment May 2024",
  defaultConfig: {
    isWelcomeRefreshEnabled: !1,
    isInviteRefreshEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "Welcome + Accept Invite Refresh",
    config: {
      isWelcomeRefreshEnabled: !0,
      isInviteRefreshEnabled: !0
    }
  }, {
    id: 2,
    label: "Accept Invite Refresh Only",
    config: {
      isWelcomeRefreshEnabled: !1,
      isInviteRefreshEnabled: !0
    }
  }, {
    id: 3,
    label: "Welcome Refresh Only",
    config: {
      isWelcomeRefreshEnabled: !0,
      isInviteRefreshEnabled: !1
    }
  }]
});
t.default = a