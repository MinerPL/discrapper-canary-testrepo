"use strict";
a.r(t), a.d(t, {
  default: function() {
    return n
  }
});
var l = a("37983");
a("884691");
var i = a("75196");

function n(e) {
  let {
    width: t = 24,
    height: a = 24,
    color: n = "currentColor",
    foreground: s,
    ...r
  } = e;
  return (0, l.jsxs)("svg", {
    ...(0, i.default)(r),
    width: t,
    height: a,
    viewBox: "0 0 8 12",
    children: [(0, l.jsx)("path", {
      d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
      fill: n,
      className: s
    }), (0, l.jsx)("path", {
      d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
      fill: n,
      className: s
    })]
  })
}