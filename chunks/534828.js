"use strict";
var i = n(735250),
  r = n(470079),
  s = n(574523),
  o = n(475521),
  a = n(404631);
let l = (0, s.iS)(e => (0, i.jsxs)("div", {
  className: a.wrapper,
  children: [(0, i.jsx)("div", {
    className: a.saturation,
    children: (0, i.jsx)(o.Saturation, {
      ...e
    })
  }), (0, i.jsx)("div", {
    className: a.hue,
    children: (0, i.jsx)(o.Hue, {
      ...e,
      direction: "horizontal"
    })
  })]
}));
t.Z = r.memo(l)