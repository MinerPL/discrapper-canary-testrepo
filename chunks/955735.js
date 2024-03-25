"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  s = n.n(l),
  u = n("77078"),
  o = n("365544");

function a(e) {
  let {
    alt: t,
    ...n
  } = e, [l, s] = r.useState(!0);
  return (0, i.jsxs)(i.Fragment, {
    children: [l && (0, i.jsx)(u.Spinner, {
      type: u.Spinner.Type.LOW_MOTION,
      className: o.loader
    }), (0, i.jsx)("img", {
      ...n,
      alt: t,
      onLoad: () => s(!1)
    })]
  })
}

function d(e) {
  let {
    src: t,
    backgroundSrc: n,
    alt: r,
    aspectRatio: l,
    className: u,
    imageChildClassName: d,
    ...c
  } = e;
  return (0, i.jsxs)("div", {
    className: s(o.container, u),
    children: [(0, i.jsx)("img", {
      src: n,
      alt: r,
      className: o.backgroundImage
    }), (0, i.jsx)("div", {
      className: o.backgroundImageFilter
    }), (0, i.jsx)("div", {
      style: {
        aspectRatio: l
      },
      className: o.imageContainer,
      children: (0, i.jsx)(a, {
        src: t,
        alt: r,
        className: s(o.image, d),
        ...c
      })
    })]
  })
}