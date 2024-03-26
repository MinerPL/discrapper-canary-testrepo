"use strict";
n.r(t), n.d(t, {
  ChatIcon: function() {
    return o
  }
});
var r = n("37983");
n("884691");
var i = n("669491"),
  s = n("82169");
let o = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: o = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
    ...l
  } = e;
  return (0, r.jsx)("svg", {
    ...(0, s.default)(l),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof o ? o : o.css,
      d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
      className: a
    })
  })
}