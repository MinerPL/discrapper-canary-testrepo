"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  i = n("403681");
t.default = e => {
  let {
    value: t = 0,
    text: n,
    className: a,
    ...r
  } = e;
  return null != n ? (0, s.jsx)("div", {
    className: l()(i.wrapper, a),
    ...r,
    children: n
  }) : t > 0 ? (0, s.jsx)("div", {
    className: l()(i.wrapper, a),
    ...r,
    children: t
  }) : null
}