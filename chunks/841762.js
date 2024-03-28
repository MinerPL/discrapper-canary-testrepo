"use strict";
a.r(e), a.d(e, {
  default: function() {
    return c
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("803997"),
  i = a.n(l),
  r = a("481060"),
  u = a("186231");

function o(t) {
  let {
    alt: e,
    ...a
  } = t, [l, i] = s.useState(!0);
  return (0, n.jsxs)(n.Fragment, {
    children: [l && (0, n.jsx)(r.Spinner, {
      type: r.Spinner.Type.LOW_MOTION,
      className: u.loader
    }), (0, n.jsx)("img", {
      ...a,
      alt: e,
      onLoad: () => i(!1)
    })]
  })
}

function c(t) {
  let {
    src: e,
    backgroundSrc: a,
    alt: s,
    aspectRatio: l,
    className: r,
    imageChildClassName: c,
    ...d
  } = t;
  return (0, n.jsxs)("div", {
    className: i()(u.container, r),
    children: [(0, n.jsx)("img", {
      src: a,
      alt: s,
      className: u.backgroundImage
    }), (0, n.jsx)("div", {
      className: u.backgroundImageFilter
    }), (0, n.jsx)("div", {
      style: {
        aspectRatio: l
      },
      className: u.imageContainer,
      children: (0, n.jsx)(o, {
        src: e,
        alt: s,
        className: i()(u.image, c),
        ...d
      })
    })]
  })
}