"use strict";
n.r(t), n.d(t, {
  ShieldLockIcon: function() {
    return i
  }
});
var a = n("37983");
n("884691");
var l = n("669491"),
  s = n("82169");
let i = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: i = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...u
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, s.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      fillRule: "evenodd",
      d: "M4.56 4.22A2.83 2.83 0 0 0 3 6.75v3.03c0 5.6 3.3 10.69 8.42 12.96.37.17.79.17 1.16 0A14.19 14.19 0 0 0 21 9.78V6.75c0-1.07-.6-2.05-1.56-2.53l-6.1-3.05a3 3 0 0 0-2.68 0l-6.1 3.05ZM14 11a2 2 0 0 1-1 1.73v2.77a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-2.77A2 2 0 1 1 14 11Z",
      clipRule: "evenodd",
      className: r
    })
  })
}