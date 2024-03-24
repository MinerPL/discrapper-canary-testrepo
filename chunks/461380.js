"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  o = n("384737"),
  a = n("448052"),
  l = n("748802"),
  u = n("260792"),
  d = n("77078"),
  c = n("75196"),
  f = n("366842");
let E = {
    UP: f.directionUp,
    RIGHT: f.directionRight,
    DOWN: f.directionDown,
    LEFT: f.directionLeft
  },
  h = e => {
    let {
      direction: t = E.DOWN,
      width: n = 24,
      height: i = 24,
      color: h = "currentColor",
      transition: _ = f.transition,
      className: p,
      foreground: C,
      expanded: v,
      ...S
    } = e, {
      enabled: m
    } = (0, d.useRedesignIconContext)(), R = t;
    if (!0 === v ? R = E.DOWN : !1 === v && (R = E.RIGHT), m) {
      let e = {
        [E.UP]: u.ChevronSmallUpIcon,
        [E.DOWN]: o.ChevronSmallDownIcon,
        [E.LEFT]: a.ChevronSmallLeftIcon,
        [E.RIGHT]: l.ChevronSmallRightIcon
      } [R];
      return (0, r.jsx)(e, {
        ...S,
        className: p,
        width: n,
        height: i,
        color: h,
        colorClass: C
      })
    }
    return (0, r.jsx)("svg", {
      className: s(p, _, R),
      width: n,
      height: i,
      viewBox: "0 0 24 24",
      ...(0, c.default)(S),
      children: (0, r.jsx)("path", {
        className: C,
        fill: "none",
        stroke: h,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M7 10L12 15 17 10",
        "aria-hidden": !0
      })
    })
  };
h.Directions = E;
var _ = h