t.r(e), t.d(e, {
  default: function() {
return l;
  }
});
var a = t(735250);
t(470079);
var n = t(481060),
  i = t(285952),
  o = t(153124),
  d = t(952164),
  r = t(689938),
  c = t(512585);

function l(s) {
  let {
transitionState: e,
onClose: t
  } = s, l = (0, o.Dt)();
  return (0, a.jsxs)(n.ModalRoot, {
'aria-labelledby': l,
transitionState: e,
size: n.ModalSize.SMALL,
children: [
  (0, a.jsx)(n.ModalHeader, {
    separator: !1,
    children: (0, a.jsx)(n.Heading, {
      id: l,
      variant: 'heading-lg/semibold',
      children: r.Z.Messages.SPOTIFY_PREMIUM_UPGRADE_HEADER
    })
  }),
  (0, a.jsxs)(n.ModalContent, {
    children: [
      (0, a.jsx)(i.Z, {
        justify: i.Z.Justify.CENTER,
        children: (0, a.jsx)('div', {
          className: c.image
        })
      }),
      (0, a.jsx)(n.Text, {
        className: c.text,
        variant: 'text-sm/normal',
        children: r.Z.Messages.SPOTIFY_PREMIUM_UPGRADE_BODY
      })
    ]
  }),
  (0, a.jsxs)(n.ModalFooter, {
    children: [
      (0, a.jsx)(n.Button, {
        onClick: function() {
          (0, d.KK)(), t();
        },
        children: r.Z.Messages.SPOTIFY_PREMIUM_UPGRADE_BUTTON
      }),
      (0, a.jsx)(n.Button, {
        look: n.Button.Looks.LINK,
        color: n.Button.Colors.PRIMARY,
        onClick: t,
        children: r.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}