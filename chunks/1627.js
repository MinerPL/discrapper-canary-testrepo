"use strict";
var i = n(481060),
  r = n(375964),
  s = n(302155),
  o = n(798077),
  a = n(689938);
t.Z = new s.Z({
  onSwitchSuccess(e) {
    setTimeout(() => {
      (0, i.showToast)((0, i.createToast)(a.Z.Messages.SWITCH_ACCOUNTS_TOAST_LOGIN_SUCCESS.format({
        username: e.username
      }), i.ToastType.SUCCESS))
    }, 100)
  },
  onSwitchError() {
    (0, i.showToast)((0, i.createToast)(r.SWITCH_ACCOUNTS_TOAST_LOGIN_ERROR, i.ToastType.FAILURE))
  },
  onTokenSet() {
    (0, i.closeModal)(o.Ui)
  }
})