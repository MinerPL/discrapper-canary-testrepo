"use strict";
t.d(s, {
  _: function() {
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
      fillRule: "evenodd",
      d: "M21.41 5.41A2 2 0 1 0 18.6 2.6l-7.75 7.74a.53.53 0 0 1-.58.11 6 6 0 1 0 3.3 3.28.51.51 0 0 1 .1-.55c.19-.19.5-.19.68 0l1.25 1.24a2 2 0 1 0 2.82-2.82l-1.23-1.24a.5.5 0 0 1 0-.7l.47-.47c.2-.2.5-.2.7 0l1.24 1.23A2 2 0 1 0 22.4 7.6l-1.23-1.24a.5.5 0 0 1 0-.7l.23-.24ZM10 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
      clipRule: "evenodd",
      className: r
    })
  })
}