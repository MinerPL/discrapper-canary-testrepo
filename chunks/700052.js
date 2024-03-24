"use strict";
n.r(t), n.d(t, {
  BadgeIcon: function() {
    return r
  }
});
var s = n("37983");
n("884691");
var i = n("669491"),
  l = n("82169");
let r = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: r = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
    ...o
  } = e;
  return (0, s.jsx)("svg", {
    ...(0, l.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, s.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      fillRule: "evenodd",
      d: "M4.6 4.52A3 3 0 0 1 7.54 2H19.9a2 2 0 0 1 1.97 2.32l-2.46 15.16A3 3 0 0 1 16.45 22H4.1a2 2 0 0 1-1.97-2.32L4.59 4.52ZM9 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Zm3.91 5.63a.97.97 0 0 0-1.82 0l-.35.93a2 2 0 0 1-1.18 1.19l-.93.34a.97.97 0 0 0 0 1.82l.93.34a2 2 0 0 1 1.18 1.19l.35.93a.97.97 0 0 0 1.82 0l.34-.93a2 2 0 0 1 1.19-1.19l.93-.34a.97.97 0 0 0 0-1.82l-.93-.34a2 2 0 0 1-1.19-1.19l-.34-.93Z",
      clipRule: "evenodd",
      className: a
    })
  })
}