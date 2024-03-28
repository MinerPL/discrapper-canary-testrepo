"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("692547"),
  l = n("780384"),
  i = n("481060"),
  r = n("410030");
t.default = e => {
  let {
    className: t
  } = e, n = (0, r.default)(), o = (0, i.useToken)(s.default.colors.BACKGROUND_ACCENT).hex();
  return (0, a.jsx)("svg", {
    width: "700",
    height: "120",
    viewBox: "0 0 700 120",
    className: t,
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, a.jsx)("path", {
      fill: (0, l.isThemeDark)(n) ? o : "white",
      opacity: "1",
      d: "M351 39.047C185.4 -31.2102 48 9.77319 0 39.047V583.068C0 587.486 3.58174 591.068 8.00002 591.068H692C696.418 591.068 700 587.486 700 583.068V39.047C653.333 68.3208 516.6 109.304 351 39.047Z"
    })
  })
}