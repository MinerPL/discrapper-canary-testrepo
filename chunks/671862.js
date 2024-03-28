"use strict";
s.r(t);
var n = s("735250"),
  l = s("470079"),
  a = s("574523"),
  o = s("475521"),
  i = s("688673");
let r = (0, a.CustomPicker)(e => (0, n.jsxs)("div", {
  className: i.wrapper,
  children: [(0, n.jsx)("div", {
    className: i.saturation,
    children: (0, n.jsx)(o.Saturation, {
      ...e
    })
  }), (0, n.jsx)("div", {
    className: i.hue,
    children: (0, n.jsx)(o.Hue, {
      ...e,
      direction: "horizontal"
    })
  })]
}));
t.default = l.memo(r)