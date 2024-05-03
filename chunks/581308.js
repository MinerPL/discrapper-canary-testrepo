"use strict";
n.r(t);
var a = n("735250");
n("470079");
var r = n("882485"),
  s = n("481060"),
  o = n("572230");
t.default = function(e) {
  let {
    message: t
  } = e;
  return (0, a.jsxs)("div", {
    className: o.container,
    children: [(0, a.jsx)(r.CircleInformationIcon, {
      className: o.icon,
      width: 20,
      height: 20,
      color: s.tokens.colors.TEXT_WARNING
    }), (0, a.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "header-muted",
      children: t
    })]
  })
}