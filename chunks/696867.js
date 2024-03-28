"use strict";
s.r(t), s.d(t, {
  CheckmarkBoldIcon: function() {
    return n
  }
});
var E = s("735250");
s("470079");
var _ = s("692547"),
  a = s("331595");
let n = e => {
  let {
    width: t = 24,
    height: s = 24,
    color: n = _.default.colors.INTERACTIVE_NORMAL,
    colorClass: T = "",
    ...i
  } = e;
  return (0, E.jsx)("svg", {
    ...(0, a.default)(i),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: s,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, E.jsx)("path", {
      fill: "string" == typeof n ? n : n.css,
      fillRule: "evenodd",
      d: "M22.06 4.94a1.5 1.5 0 0 1 0 2.12l-12 12a1.5 1.5 0 0 1-2.12 0l-6-6a1.5 1.5 0 0 1 2.12-2.12L9 15.88 19.94 4.94a1.5 1.5 0 0 1 2.12 0Z",
      clipRule: "evenodd",
      className: T
    })
  })
}