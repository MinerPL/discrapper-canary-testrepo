"use strict";
s.r(t), s.d(t, {
  getSMSBackupDisabledMessage: function() {
    return l
  }
}), s("399606"), s("430824"), s("496675"), s("594174");
var a = s("981631"),
  n = s("689938");

function l(e) {
  return e.hasAnyStaffLevel() || e.hasFlag(a.UserFlags.PARTNER) ? n.default.Messages.MFA_SMS_DISABLED_PARTNER : null == e.email ? n.default.Messages.MFA_SMS_DISABLED_NO_EMAIL : null
}