n.d(t, {
  G: function() {
return _;
  }
});
var r = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  o = n(442837),
  i = n(481060),
  l = n(607070),
  c = n(372047),
  d = n(712953),
  u = n(196798),
  p = n(660348),
  g = n(872044),
  f = n(671581),
  C = n(830487),
  m = n(602476);

function h() {
  return (0, r.jsxs)('div', {
className: d.attributionLogos,
'aria-label': 'Discord x Pocketpair',
children: [
  (0, r.jsx)(i.ClydeIcon, {
    size: 'custom',
    color: 'currentColor',
    height: 22,
    'aria-hidden': !0
  }),
  (0, r.jsx)(i.Text, {
    variant: 'heading-sm/extrabold',
    tag: 'div',
    children: '|'
  }),
  (0, r.jsx)('img', {
    src: p,
    alt: '',
    'aria-hidden': !0
  })
]
  });
}

function _(e) {
  let {
category: t
  } = e, n = (0, o.e7)([l.Z], () => l.Z.useReducedMotion), {
enabled: s
  } = (0, c.Z)({
location: 'CollectiblesShop'
  });
  return (0, r.jsxs)('div', {
className: a()(d.banner, {
  [d.noTopMargin]: s
}),
'aria-label': t.name,
children: [
  (0, r.jsxs)('div', {
    className: d.mainContent,
    children: [
      (0, r.jsx)('img', {
        src: g,
        className: d.bannerImage,
        alt: t.name,
        'aria-hidden': !0
      }),
      (0, r.jsx)(h, {}),
      (0, r.jsx)('img', {
        src: f,
        className: d.categoryLogo,
        alt: t.name,
        'aria-hidden': !0
      }),
      !n && (0, r.jsx)('img', {
        src: u,
        className: d.animatedLayer,
        alt: '',
        'aria-hidden': !0
      }),
      (0, r.jsx)(i.Text, {
        className: d.summary,
        variant: 'text-md/normal',
        children: t.summary
      })
    ]
  }),
  (0, r.jsx)('img', {
    src: m,
    className: a()(d.overflowImage, d.overflowRight),
    alt: '',
    'aria-hidden': !0
  }),
  (0, r.jsx)('img', {
    src: C,
    className: a()(d.overflowImage, d.overflowLeft),
    alt: '',
    'aria-hidden': !0
  })
]
  });
}