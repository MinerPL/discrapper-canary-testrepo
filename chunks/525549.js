t.r(s), t.d(s, {
  ConfirmNoSharedServerSubscribeWarningModal: function() {
return r;
  }
});
var a = t(735250);
t(470079);
var n = t(481060),
  o = t(689938),
  i = t(552401),
  d = t(607273);

function r(e) {
  let {
applicationName: s,
onConfirm: t,
onClose: r,
onCancel: c,
...l
  } = e;
  return (0, a.jsxs)(n.ModalRoot, {
...l,
children: [
  (0, a.jsxs)(n.ModalContent, {
    className: i.body,
    children: [
      (0, a.jsx)('img', {
        alt: '',
        src: d,
        className: i.img,
        'aria-hidden': !0
      }),
      (0, a.jsx)(n.Heading, {
        variant: 'heading-xl/extrabold',
        className: i.title,
        children: o.Z.Messages.APPLICATION_USER_SUBSCRIPTION_NO_SHARED_SERVER_WARNING_TITLE.format({
          applicationName: s
        })
      }),
      (0, a.jsx)(n.Text, {
        variant: 'text-md/medium',
        children: o.Z.Messages.APPLICATION_USER_SUBSCRIPTION_NO_SHARED_SERVER_WARNING_BODY
      })
    ]
  }),
  (0, a.jsxs)(n.ModalFooter, {
    children: [
      (0, a.jsx)(n.Button, {
        onClick: () => {
          t(), r();
        },
        children: o.Z.Messages.CONTINUE
      }),
      (0, a.jsx)(n.Button, {
        className: i.__invalid_cancel,
        onClick: () => {
          c(), r();
        },
        look: n.Button.Looks.LINK,
        color: n.Button.Colors.PRIMARY,
        children: o.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}