"use strict";
s.r(t), s.d(t, {
  EyeDropperIcon: function() {
    return o
  }
});
var n = s("735250");
s("470079");
var l = s("692547"),
  a = s("331595");
let o = e => {
  let {
    width: t = 24,
    height: s = 24,
    color: o = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...r
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, a.default)(r),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: s,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("path", {
      fill: "string" == typeof o ? o : o.css,
      d: "m16.25 2.25-2 2-.63-.63a3 3 0 0 0-4.24 0l-.85.85c-.3.3-.3.77 0 1.06l9.94 9.94c.3.3.77.3 1.06 0l.85-.85a3 3 0 0 0 0-4.24l-.63-.63 2-2a3.89 3.89 0 1 0-5.5-5.5ZM9.3 9.7a1 1 0 0 1 1.4 0l3.6 3.6a1 1 0 0 1 0 1.4l-4.84 4.84a5 5 0 0 1-2.7 1.39c-.47.08-.86.42-1.1.83a2.5 2.5 0 1 1-3.42-3.42c.41-.24.75-.63.83-1.1a5 5 0 0 1 1.4-2.7L9.28 9.7Z",
      className: i
    })
  })
}