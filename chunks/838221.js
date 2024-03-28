"use strict";
i.r(t), i.d(t, {
  default: function() {
    return n
  }
});
var a = i("735250");
i("470079");
var l = i("325767");

function n(e) {
  let {
    width: t = 17,
    height: i = 16,
    color: n = "currentColor",
    foreground: s,
    ...r
  } = e;
  return (0, a.jsxs)("svg", {
    ...(0, l.default)(r),
    width: t,
    height: i,
    viewBox: "0 0 17 16",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, a.jsx)("rect", {
      className: s,
      y: "5",
      width: "16",
      height: "2",
      rx: "1",
      fill: n
    }), (0, a.jsx)("rect", {
      className: s,
      y: "9",
      width: "8",
      height: "2",
      rx: "1",
      fill: n
    })]
  })
}