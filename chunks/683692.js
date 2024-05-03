"use strict";
n.r(t), n.d(t, {
  ScreenSystemRequirementsIcon: function() {
    return s
  }
});
var a = n("735250");
n("470079");
var i = n("692547"),
  r = n("331595");
let s = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: s = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: l = "",
    ...o
  } = e;
  return (0, a.jsxs)("svg", {
    ...(0, r.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, a.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      d: "M9 9V7h2v2H9ZM13 9v2h-2V9h2ZM9 9v2H7V9h2ZM13 9h2v2h2V9h-2V7h-2v2Z",
      className: l
    }), (0, a.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      fillRule: "evenodd",
      d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm3 0h2v2H5V5Zm4 2H7v2H5v2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2V9h-2V7h2V5h-2v2h-2V5h-2v2h-2V5H9v2Z",
      clipRule: "evenodd",
      className: l
    }), (0, a.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
      className: l
    })]
  })
}