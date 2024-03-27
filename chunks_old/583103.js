"use strict";
n.r(t), n.d(t, {
  DenyIcon: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var r = n("669491"),
  s = n("82169");
let u = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: u = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...l
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, s.default)(l),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof u ? u : u.css,
      fillRule: "evenodd",
      d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-2 0a9 9 0 0 1-14.62 7.03L19.03 6.38A8.96 8.96 0 0 1 21 12ZM4.97 17.62 17.62 4.97A9 9 0 0 0 4.97 17.62Z",
      clipRule: "evenodd",
      className: i
    })
  })
}