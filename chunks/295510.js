t.d(n, {
  Z: function() {
return l;
  }
});
var i = t(735250);
t(470079);
var r = t(153867),
  a = t(468026),
  u = t(394059),
  o = t(689938);

function l(e) {
  let {
type: n,
onConfirm: t,
...l
  } = e, s = n === u.K.STREAM ? o.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : o.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, d = n === u.K.STREAM ? o.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : o.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
  return (0, i.jsx)(a.default, {
confirmText: o.Z.Messages.CONFIRM,
secondaryConfirmText: o.Z.Messages.DONT_ASK_AGAIN,
title: s,
cancelText: o.Z.Messages.CANCEL,
onConfirm: t,
onConfirmSecondary: () => {
  r.ZP.updatedUnsyncedSettings({
    disableHideSelfStreamAndVideoConfirmationAlert: !0
  }), t();
},
body: d,
...l
  });
}