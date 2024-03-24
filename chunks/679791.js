"use strict";
s.r(t), s.d(t, {
  AIcon: function() {
    return a
  }
});
var n = s("37983");
s("884691");
var r = s("669491"),
  l = s("82169");
let a = e => {
  let {
    width: t = 24,
    height: s = 24,
    color: a = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...o
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, l.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: s,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      d: "M20.84 21.32a.5.5 0 0 1-.46.68h-1.52a1 1 0 0 1-.94-.66l-1.55-4.28H7.63l-1.56 4.28a1 1 0 0 1-.94.66H3.62a.5.5 0 0 1-.47-.68l7.09-18.6a1 1 0 0 1 .93-.64h1.63a1 1 0 0 1 .93.65l7.11 18.6ZM11.98 5.1l-3.43 9.43h6.87L11.98 5.1Z",
      className: i
    })
  })
}