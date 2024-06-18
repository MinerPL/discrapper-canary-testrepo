"use strict";
t.d(s, {
  O: function() {
    return a
  }
});
var n = t(735250);
t(470079);
var i = t(692547),
  l = t(331595);
let a = e => {
  let {
    width: s = 24,
    height: t = 24,
    color: a = i.Z.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...o
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, l.Z)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: s,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      d: "M1 5a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM1 12a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM2 18a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H2Z",
      className: r
    })
  })
}