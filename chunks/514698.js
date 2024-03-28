"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("735250");
s("470079");
var l = s("442837"),
  n = s("481060"),
  i = s("933557"),
  r = s("592125"),
  o = s("689938");

function d(e) {
  let {
    onConfirm: t,
    onCancel: s,
    channelId: d
  } = e, u = (0, l.useStateFromStores)([r.default], () => null != d ? r.default.getChannel(d) : null), c = (0, i.default)(u, !0);
  return (0, a.jsx)(n.DeclarativeConfirmModal, {
    dismissable: !0,
    header: o.default.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_TITLE,
    confirmText: o.default.Messages.REMOVE,
    cancelText: o.default.Messages.CANCEL,
    onConfirm: t,
    onCancel: s,
    children: (0, a.jsx)(n.Text, {
      variant: "text-sm/normal",
      children: null != u ? o.default.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_BODY.format({
        channelName: c
      }) : o.default.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_BODY_GENERIC
    })
  })
}