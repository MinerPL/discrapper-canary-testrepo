"use strict";
i.r(t), i.d(t, {
  ChannelListIcon: function() {
    return s
  }
});
var n = i("37983");
i("884691");
var a = i("669491"),
  l = i("82169");
let s = e => {
  let {
    width: t = 24,
    height: i = 24,
    color: s = a.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...o
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, l.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: i,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      d: "M2 4a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 8a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2H3Z",
      className: r
    })
  })
}