"use strict";
n.r(t), n.d(t, {
  LinkExternalMediumIcon: function() {
    return i
  }
});
var s = n("37983");
n("884691");
var u = n("669491"),
  o = n("82169");
let i = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: i = u.default.colors.INTERACTIVE_NORMAL,
    colorClass: l = "",
    ...a
  } = e;
  return (0, s.jsx)("svg", {
    ...(0, o.default)(a),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, s.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M7 4a1 1 0 0 0 0 2h9.59L4.29 18.3a1 1 0 1 0 1.42 1.4L18 7.42V17a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1H7Z",
      className: l
    })
  })
}