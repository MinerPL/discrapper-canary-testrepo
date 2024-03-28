"use strict";
l.r(t), l.d(t, {
  PaperIcon: function() {
    return i
  }
});
var n = l("735250");
l("470079");
var a = l("692547"),
  s = l("331595");
let i = e => {
  let {
    width: t = 24,
    height: l = 24,
    color: i = a.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...o
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, s.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: l,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      fillRule: "evenodd",
      d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 4a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H6Zm-1 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H6Z",
      clipRule: "evenodd",
      className: r
    })
  })
}