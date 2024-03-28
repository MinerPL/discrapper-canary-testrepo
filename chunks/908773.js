"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("960259"),
  l = n("8386"),
  i = n("325767");
t.default = (0, a.replaceIcon)(function(e) {
  let {
    width: t = 18,
    height: n = 18,
    color: a = "currentColor",
    foreground: l,
    ...r
  } = e;
  return (0, s.jsx)("svg", {
    ...(0, i.default)(r),
    width: t,
    height: n,
    viewBox: "0 0 18 18",
    children: (0, s.jsx)("polygon", {
      fillRule: "nonzero",
      className: l,
      fill: a,
      points: "15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"
    })
  })
}, l.PlusSmallIcon, void 0, {
  size: 18
})