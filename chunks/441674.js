"use strict";
var i = n(735250);
n(470079);
var r = n(960259),
  s = n(266075),
  o = n(325767);
t.Z = (0, r.hN)(function(e) {
  let {
    width: t = 24,
    height: n = 24,
    color: r = "currentColor",
    foreground: s,
    backgroundColor: a,
    ...l
  } = e;
  return (0, i.jsxs)("svg", {
    ...(0, o.Z)(l),
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: [null != a ? (0, i.jsx)("circle", {
      r: 8,
      cx: 12,
      cy: 12,
      fill: a
    }) : null, (0, i.jsx)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: (0, i.jsx)("path", {
        className: s,
        fill: r,
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      })
    })]
  })
}, s.o, {
  backgroundColor: "secondaryColor",
  foreground: "colorClass",
  className: "className",
  color: "color"
}, {
  size: 24
})