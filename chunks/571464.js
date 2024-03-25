"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var l = a("37983");
a("884691");
var s = a("819855"),
  r = a("77078"),
  n = a("841098"),
  i = a("782340"),
  o = a("706055"),
  c = a("321220"),
  u = a("684386"),
  d = e => {
    let {
      onRetry: t
    } = e, a = (0, n.default)();
    return (0, l.jsxs)("div", {
      className: o.wrapper,
      children: [(0, l.jsx)("img", {
        className: o.loadIssueImg,
        src: (0, s.isThemeDark)(a) ? c : u,
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