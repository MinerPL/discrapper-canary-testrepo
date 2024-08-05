n.d(t, {
  Z: function() {
return h;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(373793),
  l = n(974674),
  u = n(481060),
  c = n(688465),
  d = n(768581),
  _ = n(182294),
  E = n(689938),
  f = n(170458);

function h(e) {
  let {
inApp: t,
application: n,
onSelect: a
  } = e, h = i.useMemo(() => d.ZP.getApplicationIconURL({
id: n.id,
icon: n.icon
  }), [
n.icon,
n.id
  ]), p = i.useMemo(() => [{
  type: o.Y.USER_INSTALL,
  icon: u.UserPlusIcon,
  title: E.Z.Messages.OAUTH2_INTEGRATION_SELECT_USER,
  subtitle: E.Z.Messages.OAUTH2_INTEGRATION_SELECT_USER_SUBTITLE,
  beta: !1
},
{
  type: o.Y.GUILD_INSTALL,
  icon: u.ServerIcon,
  title: E.Z.Messages.OAUTH2_INTEGRATION_SELECT_GUILD,
  subtitle: E.Z.Messages.OAUTH2_INTEGRATION_SELECT_GUILD_SUBTITLE,
  beta: !1
}
  ].filter(e => {
var t, r;
return (null === (r = n.integrationTypesConfig) || void 0 === r ? void 0 : null === (t = r[e.type]) || void 0 === t ? void 0 : t.oauth2InstallParams) != null;
  }), [n.integrationTypesConfig]);
  return (0, r.jsxs)('div', {
className: f.container,
children: [
  (0, r.jsxs)('div', {
    className: f.header,
    children: [
      (0, r.jsx)(l.qE, {
        src: h,
        size: _.EF.SIZE_80,
        'aria-label': n.name
      }),
      (0, r.jsx)(u.Heading, {
        variant: 'heading-xl/bold',
        color: 'header-primary',
        children: n.name
      })
    ]
  }),
  (0, r.jsx)('ul', {
    className: f.rows,
    children: p.map(e => (0, r.jsxs)(u.Clickable, {
      tag: 'li',
      className: s()(f.row, {
        [f.inApp]: t
      }),
      onClick: () => a(e.type),
      children: [
        (0, r.jsx)(e.icon, {
          size: 'md',
          color: 'currentColor',
          className: f.leftIcon
        }),
        (0, r.jsxs)('div', {
          className: f.rowInner,
          children: [
            (0, r.jsxs)('div', {
              className: f.rowDetails,
              children: [
                (0, r.jsx)(u.Text, {
                  variant: 'text-md/medium',
                  color: 'interactive-active',
                  children: e.title
                }),
                (0, r.jsx)(u.Text, {
                  variant: 'text-xs/medium',
                  color: 'text-muted',
                  children: e.subtitle
                })
              ]
            }),
            e.beta && (0, r.jsx)(c.Z, {}),
            (0, r.jsx)(u.ChevronSmallRightIcon, {
              size: 'md',
              color: 'currentColor',
              className: f.rightIcon
            })
          ]
        })
      ]
    }, e.type))
  })
]
  });
}