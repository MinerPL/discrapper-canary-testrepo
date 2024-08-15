var r = n(481060),
	i = n(375964),
	a = n(703656),
	s = n(302155),
	o = n(71509),
	l = n(981631),
	u = n(689938);
t.Z = new s.Z({
	onSwitchSuccess(e, t) {
		setTimeout(() => {
			t && (0, a.uL)(l.Z5c.ME), (0, r.showToast)((0, r.createToast)(u.Z.Messages.SWITCH_ACCOUNTS_TOAST_LOGIN_SUCCESS.format({ username: e.username }), r.ToastType.SUCCESS));
		}, 100);
	},
	onSwitchError() {
		(0, r.showToast)((0, r.createToast)(i.SWITCH_ACCOUNTS_TOAST_LOGIN_ERROR, r.ToastType.FAILURE));
	},
	onTokenSet() {
		(0, r.closeModal)(o.Ui);
	}
});
