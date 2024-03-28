"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("960259"),
  s = n("480743"),
  i = n("325767");
t.default = (0, l.replaceIcon)(function(e) {
  let {
    width: t = 16,
    height: n = 16,
    color: l = "currentColor",
    foreground: s,
    ...r
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, i.default)(r),
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, a.jsx)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: (0, a.jsx)("path", {
        className: s,
        fill: l,
        d: "M19 3H5V5H7V12H5V14H11V22H13V14H19V12H17V5H19V3Z"
      })
    })
  })
}, s.PinUprightIcon, void 0, {
  size: 16
})