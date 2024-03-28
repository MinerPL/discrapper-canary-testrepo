"use strict";
r.r(t), r.d(t, {
  LockUnlockedIcon: function() {
    return u
  }
});
var s = r("735250");
r("470079");
var a = r("692547"),
  n = r("331595");
let u = e => {
  let {
    width: t = 24,
    height: r = 24,
    color: u = a.default.colors.INTERACTIVE_NORMAL,
    colorClass: l = "",
    ...i
  } = e;
  return (0, s.jsx)("svg", {
    ...(0, n.default)(i),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: r,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, s.jsx)("path", {
      fill: "string" == typeof u ? u : u.css,
      fillRule: "evenodd",
      d: "M8.7 2.25A4.98 4.98 0 0 1 17 6v3h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h9V6a3 3 0 0 0-4.98-2.25 1 1 0 0 1-1.33-1.5ZM14 14a2 2 0 0 1-1 1.73V18a1 1 0 1 1-2 0v-2.27A2 2 0 1 1 14 14Z",
      clipRule: "evenodd",
      className: l
    })
  })
}