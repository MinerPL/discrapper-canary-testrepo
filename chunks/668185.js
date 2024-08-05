n.d(t, {
  Z: function() {
return _;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(149765),
  s = n(178940),
  o = n(993365),
  l = n(481060),
  u = n(422559),
  c = n(689938),
  d = n(736849);

function _(e) {
  let {
application: t,
permissions: n,
deniedPermissions: _,
onPermissionsChange: E,
guild: f
  } = e, h = i.useMemo(() => a.U_(f.permissions), [f.permissions]);
  i.useEffect(() => {
E(!1, a.hX(n, h));
  }, [
h,
E,
n
  ]);
  let p = u.VY.filter(e => a.e$(n, e)),
m = p.filter(e => !a.e$(h, e)).map(e => {
  let t = (0, u.wt)(e),
    n = !a.e$(_, e);
  return (0, r.jsx)('li', {
    className: d.permission,
    children: (0, r.jsx)(s.X, {
      value: n,
      onChange: (t, n) => E(n, e),
      type: s.X.Types.INVERTED,
      children: (0, r.jsx)(o.x, {
        variant: 'text-md/normal',
        children: t
      })
    })
  }, String(e));
}),
I = p.filter(e => a.e$(h, e)).map(e => {
  let t = (0, u.wt)(e);
  return (0, r.jsxs)('li', {
    className: d.permission,
    children: [
      (0, r.jsx)('div', {
        className: d.disabledPermissionIcon,
        children: (0, r.jsx)(l.CloseSmallIcon, {
          size: 'md',
          color: 'currentColor',
          className: d.icon
        })
      }),
      (0, r.jsx)(o.x, {
        variant: 'text-md/normal',
        children: t
      })
    ]
  }, String(e));
});
  return (0, r.jsxs)('div', {
className: d.botPermissions,
children: [
  m.length > 0 ? (0, r.jsxs)(r.Fragment, {
    children: [
      (0, r.jsx)(o.x, {
        variant: 'text-sm/medium',
        color: 'header-secondary',
        className: d.permissionsLabel,
        children: c.Z.Messages.OAUTH2_CONFIRM_BOT_PERMISSIONS.format({
          applicationName: t.name,
          guildName: f.name
        })
      }),
      (0, r.jsx)('ul', {
        className: d.permissionsList,
        children: m
      })
    ]
  }) : null,
  I.length > 0 ? (0, r.jsxs)(r.Fragment, {
    children: [
      (0, r.jsx)(o.x, {
        variant: 'text-sm/medium',
        color: 'header-secondary',
        className: d.disabledPermissionsLabel,
        children: c.Z.Messages.OAUTH2_DISABLED_PERMISSIONS.format({
          applicationName: t.name
        })
      }),
      (0, r.jsx)('ul', {
        className: d.permissionsList,
        children: I
      })
    ]
  }) : null
]
  });
}