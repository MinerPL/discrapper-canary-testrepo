"use strict";
n.r(t), n.d(t, {
  StopIcon: function() {
    return s
  }
});
var l = n("37983");
n("884691");
var a = n("669491"),
  i = n("82169");
let s = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: s = a.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...u
  } = e;
  return (0, l.jsx)("svg", {
    ...(0, i.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, l.jsx)("rect", {
      width: t,
      height: n,
      x: "3",
      y: "3",
      fill: "string" == typeof s ? s : s.css,
      rx: "3",
      className: r
    })
  })
}