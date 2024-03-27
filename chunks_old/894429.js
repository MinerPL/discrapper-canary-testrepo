"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
});
var a = s("37983");
s("884691");
var l = s("75196");

function n(e) {
  let {
    width: t = 24,
    height: s = 24,
    color: n = "currentColor",
    ...i
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, l.default)(i),
    width: t,
    height: s,
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      d: "M22 9H10V7H22V9ZM22 12H2V14H22V12ZM22 17H2V19H22V17ZM9 5.41L7.59 4L4 7.59L2.41 6L1 7.41L4 10.41L9 5.41Z",
      fill: n
    })
  })
}