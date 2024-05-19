"use strict";
a.r(t), a.d(t, {
  ThemeDarkIcon: function() {
    return i
  }
});
var n = a("735250");
a("470079");
var r = a("692547"),
  s = a("331595");
let i = e => {
  let {
    width: t = 24,
    height: a = 24,
    color: i = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: l = "",
    ...o
  } = e;
  return (0, n.jsxs)("svg", {
    ...(0, s.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: a,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, n.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M20.52 18.96c.32-.4-.01-.96-.52-.96A11 11 0 0 1 9.77 2.94c.31-.78-.3-1.68-1.1-1.43a11 11 0 1 0 11.85 17.45Z",
      className: l
    }), (0, n.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "m17.73 9.27-.76-2.02a.5.5 0 0 0-.94 0l-.76 2.02-2.02.76a.5.5 0 0 0 0 .94l2.02.76.76 2.02a.5.5 0 0 0 .94 0l.76-2.02 2.02-.76a.5.5 0 0 0 0-.94l-2.02-.76ZM19.73 2.62l.45 1.2 1.2.45c.21.08.21.38 0 .46l-1.2.45-.45 1.2a.25.25 0 0 1-.46 0l-.45-1.2-1.2-.45a.25.25 0 0 1 0-.46l1.2-.45.45-1.2a.25.25 0 0 1 .46 0Z",
      className: l
    })]
  })
}