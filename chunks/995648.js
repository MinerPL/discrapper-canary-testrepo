"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("735250");
n("470079");
var r = n("803997"),
  s = n.n(r),
  a = n("481060"),
  l = n("422559"),
  o = n("263704"),
  u = n("465670"),
  c = n("150740");

function d(e) {
  let {
    grantedPermissions: t,
    disabledPermissions: n,
    grantedPermissionsHeader: r,
    disabledPermissionsHeader: d,
    className: f
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(c.list, f),
    children: [null != t && t.length > 0 ? (0, i.jsxs)(i.Fragment, {
      children: [null != r ? (0, i.jsx)(a.FormTitle, {
        className: c.permissionHeader,
        children: r
      }) : null, (0, i.jsx)("div", {
        className: c.container,
        children: t.map(e => (0, i.jsxs)("div", {
          className: c.permission,
          children: [(0, i.jsx)(o.default, {
            width: 16,
            height: 16,
            className: c.check
          }), (0, i.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: (0, l.getPermissionName)(e)
          })]
        }, e.toString()))
      })]
    }) : null, null != n && n.length > 0 ? (0, i.jsxs)(i.Fragment, {
      children: [null != d ? (0, i.jsx)(a.FormTitle, {
        className: c.permissionHeader,
        children: d
      }) : null, (0, i.jsx)("div", {
        className: c.container,
        children: n.map(e => (0, i.jsxs)("div", {
          className: c.permission,
          children: [(0, i.jsx)(u.default, {
            width: 16,
            height: 16,
            className: c.cross
          }), (0, i.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: (0, l.getPermissionName)(e)
          })]
        }, e.toString()))
      })]
    }) : null]
  })
}