"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var s = a("735250");
a("470079");
var n = a("399606"),
  r = a("481060"),
  o = a("594174"),
  u = a("51144"),
  d = a("689938");

function f(e) {
  let {
    transitionState: t,
    onClose: a,
    userId: f,
    onCancel: i,
    confirmBlock: l
  } = e, c = (0, n.useStateFromStores)([o.default], () => o.default.getUser(f)), C = u.default.useName(c);
  return (0, s.jsx)(r.ConfirmModal, {
    header: d.default.Messages.CONFIRM_USER_BLOCK_TITLE.format({
      name: C
    }),
    confirmText: d.default.Messages.BLOCK,
    cancelText: d.default.Messages.CANCEL,
    onConfirm: l,
    onClose: a,
    onCancel: i,
    transitionState: t,
    children: (0, s.jsx)(r.Text, {
      variant: "text-md/normal",
      children: d.default.Messages.CONFIRM_USER_BLOCK_BODY.format({
        name: C
      })
    })
  })
}