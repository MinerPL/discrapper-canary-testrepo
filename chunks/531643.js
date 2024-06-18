"use strict";
n.r(t), n.d(t, {
  UPLOAD_ERROR_MODAL_KEY: function() {
    return I
  },
  default: function() {
    return E
  },
  openUploadError: function() {
    return T
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(952265),
  a = n(466377),
  l = n(355314),
  u = n(153124),
  _ = n(310752),
  d = n(731994),
  c = n(239792);

function E(e) {
  let {
    title: t,
    help: n,
    showPremiumUpsell: r,
    transitionState: o,
    icons: E,
    fileSize: I,
    onClose: T
  } = e, h = (0, u.Dt)(), S = null != E ? E : d.J6;
  return r ? (0, i.jsx)(l.Z, {
    transitionState: o,
    onClose: T,
    fileSize: I
  }) : (0, i.jsx)(a.Y0, {
    size: a.Cg.DYNAMIC,
    "aria-labelledby": h,
    transitionState: o,
    children: (0, i.jsx)("div", {
      className: s()(c.uploadDropModal, c.error),
      children: (0, i.jsxs)("div", {
        className: c.inner,
        children: [(0, i.jsx)(_.Z, {
          icons: S
        }), (0, i.jsx)("div", {
          id: h,
          className: c.title,
          children: t
        }), (0, i.jsx)("div", {
          className: c.instructions,
          children: n
        })]
      })
    })
  })
}
let I = "UPLOAD_ERROR_MODAL_KEY";

function T(e) {
  (0, o.h7)(t => (0, i.jsx)(E, {
    ...t,
    ...e
  }), {
    modalKey: I
  })
}