s.d(t, {
  c: function() {
return i;
  }
}), s(399606), s(430824), s(496675), s(594174);
var n = s(981631),
  a = s(689938);

function i(e) {
  return e.hasAnyStaffLevel() || e.hasFlag(n.xW$.PARTNER) ? a.Z.Messages.MFA_SMS_DISABLED_PARTNER : null == e.email ? a.Z.Messages.MFA_SMS_DISABLED_NO_EMAIL : null;
}