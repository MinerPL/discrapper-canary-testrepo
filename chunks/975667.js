"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("960259"),
  l = n("589884"),
  i = n("325767");
t.default = (0, a.replaceIcon)(function(e) {
  let {
    width: t = 16,
    height: n = 16,
    color: a = "currentColor",
    foreground: l,
    ...r
  } = e;
  return (0, s.jsx)("svg", {
    ...(0, i.default)(r),
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    children: (0, s.jsx)("path", {
      className: l,
      fill: a,
      d: "M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"
    })
  })
}, l.DpadIcon, void 0, {
  size: 16
})