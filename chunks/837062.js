"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("960259"),
  l = n("734858"),
  i = n("325767");
t.default = (0, a.replaceIcon)(function(e) {
  let {
    width: t = 24,
    height: n = 24,
    color: a = "currentColor",
    foreground: l,
    ...r
  } = e;
  return (0, s.jsx)("svg", {
    ...(0, i.default)(r),
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    children: (0, s.jsx)("path", {
      d: "M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z",
      fill: a,
      className: l
    })
  })
}, l.InboxIcon, void 0, {
  size: 24
})