"use strict";
n.r(t), n.d(t, {
  SlashIcon: function() {
    return s
  }
});
var i = n("37983");
n("884691");
var l = n("669491"),
  a = n("82169");
let s = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: s = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...o
  } = e;
  return (0, i.jsx)("svg", {
    ...(0, a.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      fillRule: "evenodd",
      d: "M19.12 2a.5.5 0 0 1 .43.76L8.22 21.64a.75.75 0 0 1-.64.36h-2.7a.5.5 0 0 1-.43-.76L15.78 2.36a.75.75 0 0 1 .64-.36h2.7Z",
      clipRule: "evenodd",
      className: r
    })
  })
}