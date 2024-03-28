"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("735250");
n("470079");
var a = n("481060"),
  s = n("933557"),
  i = n("689938"),
  r = n("570005");

function o(e) {
  let {
    channel: t,
    category: n,
    ...o
  } = e, u = (0, s.default)(t, !0), d = (0, s.default)(n);
  return (0, l.jsx)(a.ConfirmModal, {
    header: i.default.Messages.CONFIRM_CHANNEL_DRAG_TITLE,
    confirmText: i.default.Messages.SYNC_PERMISSIONS,
    cancelText: i.default.Messages.KEEP_PERMISSIONS,
    confirmButtonColor: a.Button.Colors.BRAND,
    ...o,
    children: (0, l.jsx)(a.Text, {
      variant: "text-md/normal",
      className: r.message,
      selectable: !1,
      children: i.default.Messages.SYNC_PERMISSIONS_EXPLANATION.format({
        channelName: u,
        categoryName: d
      })
    })
  })
}