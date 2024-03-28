"use strict";
n.r(t);
var a, l, s = n("735250");
n("470079");
var i = n("803997"),
  r = n.n(i),
  o = n("605403"),
  u = n("871499"),
  d = n("988465");

function c(e) {
  let {
    direction: t,
    className: n,
    themeable: a,
    ...l
  } = e;
  return (0, s.jsx)(u.default, {
    className: r()(n, d.arrow, {
      [d.up]: 0 === t
    }),
    iconComponent: o.default,
    themeable: a,
    ...l
  })
}(a = l || (l = {}))[a.UP = 0] = "UP", a[a.DOWN = 1] = "DOWN", c.Directions = l, t.default = c