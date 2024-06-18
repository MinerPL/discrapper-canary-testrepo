"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(735250);
n(470079);
var r = n(325767);

function s(e) {
  let {
    width: t = 12,
    height: n = 12,
    color: s = "currentColor",
    foreground: o,
    ...a
  } = e;
  return (0, i.jsx)("svg", {
    ...(0, r.Z)(a),
    width: t,
    height: n,
    viewBox: "0 0 12 12",
    children: (0, i.jsx)("rect", {
      width: "9",
      height: "9",
      x: "1.5",
      y: "1.5",
      fill: "none",
      stroke: s,
      className: o
    })
  })
}