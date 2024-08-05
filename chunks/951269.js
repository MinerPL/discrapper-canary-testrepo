s.r(t), s.d(t, {
  default: function() {
return u;
  }
});
var o = s(735250);
s(470079);
var a = s(481060),
  n = s(153124),
  l = s(154921),
  i = s(689938),
  c = s(778286),
  r = s(462991);

function u(e) {
  let {
onClose: t,
transitionState: s,
kind: u
  } = e, d = (0, n.Dt)();
  return (0, o.jsxs)(a.ModalRoot, {
transitionState: s,
'aria-labelledby': d,
size: a.ModalSize.SMALL,
children: [
  (0, o.jsxs)(a.ModalContent, {
    className: c.content,
    children: [
      (0, o.jsx)(a.ModalCloseButton, {
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
      (0, o.jsx)(a.Text, {
        className: c.subtitle,
        variant: 'text-md/normal',
        color: 'header-secondary',
        children: 'user' === u ? i.Z.Messages.INACCESSIBLE_USER_LINK_SUBTITLE : i.Z.Messages.INACCESSIBLE_CHANNEL_LINK_SUBTITLE
      })
    ]
  }),
  (0, o.jsx)(a.ModalFooter, {
    children: (0, o.jsx)(a.Button, {
      className: c.button,
      color: a.Button.Colors.BRAND,
      onClick: t,
      size: a.Button.Sizes.LARGE,
      children: i.Z.Messages.OKAY
    })
  })
]
  });
}