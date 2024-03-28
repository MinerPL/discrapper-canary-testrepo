"use strict";
n.r(t);
var i = n("735250");
n("470079");
var r = n("803997"),
  s = n.n(r),
  a = n("153832"),
  l = n("406658");
let o = (0, a.v4)();
t.default = e => {
  let {
    open: t,
    className: n,
    withHighlight: r = !1
  } = e;
  return (0, i.jsxs)("svg", {
    width: "18",
    height: "18",
    className: s()(l.button, n, {
      [l.open]: t,
      [l.withHighlight]: r
    }),
    children: [r && (0, i.jsx)("defs", {
      children: (0, i.jsxs)("linearGradient", {
        id: o,
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "18",
        gradientUnits: "userSpaceOnUse",
        children: [(0, i.jsx)("stop", {
          offset: "0",
          stopColor: "#B473F5"
        }), (0, i.jsx)("stop", {
          offset: "1",
          stopColor: "#E292AA"
        })]
      })
    }), (0, i.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [(0, i.jsx)("path", {
        d: "M0 0h18v18H0"
      }), (0, i.jsx)("path", {
        stroke: r ? "url(#".concat(o, ")") : "currentColor",
        d: "M4.5 4.5l9 9",
        strokeLinecap: "round"
      }), (0, i.jsx)("path", {
        stroke: r ? "url(#".concat(o, ")") : "currentColor",
        d: "M13.5 4.5l-9 9",
        strokeLinecap: "round"
      })]
    })]
  })
}