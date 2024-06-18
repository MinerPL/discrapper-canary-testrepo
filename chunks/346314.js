"use strict";
n.d(t, {
  P: function() {
    return E
  },
  r: function() {
    return c
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(756715),
  l = n(607070),
  u = n(109161),
  _ = n(794323);

function d(e) {
  let {
    roleStyle: t,
    name: n,
    color: r,
    roleName: o,
    dotAlignment: a = "left",
    className: l
  } = e, d = "username" === t, c = "dot" === t ? (0, i.jsx)(u.F, {
    color: r,
    name: o,
    className: "left" === a ? _.roleDotLeft : _.roleDotRight
  }) : null;
  return (0, i.jsxs)("span", {
    style: {
      color: d && null != r ? r : void 0
    },
    className: s()(l, {
      [_.username]: d
    }),
    children: ["left" === a && c, n, "right" === a && c]
  })
}

function c(e) {
  let {
    name: t,
    color: n,
    roleName: r,
    dotAlignment: s,
    className: u,
    ..._
  } = e, c = (0, o.e7)([l.Z], () => l.Z.roleStyle), E = "username" === c, I = (0, i.jsx)(d, {
    roleStyle: c,
    name: t,
    color: n,
    roleName: r,
    dotAlignment: s,
    className: u
  }), T = E ? {
    color: n
  } : void 0;
  return (0, i.jsx)(a.e, {
    ..._,
    children: I,
    style: T
  })
}

function E(e) {
  let t = (0, o.e7)([l.Z], () => l.Z.roleStyle);
  return (0, i.jsx)(d, {
    ...e,
    roleStyle: t
  })
}