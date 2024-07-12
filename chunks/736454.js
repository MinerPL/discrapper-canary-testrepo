n.r(s), n.d(s, {
  default: function() {
return d;
  }
}), n(47120);
var t = n(735250),
  o = n(470079),
  a = n(481060),
  r = n(153867),
  c = n(689938),
  i = n(224796);

function d(e) {
  let {
onSubmit: s,
onClose: n,
...d
  } = e, [l, C] = o.useState(!1);
  return (0, t.jsxs)(a.ConfirmModal, {
header: c.Z.Messages.CALL_USER_PROMPT_HEADER,
confirmButtonColor: a.Button.Colors.GREEN,
confirmText: c.Z.Messages.CALL_USER_CONFIRM,
cancelText: c.Z.Messages.CANCEL,
onConfirm: s,
onClose: () => (l && r.ZP.updatedUnsyncedSettings({
  disableCallUserConfirmationPrompt: !0
}), n()),
...d,
children: [
  (0, t.jsx)(a.Text, {
    variant: 'text-md/normal',
    children: c.Z.Messages.CALL_USER_PROMPT
  }),
  (0, t.jsx)(a.Checkbox, {
    type: a.Checkbox.Types.INVERTED,
    value: l,
    onChange: (e, s) => C(s),
    className: i.checkbox,
    children: (0, t.jsx)(a.Text, {
      variant: 'text-md/normal',
      children: c.Z.Messages.DONT_ASK_AGAIN
    })
  })
]
  });
}