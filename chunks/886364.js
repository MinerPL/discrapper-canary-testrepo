"use strict";
n.r(t);
var a = n("735250");
n("470079");
t.default = e => {
  let {
    id: t,
    startColor: n,
    stopColor: s,
    color: l,
    stop: i
  } = e;
  return (0, a.jsxs)("linearGradient", {
    id: t,
    children: [(0, a.jsx)("stop", {
      offset: "0",
      stopColor: n
    }), (0, a.jsx)("stop", {
      offset: i,
      stopColor: s
    }), (0, a.jsx)("stop", {
      offset: i,
      stopColor: l
    }), (0, a.jsx)("stop", {
      offset: "1",
      stopColor: l
    })]
  })
}