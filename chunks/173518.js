"use strict";
n.d(t, {
  u: function() {
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
  return (0, i.jsx)("svg", {
    ...(0, s.Z)(l),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      fill: "string" == typeof o ? o : o.css,
      d: "M16.3 21.7a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0-1.4-1.4L18 18.58V3a1 1 0 1 0-2 0v15.59l-2.3-2.3a1 1 0 0 0-1.4 1.42l4 4ZM6.3 2.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L8 5.42V21a1 1 0 1 1-2 0V5.41l-2.3 2.3a1 1 0 0 1-1.4-1.42l4-4Z",
      className: a
    })
  })
}