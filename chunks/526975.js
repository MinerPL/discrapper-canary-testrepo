"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var r = n("37983"),
  l = n("884691"),
  o = n("266937"),
  a = n("286458"),
  s = n("796727");
let i = (0, o.CustomPicker)(e => (0, r.jsxs)("div", {
  className: s.wrapper,
  children: [(0, r.jsx)("div", {
    className: s.saturation,
    children: (0, r.jsx)(a.Saturation, {
      ...e
    })
  }), (0, r.jsx)("div", {
    className: s.hue,
    children: (0, r.jsx)(a.Hue, {
      ...e,
      direction: "horizontal"
    })
  })]
}));
var c = l.memo(i)