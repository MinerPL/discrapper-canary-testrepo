"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var n = s("735250");
s("470079");
var a = s("481060"),
  r = s("358733");

function o(e) {
  let {
    heroImageSrc: t,
    heroImageAlt: s,
    children: o,
    header: i,
    description: u
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("img", {
      src: t,
      alt: s,
      className: r.heroImage
    }), (0, n.jsxs)(a.ModalContent, {
      className: r.body,
      children: [(0, n.jsxs)("div", {
        className: r.textContainer,
        children: [(0, n.jsx)(a.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: i
        }), null != u && (0, n.jsx)(a.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          className: r.description,
          children: u
        })]
      }), o]
    })]
  })
}