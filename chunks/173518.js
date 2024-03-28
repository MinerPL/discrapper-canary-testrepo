"use strict";
l.r(t), l.d(t, {
  ArrowsUpDownIcon: function() {
    return o
  }
});
var a = l("735250");
l("470079");
var s = l("692547"),
  n = l("331595");
let o = e => {
  let {
    width: t = 24,
    height: l = 24,
    color: o = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...r
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, n.default)(r),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: l,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof o ? o : o.css,
      d: "M16.3 21.7a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0-1.4-1.4L18 18.58V3a1 1 0 1 0-2 0v15.59l-2.3-2.3a1 1 0 0 0-1.4 1.42l4 4ZM6.3 2.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L8 5.42V21a1 1 0 1 1-2 0V5.41l-2.3 2.3a1 1 0 0 1-1.4-1.42l4-4Z",
      className: i
    })
  })
}