"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("134433"),
  r = n("910806");

function o(e) {
  let t, {
    className: n,
    children: l,
    verified: o,
    roleColor: u,
    roleName: d
  } = e;
  return t = o ? (0, a.jsx)(i.default, {
    size: 12,
    color: u,
    className: r.linkedRoleColor
  }) : (0, a.jsx)("div", {
    className: r.roleColor,
    style: {
      backgroundColor: u
    }
  }), (0, a.jsxs)("div", {
    className: s()(n, r.role),
    children: [t, d, l]
  })
}