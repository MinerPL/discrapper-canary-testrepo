n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(780384),
  o = n(481060),
  c = n(410030),
  d = n(960794);

function u(e) {
  let {
title: t,
description: n,
button: s,
backgroundImageUrl: u,
className: _,
bannerImageClassName: h,
headerTextColor: E,
descriptionTextColor: I
  } = e, m = (0, l.wj)((0, c.ZP)()), g = a.useMemo(() => null != u ? u : m ? 'https://cdn.discordapp.com/assets/discovery/generic-hero-background.png' : 'https://cdn.discordapp.com/assets/discovery/generic-banner-background-light-mode.png', [
m,
u
  ]), p = a.useMemo(() => ({
backgroundImage: 'url('.concat(g, ')')
  }), [g]), T = null != E ? E : m ? 'always-white' : 'header-primary', S = null != I ? I : m ? 'text-muted' : 'header-primary';
  return (0, i.jsxs)('div', {
className: r()(d.imageContainer, _),
children: [
  (0, i.jsx)('div', {
    className: d.imageContent,
    children: (0, i.jsxs)('div', {
      className: d.textContainer,
      children: [
        (0, i.jsx)(o.Heading, {
          variant: 'heading-xl/bold',
          color: T,
          children: t
        }),
        (0, i.jsx)(o.Text, {
          variant: 'text-md/medium',
          color: S,
          children: n
        }),
        s
      ]
    })
  }),
  (0, i.jsx)('div', {
    className: r()(d.imageBackground, h),
    style: p,
    children: (0, i.jsx)('div', {
      className: d.gradientOverlay
    })
  })
]
  });
}