n.d(t, {
  Z: function() {
return h;
  }
});
var r = n(735250);
n(470079);
var i = n(974674),
  a = n(1561),
  s = n(993365),
  o = n(385499),
  l = n(768581),
  u = n(630388),
  c = n(489863),
  d = n(981631),
  _ = n(182294),
  E = n(689938),
  f = n(164337);

function h(e) {
  let {
id: t,
user: n,
application: h,
bot: p,
accountScopes: m,
showLogout: I,
location: T,
isTrustedName: g
  } = e, S = l.ZP.getApplicationIconURL({
id: h.id,
icon: h.icon
  }), A = l.ZP.getUserAvatarURL(n);
  return (0, r.jsxs)('header', {
id: t,
className: f.header,
children: [
  (0, r.jsxs)('div', {
    className: f.headerIcons,
    children: [
      (0, r.jsx)(i.qE, {
        src: S,
        size: _.EF.SIZE_80,
        'aria-label': h.name
      }),
      (0, r.jsxs)('div', {
        className: f.ellipseGroup,
        children: [
          (0, r.jsx)('div', {
            className: f.ellipse
          }),
          (0, r.jsx)('div', {
            className: f.ellipse
          }),
          (0, r.jsx)('div', {
            className: f.ellipse
          })
        ]
      }),
      (0, r.jsx)(i.qE, {
        src: A,
        size: _.EF.SIZE_80,
        'aria-label': n.username
      })
    ]
  }),
  !g && (0, r.jsx)(s.x, {
    variant: 'text-md/medium',
    color: 'header-secondary',
    className: f.label,
    children: E.Z.Messages.OAUTH2_THIRD_PARTY_APPLICATION
  }),
  (0, r.jsxs)(s.x, {
    variant: 'text-lg/bold',
    color: 'header-primary',
    children: [
      h.name,
      null != p ? (0, r.jsx)(o.Z, {
        className: f.botTag,
        verified: null != p.public_flags && (0, u.yE)(p.public_flags, d.xW$.VERIFIED_BOT)
      }) : null
    ]
  }),
  m.length > 0 ? (0, r.jsx)(s.x, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    className: f.label,
    children: E.Z.Messages.OAUTH2_REQUESTS_ACCOUNT_ACCESS
  }) : (0, r.jsx)(s.x, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    className: f.label,
    children: E.Z.Messages.OAUTH2_CONNECT_TO_DISCORD
  }),
  I ? (0, r.jsx)('div', {
    className: f.currentUser,
    children: (0, r.jsxs)(s.x, {
      variant: 'text-sm/normal',
      color: 'text-muted',
      children: [
        E.Z.Messages.OAUTH2_SIGNED_IN_AS.format({
          userHook: () => (0, r.jsxs)(s.x, {
            className: f.currentUserTag,
            variant: 'text-sm/normal',
            children: [
              n.username,
              !n.isPomelo() && (0, r.jsx)(s.x, {
                className: f.currentUserDiscriminator,
                variant: 'text-sm/normal',
                children: '#'.concat(n.discriminator)
              })
            ]
          }, n.id)
        }),
        (0, r.jsx)(a.P, {
          tag: 'a',
          className: f.logoutLink,
          onClick: () => (0, c.c$)(T),
          children: E.Z.Messages.OAUTH2_LOGOUT
        })
      ]
    })
  }) : null
]
  });
}