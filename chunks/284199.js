"use strict";
n.r(t);
var s = n("735250");
n("470079");
var i = n("960259"),
  a = n("651954"),
  l = n("325767");
t.default = (0, i.replaceIcon)(function(e) {
  let {
    width: t = 24,
    height: n = 24,
    color: i = "currentColor",
    foreground: a,
    ...r
  } = e;
  return (0, s.jsx)("svg", {
    ...(0, l.default)(r),
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    children: (0, s.jsxs)("g", {
      fill: "none",
      className: a,
      children: [(0, s.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 22C12.4883 22 12.9684 21.965 13.438 21.8974C12.5414 20.8489 12 19.4877 12 18C12 17.6593 12.0284 17.3252 12.083 17H6V16.0244C6 14.0732 10 13 12 13C12.6215 13 13.436 13.1036 14.2637 13.305C15.2888 12.4882 16.5874 12 18 12C19.4877 12 20.8489 12.5414 21.8974 13.438C21.965 12.9684 22 12.4883 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12Z",
        fill: i
      }), (0, s.jsx)("path", {
        d: "M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z",
        fill: i
      })]
    })
  })
}, a.UserCircleStatusIcon, void 0, {
  size: 24
})