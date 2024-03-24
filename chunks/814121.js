"use strict";
n.r(t), n.d(t, {
  UploadIcon: function() {
    return l
  }
});
var r = n("37983");
n("884691");
var s = n("669491"),
  i = n("82169");
let l = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: l = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
    ...o
  } = e;
  return (0, r.jsx)("svg", {
    ...(0, i.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof l ? l : l.css,
      d: "M13 16V5.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.42L11 5.4V16a1 1 0 1 0 2 0ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
      className: a
    })
  })
}