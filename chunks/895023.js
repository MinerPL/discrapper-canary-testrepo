"use strict";
n.r(e), n.d(e, {
  default: function() {
    return c
  }
});
var o = n("735250");
n("470079");
var s = n("803997"),
  i = n.n(s),
  r = n("481060"),
  a = n("761705"),
  l = n("142337");

function c(t) {
  let {
    className: e,
    transitionState: n,
    items: s,
    startingIndex: c,
    onClose: u,
    onIndexChange: d,
    modalCarouselClassName: p,
    modalCarouselItemClassName: h
  } = t;
  return (0, o.jsx)(r.ModalRoot, {
    hideShadow: !0,
    className: i()(l.carouselModal, e),
    size: r.ModalSize.DYNAMIC,
    transitionState: n,
    "aria-label": "",
    onClick: u,
    children: (0, o.jsx)(a.default, {
      className: p,
      items: s,
      startWith: c,
      onIndexChange: d,
      modalCarouselItemClassName: h
    })
  })
}