s.d(n, {
  Z: function() {
return c;
  }
});
var l = s(735250);
s(470079);
var t = s(120356),
  i = s.n(t),
  r = s(481060),
  a = s(397590);

function c(e) {
  let {
className: n,
copy: s,
bannerImage: t,
textColor: c = 'always-white'
  } = e;
  return (0, l.jsxs)('div', {
className: i()(a.bannerContainer, n),
children: [
  null == t ? null : (0, l.jsx)('img', {
    alt: '',
    className: a.banner,
    src: t
  }),
  (0, l.jsxs)('div', {
    className: a.textContainer,
    children: [
      (0, l.jsx)(r.GiftIcon, {
        size: 'md',
        color: 'currentColor',
        className: a.giftIcon
      }),
      (0, l.jsx)(r.Heading, {
        className: a.textHeader,
        color: c,
        variant: 'eyebrow',
        children: s
      })
    ]
  })
]
  });
}