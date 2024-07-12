n.d(t, {
  i: function() {
return r;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  l = n.n(a),
  s = n(726181);

function r(e) {
  let {
bannerIcon: t,
bannerHeader: n,
bannerSubtext: a,
containerStyles: r,
headerStyles: o,
children: c
  } = e;
  return (0, i.jsxs)('div', {
className: s.spamBanner,
children: [
  (0, i.jsxs)('div', {
    className: l()(s.bannerTextContainer, r),
    children: [
      'string' == typeof t ? (0, i.jsx)('img', {
        src: t,
        alt: '',
        className: s.bannerIcon
      }) : t,
      (0, i.jsxs)('div', {
        className: s.bannerText,
        children: [
          (0, i.jsx)('div', {
            className: l()(s.bannerHeader, o),
            children: n
          }),
          (0, i.jsx)('div', {
            className: s.bannerSubtext,
            children: a
          })
        ]
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: s.actionButtons,
    children: c
  })
]
  });
}