n.r(s);
var a = n(735250);
n(470079);
var t = n(153867),
  C = n(468026),
  r = n(933557),
  c = n(689938);
s.default = e => {
  let {
onConfirm: s,
channel: n,
...i
  } = e, o = (0, r.ZP)(n);
  return null == o ? null : (0, a.jsx)(C.default, {
confirmText: c.Z.Messages.CONFIRM,
secondaryConfirmText: c.Z.Messages.DONT_ASK_AGAIN,
title: c.Z.Messages.VOICE_CHANNEL_CHANGE_CONFIRMATION_HEADER,
cancelText: c.Z.Messages.CANCEL,
onConfirm: s,
onConfirmSecondary: () => {
  t.ZP.updatedUnsyncedSettings({
    disableVoiceChannelChangeAlert: !0
  }), s();
},
body: c.Z.Messages.VOICE_CHANNEL_CHANGE_CONFIRMATION_BODY.format({
  channel: o
}),
...i
  });
};