"use strict";
t.r(r), t.d(r, {
  default: function() {
    return i
  }
});
var a = t("37983");
t("884691");
var n = t("75196");

function i(e) {
  let {
    width: r = 14,
    height: t = 14,
    color: i = "currentColor",
    foreground: o,
    ...l
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, n.default)(l),
    width: r,
    height: t,
    viewBox: "0 0 14 14",
    children: (0, a.jsx)("path", {
      className: o,
      fill: i,
      d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z"
    })
  })
}