"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("913144"),
  i = n("316272"),
  r = n("782340");
class o extends i.default {
  _initialize() {
    l.default.subscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
  }
  _terminate() {
    l.default.unsubscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
  }
  handlePoggermodeTemporarilyDisabled() {
    (0, s.openModal)(e => (0, a.jsx)(s.ConfirmModal, {
      ...e,
      header: r.default.Messages.POGGERMODE_TEMPORARILY_DISABLED_TOAST_TITLE,
      confirmText: r.default.Messages.CONFIRM,
      confirmButtonColor: s.Button.Colors.GREEN,
      children: (0, a.jsx)(s.Text, {
        variant: "text-md/normal",
        children: r.default.Messages.POGGERMODE_TEMPORARILY_DISABLED_TOAST_BODY
      })
    }))
  }
}
var u = new o