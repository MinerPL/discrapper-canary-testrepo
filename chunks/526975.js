"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983"),
  r = n("884691"),
  o = n("266937"),
  a = n("286458"),
  s = n("796727");
let i = (0, o.CustomPicker)(e => (0, l.jsxs)("div", {
  className: s.wrapper,
  children: [(0, l.jsx)("div", {
    className: s.saturation,
    children: (0, l.jsx)(a.Saturation, {
      ...e
    })
  }), (0, l.jsx)("div", {
    className: s.hue,
    children: (0, l.jsx)(a.Hue, {
      ...e,
      direction: "horizontal"
    })
  })]
}));
var c = r.memo(i)