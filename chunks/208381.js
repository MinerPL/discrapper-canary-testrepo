n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var a = n(990547),
  s = n(481060),
  r = n(153124),
  l = n(758119),
  o = n(689938),
  c = n(260809);

function d(e) {
  let {
transitionState: t
  } = e, d = (0, r.Dt)();
  return (0, i.jsxs)(s.ModalRoot, {
transitionState: t,
size: s.ModalSize.SMALL,
'aria-labelledby': d,
impression: {
  impressionName: a.ImpressionNames.USER_AGE_GATE,
  impressionProperties: {
    existing_user: !0
  }
},
children: [
  (0, i.jsx)(s.ModalContent, {
    children: (0, i.jsxs)('div', {
      className: c.container,
      children: [
        (0, i.jsx)('img', {
          alt: '',
          src: n(863181),
          className: c.img
        }),
        (0, i.jsx)(s.Heading, {
          variant: 'heading-xl/semibold',
          className: c.title,
          id: d,
          children: o.Z.Messages.AGE_GATE_AGE_VERIFIED
        }),
        (0, i.jsx)(s.Text, {
          color: 'header-secondary',
          className: c.subtitle,
          variant: 'text-sm/normal',
          children: o.Z.Messages.AGE_GATE_AGE_VERIFIED_BODY
        })
      ]
    })
  }),
  (0, i.jsx)(s.ModalFooter, {
    children: (0, i.jsx)(s.Button, {
      size: s.ButtonSizes.SMALL,
      fullWidth: !0,
      onClick: function() {
        (0, l.qV)();
      },
      autoFocus: !0,
      children: o.Z.Messages.CLOSE
    })
  })
]
  });
}