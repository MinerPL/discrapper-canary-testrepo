"use strict";
t.d(s, {
  c: function() {
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
      d: "M12.7 20.7a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.4l3.3 3.29V4a1 1 0 1 1 2 0v13.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5Z",
      className: r
    })
  })
}