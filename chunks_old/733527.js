"use strict";
n.r(t), n.d(t, {
  ArrowSmallRightIcon: function() {
    return o
  }
});
var l = n("37983");
n("884691");
var r = n("669491"),
  u = n("82169");
let o = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: o = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...c
  } = e;
  return (0, l.jsx)("svg", {
    ...(0, u.default)(c),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, l.jsx)("path", {
      fill: "string" == typeof o ? o : o.css,
      d: "M20.7 12.7a1 1 0 0 0 0-1.4l-5-5a1 1 0 1 0-1.4 1.4l3.29 3.3H4a1 1 0 1 0 0 2h13.59l-3.3 3.3a1 1 0 0 0 1.42 1.4l5-5Z",
      className: i
    })
  })
}