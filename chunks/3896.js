n.d(t, {
  Z: function() {
return I;
  }
});
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(481060),
  o = n(456935),
  c = n(259580),
  d = n(981631),
  u = n(689938),
  _ = n(941377);

function I(e) {
  let {
guild: t
  } = e, i = t.verificationLevel, I = a.useMemo(() => (0, o.I9)(i), [i]);
  return (0, s.jsxs)(l.Clickable, {
onClick: () => (0, l.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('27933').then(n.bind(n, 694278));
  return n => (0, s.jsx)(e, {
    ...n,
    guild: t,
    hideColors: !0
  });
}),
className: r()(_.simpleItemWrapper, _.clickable),
children: [
  (0, s.jsxs)('div', {
    className: _.itemContent,
    children: [
      (0, s.jsx)(l.Heading, {
        variant: 'text-md/semibold',
        color: 'header-primary',
        children: u.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL
      }),
      (0, s.jsx)(l.Text, {
        variant: 'text-sm/medium',
        color: 'header-secondary',
        children: u.Z.Messages.GUILD_SETTINGS_SAFETY_VERIFICATION_DESCRIPTION
      }),
      (0, s.jsx)('div', {
        className: _.__invalid_pillRow,
        children: (0, s.jsxs)(l.Text, {
          variant: 'text-xs/medium',
          color: 'interactive-normal',
          className: _.valuePill,
          children: [
            i === d.sFg.VERY_HIGH ? (0, s.jsx)(l.MobilePhoneIcon, {
              size: 'custom',
              color: 'currentColor',
              width: 16,
              height: 16
            }) : (0, s.jsx)(l.EnvelopeIcon, {
              size: 'custom',
              color: 'currentColor',
              width: 16,
              height: 16
            }),
            I
          ]
        })
      })
    ]
  }),
  (0, s.jsx)(c.Z, {
    height: 24,
    width: 24,
    direction: c.Z.Directions.RIGHT,
    className: _.caret
  })
]
  });
}