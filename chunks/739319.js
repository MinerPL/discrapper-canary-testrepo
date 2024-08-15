n.d(t, {
  Z: function() {
return _;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(481060),
  l = n(454585),
  u = n(572004),
  c = n(689938),
  d = n(888245);

function _(e) {
  let {
element: {
  data: {
    title: t,
    body: n,
    sms: a,
    is_localized: _
  }
}
  } = e, [E, f] = i.useState(!1), h = i.useRef(l.Z.reactParserFor(l.Z.defaultRules));
  return _ ? (0, r.jsxs)('div', {
className: d.container,
children: [
  (0, r.jsx)(o.Heading, {
    variant: 'heading-sm/semibold',
    color: 'header-secondary',
    className: d.header,
    children: t
  }),
  (0, r.jsx)(o.Text, {
    variant: 'text-sm/normal',
    className: d.bodyText,
    children: h.current(n)
  }),
  (0, r.jsx)('div', {
    className: d.__invalid_smsInfoContainer,
    children: (0, r.jsxs)('div', {
      className: s()(d.smsNumberContainer, {
        [d.copied]: E
      }),
      children: [
        (0, r.jsx)(o.Text, {
          variant: 'text-md/normal',
          selectable: !0,
          className: d.smsNumberText,
          children: a
        }),
        (0, r.jsx)(o.Button, {
          size: o.Button.Sizes.SMALL,
          className: d.__invalid_trailingButton,
          onClick: () => {
            (0, u.JG)(a) && f(!0);
          },
          color: o.Button.Colors.PRIMARY,
          children: E ? c.Z.Messages.COPIED : c.Z.Messages.COPY
        })
      ]
    })
  })
]
  }) : null;
}