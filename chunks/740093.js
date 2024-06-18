"use strict";
n.d(t, {
  F: function() {
    return o
  }
});
var i = n(735250);
n(470079);
var r = n(692547),
  s = n(331595);
let o = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: o = r.Z.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
    ...l
  } = e;
  return (0, i.jsxs)("svg", {
    ...(0, s.Z)(l),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, i.jsx)("path", {
      fill: "string" == typeof o ? o : o.css,
      d: "M9.5 11.87a1 1 0 0 1 1.55-.83l3.2 2.13a1 1 0 0 1 0 1.66l-3.2 2.13a1 1 0 0 1-1.55-.83v-4.26Z",
      className: a
    }), (0, i.jsx)("path", {
      fill: "string" == typeof o ? o : o.css,
      fillRule: "evenodd",
      d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2 7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H7ZM5 6a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z",
      clipRule: "evenodd",
      className: a
    })]
  })
}