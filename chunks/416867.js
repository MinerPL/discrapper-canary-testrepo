t.d(n, {
  B: function() {
return u;
  }
});
var s = t(735250);
t(470079);
var o = t(481060),
  r = t(22238),
  a = t(153124),
  l = t(689938),
  i = t(411094);

function c(e) {
  let {
transitionState: n,
Icon: t,
title: c,
body: u,
onClose: d
  } = e, E = (0, a.Dt)();
  return (0, s.jsxs)(o.ModalRoot, {
className: i.container,
transitionState: n,
'aria-labelledby': E,
children: [
  (0, s.jsxs)(o.ModalContent, {
    children: [
      (0, s.jsx)(r.Z, {
        Icon: t
      }),
      (0, s.jsx)(o.Spacer, {
        size: 24
      }),
      (0, s.jsx)(o.Heading, {
        id: E,
        className: i.__invalid_title,
        variant: 'heading-xl/semibold',
        children: c
      }),
      (0, s.jsx)(o.Spacer, {
        size: 8
      }),
      (0, s.jsx)(o.Text, {
        className: i.body,
        variant: 'text-sm/normal',
        children: u
      })
    ]
  }),
  (0, s.jsx)(o.Spacer, {
    size: 24
  }),
  (0, s.jsx)(o.Button, {
    size: o.Button.Sizes.MEDIUM,
    grow: !1,
    onClick: d,
    children: l.Z.Messages.GOT_IT
  })
]
  });
}

function u(e) {
  (0, o.openModal)(n => (0, s.jsx)(c, {
...n,
...e
  }));
}