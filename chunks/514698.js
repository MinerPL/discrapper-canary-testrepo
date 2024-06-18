"use strict";
t.d(s, {
  Z: function() {
    return c
  }
});
var n = t(735250);
t(470079);
var i = t(442837),
  l = t(481060),
  a = t(933557),
  r = t(592125),
  o = t(689938);

function c(e) {
  let {
    onConfirm: s,
    onCancel: t,
    channelId: c
  } = e, d = (0, i.e7)([r.Z], () => null != c ? r.Z.getChannel(c) : null), u = (0, a.ZP)(d, !0);
  return (0, n.jsx)(l.DeclarativeConfirmModal, {
    dismissable: !0,
    header: o.Z.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_TITLE,
    confirmText: o.Z.Messages.REMOVE,
    cancelText: o.Z.Messages.CANCEL,
    onConfirm: s,
    onCancel: t,
    children: (0, n.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: null != d ? o.Z.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_BODY.format({
        channelName: u
      }) : o.Z.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_BODY_GENERIC
    })
  })
}