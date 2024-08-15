a.r(e), a(47120);
var n = a(735250),
  o = a(470079),
  r = a(481060),
  s = a(238675),
  c = a(677065);
let i = Object.entries(s.f).map(t => {
  let [e, a] = t;
  return {
label: e,
value: a
  };
});
e.default = function(t) {
  let {
onClose: e,
transitionState: a
  } = t, [l, d] = o.useState(null), [u, h] = o.useState(''), f = async () => {
if (l) {
  h('');
  try {
    await (0, s.q)(l);
  } catch (t) {
    h(t.message);
  }
}
  };
  return (0, n.jsxs)(r.ModalRoot, {
transitionState: a,
children: [
  (0, n.jsxs)(r.ModalHeader, {
    className: c.header,
    children: [
      (0, n.jsx)(r.Heading, {
        variant: 'heading-lg/semibold',
        children: 'Captcha Test Tool'
      }),
      (0, n.jsx)(r.ModalCloseButton, {
        onClick: e
      })
    ]
  }),
  (0, n.jsx)(r.ModalContent, {
    className: c.content,
    children: (0, n.jsx)(r.SingleSelect, {
      value: l,
      options: i,
      onChange: t => {
        d(t), h('');
      }
    })
  }),
  (0, n.jsxs)(r.ModalFooter, {
    className: c.footer,
    children: [
      (0, n.jsx)(r.Button, {
        onClick: f,
        disabled: !l,
        children: 'Trigger Captcha'
      }),
      '' !== u && (0, n.jsx)(r.InputError, {
        error: u
      })
    ]
  })
]
  });
};