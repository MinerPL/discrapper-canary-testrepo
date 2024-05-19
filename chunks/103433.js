"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  n = s("605260"),
  l = s("481060"),
  o = s("689938"),
  u = s("829075"),
  d = s("505944");
t.default = e => {
  let {
    className: t,
    onBackClick: s
  } = e;
  return (0, a.jsxs)("div", {
    className: i()(u.container, t),
    "data-testid": "all-perks-hero-header",
    children: [(0, a.jsx)("img", {
      src: d,
      alt: "",
      className: u.headerArt
    }), (0, a.jsxs)("div", {
      className: u.containerInner,
      children: [(0, a.jsx)("div", {
        className: u.backButtonContainer,
        children: (0, a.jsxs)(l.Clickable, {
          onClick: s,
          className: u.backButton,
          children: [(0, a.jsx)(n.ChevronSmallLeftIcon, {
            color: "currentColor"
          }), o.default.Messages.BACK]
        })
      }), (0, a.jsx)("div", {
        className: u.__invalid_contentContainer,
        children: (0, a.jsx)("div", {
          className: u.content,
          children: (0, a.jsx)(l.Heading, {
            variant: "display-lg",
            color: "always-white",
            children: o.default.Messages.NITRO_HOME_ALL_YOUR_NITRO_PERKS
          })
        })
      })]
    })]
  })
}