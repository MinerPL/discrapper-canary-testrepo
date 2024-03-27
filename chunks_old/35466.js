"use strict";
n.r(t), n.d(t, {
  IdIcon: function() {
    return i
  }
});
var r = n("37983");
n("884691");
var o = n("669491"),
  u = n("82169");
let i = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: i = o.default.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
    ...l
  } = e;
  return (0, r.jsxs)("svg", {
    ...(0, u.default)(l),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, r.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
      className: a
    }), (0, r.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      fillRule: "evenodd",
      d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
      clipRule: "evenodd",
      className: a
    })]
  })
}