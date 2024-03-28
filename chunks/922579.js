"use strict";
n.r(t), n.d(t, {
  MobilePhoneIcon: function() {
    return i
  }
});
var r = n("735250");
n("470079");
var s = n("692547"),
  o = n("331595");
let i = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: i = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
    ...l
  } = e;
  return (0, r.jsx)("svg", {
    ...(0, o.default)(l),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      fillRule: "evenodd",
      d: "M5 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V4Zm5 16a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM8 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8Z",
      clipRule: "evenodd",
      className: a
    })
  })
}