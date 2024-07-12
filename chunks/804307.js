t.d(n, {
  Z: function() {
return m;
  }
});
var i = t(735250),
  l = t(470079),
  a = t(120356),
  r = t.n(a),
  s = t(442837),
  o = t(481060),
  c = t(607070),
  u = t(98880),
  d = t(627542);

function m(e) {
  let {
look: n = u.U4.LARGE_BANNER
  } = e, t = (0, s.e7)([c.Z], () => c.Z.useReducedMotion), {
styleLarge: a,
styleSmall: m
  } = l.useMemo(() => ({
styleLarge: {
  width: ''.concat(10 + 50 * Math.random(), '%')
},
styleSmall: {
  width: ''.concat(30 + 60 * Math.random(), '%')
}
  }), []);
  return (0, i.jsxs)('div', {
className: r()(d.container, {
  [d.noAnimation]: t
}),
children: [
  (0, i.jsx)('div', {
    className: r()(d.bannerImage, {
      [d.mediumBanner]: n === u.U4.MEDIUM_BANNER,
      [d.largeBanner]: n === u.U4.LARGE_BANNER
    })
  }),
  (0, i.jsxs)('div', {
    className: d.appDetailsContainer,
    children: [
      (0, i.jsx)('div', {
        className: d.iconPlaceholder
      }),
      (0, i.jsxs)('div', {
        className: d.textContainer,
        children: [
          (0, i.jsx)('div', {
            className: d.textPlaceholder,
            style: a,
            children: (0, i.jsx)(o.Heading, {
              className: d.hidden,
              variant: 'heading-md/semibold',
              color: 'header-primary',
              lineClamp: 1,
              children: '_'
            })
          }),
          (0, i.jsx)('div', {
            className: d.textPlaceholder,
            style: m,
            children: (0, i.jsx)(o.Text, {
              className: d.hidden,
              variant: 'text-sm/normal',
              color: 'text-secondary',
              lineClamp: 1,
              children: '_'
            })
          })
        ]
      })
    ]
  })
]
  });
}