n.r(e), n.d(e, {
  default: function() {
return c;
  }
});
var a = n(735250);
n(470079);
var o = n(120356),
  r = n.n(o),
  i = n(481060),
  s = n(761705),
  l = n(828317);

function c(t) {
  let {
className: e,
transitionState: n,
items: o,
startingIndex: c,
onClose: u,
onIndexChange: d,
modalCarouselClassName: p,
modalCarouselItemClassName: h
  } = t;
  return (0, a.jsx)(i.ModalRoot, {
hideShadow: !0,
className: r()(l.carouselModal, e),
size: i.ModalSize.DYNAMIC,
transitionState: n,
'aria-label': '',
onClick: u,
children: (0, a.jsx)(s.Z, {
  className: p,
  items: o,
  startWith: c,
  onIndexChange: d,
  modalCarouselItemClassName: h
})
  });
}