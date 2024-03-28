"use strict";
s.r(t), s.d(t, {
  ListBulletsIcon: function() {
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
      d: "M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM4 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 20a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM9 3a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H9ZM8 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM9 19a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H9Z",
      className: T
    })
  })
}