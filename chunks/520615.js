s.r(t), s.d(t, {
  default: function() {
return d;
  }
});
var n = s(735250);
s(470079);
var a = s(481060),
  r = s(338690),
  o = s(689938),
  i = s(168015);

function d(e) {
  let {
transitionState: t,
onClose: s
  } = e;
  return (0, n.jsxs)(a.ModalRoot, {
transitionState: t,
children: [
  (0, n.jsx)(a.ModalHeader, {
    separator: !1,
    children: (0, n.jsx)(a.Heading, {
      variant: 'heading-lg/semibold',
      children: o.Z.Messages.SYSTEM_DM_URGENT_MESSAGE_MODAL_HEADER
    })
  }),
  (0, n.jsxs)(a.ModalContent, {
    children: [
      (0, n.jsx)(a.Text, {
        variant: 'text-md/normal',
        children: o.Z.Messages.SYSTEM_DM_URGENT_MESSAGE_MODAL_BODY
      }),
      (0, n.jsx)('div', {
        className: i.art
      })
    ]
  }),
  (0, n.jsx)(a.ModalFooter, {
    children: (0, n.jsx)(a.Button, {
      type: 'submit',
      color: a.Button.Colors.BRAND,
      onClick: () => {
        (0, r.Z)(), s();
      },
      children: o.Z.Messages.OKAY
    })
  })
]
  });
}