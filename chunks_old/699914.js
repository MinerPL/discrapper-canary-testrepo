"use strict";
n.r(t), n.d(t, {
  HammerIcon: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var s = n("669491"),
  a = n("82169");
let r = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: r = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...o
  } = e;
  return (0, l.jsx)("svg", {
    ...(0, a.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, l.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      d: "M1.23 21.13a1 1 0 0 1 0-1.41l7.48-7.47c.2-.2.51-.2.7 0l2.13 2.12c.2.2.2.5 0 .7l-7.48 7.48a1 1 0 0 1-1.41 0l-1.42-1.42ZM7.76 7.76l8.48 8.49a2 2 0 0 0 2.83 0l3.54-3.54a2 2 0 0 0 0-2.83l-2.94-2.94.65-.66a1 1 0 0 0 0-1.4l-1.41-1.42a1 1 0 0 0-1.41 0l-.66.65-2.72-2.71a2 2 0 0 0-2.83 0L7.76 4.93a2 2 0 0 0 0 2.83Z",
      className: i
    })
  })
}