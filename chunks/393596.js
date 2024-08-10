n.d(t, {
  I: function() {
return g;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(143927),
  o = n(731965),
  c = n(442837),
  d = n(481060),
  u = n(150192),
  _ = n(706454),
  h = n(683301),
  E = n(540742),
  m = n(72881),
  I = n(768198);

function g(e) {
  var t;
  let {
categoryId: n,
loadId: i
  } = e;
  (0, o.j)(() => E.B.setState({
searchCategoryId: n
  }));
  let a = E.B.getState();
  (0, m.y)({
loadId: i,
categoryId: n,
offset: 0,
searchQuery: a.searchQuery,
languageCode: null !== (t = a.searchLanguageCode) && void 0 !== t ? t : (0, m.X)()
  });
}

function p(e) {
  let {
loadId: t,
categoryId: n,
count: s
  } = e, o = a.useCallback(() => {
g({
  categoryId: n,
  loadId: t
});
  }, [
n,
t
  ]), h = (0, E.B)(e => {
let {
  searchCategoryId: t
} = e;
return t;
  }, l.Z) === n, m = s.toLocaleString(_.default.locale), p = (0, c.e7)([u.Z], () => u.Z.getCategoryName(n));
  return (0, i.jsxs)(d.Clickable, {
onClick: o,
className: r()(I.category, {
  [I.selected]: h
}),
children: [
  (0, i.jsx)(d.Text, {
    className: I.name,
    variant: 'text-sm/medium',
    color: 'header-primary',
    children: p
  }),
  (0, i.jsx)(d.Text, {
    className: I.count,
    variant: 'text-sm/normal',
    color: 'text-muted',
    children: m
  })
]
  });
}
t.Z = function(e) {
  let {
loadId: t
  } = e, n = (0, E.B)(e => {
let {
  searchResultsQuery: t
} = e;
return t;
  }, l.Z), a = (0, c.e7)([h.ZP], () => h.ZP.getTopCategoryCounts(n));
  return null == a ? null : (0, i.jsx)('div', {
className: I.categories,
children: a.map(e => {
  let [n, a] = e;
  return (0, i.jsx)(p, {
    loadId: t,
    categoryId: n,
    count: a
  }, n);
})
  });
};