"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  r = n("689938");

function E(e) {
  let {
    onConfirm: t,
    ...n
  } = e;
  return (0, s.jsx)(a.ConfirmModal, {
    header: r.default.Messages.MEMBERS_TABLE_NEW_MEMBER_TIMESTAMP_REFRESH_MODAL_TITLE,
    confirmText: r.default.Messages.OK,
    cancelText: r.default.Messages.CANCEL,
    confirmButtonColor: a.Button.Colors.BRAND,
    onConfirm: t,
    ...n,
    children: (0, s.jsx)(a.Text, {
      variant: "text-md/normal",
      children: r.default.Messages.MEMBERS_TABLE_NEW_MEMBER_TIMESTAMP_REFRESH_MODAL_DESCRIPTION
    })
  })
}