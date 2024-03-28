"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("735250");
n("470079");
var s = n("325767");

function l(e) {
  let {
    width: t = 80,
    height: n = 20,
    color: l = "currentColor",
    foreground: i,
    ...r
  } = e;
  return (0, a.jsxs)("svg", {
    ...(0, s.default)(r),
    width: t,
    height: n,
    viewBox: "0 0 ".concat(t, " ").concat(n),
    children: [(0, a.jsx)("pattern", {
      id: "pill-frame-pattern",
      width: 8 / t,
      height: "1",
      children: (0, a.jsx)("path", {
        d: "m0 0h8v20h-8zm4 2c-1.1045695 0-2 .8954305-2 2v12c0 1.1045695.8954305 2 2 2s2-.8954305 2-2v-12c0-1.1045695-.8954305-2-2-2z",
        fillRule: "evenodd",
        fill: l,
        className: i
      })
    }), (0, a.jsx)("rect", {
      fill: "url(#pill-frame-pattern)",
      height: "100%",
      width: "100%"
    })]
  })
}