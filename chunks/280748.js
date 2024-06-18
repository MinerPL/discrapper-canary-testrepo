"use strict";
n.d(t, {
  a: function() {
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
      d: "M12.2 22c.5-.01.66-.84.37-1.24A3 3 0 0 1 15 16h.46c.35 0 .6-.34.56-.69a3 3 0 0 1 5.1-2.43l.06.06c.29.28.77.12.8-.28L22 12a10 10 0 1 0-18.45 5.36c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22h10Z",
      fill: "string" == typeof o ? o : o.css,
      className: a
    }), (0, i.jsx)("path", {
      d: "M19.7 14.3a1 1 0 0 0-1.4 1.4l.29.3 2 2H15a1 1 0 1 0 0 2h5.59l-2.3 2.3a1 1 0 0 0 1.42 1.4l4-4a1 1 0 0 0 0-1.4l-2.57-2.58-1.43-1.43Z",
      fill: "string" == typeof o ? o : o.css,
      className: a
    })]
  })
}