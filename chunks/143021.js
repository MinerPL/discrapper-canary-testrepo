n.d(t, {
  H: function() {
return p;
  },
  f: function() {
return g;
  }
});
var i = n(470079),
  a = n(143927),
  s = n(731965),
  r = n(442837),
  l = n(212093),
  o = n(36867),
  c = n(706454),
  d = n(251625),
  u = n(900849),
  _ = n(540742),
  h = n(731455);
let E = [],
  I = (0, d.oH)(() => {
var e;
let t = h.dU,
  n = c.default.locale;
return null !== (e = t.find(e => e.code === n)) && void 0 !== e ? e : t[0];
  });

function m(e) {
  let {
loadId: t,
categoryId: n
  } = e;
  (0, s.j)(() => _.B.setState({
isSearchVisible: !0,
searchCategoryId: n
  }));
  let {
searchResultsQuery: i,
searchQuery: a,
searchCategoryId: r
  } = _.B.getState(), {
guilds: c,
total: d,
loading: h,
initialized: E
  } = o.Z.getResults(i, r);
  if (h || E && c.length >= d)
return;
  (0, s.j)(() => _.B.setState({
searchResultsQuery: a
  }));
  let m = I();
  u.tI(t, r), l.bR(a, {
categoryId: n,
preferredLocale: m.code,
offset: c.length,
length: 12,
filters: {
  approximate_member_count: u.sq
}
  }, !1);
}

function g(e) {
  let {
loadId: t
  } = e, n = (0, _.B)(e => {
let {
  searchResultsQuery: t
} = e;
return t;
  }, a.Z), s = (0, _.B)(e => {
let {
  searchCategoryId: t
} = e;
return t;
  }, a.Z), {
guilds: l,
loading: c
  } = (0, r.e7)([o.Z], () => null == n ? {
guilds: E,
loading: !0
  } : o.Z.getResults(n, s)), d = i.useCallback(() => m({
loadId: t,
categoryId: s
  }), [
t,
s
  ]);
  return i.useMemo(() => ({
guilds: l,
loading: c,
searchResultsQuery: n,
loadMore: d,
searchCategoryId: s
  }), [
l,
d,
n,
c,
s
  ]);
}

function p(e) {
  let {
loadId: t,
categoryId: n,
onClear: r
  } = e, o = (0, _.B)(e => {
let {
  isSearchVisible: t
} = e;
return t;
  }, a.Z), c = (0, _.B)(e => {
let {
  searchQuery: t
} = e;
return t;
  }, a.Z);
  i.useEffect(() => {
l.Ue();
  }, []);
  let d = i.useCallback(e => {
  (0, s.j)(() => _.B.setState({
    searchQuery: e
  }));
}, []),
h = i.useCallback(() => {
  r(), (0, s.j)(() => _.B.setState({
    searchResultsQuery: '',
    searchQuery: '',
    isSearchVisible: !1
  })), u.IZ(t);
}, [
  t,
  r
]),
E = i.useCallback(() => m({
  loadId: t,
  categoryId: n
}), [
  n,
  t
]);
  return i.useMemo(() => ({
searchQuery: c,
onSearchTextChange: d,
onClearSearch: h,
onSearchSubmit: E,
isSearchVisible: o
  }), [
o,
h,
E,
d,
c
  ]);
}