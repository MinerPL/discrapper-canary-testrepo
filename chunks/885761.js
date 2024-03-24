"use strict";
E.r(t), E.d(t, {
  CheckmarkBoldIcon: function() {
    return a
  }
});
var _ = E("37983");
E("884691");
var s = E("669491"),
  T = E("82169");
let a = e => {
  let {
    width: t = 24,
    height: E = 24,
    color: a = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: n = "",
    ...A
  } = e;
  return (0, _.jsx)("svg", {
    ...(0, T.default)(A),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: E,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, _.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      fillRule: "evenodd",
      d: "M22.06 4.94a1.5 1.5 0 0 1 0 2.12l-12 12a1.5 1.5 0 0 1-2.12 0l-6-6a1.5 1.5 0 0 1 2.12-2.12L9 15.88 19.94 4.94a1.5 1.5 0 0 1 2.12 0Z",
      clipRule: "evenodd",
      className: n
    })
  })
}