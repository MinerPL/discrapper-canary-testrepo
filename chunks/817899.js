"use strict";
n.d(t, {
  o: function() {
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
    secondaryColor: o = "transparent",
    secondaryColorClass: a = "",
    color: l = r.Z.colors.INTERACTIVE_NORMAL,
    colorClass: u = "",
    ..._
  } = e;
  return (0, i.jsxs)("svg", {
    ...(0, s.Z)(_),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, i.jsx)("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      fill: "string" == typeof o ? o : o.css,
      className: a
    }), (0, i.jsx)("path", {
      fill: "string" == typeof l ? l : l.css,
      fillRule: "evenodd",
      d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
      clipRule: "evenodd",
      className: u
    })]
  })
}