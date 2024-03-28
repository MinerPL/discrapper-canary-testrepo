"use strict";
s.r(a);
var t = s("735250");
s("470079");
var n = s("153867"),
  d = s("468026"),
  l = s("933557"),
  u = s("689938");
a.default = e => {
  let {
    onConfirm: a,
    channel: s,
    ...C
  } = e, r = (0, l.default)(s);
  return null == r ? null : (0, t.jsx)(d.default, {
    confirmText: u.default.Messages.CONFIRM,
    secondaryConfirmText: u.default.Messages.DONT_ASK_AGAIN,
    title: u.default.Messages.VOICE_CHANNEL_CHANGE_CONFIRMATION_HEADER,
    cancelText: u.default.Messages.CANCEL,
    onConfirm: a,
    onConfirmSecondary: () => {
      n.default.updatedUnsyncedSettings({
        disableVoiceChannelChangeAlert: !0
      }), a()
    },
    body: u.default.Messages.VOICE_CHANNEL_CHANGE_CONFIRMATION_BODY.format({
      channel: r
    }),
    ...C
  })
}