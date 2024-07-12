var s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  i = n(481060),
  l = n(689938),
  o = n(207621),
  c = n(505944);
t.Z = e => {
  let {
className: t,
onBackClick: n
  } = e;
  return (0, s.jsxs)('div', {
className: r()(o.container, t),
'data-testid': 'all-perks-hero-header',
children: [
  (0, s.jsx)('img', {
    src: c,
    alt: '',
    className: o.headerArt
  }),
  (0, s.jsxs)('div', {
    className: o.containerInner,
    children: [
      (0, s.jsx)('div', {
        className: o.backButtonContainer,
        children: (0, s.jsxs)(i.Clickable, {
          onClick: n,
          className: o.backButton,
          children: [
            (0, s.jsx)(i.ChevronSmallLeftIcon, {
              color: 'currentColor'
            }),
            l.Z.Messages.BACK
          ]
        })
      }),
      (0, s.jsx)('div', {
        className: o.__invalid_contentContainer,
        children: (0, s.jsx)('div', {
          className: o.content,
          children: (0, s.jsx)(i.Heading, {
            variant: 'display-lg',
            color: 'always-white',
            children: l.Z.Messages.NITRO_HOME_ALL_YOUR_NITRO_PERKS
          })
        })
      })
    ]
  })
]
  });
};