n.d(t, {
  Z: function() {
return p;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(77866),
  o = n(373793),
  l = n(243814),
  u = n(260034),
  c = n(993365),
  d = n(481060),
  _ = n(713938),
  E = n(689938),
  f = n(686578);

function h(e) {
  let {
text: t,
error: n,
isFake: i
  } = e;
  return (0, r.jsxs)('div', {
className: f.scope,
children: [
  (0, r.jsx)('div', {
    className: a()(f.iconWrapper, i ? f.fakeScopeIcon : f.scopeIcon),
    children: i ? (0, r.jsx)(d.XSmallIcon, {
      size: 'md',
      color: 'currentColor',
      className: f.icon
    }) : (0, r.jsx)(d.CheckmarkLargeIcon, {
      size: 'md',
      color: 'currentColor',
      className: f.icon
    })
  }),
  (0, r.jsxs)('div', {
    className: f.scopeInner,
    children: [
      (0, r.jsx)(c.x, {
        variant: 'text-md/medium',
        children: t
      }),
      null != n ? (0, r.jsx)(c.x, {
        variant: 'text-xs/normal',
        color: 'text-danger',
        children: n
      }) : null
    ]
  })
]
  });
}

function p(e) {
  var t;
  let {
application: n,
accountScopes: i,
requestedScopes: a,
integrationType: c,
errors: d,
isTrustedName: p = !1
  } = e, m = (0, s.Z)(() => _.ZW[Math.floor(Math.random() * _.ZW.length)]);
  if (0 === i.length)
return null;
  let I = m(),
T = p ? E.Z.Messages.OAUTH2_SCOPES_LABEL_TRUSTED_NAME : E.Z.Messages.OAUTH2_SCOPES_LABEL,
g = c === o.Y.USER_INSTALL && a.includes(l.x.APPLICATIONS_COMMANDS);
  return (0, r.jsxs)('div', {
className: f.scopes,
children: [
  (0, r.jsx)(u.X, {
    variant: 'heading-deprecated-12/semibold',
    className: f.sectionLabel,
    children: T.format({
      application: null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : ''
    })
  }),
  i.map(e => {
    var t;
    return (0, r.jsx)(h, {
      text: (0, _.jW)(e, i),
      error: null == d ? void 0 : null === (t = d[e]) || void 0 === t ? void 0 : t[0]
    }, e);
  }),
  g && (0, r.jsx)(h, {
    text: E.Z.Messages.SCOPE_DM_YOU
  }),
  (0, r.jsx)(h, {
    text: I,
    isFake: !0
  })
]
  });
}