s.r(t), s.d(t, {
  default: function() {
return u;
  }
});
var o = s(735250);
s(470079);
var n = s(481060),
  a = s(153124),
  l = s(154921),
  i = s(689938),
  c = s(778286),
  r = s(462991);

function u(e) {
  let {
onClose: t,
transitionState: s,
kind: u
  } = e, d = (0, a.Dt)();
  return (0, o.jsxs)(n.ModalRoot, {
transitionState: s,
'aria-labelledby': d,
size: n.ModalSize.SMALL,
children: [
  (0, o.jsxs)(n.ModalContent, {
    className: c.content,
    children: [
      (0, o.jsx)(n.ModalCloseButton, {
        className: c.closeButton,
        onClick: t
      }),
      (0, o.jsx)('img', {
        className: c.image,
        src: r,
        alt: ''
      }),
      (0, o.jsx)(l.Z, {
        className: c.title,
        id: d,
        size: l.Z.Sizes.SIZE_24,
        color: l.Z.Colors.HEADER_PRIMARY,
        children: i.Z.Messages.INACCESSIBLE_CHANNEL_LINK_TITLE
      }),
      (0, o.jsx)(n.Text, {
        className: c.subtitle,
        variant: 'text-md/normal',
        color: 'header-secondary',
        children: 'user' === u ? i.Z.Messages.INACCESSIBLE_USER_LINK_SUBTITLE : i.Z.Messages.INACCESSIBLE_CHANNEL_LINK_SUBTITLE
      })
    ]
  }),
  (0, o.jsx)(n.ModalFooter, {
    children: (0, o.jsx)(n.Button, {
      className: c.button,
      color: n.Button.Colors.BRAND,
      onClick: t,
      size: n.Button.Sizes.LARGE,
      children: i.Z.Messages.OKAY
    })
  })
]
  });
}