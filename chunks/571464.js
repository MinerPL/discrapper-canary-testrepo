"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var r = a("37983");
a("884691");
var s = a("819855"),
  l = a("77078"),
  n = a("841098"),
  i = a("782340"),
  o = a("706055"),
  c = a("321220"),
  u = a("684386"),
  d = e => {
    let {
      onRetry: t
    } = e, a = (0, n.default)();
    return (0, r.jsxs)("div", {
      className: o.wrapper,
      children: [(0, r.jsx)("img", {
        className: o.loadIssueImg,
        src: (0, s.isThemeDark)(a) ? c : u,
        alt: ""
      }), (0, r.jsx)(l.Heading, {
        className: o.heading1,
        variant: "heading-xl/semibold",
        children: i.default.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        children: i.default.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
      }), (0, r.jsx)(l.Button, {
        className: o.reload,
        size: l.Button.Sizes.MEDIUM,
        color: l.Button.Colors.BRAND_NEW,
        onClick: t,
        children: i.default.Messages.ERRORS_RELOAD
      })]
    })
  }