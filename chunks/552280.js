"use strict";
l.r(t), l.d(t, {
  ShareIcon: function() {
    return i
  }
});
var n = l("735250");
l("470079");
var s = l("692547"),
  u = l("331595");
let i = e => {
  let {
    width: t = 24,
    height: l = 24,
    color: i = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
    ...o
  } = e;
  return (0, n.jsxs)("svg", {
    ...(0, u.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: l,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, n.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M13 16V5.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.42L11 5.4V16a1 1 0 1 0 2 0Z",
      className: a
    }), (0, n.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M4 15a1 1 0 0 1 1-1h2a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-2a1 1 0 1 0 0 2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z",
      className: a
    })]
  })
}