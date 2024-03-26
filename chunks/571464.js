"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var s = a("37983");
a("884691");
var r = a("819855"),
  l = a("77078"),
  n = a("841098"),
  o = a("782340"),
  i = a("706055"),
  u = a("321220"),
  c = a("684386"),
  d = e => {
    let {
      onRetry: t
    } = e, a = (0, n.default)();
    return (0, s.jsxs)("div", {
      className: i.wrapper,
      children: [(0, s.jsx)("img", {
        className: i.loadIssueImg,
        src: (0, r.isThemeDark)(a) ? u : c,
        alt: ""
      }), (0, s.jsx)(l.Heading, {
        className: i.heading1,
        variant: "heading-xl/semibold",
        children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
      }), (0, s.jsx)(l.Text, {
        variant: "text-md/normal",
        children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
      }), (0, s.jsx)(l.Button, {
        className: i.reload,
        size: l.Button.Sizes.MEDIUM,
        color: l.Button.Colors.BRAND_NEW,
        onClick: t,
        children: o.default.Messages.ERRORS_RELOAD
      })]
    })
  }