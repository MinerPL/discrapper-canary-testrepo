"use strict";
i.r(t);
var a = i("735250");
i("470079");
var l = i("481060"),
  n = i("671234");
t.default = function(e) {
  let {
    text: t
  } = e;
  return (0, a.jsxs)("div", {
    className: n.container,
    children: [(0, a.jsx)(l.FormDivider, {}), (0, a.jsx)(l.Text, {
      variant: "text-xs/bold",
      color: "header-secondary",
      className: n.text,
      children: t.toUpperCase()
    }), (0, a.jsx)(l.FormDivider, {})]
  })
}