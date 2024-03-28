"use strict";
t.r(s), t.d(s, {
  ArrowSmallRightIcon: function() {
    return n
  }
});
var a = t("735250");
t("470079");
var l = t("692547"),
  i = t("331595");
let n = e => {
  let {
    width: s = 24,
    height: t = 24,
    color: n = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: d = "",
    ...r
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, i.default)(r),
    xmlns: "http://www.w3.org/2000/svg",
    width: s,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof n ? n : n.css,
      d: "M20.7 12.7a1 1 0 0 0 0-1.4l-5-5a1 1 0 1 0-1.4 1.4l3.29 3.3H4a1 1 0 1 0 0 2h13.59l-3.3 3.3a1 1 0 0 0 1.42 1.4l5-5Z",
      className: d
    })
  })
}