"use strict";
t.d(s, {
  a: function() {
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
      d: "M3 3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2H3ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1ZM2 8a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 0 0 0-2H3ZM2 16a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2H3Z",
      fill: "string" == typeof a ? a : a.css,
      className: r
    })
  })
}