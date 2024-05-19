"use strict";
n.r(t);
var i = n("735250");
n("470079");
var s = n("882485"),
  l = n("481060"),
  a = n("44264");
t.default = function(e) {
  let {
    message: t
  } = e;
  return (0, i.jsxs)("div", {
    className: a.container,
    children: [(0, i.jsx)(s.CircleInformationIcon, {
      className: a.icon,
      width: 20,
      height: 20,
      color: l.tokens.colors.TEXT_WARNING
    }), (0, i.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "header-muted",
      children: t
    })]
  })
}