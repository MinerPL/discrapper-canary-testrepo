"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var l = n("120356"),
  s = n.n(l),
  i = n("481060"),
  r = n("465670"),
  o = n("52736"),
  u = n("87372");

function d(e) {
  let {
    className: t,
    roleColor: n,
    roleName: l,
    hasRemoveIcon: d = !1,
    onClick: c,
    disabled: f = !1,
    verified: h = !1
  } = e;
  return (0, a.jsx)(i.Button, {
    className: s()(t, u.button),
    look: i.Button.Looks.BLANK,
    size: i.Button.Sizes.NONE,
    onClick: c,
    disabled: f,
    children: (0, a.jsx)(o.default, {
      className: u.role,
      roleColor: n,
      roleName: l,
      verified: h,
      children: d && (0, a.jsx)(r.default, {
        height: 6,
        width: 6,
        className: u.removeRole,
        foreground: u.removeRoleIcon
      })
    })
  })
}