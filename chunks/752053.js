"use strict";
a.r(t);
var s = a("735250");
a("470079");
var l = a("780384"),
  r = a("481060"),
  n = a("410030"),
  o = a("689938"),
  i = a("239014"),
  u = a("982240"),
  c = a("533854");
t.default = e => {
  let {
    onRetry: t
  } = e, a = (0, n.default)();
  return (0, s.jsxs)("div", {
    className: i.wrapper,
    children: [(0, s.jsx)("img", {
      className: i.__invalid_loadIssueImg,
      src: (0, l.isThemeDark)(a) ? u : c,
      alt: ""
    }), (0, s.jsx)(r.Heading, {
      className: i.heading1,
      variant: "heading-xl/semibold",
      children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
    }), (0, s.jsx)(r.Text, {
      variant: "text-md/normal",
      children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
    }), (0, s.jsx)(r.Button, {
      className: i.reload,
      size: r.Button.Sizes.MEDIUM,
      color: r.Button.Colors.BRAND_NEW,
      onClick: t,
      children: o.default.Messages.ERRORS_RELOAD
    })]
  })
}