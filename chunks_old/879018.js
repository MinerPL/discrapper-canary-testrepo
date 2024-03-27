"use strict";
t.r(l), t.d(l, {
  AnalyticsIcon: function() {
    return c
  }
});
var a = t("37983");
t("884691");
var s = t("669491"),
  n = t("82169");
let c = e => {
  let {
    width: l = 24,
    height: t = 24,
    color: c = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...i
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, n.default)(i),
    xmlns: "http://www.w3.org/2000/svg",
    width: l,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof c ? c : c.css,
      fillRule: "evenodd",
      d: "M2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm16-9.59V13a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.59l-5.09 5.09-1.8-1.8a1 1 0 0 0-1.4 0l-4 4a1 1 0 1 0 1.4 1.42L9 13.4l1.8 1.8a1 1 0 0 0 1.4 0L18 9.4Z",
      clipRule: "evenodd",
      className: r
    })
  })
}