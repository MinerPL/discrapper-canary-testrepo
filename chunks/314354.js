"use strict";
l.r(t), l.d(t, {
  RetryIcon: function() {
    return n
  }
});
var s = l("735250");
l("470079");
var a = l("692547"),
  r = l("331595");
let n = e => {
  let {
    width: t = 24,
    height: l = 24,
    color: n = a.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...o
  } = e;
  return (0, s.jsx)("svg", {
    ...(0, r.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: l,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, s.jsx)("path", {
      fill: "string" == typeof n ? n : n.css,
      d: "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.98 9.98 0 0 0-18 6 10 10 0 0 0 16.29 7.78 1 1 0 0 0-1.26-1.56A8 8 0 0 1 4 12Z",
      className: i
    })
  })
}