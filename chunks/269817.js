o.r(e), o.d(e, {
  default: function() {
return d;
  }
});
var s = o(735250);
o(470079);
var n = o(481060),
  a = o(782568),
  i = o(153124),
  l = o(689938),
  r = o(383342);

function d(t) {
  let {
url: e,
onClose: d,
transitionState: c
  } = t, N = (0, i.Dt)();
  return (0, s.jsxs)(n.ModalRoot, {
transitionState: c,
'aria-labelledby': N,
children: [
  (0, s.jsx)('img', {
    className: r.art,
    src: o(902623),
    alt: ''
  }),
  (0, s.jsx)(n.ModalContent, {
    children: (0, s.jsxs)('div', {
      className: r.modalContent,
      children: [
        (0, s.jsx)(n.Heading, {
          id: N,
          variant: 'heading-lg/semibold',
          className: r.title,
          children: l.Z.Messages.LINK_NOT_DISCORD_WARNING_TITLE
        }),
        (0, s.jsx)(n.Text, {
          variant: 'text-md/normal',
          className: r.body,
          children: l.Z.Messages.LINK_NOT_DISCORD_WARNING_BODY.format({
            url: e
          })
        })
      ]
    })
  }),
  (0, s.jsxs)(n.ModalFooter, {
    children: [
      (0, s.jsx)(n.Button, {
        type: 'button',
        size: n.Button.Sizes.MEDIUM,
        color: n.Button.Colors.BRAND,
        onClick: d,
        children: l.Z.Messages.LINK_NOT_DISCORD_WARNING_CANCEL
      }),
      (0, s.jsx)(n.Button, {
        type: 'button',
        size: n.Button.Sizes.MEDIUM,
        color: n.Button.Colors.TRANSPARENT,
        look: n.Button.Looks.LINK,
        onClick: () => {
          (0, a.Z)(e, !0);
        },
        children: l.Z.Messages.LINK_NOT_DISCORD_WARNING_CONTINUE
      })
    ]
  })
]
  });
}