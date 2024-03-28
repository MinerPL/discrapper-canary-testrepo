"use strict";
n.r(t);
var i = n("735250");
n("470079");
var s = n("882485"),
  a = n("481060"),
  l = n("752803");
t.default = function(e) {
  let {
    message: t
  } = e;
  return (0, i.jsxs)("div", {
    className: l.container,
    children: [(0, i.jsx)(s.CircleInformationIcon, {
      className: l.icon,
      width: 20,
      height: 20,
      color: a.tokens.colors.TEXT_WARNING
    }), (0, i.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "header-muted",
      children: t
    })]
  })
}