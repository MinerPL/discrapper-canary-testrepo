"use strict";
i.r(t), i.d(t, {
  ChannelListIcon: function() {
    return s
  }
});
var a = i("735250");
i("470079");
var l = i("692547"),
  n = i("331595");
let s = e => {
  let {
    width: t = 24,
    height: i = 24,
    color: s = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...o
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, n.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: i,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      d: "M2 4a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 8a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2H3Z",
      className: r
    })
  })
}