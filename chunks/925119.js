"use strict";
l.r(t), l.d(t, {
  TrashIcon: function() {
    return i
  }
});
var s = l("37983");
l("884691");
var a = l("669491"),
  n = l("82169");
let i = e => {
  let {
    width: t = 24,
    height: l = 24,
    color: i = a.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...c
  } = e;
  return (0, s.jsxs)("svg", {
    ...(0, n.default)(c),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: l,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, s.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M14.25 1c.41 0 .75.34.75.75V3h5.25c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75H3.75A.75.75 0 0 1 3 4.25v-.5c0-.41.34-.75.75-.75H9V1.75c0-.41.34-.75.75-.75h4.5Z",
      className: r
    }), (0, s.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      fillRule: "evenodd",
      d: "M5.06 7a1 1 0 0 0-1 1.06l.76 12.13a3 3 0 0 0 3 2.81h8.36a3 3 0 0 0 3-2.81l.75-12.13a1 1 0 0 0-1-1.06H5.07ZM11 12a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6Zm3-1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z",
      clipRule: "evenodd",
      className: r
    })]
  })
}