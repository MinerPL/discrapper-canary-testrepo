"use strict";
l.r(t), l.d(t, {
  BrowserIcon: function() {
    return i
  }
});
var a = l("735250");
l("470079");
var s = l("692547"),
  n = l("331595");
let i = e => {
  let {
    width: t = 24,
    height: l = 24,
    color: i = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...u
  } = e;
  return (0, a.jsxs)("svg", {
    ...(0, n.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: l,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, a.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      fillRule: "evenodd",
      d: "M1 6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      clipRule: "evenodd",
      className: r
    }), (0, a.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M1 12a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-6Z",
      className: r
    })]
  })
}