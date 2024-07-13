r.d(t, {
  Z: function() {
return k;
  }
});
var a = r(735250);
r(470079);
var n = r(120356),
  i = r.n(n),
  o = r(149765),
  l = r(442837),
  c = r(481060),
  s = r(933557),
  d = r(592125),
  u = r(430824),
  h = r(496675),
  m = r(944486),
  g = r(914010),
  p = r(233608),
  b = r(71080),
  f = r(650679),
  y = r(979756);

function x(e) {
  let {
title: t,
can: r
  } = e, n = r ? c.CheckmarkLargeIcon : c.CloseSmallIcon, o = (0, a.jsx)('div', {
className: i()(f.iconOuter, r ? f.iconCheck : f.iconCross),
children: (0, a.jsx)(n, {
  className: f.icon
})
  });
  return (0, a.jsxs)('div', {
className: f.scope,
children: [
  o,
  (0, a.jsx)('div', {
    className: f.scopeInner,
    children: (0, a.jsx)(c.Text, {
      variant: 'text-md/normal',
      children: t
    })
  })
]
  });
}

function k() {
  let e = (0, l.e7)([m.Z], () => m.Z.getChannelId()),
t = (0, l.e7)([g.Z], () => g.Z.getGuildId()),
r = (0, l.e7)([d.Z], () => d.Z.getChannel(e)),
n = (0, l.e7)([u.Z], () => u.Z.getGuild(t)),
k = (0, l.e7)([h.Z], () => h.Z.computePermissions(r)),
v = (0, l.e7)([h.Z], () => h.Z.computePermissions(n)),
_ = (0, s.ZP)(r, !0),
w = null != r ? (0, b.IG)(r, !1, !0) : null,
C = null != n ? p.Z.getGuildPermissionSpecMap(n) : null,
j = Object.values(null != w ? w : {}).map(e => {
  let {
    title: t,
    flag: r
  } = e, n = o.e$(k, r);
  return (0, a.jsx)(x, {
    title: t,
    can: n
  }, t);
}),
N = Object.values(null != C ? C : {}).map(e => {
  let {
    title: t,
    flag: r
  } = e, n = o.e$(v, r);
  return (0, a.jsx)(x, {
    title: t,
    can: n
  }, t);
});
  return (0, a.jsx)('div', {
className: i()(y.panel, f.panel),
children: (0, a.jsxs)('div', {
  className: f.panelInner,
  children: [
    (0, a.jsxs)('section', {
      className: f.section,
      children: [
        (0, a.jsx)(c.Heading, {
          variant: 'heading-md/semibold',
          children: null != _ ? 'Permissions in '.concat(_) : 'No channel selected'
        }),
        j
      ]
    }),
    (0, a.jsxs)('section', {
      className: f.section,
      children: [
        (0, a.jsx)(c.Heading, {
          variant: 'heading-md/semibold',
          children: null != n ? 'Permissions in '.concat(n.name) : 'No guild selected'
        }),
        N
      ]
    })
  ]
})
  });
}