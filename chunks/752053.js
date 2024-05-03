"use strict";
a.r(t);
var l = a("735250");
a("470079");
var s = a("780384"),
  r = a("481060"),
  n = a("410030"),
  i = a("689938"),
  o = a("96622"),
  u = a("982240"),
  c = a("533854");
t.default = e => {
  let {
    onRetry: t
  } = e, a = (0, n.default)();
  return (0, l.jsxs)("div", {
    className: o.wrapper,
    children: [(0, l.jsx)("img", {
      className: o.__invalid_loadIssueImg,
      src: (0, s.isThemeDark)(a) ? u : c,
      alt: ""
    }), (0, l.jsx)(r.Heading, {
      className: o.heading1,
      variant: "heading-xl/semibold",
      children: i.default.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
    }), (0, l.jsx)(r.Text, {
      variant: "text-md/normal",
      children: i.default.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
    }), (0, l.jsx)(r.Button, {
      className: o.reload,
      size: r.Button.Sizes.MEDIUM,
      color: r.Button.Colors.BRAND_NEW,
      onClick: t,
      children: i.default.Messages.ERRORS_RELOAD
    })]
  })
}