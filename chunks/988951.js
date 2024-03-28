"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("960259"),
  l = n("621937"),
  i = n("325767");
t.default = (0, s.replaceIcon)(function(e) {
  let {
    width: t = 16,
    height: n = 16,
    color: s = "currentColor",
    foreground: l,
    ...r
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, i.default)(r),
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    children: (0, a.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [(0, a.jsx)("path", {
        fill: s,
        className: l,
        fillRule: "nonzero",
        d: "M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z",
        transform: "translate(2 4)"
      }), (0, a.jsx)("path", {
        d: "M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"
      })]
    })
  })
}, l.FriendsIcon, void 0, {
  size: 16
})