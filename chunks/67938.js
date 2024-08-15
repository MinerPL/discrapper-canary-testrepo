n.d(t, {
  G: function() {
return h;
  }
});
var s = n(735250);
n(470079);
var r = n(120356),
  a = n.n(r),
  i = n(442837),
  o = n(481060),
  c = n(607070),
  l = n(372047),
  d = n(731782),
  u = n(196798),
  f = n(660348),
  p = n(872044),
  g = n(671581),
  C = n(830487),
  _ = n(602476);

function m() {
  return (0, s.jsxs)('div', {
className: d.attributionLogos,
'aria-label': 'Discord x Pocketpair',
children: [
  (0, s.jsx)(o.ClydeIcon, {
    size: 'custom',
    color: 'currentColor',
    height: 22,
    'aria-hidden': !0
  }),
  (0, s.jsx)(o.Text, {
    variant: 'heading-sm/extrabold',
    tag: 'div',
    children: '|'
  }),
  (0, s.jsx)('img', {
    src: f,
    alt: '',
    'aria-hidden': !0
  })
]
  });
}

function h(e) {
  let {
category: t
  } = e, n = (0, i.e7)([c.Z], () => c.Z.useReducedMotion), {
enabled: r
  } = (0, l.Z)({
location: 'CollectiblesShop'
  });
  return (0, s.jsxs)('div', {
className: a()(d.banner, {
  [d.noTopMargin]: r
}),
'aria-label': t.name,
children: [
  (0, s.jsxs)('div', {
    className: d.mainContent,
    children: [
      (0, s.jsx)('img', {
        src: p,
        className: d.bannerImage,
        alt: t.name,
        'aria-hidden': !0
      }),
      (0, s.jsx)(m, {}),
      (0, s.jsx)('img', {
        src: g,
        className: d.categoryLogo,
        alt: t.name,
        'aria-hidden': !0
      }),
      !n && (0, s.jsx)('img', {
        src: u,
        className: d.animatedLayer,
        alt: '',
        'aria-hidden': !0
      }),
      (0, s.jsx)(o.Text, {
        className: d.summary,
        variant: 'text-md/normal',
        children: t.summary
      })
    ]
  }),
  (0, s.jsx)('img', {
    src: _,
    className: a()(d.overflowImage, d.overflowRight),
    alt: '',
    'aria-hidden': !0
  }),
  (0, s.jsx)('img', {
    src: C,
    className: a()(d.overflowImage, d.overflowLeft),
    alt: '',
    'aria-hidden': !0
  })
]
  });
}