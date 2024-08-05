n.d(t, {
  i: function() {
return r;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  l = n(726181);

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
className: l.spamBanner,
children: [
  (0, i.jsxs)('div', {
    className: s()(l.bannerTextContainer, r),
    children: [
      'string' == typeof t ? (0, i.jsx)('img', {
        src: t,
        alt: '',
        className: l.bannerIcon
      }) : t,
      (0, i.jsxs)('div', {
        className: l.bannerText,
        children: [
          (0, i.jsx)('div', {
            className: s()(l.bannerHeader, o),
            children: n
          }),
          (0, i.jsx)('div', {
            className: l.bannerSubtext,
            children: a
          })
        ]
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: l.actionButtons,
    children: c
  })
]
  });
}