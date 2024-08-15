a.d(s, {
  D: function() {
return d;
  },
  Z: function() {
return u;
  }
});
var E = a(735250);
a(470079);
var _ = a(120356),
  t = a.n(_),
  n = a(481060),
  r = a(388905),
  L = a(297700),
  l = a(875307),
  i = a(837748),
  M = a(58346),
  c = a(689938),
  T = a(457639),
  C = a(224499);

function A() {
  return (0, E.jsx)(L.Z, {
className: T.verifiedIcon,
children: (0, E.jsx)('div', {
  className: T.verifiedCheckContainer,
  children: (0, E.jsx)(n.CheckmarkSmallIcon, {
    size: 'xs',
    color: 'currentColor',
    className: T.verifiedCheck
  })
})
  });
}

function o(e) {
  let {
verified: s,
text: a
  } = e;
  return s ? (0, E.jsxs)('div', {
className: T.verifiedNameContainer,
children: [
  (0, E.jsx)(A, {}),
  a
]
  }) : (0, E.jsx)(E.Fragment, {
children: a
  });
}

function d(e) {
  let {
className: s,
count: a,
creator: _,
verifiedName: n
  } = e;
  return (0, E.jsx)('div', {
className: t()(T.usagePill, s, T.userText),
children: null != _ || null != n ? c.Z.Messages.GUILD_TEMPLATE_USAGES_BY_CREATOR2.format({
  usageCount: a,
  creator: null != n ? n : _,
  creatorHook: (e, s) => (0, E.jsx)(o, {
    text: e,
    verified: null != n
  }, s)
}) : c.Z.Messages.GUILD_TEMPLATE_USAGES.format({
  usageCount: a
})
  });
}

function u(e) {
  var s;
  let {
guildTemplate: a,
error: _,
tall: L,
pillClassName: A
  } = e;
  if (null != _ && '' !== _)
return (0, E.jsxs)('div', {
  className: T.container,
  children: [
    (0, E.jsx)(r.Dx, {
      children: c.Z.Messages.INVITE_MODAL_ERROR_TITLE
    }),
    (0, E.jsx)(r.DK, {
      children: _
    })
  ]
});
  if (a.state === M.Rj.RESOLVING)
return (0, E.jsx)('div', {
  className: T.container,
  children: (0, E.jsx)(n.Spinner, {})
});
  let o = (0, i.Z)(a.code).header;
  if (!L)
return (0, E.jsxs)('div', {
  className: T.container,
  children: [
    (0, E.jsx)(r.Dx, {
      className: T.title,
      children: o
    }),
    (0, E.jsx)(r.DK, {
      className: t()(T.subtitle, T.userText),
      children: a.name
    })
  ]
});
  return (0, E.jsxs)('div', {
className: T.container,
children: [
  (0, E.jsx)(r.Dx, {
    className: T.title,
    children: o
  }),
  (0, E.jsx)(r.DK, {
    className: t()(T.subtitle, C.__invalid_marginTop2),
    children: c.Z.Messages.GUILD_TEMPLATE_BASED_ON
  }),
  (0, E.jsx)(r.Dx, {
    className: t()(T.title, T.userText),
    children: a.name
  }),
  null != a.description && '' !== a.description && (0, E.jsx)(r.DK, {
    className: t()(T.subtitle, T.userText, C.marginTop8),
    children: a.description
  }),
  (0, E.jsx)(d, {
    className: A,
    count: null !== (s = a.usageCount) && void 0 !== s ? s : 0,
    creator: a.creator.username,
    verifiedName: (0, l.R)(a.code)
  })
]
  });
}