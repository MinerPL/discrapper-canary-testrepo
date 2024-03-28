"use strict";
n.r(t);
var l = n("735250");
n("470079");
var a = n("803997"),
  u = n.n(a),
  i = n("697961");
t.default = e => {
  let {
    aspectRatio: t,
    style: n,
    className: a,
    children: o
  } = e;
  return (0, l.jsx)("div", {
    className: u()(i.outer, a),
    style: {
      paddingTop: "".concat(1 / t * 100, "%"),
      ...n
    },
    children: (0, l.jsx)("div", {
      className: i.inner,
      children: o
    })
  })
}