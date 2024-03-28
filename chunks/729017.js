"use strict";
s.r(t);
var n = s("735250");
s("470079");
var r = s("960259"),
  l = s("495056"),
  a = s("325767");
t.default = (0, r.replaceIcon)(function(e) {
  let {
    width: t = 16,
    height: s = 16,
    color: r = "currentColor",
    foreground: l,
    ...i
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, a.default)(i),
    width: t,
    height: s,
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: (0, n.jsx)("path", {
        className: l,
        fill: r,
        d: "M1,21 L23,21 L12,2 L1,21 L1,21 Z M13,18 L11,18 L11,16 L13,16 L13,18 L13,18 Z M13,14 L11,14 L11,10 L13,10 L13,14 L13,14 Z"
      })
    })
  })
}, l.WarningIcon, void 0, {
  size: 16
})