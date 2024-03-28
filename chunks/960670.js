"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("481060"),
  i = n("689938"),
  r = n("402319");

function o(e) {
  let {
    header: t,
    body: n,
    onSubmit: o,
    ...u
  } = e, [d, c] = a.useState(!1);
  return (0, l.jsxs)(s.ConfirmModal, {
    header: t,
    confirmText: i.default.Messages.LEAVE_GROUP_DM,
    cancelText: i.default.Messages.CANCEL,
    onConfirm: () => {
      o(null, d)
    },
    ...u,
    children: [(0, l.jsx)(s.Text, {
      variant: "text-md/normal",
      children: n
    }), (0, l.jsx)(s.Checkbox, {
      type: s.Checkbox.Types.INVERTED,
      value: d,
      onChange: () => c(e => !e),
      className: r.checkbox,
      children: (0, l.jsx)(s.Text, {
        variant: "text-md/normal",
        children: i.default.Messages.LEAVE_GROUP_DM_SILENTLY
      })
    })]
  })
}