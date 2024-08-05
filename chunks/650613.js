t.d(r, {
  Z: function() {
return f;
  }
}), t(47120), t(390547);
var a = t(735250),
  n = t(442837),
  i = t(481060),
  o = t(100527),
  l = t(171368),
  c = t(594174),
  s = t(719247),
  d = t(71585),
  u = t(146282),
  h = t(897674),
  m = t(561308),
  g = t(206583),
  p = t(916159);

function b(e) {
  let {
id: r
  } = e, t = (0, n.e7)([c.default], () => c.default.getUser(r));
  return null == t ? null : (0, a.jsx)(i.Clickable, {
className: p.entryAuthor,
onClick: function() {
  (0, l.openUserProfileModal)({
    sourceAnalyticsLocations: [o.Z.DEV_TOOLS],
    userId: r
  });
},
children: (0, a.jsx)(i.Text, {
  variant: 'text-md/semibold',
  children: t.username
})
  });
}

function f() {
  var e;
  let r = (0, n.e7)([u.Z], () => u.Z.getFeed(g.YN.GLOBAL_FEED)),
t = (0, n.e7)([u.Z], () => u.Z.getFilters()),
o = (0, n.cj)([s.Z], () => {
  var e;
  let t = {};
  for (let a of null !== (e = null == r ? void 0 : r.entries) && void 0 !== e ? e : [])
    t[(0, s.T)(a.content)] = s.Z.canRenderContent(a.content);
  return t;
}, [r]),
l = (0, n.e7)([d.Z], () => d.Z.getImpressionCappedItemIds());
  if (null == t)
return null;
  let c = null == r ? void 0 : null === (e = r.entries) || void 0 === e ? void 0 : e.flatMap(e => {
let {
  content: r
} = e;
if (!(0, h.g)(t, r))
  return [];
let n = o[(0, s.T)(r)];
return (0, a.jsxs)('li', {
  className: p.locatorEntry,
  children: [
    (0, a.jsx)(b, {
      type: r.author_type,
      id: r.author_id
    }),
    !n && (0, a.jsx)(i.Text, {
      variant: 'text-md/normal',
      children: 'Expired or no matching presence'
    }),
    (0, m.n2)(r) && (0, a.jsxs)(i.Text, {
      variant: 'text-md/normal',
      children: [
        'Expired at ',
        r.expires_at
      ]
    }),
    l.has(r.id) && (0, a.jsx)(i.Text, {
      variant: 'text-md/normal',
      children: 'Impression capped'
    })
  ]
});
  });
  return (0, a.jsxs)(i.FormSection, {
children: [
  (0, a.jsx)(i.FormTitle, {
    children: 'Selected Content'
  }),
  null != c ? (0, a.jsx)('ul', {
    children: c
  }) : (0, a.jsx)('div', {
    children: '(none?)'
  })
]
  });
}