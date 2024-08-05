n.d(t, {
  Z: function() {
return d;
  }
}), n(47120);
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(565138),
  r = n(695346),
  l = n(506071),
  o = n(353254),
  c = n(269807);

function d(e) {
  let {
coverImageAsset: t,
title: n,
guild: d,
description: u,
children: _
  } = e, h = r.QK.useSetting(), E = (0, l.n)(), [I, m] = (0, o.Z)(t, E && h);
  return (0, i.jsxs)('div', {
className: c.container,
children: [
  (0, i.jsx)('div', {
    ref: I,
    className: c.coverImageContainer,
    children: null != m && (0, i.jsx)('img', {
      src: m,
      alt: '',
      className: c.coverImage
    })
  }),
  (0, i.jsx)('div', {
    className: c.guildIconContainer,
    children: (0, i.jsx)(s.Z, {
      guild: d,
      size: s.Z.Sizes.XLARGE
    })
  }),
  (0, i.jsx)(a.Heading, {
    variant: 'heading-xl/semibold',
    className: c.ctaTitle,
    children: n
  }),
  (0, i.jsx)(a.Text, {
    className: c.ctaSubtitle,
    variant: 'text-md/normal',
    color: 'header-secondary',
    children: u
  }),
  _
]
  });
}