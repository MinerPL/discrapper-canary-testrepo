"use strict";
n.r(t);
var a = n("818083");
t.default = (0, a.createExperiment)({
  kind: "user",
  id: "2022-04_account_profile_popout",
  label: "Account Profile Popout",
  defaultConfig: {
    isPopupEnabled: !1,
    isTaglessAccountPanelEnabled: !1,
    isJoinedTagButtonEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Account Profile Popout",
    config: {
      isPopupEnabled: !0,
      isTaglessAccountPanelEnabled: !1,
      isJoinedTagButtonEnabled: !1
    }
  }, {
    id: 2,
    label: "Enable Account Profile Popout w/ DiscordTag button",
    config: {
      isPopupEnabled: !0,
      isTaglessAccountPanelEnabled: !1,
      isJoinedTagButtonEnabled: !0
    }
  }]
})