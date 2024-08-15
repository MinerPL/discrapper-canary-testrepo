t.d(s, {
	c: function () {
		return i;
	}
}),
	t(399606),
	t(430824),
	t(496675),
	t(594174);
var n = t(981631),
	a = t(689938);
function i(e) {
	return e.hasAnyStaffLevel() || e.hasFlag(n.xW$.PARTNER) ? a.Z.Messages.MFA_SMS_DISABLED_PARTNER : null == e.email ? a.Z.Messages.MFA_SMS_DISABLED_NO_EMAIL : null;
}
