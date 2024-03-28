"use strict";
n.r(t), n.d(t, {
  StopIcon: function() {
    return i
  }
});
var a = n("735250");
n("470079");
var l = n("692547"),
  u = n("331595");
let i = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: i = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: s = "",
    ...r
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, u.default)(r),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("rect", {
      width: t,
      height: n,
      x: "3",
      y: "3",
      fill: "string" == typeof i ? i : i.css,
      rx: "3",
      className: s
    })
  })
}