"use strict";
t.d(n, {
  w: function() {
    return i
  }
});
var l = t(735250);
t(470079);
var a = t(692547),
  s = t(331595);
let i = e => {
  let {
    width: n = 24,
    height: t = 24,
    color: i = a.Z.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...u
  } = e;
  return (0, l.jsx)("svg", {
    ...(0, s.Z)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, l.jsx)("rect", {
      width: n,
      height: t,
      x: "3",
      y: "3",
      fill: "string" == typeof i ? i : i.css,
      rx: "3",
      className: r
    })
  })
}