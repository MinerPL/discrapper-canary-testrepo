"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  o = s("481060"),
  r = s("153867"),
  d = s("689938"),
  l = s("452537");

function c(e) {
  let {
    onSubmit: t,
    onClose: s,
    ...c
  } = e, [i, u] = n.useState(!1);
  return (0, a.jsxs)(o.ConfirmModal, {
    header: d.default.Messages.CALL_USER_PROMPT_HEADER,
    confirmButtonColor: o.Button.Colors.GREEN,
    confirmText: d.default.Messages.CALL_USER_CONFIRM,
    cancelText: d.default.Messages.CANCEL,
    onConfirm: t,
    onClose: () => (i && r.default.updatedUnsyncedSettings({
      disableCallUserConfirmationPrompt: !0
    }), s()),
    ...c,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      children: d.default.Messages.CALL_USER_PROMPT
    }), (0, a.jsx)(o.Checkbox, {
      type: o.Checkbox.Types.INVERTED,
      value: i,
      onChange: (e, t) => u(t),
      className: l.checkbox,
      children: (0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        children: d.default.Messages.DONT_ASK_AGAIN
      })
    })]
  })
}