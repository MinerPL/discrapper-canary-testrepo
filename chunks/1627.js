var r = n(481060), i = n(375964), a = n(302155), o = n(71509), s = n(689938);
t.Z = new a.Z({
    onSwitchSuccess(e) {
        setTimeout(() => {
            (0, r.showToast)((0, r.createToast)(s.Z.Messages.SWITCH_ACCOUNTS_TOAST_LOGIN_SUCCESS.format({ username: e.username }), r.ToastType.SUCCESS));
        }, 100);
    },
    onSwitchError() {
        (0, r.showToast)((0, r.createToast)(i.SWITCH_ACCOUNTS_TOAST_LOGIN_ERROR, r.ToastType.FAILURE));
    },
    onTokenSet() {
        (0, r.closeModal)(o.Ui);
    }
});
