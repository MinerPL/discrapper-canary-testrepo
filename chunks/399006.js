"use strict";
n.r(e), n.d(e, {
  TvIcon: function() {
    return l
  }
});
var r = n("735250");
n("470079");
var i = n("692547"),
  c = n("331595");
let l = t => {
  let {
    width: e = 24,
    height: n = 24,
    color: l = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: o = "",
    ...a
  } = t;
  return (0, r.jsx)("svg", {
    ...(0, c.default)(a),
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof l ? l : l.css,
      d: "M4 3a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4ZM6 20a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H6Z",
      className: o
    })
  })
}