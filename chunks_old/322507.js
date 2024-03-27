"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  i = s.n(r),
  n = s("448052"),
  l = s("77078"),
  o = s("782340"),
  u = s("871610"),
  d = s("460026"),
  c = e => {
    let {
      className: t,
      onBackClick: s
    } = e;
    return (0, a.jsxs)("div", {
      className: i(u.container, t),
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
          className: u.contentContainer,
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