t.d(n, {
  Z: function() {
return d;
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  r = t(131388),
  o = t(409813),
  s = t(750143),
  l = t(166379),
  c = t(60314);

function d(e) {
  let {
step: n,
onClose: t
  } = e, d = (0, r.Z)(s.X);
  return n === o.h8.BENEFITS || n === o.h8.CONFIRM ? null : (0, i.jsxs)('div', {
className: l.headerContainer,
children: [
  !d && (0, i.jsx)('div', {
    className: l.headerImageContainer,
    'aria-hidden': 'true',
    'data-accessibility': 'desaturate',
    children: (0, i.jsx)('img', {
      src: c,
      alt: '',
      className: l.headerImage
    })
  }),
  (0, i.jsx)(a.ModalCloseButton, {
    withCircleBackground: !0,
    className: l.closeButton,
    onClick: t
  })
]
  });
}