"use strict";
n(411104);
var i, r, s = n(735250);
n(470079);
var o = n(120356),
  a = n.n(o),
  l = n(325767),
  u = n(785641);
(r = i || (i = {})).LEFT = "LEFT", r.RIGHT = "RIGHT", r.UP = "UP", r.DOWN = "DOWN", r.UP_LEFT = "UP_LEFT", r.DOWN_RIGHT = "DOWN_RIGHT";
let _ = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: i = "currentColor",
    direction: r,
    foreground: o,
    className: _,
    title: d,
    ...c
  } = e;
  return (0, s.jsxs)("svg", {
    ...(0, l.Z)(c),
    width: t,
    height: n,
    className: a()(_, function(e) {
      switch (e) {
        case "LEFT":
          return u.left;
        case "RIGHT":
          return u.right;
        case "UP":
          return null;
        case "DOWN":
          return u.down;
        case "UP_LEFT":
          return u.upLeft;
        case "DOWN_RIGHT":
          return u.downRight;
        default:
          throw Error("Invalid Direction ".concat(e))
      }
    }(r)),
    viewBox: "0 0 24 24",
    children: [null != d ? (0, s.jsx)("title", {
      children: d
    }) : null, (0, s.jsx)("polygon", {
      className: o,
      fill: i,
      fillRule: "nonzero",
      points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
    })]
  })
};
_.Directions = i, t.Z = _