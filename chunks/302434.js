t.d(n, {
  Z: function() {
return c;
  }
});
var i = t(735250),
  a = t(470079),
  s = t(481060),
  l = t(153124),
  o = t(63063),
  r = t(981631),
  d = t(689938);

function c(e) {
  let {
transitionState: n,
onConfirm: t,
onClose: c
  } = e, u = (0, l.Dt)(), I = a.useCallback(() => {
t(), c();
  }, [
t,
c
  ]);
  return (0, i.jsxs)(s.ModalRoot, {
transitionState: n,
'aria-labelledby': u,
size: s.ModalSize.SMALL,
children: [
  (0, i.jsx)(s.ModalHeader, {
    separator: !1,
    children: (0, i.jsx)(s.Heading, {
      id: u,
      color: 'header-primary',
      variant: 'heading-md/semibold',
      children: d.Z.Messages.DISABLE_INVITES
    })
  }),
  (0, i.jsx)(s.ModalContent, {
    children: (0, i.jsx)(s.Text, {
      variant: 'text-sm/normal',
      color: 'header-secondary',
      children: d.Z.Messages.INVITES_DISABLED_DESCRIPTION.format({
        helpArticleUrl: o.Z.getArticleURL(r.BhN.INVITE_DISABLED)
      })
    })
  }),
  (0, i.jsxs)(s.ModalFooter, {
    children: [
      (0, i.jsx)(s.Button, {
        onClick: I,
        color: s.Button.Colors.RED,
        look: s.Button.Looks.FILLED,
        children: d.Z.Messages.YES_TEXT
      }),
      (0, i.jsx)(s.Button, {
        onClick: c,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        children: d.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}