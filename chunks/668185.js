"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250),
  r = n(470079),
  s = n(149765),
  o = n(178940),
  a = n(993365),
  l = n(465670),
  u = n(422559),
  _ = n(689938),
  d = n(466397);

function c(e) {
  let {
    application: t,
    permissions: n,
    deniedPermissions: c,
    onPermissionsChange: E,
    guild: I
  } = e, T = r.useMemo(() => s.U_(I.permissions), [I.permissions]);
  r.useEffect(() => {
    E(!1, s.hX(n, T))
  }, [T, E, n]);
  let h = u.VY.filter(e => s.e$(n, e)),
    S = h.filter(e => !s.e$(T, e)).map(e => {
      let t = (0, u.wt)(e),
        n = !s.e$(c, e);
      return (0, i.jsx)("li", {
        className: d.permission,
        children: (0, i.jsx)(o.X, {
          value: n,
          onChange: (t, n) => E(n, e),
          type: o.X.Types.INVERTED,
          children: (0, i.jsx)(a.x, {
            variant: "text-md/normal",
            children: t
          })
        })
      }, String(e))
    }),
    f = h.filter(e => s.e$(T, e)).map(e => {
      let t = (0, u.wt)(e);
      return (0, i.jsxs)("li", {
        className: d.permission,
        children: [(0, i.jsx)("div", {
          className: d.disabledPermissionIcon,
          children: (0, i.jsx)(l.Z, {
            className: d.icon
          })
        }), (0, i.jsx)(a.x, {
          variant: "text-md/normal",
          children: t
        })]
      }, String(e))
    });
  return (0, i.jsxs)("div", {
    className: d.botPermissions,
    children: [S.length > 0 ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(a.x, {
        variant: "text-sm/medium",
        color: "header-secondary",
        className: d.permissionsLabel,
        children: _.Z.Messages.OAUTH2_CONFIRM_BOT_PERMISSIONS.format({
          applicationName: t.name,
          guildName: I.name
        })
      }), (0, i.jsx)("ul", {
        className: d.permissionsList,
        children: S
      })]
    }) : null, f.length > 0 ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(a.x, {
        variant: "text-sm/medium",
        color: "header-secondary",
        className: d.disabledPermissionsLabel,
        children: _.Z.Messages.OAUTH2_DISABLED_PERMISSIONS.format({
          applicationName: t.name
        })
      }), (0, i.jsx)("ul", {
        className: d.permissionsList,
        children: f
      })]
    }) : null]
  })
}