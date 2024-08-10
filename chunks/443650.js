t.d(n, {
  Z: function() {
return d;
  }
});
var r = t(735250);
t(470079);
var a = t(120356),
  o = t.n(a),
  i = t(481060),
  s = t(809086),
  l = t(560588);

function c(e) {
  let {
className: n,
onClose: t
  } = e;
  return (0, r.jsx)(i.Clickable, {
className: o()(l.closeButtonContainer, n),
onClick: t,
children: (0, r.jsx)(i.XSmallIcon, {
  size: 'xs',
  color: 'currentColor',
  className: l.closeButtonIcon
})
  });
}

function d(e) {
  let {
guildProductListing: n,
onClose: t,
className: a
  } = e;
  return (0, r.jsxs)(i.ModalHeader, {
className: o()(l.header, a),
separator: !1,
children: [
  (0, r.jsx)(s.Z, {
    className: l.headerImage,
    listing: n,
    imageSize: 500,
    alt: ''
  }),
  (0, r.jsx)(c, {
    className: l.closeButton,
    onClose: t
  })
]
  });
}