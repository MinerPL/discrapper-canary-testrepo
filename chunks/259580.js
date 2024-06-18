"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(531057),
  a = n(605260),
  l = n(465270),
  u = n(865824),
  _ = n(481060),
  d = n(325767),
  c = n(199813);
let E = {
    UP: c.directionUp,
    RIGHT: c.directionRight,
    DOWN: c.directionDown,
    LEFT: c.directionLeft
  },
  I = e => {
    let {
      direction: t = E.DOWN,
      width: n = 24,
      height: r = 24,
      color: I = "currentColor",
      transition: T = c.transition,
      className: h,
      foreground: S,
      expanded: f,
      ...N
    } = e, {
      enabled: A
    } = (0, _.useRedesignIconContext)(), m = t;
    if (!0 === f ? m = E.DOWN : !1 === f && (m = E.RIGHT), A) {
      let e = {
        [E.UP]: u.u,
        [E.DOWN]: o.C,
        [E.LEFT]: a.V,
        [E.RIGHT]: l.F
      } [m];
      return (0, i.jsx)(e, {
        ...N,
        className: h,
        width: n,
        height: r,
        color: I,
        colorClass: S
      })
    }
    return (0, i.jsx)("svg", {
      className: s()(h, T, m),
      width: n,
      height: r,
      viewBox: "0 0 24 24",
      ...(0, d.Z)(N),
      children: (0, i.jsx)("path", {
        className: S,
        fill: "none",
        stroke: I,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M7 10L12 15 17 10",
        "aria-hidden": !0
      })
    })
  };
I.Directions = E, t.Z = I