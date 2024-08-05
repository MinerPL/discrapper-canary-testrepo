n.d(t, {
  Z: function() {
return C;
  }
}), n(47120), n(610138), n(216116), n(78328), n(815648);
var a = n(735250),
  i = n(470079),
  l = n(120356),
  r = n.n(l),
  s = n(399606),
  c = n(481060),
  o = n(626135),
  d = n(463571),
  u = n(894653),
  _ = n(34674),
  g = n(132871),
  m = n(981631),
  f = n(409298);

function C(e) {
  let {
currentCategoryId: t,
className: n,
countsByCategory: l,
onView: C
  } = e, p = (0, g.useApplicationDirectoryHistory)(e => e.guildId), h = (0, s.e7)([u.Z], () => u.Z.getCategories()), x = i.useMemo(() => [
(0, _.KQ)(),
...h
  ], [h]), I = (0, g.getCurrentView)();
  return (0, a.jsx)(c.TabBar, {
className: r()(f.container, n),
selectedItem: t,
type: 'top-pill',
onItemSelect: e => {
  if (e === t)
    return;
  let n = x.find(t => t.id === e);
  o.default.track(m.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
    category: n.name,
    category_id: n.id,
    current_page: null == I ? void 0 : I.type,
    guild_id: p
  }), C(n);
},
orientation: 'vertical',
children: x.map(e => {
  var n;
  let i = e.id,
    s = e.name,
    o = (0, _.tu)(e),
    u = r()(f.category, {
      [f.activeCategory]: t === i
    }),
    g = new URLSearchParams();
  return g.set('category_id', i.toString()), (0, a.jsx)(c.TabBar.Item, {
    id: i,
    'aria-label': s,
    disableItemStyles: !0,
    children: (0, a.jsxs)(d.Z, {
      href: ''.concat(m.Z5c.APPLICATION_DIRECTORY_SEARCH, '?').concat(g),
      className: u,
      children: [
        (0, a.jsx)(o, {
          className: f.icon,
          color: 'currentColor'
        }),
        (0, a.jsx)(c.Text, {
          variant: 'text-md/normal',
          children: s
        }),
        null != l ? (0, a.jsx)(c.Text, {
          className: f.count,
          variant: 'text-md/normal',
          color: 'text-muted',
          children: null !== (n = null == l ? void 0 : l[i]) && void 0 !== n ? n : 0
        }) : null
      ]
    })
  }, i);
})
  });
}