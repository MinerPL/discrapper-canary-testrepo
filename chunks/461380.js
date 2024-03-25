"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  s = n("384737"),
  o = n("448052"),
  u = n("748802"),
  a = n("260792"),
  c = n("77078"),
  d = n("75196"),
  f = n("366842");
let h = {
    UP: f.directionUp,
    RIGHT: f.directionRight,
    DOWN: f.directionDown,
    LEFT: f.directionLeft
  },
  v = e => {
    let {
      direction: t = h.DOWN,
      width: n = 24,
      height: r = 24,
      color: v = "currentColor",
      transition: m = f.transition,
      className: C,
      foreground: E,
      expanded: g,
      ...p
    } = e, {
      enabled: S
    } = (0, c.useRedesignIconContext)(), _ = t;
    if (!0 === g ? _ = h.DOWN : !1 === g && (_ = h.RIGHT), S) {
      let e = {
        [h.UP]: a.ChevronSmallUpIcon,
        [h.DOWN]: s.ChevronSmallDownIcon,
        [h.LEFT]: o.ChevronSmallLeftIcon,
        [h.RIGHT]: u.ChevronSmallRightIcon
      } [_];
      return (0, i.jsx)(e, {
        ...p,
        className: C,
        width: n,
        height: r,
        color: v,
        colorClass: E
      })
    }
    return (0, i.jsx)("svg", {
      className: l(C, m, _),
      width: n,
      height: r,
      viewBox: "0 0 24 24",
      ...(0, d.default)(p),
      children: (0, i.jsx)("path", {
        className: E,
        fill: "none",
        stroke: v,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M7 10L12 15 17 10",
        "aria-hidden": !0
      })
    })
  };
v.Directions = h;
var m = v