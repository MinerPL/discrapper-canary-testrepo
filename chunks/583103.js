"use strict";
n.r(t), n.d(t, {
  DenyIcon: function() {
    return s
  }
});
var i = n("37983");
n("884691");
var r = n("669491"),
  l = n("82169");
let s = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: s = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: u = "",
    ...o
  } = e;
  return (0, i.jsx)("svg", {
    ...(0, l.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      fillRule: "evenodd",
      d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-2 0a9 9 0 0 1-14.62 7.03L19.03 6.38A8.96 8.96 0 0 1 21 12ZM4.97 17.62 17.62 4.97A9 9 0 0 0 4.97 17.62Z",
      clipRule: "evenodd",
      className: u
    })
  })
}