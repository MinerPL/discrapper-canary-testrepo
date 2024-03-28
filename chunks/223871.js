"use strict";
A.r(t), A.d(t, {
  UndoIcon: function() {
    return n
  }
});
var a = A("735250");
A("470079");
var l = A("692547"),
  s = A("331595");
let n = e => {
  let {
    width: t = 24,
    height: A = 24,
    color: n = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...i
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, s.default)(i),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: A,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof n ? n : n.css,
      d: "M2 8a1 1 0 0 1 2 0v3.54A10.26 10.26 0 0 1 12.38 7c4.23 0 7.83 2.74 9.53 6.6a1 1 0 1 1-1.82.8c-1.45-3.25-4.4-5.4-7.71-5.4a8.34 8.34 0 0 0-6.96 4H9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V8Z",
      className: r
    })
  })
}