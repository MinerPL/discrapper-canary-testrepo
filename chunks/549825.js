"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("37983");
n("884691");
var s = n("414456"),
  r = n.n(s),
  l = n("77078"),
  a = n("978970"),
  u = n("36694"),
  o = n("945330"),
  c = n("705179");

function d(e) {
  let {
    grantedPermissions: t,
    disabledPermissions: n,
    grantedPermissionsHeader: s,
    disabledPermissionsHeader: d,
    className: f
  } = e;
  return (0, i.jsxs)("div", {
    className: r(c.list, f),
    children: [null != t && t.length > 0 ? (0, i.jsxs)(i.Fragment, {
      children: [null != s ? (0, i.jsx)(l.FormTitle, {
        className: c.permissionHeader,
        children: s
      }) : null, (0, i.jsx)("div", {
        className: c.container,
        children: t.map(e => (0, i.jsxs)("div", {
          className: c.permission,
          children: [(0, i.jsx)(u.default, {
            width: 16,
            height: 16,
            className: c.check
          }), (0, i.jsx)(l.Text, {
            variant: "text-sm/normal",
            children: (0, a.getPermissionName)(e)
          })]
        }, e.toString()))
      })]
    }) : null, null != n && n.length > 0 ? (0, i.jsxs)(i.Fragment, {
      children: [null != d ? (0, i.jsx)(l.FormTitle, {
        className: c.permissionHeader,
        children: d
      }) : null, (0, i.jsx)("div", {
        className: c.container,
        children: n.map(e => (0, i.jsxs)("div", {
          className: c.permission,
          children: [(0, i.jsx)(o.default, {
            width: 16,
            height: 16,
            className: c.cross
          }), (0, i.jsx)(l.Text, {
            variant: "text-sm/normal",
            children: (0, a.getPermissionName)(e)
          })]
        }, e.toString()))
      })]
    }) : null]
  })
}