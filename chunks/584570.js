"use strict";
n.d(t, {
  p: function() {
    return s
  }
});
var r = n(735250);
n(470079);
var i = n(692547),
  l = n(331595);
let s = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: s = i.Z.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
    ...o
  } = e;
  return (0, r.jsx)("svg", {
    ...(0, l.Z)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      d: "M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM13.5 20a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z",
      className: a
    })
  })
}