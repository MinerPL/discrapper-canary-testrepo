"use strict";
n.r(t), n.d(t, {
  WaveformSlashIcon: function() {
    return i
  }
});
var a = n("735250");
n("470079");
var s = n("692547"),
  l = n("331595");
let i = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: i = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...o
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, l.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M22.7 2.7a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4l20-20ZM6.85 13.15a.5.5 0 0 1-.85-.36V3a1 1 0 0 1 2 0v8.8a.5.5 0 0 1-.15.35l-1 1ZM11 17.2v.8a1 1 0 1 0 2 0v-1.8a.5.5 0 0 0-.85-.35l-1 1a.5.5 0 0 0-.15.36ZM11 7.8V6a1 1 0 1 1 2 0v.8a.5.5 0 0 1-.15.35l-1 1a.5.5 0 0 1-.85-.36ZM17.15 10.85a.5.5 0 0 1 .85.36V19a1 1 0 1 1-2 0v-6.8a.5.5 0 0 1 .15-.35l1-1ZM2 7a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1ZM21 9a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0V9Z",
      className: r
    })
  })
}