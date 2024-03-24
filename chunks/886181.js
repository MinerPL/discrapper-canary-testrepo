"use strict";
n.r(t), n.d(t, {
  MicrophoneIcon: function() {
    return a
  }
});
var l = n("37983");
n("884691");
var u = n("669491"),
  i = n("82169");
let a = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: a = u.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...d
  } = e;
  return (0, l.jsxs)("svg", {
    ...(0, i.default)(d),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, l.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z",
      className: r
    }), (0, l.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      d: "M6 10a1 1 0 0 0-2 0 8 8 0 0 0 7 7.94V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A8 8 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
      className: r
    })]
  })
}