"use strict";
a.r(t), a.d(t, {
  ThreadLockIcon: function() {
    return n
  }
});
var s = a("735250");
a("470079");
var l = a("692547"),
  r = a("331595");
let n = e => {
  let {
    width: t = 24,
    height: a = 24,
    color: n = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: u = "",
    ...d
  } = e;
  return (0, s.jsxs)("svg", {
    ...(0, r.default)(d),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: a,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, s.jsx)("path", {
      d: "M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72A1 1 0 0 1 13 19v.15a1 1 0 0 1-.35.69l-1 1 .35.36ZM14.66 16.32c.1-.39.26-.75.45-1.09l-8.2-5.47a1 1 0 1 0-1.12 1.66l8.13 5.42a3 3 0 0 1 .74-.52ZM16.43 13.8c.62-.43 1.36-.7 2.15-.78a1 1 0 0 0-.37-.43L9.73 6.93a1 1 0 0 0-1.11 1.66l7.81 5.21Z",
      fill: "string" == typeof n ? n : n.css,
      className: u
    }), (0, s.jsx)("path", {
      fillRule: "evenodd",
      d: "M16 18h.5v-.5a2.5 2.5 0 0 1 5 0v.5h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm4-.5v.5h-2v-.5a1 1 0 1 1 2 0Z",
      clipRule: "evenodd",
      fill: "string" == typeof n ? n : n.css,
      className: u
    })]
  })
}