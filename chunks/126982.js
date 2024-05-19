"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var l = s("735250");
s("470079");
var n = s("481060"),
  a = s("131388"),
  i = s("409813"),
  r = s("750143"),
  u = s("646900"),
  d = s("60314");

function o(e) {
  let {
    step: t,
    onClose: s
  } = e, o = (0, a.default)(r.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
  return t === i.Step.BENEFITS || t === i.Step.CONFIRM ? null : (0, l.jsxs)("div", {
    className: u.headerContainer,
    children: [!o && (0, l.jsx)("div", {
      className: u.headerImageContainer,
      "aria-hidden": "true",
      "data-accessibility": "desaturate",
      children: (0, l.jsx)("img", {
        src: d,
        alt: "",
        className: u.headerImage
      })
    }), (0, l.jsx)(n.ModalCloseButton, {
      withCircleBackground: !0,
      className: u.closeButton,
      onClick: s
    })]
  })
}