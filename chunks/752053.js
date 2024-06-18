"use strict";
var n = t(735250);
t(470079);
var a = t(780384),
  i = t(481060),
  l = t(410030),
  r = t(689938),
  o = t(797056),
  c = t(982240),
  u = t(533854);
s.Z = e => {
  let {
    onRetry: s
  } = e, t = (0, l.ZP)();
  return (0, n.jsxs)("div", {
    className: o.wrapper,
    children: [(0, n.jsx)("img", {
      className: o.__invalid_loadIssueImg,
      src: (0, a.wj)(t) ? c : u,
      alt: ""
    }), (0, n.jsx)(i.Heading, {
      className: o.heading1,
      variant: "heading-xl/semibold",
      children: r.Z.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
    }), (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      children: r.Z.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
    }), (0, n.jsx)(i.Button, {
      className: o.reload,
      size: i.Button.Sizes.MEDIUM,
      color: i.Button.Colors.BRAND,
      onClick: s,
      children: r.Z.Messages.ERRORS_RELOAD
    })]
  })
}