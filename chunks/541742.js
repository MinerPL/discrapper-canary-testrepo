"use strict";
a.r(t), a.d(t, {
  MoreHorizontalIcon: function() {
    return i
  }
});
var l = a("37983");
a("884691");
var n = a("669491"),
  r = a("82169");
let i = e => {
  let {
    width: t = 24,
    height: a = 24,
    color: i = n.default.colors.INTERACTIVE_NORMAL,
    colorClass: s = "",
    ...u
  } = e;
  return (0, l.jsx)("svg", {
    ...(0, r.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: a,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, l.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      fillRule: "evenodd",
      d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
      clipRule: "evenodd",
      className: s
    })
  })
}