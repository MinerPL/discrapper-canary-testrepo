"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var l = n("153867"),
  i = n("468026"),
  u = n("394059"),
  s = n("689938");

function d(e) {
  let {
    type: t,
    onConfirm: n,
    ...d
  } = e, r = t === u.SelfStreamAndVideoAlertType.STREAM ? s.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : s.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, o = t === u.SelfStreamAndVideoAlertType.STREAM ? s.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : s.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
  return (0, a.jsx)(i.default, {
    confirmText: s.default.Messages.CONFIRM,
    secondaryConfirmText: s.default.Messages.DONT_ASK_AGAIN,
    title: r,
    cancelText: s.default.Messages.CANCEL,
    onConfirm: n,
    onConfirmSecondary: () => {
      l.default.updatedUnsyncedSettings({
        disableHideSelfStreamAndVideoConfirmationAlert: !0
      }), n()
    },
    body: o,
    ...d
  })
}