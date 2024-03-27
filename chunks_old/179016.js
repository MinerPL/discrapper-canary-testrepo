"use strict";
i.r(t), i.d(t, {
  default: function() {
    return l
  }
});
var n = i("37983");
i("884691");
var a = i("75196");

function l(e) {
  let {
    width: t = 17,
    height: i = 16,
    color: l = "currentColor",
    foreground: s,
    ...r
  } = e;
  return (0, n.jsxs)("svg", {
    ...(0, a.default)(r),
    width: t,
    height: i,
    viewBox: "0 0 17 16",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, n.jsx)("rect", {
      className: s,
      y: "5",
      width: "16",
      height: "2",
      rx: "1",
      fill: l
    }), (0, n.jsx)("rect", {
      className: s,
      y: "9",
      width: "8",
      height: "2",
      rx: "1",
      fill: l
    })]
  })
}