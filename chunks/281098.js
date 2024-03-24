"use strict";
s.r(t), s.d(t, {
  updateDmSafetyAlertsSetting: function() {
    return l
  }
});
var a = s("750028"),
  n = s("872173");
let l = e => n.PreloadedUserSettingsActionCreators.updateAsync("privacy", t => {
  t.inappropriateConversationWarnings = a.BoolValue.create({
    value: e
  })
}, n.UserSettingsDelay.INFREQUENT_USER_ACTION)