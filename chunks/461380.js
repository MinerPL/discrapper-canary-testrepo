"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  o = n("384737"),
  s = n("448052"),
  a = n("748802"),
  u = n("260792"),
  c = n("77078"),
  d = n("75196"),
  f = n("4177");
let E = {
    UP: f.directionUp,
    RIGHT: f.directionRight,
    DOWN: f.directionDown,
    LEFT: f.directionLeft
  },
  _ = e => {
    let {
      direction: t = E.DOWN,
      width: n = 24,
      height: r = 24,
      color: _ = "currentColor",
      transition: I = f.transition,
      className: h,
      foreground: p,
      expanded: S,
      ...C
    } = e, {
      enabled: T
    } = (0, c.useRedesignIconContext)(), N = t;
    if (!0 === S ? N = E.DOWN : !1 === S && (N = E.RIGHT), T) {
      let e = {
        [E.UP]: u.ChevronSmallUpIcon,
        [E.DOWN]: o.ChevronSmallDownIcon,
        [E.LEFT]: s.ChevronSmallLeftIcon,
        [E.RIGHT]: a.ChevronSmallRightIcon
      } [N];
      return (0, i.jsx)(e, {
        ...C,
        className: h,
        width: n,
        height: r,
        color: _,
        colorClass: p
      })
    }
    return (0, i.jsx)("svg", {
      className: l(h, I, N),
      width: n,
      height: r,
      viewBox: "0 0 24 24",
      ...(0, d.default)(C),
      children: (0, i.jsx)("path", {
        className: p,
        fill: "none",
        stroke: _,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M7 10L12 15 17 10",
        "aria-hidden": !0
      })
    })
  };
_.Directions = E;
var I = _