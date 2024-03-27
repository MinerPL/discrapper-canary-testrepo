"use strict";
l.r(t), l.d(t, {
  DownloadIcon: function() {
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
  return (0, s.jsx)("svg", {
    ...(0, n.default)(c),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: l,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, s.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M12 2a1 1 0 0 1 1 1v10.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
      className: r
    })
  })
}