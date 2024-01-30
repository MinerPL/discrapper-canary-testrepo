"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  n = s.n(r),
  l = s("448052"),
  i = s("77078"),
  u = s("782340"),
  o = s("16358"),
  d = s("460026"),
  c = e => {
    let {
      className: t,
      onBackClick: s
    } = e;
    return (0, a.jsxs)("div", {
      className: n(o.container, t),
      "data-testid": "all-perks-hero-header",
      children: [(0, a.jsx)("img", {
        src: d,
        alt: "",
        className: o.headerArt
      }), (0, a.jsx)("div", {
        className: o.containerInner,
        children: (0, a.jsxs)("div", {
          className: o.containerInner,
          children: [(0, a.jsx)("div", {
            className: o.backButtonContainer,
            children: (0, a.jsxs)(i.Clickable, {
              onClick: s,
              className: o.backButton,
              children: [(0, a.jsx)(l.ChevronSmallLeftIcon, {
                color: "currentColor"
              }), u.default.Messages.BACK]
            })
          }), (0, a.jsx)("div", {
            className: o.contentContainer,
            children: (0, a.jsx)("div", {
              className: o.content,
              children: (0, a.jsx)(i.Heading, {
                variant: "display-lg",
                color: "always-white",
                children: u.default.Messages.NITRO_HOME_ALL_YOUR_NITRO_PERKS
              })
            })
          })]
        })
      })]
    })
  }