var r = n(735250);
n(470079);
var i = n(780384),
  a = n(481060),
  s = n(410030),
  o = n(689938),
  l = n(561775),
  u = n(167969),
  c = n(557256);
t.Z = function(e) {
  let {
onClose: t
  } = e, n = (0, s.ZP)(), d = (0, i.wj)(n);
  return (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsxs)(a.ModalHeader, {
    separator: !1,
    className: l.header,
    children: [
      (0, r.jsx)('img', {
        alt: '',
        className: l.headerImage,
        src: d ? u : c
      }),
      (0, r.jsx)(a.Heading, {
        className: l.title,
        variant: 'heading-xl/medium',
        children: o.Z.Messages.STICKER_ASSET_LOAD_ERROR
      }),
      (0, r.jsx)(a.ModalCloseButton, {
        onClick: t,
        className: l.modalCloseButton
      })
    ]
  }),
  (0, r.jsx)(a.ModalContent, {
    className: l.content,
    children: (0, r.jsx)(a.Text, {
      variant: 'text-md/normal',
      children: o.Z.Messages.ACTIVATE_DEVICE_ERROR_UNKNOWN
    })
  }),
  (0, r.jsx)(a.ModalFooter, {
    className: l.modalFooter,
    children: (0, r.jsx)(a.Button, {
      color: a.Button.Colors.BRAND,
      size: a.Button.Sizes.MEDIUM,
      onClick: t,
      children: o.Z.Messages.CLOSE
    })
  })
]
  });
};