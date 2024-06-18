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
  return (0, i.jsx)("svg", {
    ...(0, s.Z)(l),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      fill: "string" == typeof o ? o : o.css,
      d: "M9.3 5.3a1 1 0 0 0 0 1.4l5.29 5.3-5.3 5.3a1 1 0 1 0 1.42 1.4l6-6a1 1 0 0 0 0-1.4l-6-6a1 1 0 0 0-1.42 0Z",
      className: a
    })
  })
}