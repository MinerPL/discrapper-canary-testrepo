n.d(s, {
	S: function () {
		return l;
	}
});
var t = n(259076),
	o = n(689938);
let a = {
	[t.pw.DISCORD_EMPLOYEE_ASKED_ME_TO]: () => o.Z.Messages.EMAIL_CHANGE_REASONING_DISCORD_EMPLOYEE_ASKED,
	[t.pw.SOMEONE_ASKED_ME_TO]: () => o.Z.Messages.EMAIL_CHANGE_REASONING_SOMEONE_ASKED,
	[t.pw.NEW_EMAIL]: () => o.Z.Messages.EMAIL_CHANGE_REASONING_NEW_EMAIL,
	[t.pw.SOMETHING_ELSE]: () => o.Z.Messages.EMAIL_CHANGE_REASONING_SOMETHING_ELSE
};
function l(e) {
	return a[e]();
}
