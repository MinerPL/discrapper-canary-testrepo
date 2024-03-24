"use strict";
i.r(t), i.d(t, {
  HomeIcon: function() {
    return r
  }
});
var s = i("37983");
i("884691");
var n = i("669491"),
  l = i("82169");
let r = e => {
  let {
    width: t = 24,
    height: i = 24,
    color: r = n.default.colors.INTERACTIVE_NORMAL,
    colorClass: o = "",
    ...a
  } = e;
  return (0, s.jsx)("svg", {
    ...(0, l.default)(a),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: i,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, s.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      d: "m2.4 8.4 8.38-6.46a2 2 0 0 1 2.44 0l8.39 6.45a2 2 0 0 1-.79 3.54l-.32.07-.82 8.2a2 2 0 0 1-1.99 1.8H16a1 1 0 0 1-1-1v-5a3 3 0 0 0-6 0v5a1 1 0 0 1-1 1H6.31a2 2 0 0 1-1.99-1.8L3.5 12l-.32-.07a2 2 0 0 1-.79-3.54Z",
      className: o
    })
  })
}