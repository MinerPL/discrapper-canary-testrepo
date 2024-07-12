t.d(s, {
  Z: function() {
return r;
  }
});
var n = t(735250);
t(470079);
var a = t(481060),
  o = t(689938),
  l = t(660817);

function r(e) {
  let {
email: s,
onClose: t
  } = e;
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)(a.ModalHeader, {
    separator: !1,
    className: l.header,
    children: [
      (0, n.jsx)(a.Heading, {
        className: l.title,
        variant: 'heading-xl/semibold',
        children: o.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_COMPLETE_TITLE
      }),
      (0, n.jsx)(a.ModalCloseButton, {
        onClick: t,
        className: l.modalCloseButton
      })
    ]
  }),
  (0, n.jsx)(a.ModalContent, {
    className: l.content,
    children: (0, n.jsx)(a.Text, {
      className: l.description,
      variant: 'text-md/normal',
      children: o.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_COMPLETE_DESCRIPTION.format({
        email: s
      })
    })
  }),
  (0, n.jsx)(a.ModalContent, {
    className: l.content,
    children: (0, n.jsx)(a.Text, {
      className: l.tooltip,
      variant: 'text-sm/normal',
      children: o.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CHECK_SPAM
    })
  }),
  (0, n.jsx)(a.ModalFooter, {
    className: l.modalFooter,
    children: (0, n.jsx)(a.Button, {
      className: l.__invalid_submit,
      color: a.Button.Colors.BRAND,
      size: a.Button.Sizes.MEDIUM,
      onClick: t,
      children: o.Z.Messages.OKAY
    })
  })
]
  });
}