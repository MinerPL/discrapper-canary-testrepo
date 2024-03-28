"use strict";
o.r(t), o.d(t, {
  default: function() {
    return c
  }
}), o("47120");
var r = o("735250"),
  s = o("470079"),
  a = o("433517"),
  n = o("481060"),
  u = o("818634"),
  d = o("689938"),
  i = o("947532");

function c(e) {
  let [t, o] = s.useState(!1);
  return (0, r.jsxs)(n.ConfirmModal, {
    ...e,
    header: d.default.Messages.GUILD_SIDEBAR_REORDER_DIALOG_TITLE,
    confirmText: d.default.Messages.GUILD_SIDEBAR_REORDER_CONFIRM,
    cancelText: d.default.Messages.CANCEL,
    onConfirm: () => {
      (0, u.showGuildHeaderPopout)(!0)
    },
    confirmButtonColor: n.Button.Colors.BRAND,
    children: [(0, r.jsx)(n.Text, {
      variant: "text-md/normal",
      children: d.default.Messages.GUILD_SIDEBAR_REORDER_DESCRIPTION.format()
    }), (0, r.jsx)(n.Checkbox, {
      className: i.checkboxMargin,
      type: n.Checkbox.Types.INVERTED,
      value: t,
      onChange: () => {
        a.Storage.set("doNotShowReorderModal", JSON.stringify(!0)), o(!0)
      },
      children: (0, r.jsx)(n.Text, {
        variant: "text-md/normal",
        children: d.default.Messages.GUILD_SIDEBAR_DO_NOT_SHOW_AGAIN
      })
    })]
  })
}