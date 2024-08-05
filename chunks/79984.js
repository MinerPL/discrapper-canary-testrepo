t.d(n, {
  Z: function() {
return d;
  }
});
var i = t(735250),
  a = t(470079),
  l = t(120356),
  o = t.n(l),
  r = t(442837),
  s = t(481060),
  c = t(607070),
  u = t(9258);

function d() {
  let e = (0, r.e7)([c.Z], () => c.Z.useReducedMotion),
{
  styleLarge: n,
  styleSmall: t
} = a.useMemo(() => ({
  styleLarge: {
    width: ''.concat(10 + 50 * Math.random(), '%')
  },
  styleSmall: {
    width: ''.concat(30 + 60 * Math.random(), '%')
  }
}), []);
  return (0, i.jsxs)('div', {
className: o()(u.container, {
  [u.noAnimation]: e
}),
children: [
  (0, i.jsx)('div', {
    className: u.iconPlaceholder
  }),
  (0, i.jsxs)('div', {
    className: u.textContainer,
    children: [
      (0, i.jsx)('div', {
        className: u.textPlaceholder,
        style: n,
        children: (0, i.jsx)(s.Heading, {
          className: u.hidden,
          variant: 'heading-md/semibold',
          color: 'header-primary',
          lineClamp: 1,
          children: '_'
        })
      }),
      (0, i.jsx)('div', {
        className: u.textPlaceholder,
        style: t,
        children: (0, i.jsx)(s.Text, {
          className: u.hidden,
          variant: 'text-sm/normal',
          color: 'text-secondary',
          lineClamp: 1,
          children: '_'
        })
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: u.underline
  })
]
  });
}