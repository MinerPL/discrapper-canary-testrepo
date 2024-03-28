"use strict";
s.r(t), s.d(t, {
  FacebookIcon: function() {
    return i
  }
});
var a = s("735250");
s("470079");
var n = s("692547"),
  l = s("331595");
let i = e => {
  let {
    width: t = 24,
    height: s = 24,
    color: i = n.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...o
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, l.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: s,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M23 12a11 11 0 1 0-12.72 10.87v-7.69h-2.8V12h2.8V9.58c0-2.76 1.64-4.28 4.16-4.28 1.2 0 2.46.21 2.46.21v2.7H15.5c-1.37 0-1.8.86-1.8 1.73V12h3.06l-.49 3.18h-2.56v7.69A11 11 0 0 0 23 12Z",
      className: r
    })
  })
}