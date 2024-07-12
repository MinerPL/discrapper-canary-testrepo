t.d(n, {
  D: function() {
return I;
  }
});
var l = t(735250);
t(470079);
var s = t(120356),
  a = t.n(s),
  i = t(481060),
  r = t(410030),
  o = t(948851),
  d = t(868728),
  u = t(689938),
  c = t(352563),
  h = t(549856);
let I = e => {
  let {
handleDone: n,
headerId: t,
modalState: s,
shouldHideTemporaryInviteToggle: I,
onGenerateNewLink: g,
onToggleTemporary: E,
onSelectMaxAge: _,
onSelectMaxUses: m
  } = e, T = (0, r.ZP)(), {
maxAge: N,
maxUses: v,
temporary: S
  } = s;
  return (0, l.jsxs)(l.Fragment, {
children: [
  (0, l.jsxs)(i.ModalHeader, {
    children: [
      (0, l.jsx)(i.ModalCloseButton, {
        className: c.closeButton,
        onClick: n
      }),
      (0, l.jsx)('div', {
        className: c.headerContainer,
        children: (0, l.jsx)(i.FormTitle, {
          id: t,
          tag: 'h2',
          className: a()(h.marginReset, c.headerCloseButtonSpacing, c.headerText),
          children: u.Z.Messages.INVITE_SETTINGS_TITLE
        })
      })
    ]
  }),
  (0, l.jsx)(o.Z, {
    shouldHideTemporaryInviteToggle: I,
    maxAge: N,
    maxUses: v,
    temporary: S,
    onToggleTemporary: E,
    onSelectMaxAge: _,
    onSelectMaxUses: m,
    onGenerateNewLink: g
  }),
  (0, l.jsx)(i.ModalFooter, {
    className: c.settingsFooter,
    children: (0, l.jsx)(d.Z, {
      theme: T,
      onConfirm: () => {
        g(), n();
      },
      onDismiss: n
    })
  })
]
  });
};