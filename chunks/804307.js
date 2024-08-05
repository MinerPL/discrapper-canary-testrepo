t.d(n, {
  Z: function() {
return m;
  }
});
var i = t(735250),
  a = t(470079),
  l = t(120356),
  o = t.n(l),
  r = t(442837),
  s = t(481060),
  c = t(607070),
  u = t(98880),
  d = t(627542);

function m(e) {
  let {
look: n = u.U4.LARGE_BANNER
  } = e, t = (0, r.e7)([c.Z], () => c.Z.useReducedMotion), {
styleLarge: l,
styleSmall: m
  } = a.useMemo(() => ({
styleLarge: {
  width: ''.concat(10 + 50 * Math.random(), '%')
},
styleSmall: {
  width: ''.concat(30 + 60 * Math.random(), '%')
}
  }), []);
  return (0, i.jsxs)('div', {
className: o()(d.container, d.loadingAnimation, {
  [d.noAnimation]: t,
  [d.containerBorderRadius]: n !== u.U4.ROW,
  [d.rowContainer]: n === u.U4.ROW
}),
children: [
  (0, i.jsx)('div', {
    className: o()(d.bannerImage, {
      [d.mediumBanner]: n === u.U4.MEDIUM_BANNER,
      [d.largeBanner]: n === u.U4.LARGE_BANNER
    })
  }),
  (0, i.jsxs)('div', {
    className: o()(d.appDetailsContainer, {
      [d.appDetailsRowContainer]: n === u.U4.ROW
    }),
    children: [
      (0, i.jsx)('div', {
        className: o()(d.iconPlaceholder, {
          [d.rowIconPlaceholder]: n === u.U4.ROW
        })
      }),
      (0, i.jsxs)('div', {
        className: d.textContainer,
        children: [
          (0, i.jsx)('div', {
            className: d.textPlaceholder,
            style: l,
            children: (0, i.jsx)(s.Heading, {
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
            children: (0, i.jsx)(s.Text, {
              className: d.hidden,
              variant: 'text-sm/normal',
              color: 'text-secondary',
              lineClamp: 1,
              children: '_'
            })
          })
        ]
      }),
      n === u.U4.ROW && (0, i.jsx)('div', {
        className: d.rowDivider
      })
    ]
  })
]
  });
}