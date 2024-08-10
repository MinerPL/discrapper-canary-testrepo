n.d(t, {
  H: function() {
return m;
  },
  f: function() {
return E;
  }
});
var i = n(470079),
  a = n(143927),
  s = n(731965),
  r = n(442837),
  l = n(212093),
  o = n(296386),
  c = n(36867),
  d = n(900849),
  u = n(540742),
  _ = n(72881);
let h = [];

function E(e) {
  let {
loadId: t
  } = e, n = (0, u.B)(e => {
let {
  searchResultsQuery: t
} = e;
return t;
  }, a.Z), s = (0, u.B)(e => {
let {
  searchCategoryId: t
} = e;
return t;
  }, a.Z), {
guilds: l,
loading: o
  } = (0, r.e7)([c.Z], () => null == n ? {
guilds: h,
loading: !0
  } : c.Z.getResults(n, s)), d = i.useCallback(() => {
var e;
let n = u.B.getState(),
  {
    guilds: i,
    total: a,
    loading: s,
    initialized: r
  } = c.Z.getResults(n.searchResultsQuery, n.searchCategoryId);
!s && (!r || !(i.length >= a)) && (0, _.y)({
  loadId: t,
  categoryId: n.searchCategoryId,
  offset: i.length,
  searchQuery: n.searchQuery,
  languageCode: null !== (e = n.searchLanguageCode) && void 0 !== e ? e : (0, _.X)()
});
  }, [t]);
  return i.useMemo(() => ({
guilds: l,
loading: o,
searchResultsQuery: n,
loadMore: d,
searchCategoryId: s
  }), [
l,
d,
n,
o,
s
  ]);
}

function m(e) {
  let {
loadId: t,
categoryId: n,
onClear: r
  } = e, c = (0, u.B)(e => {
let {
  isSearchVisible: t
} = e;
return t;
  }, a.Z), h = (0, u.B)(e => {
let {
  searchQuery: t
} = e;
return t;
  }, a.Z);
  i.useEffect(() => {
l.Ue(), (0, o.le)();
  }, []);
  let E = i.useCallback(e => {
  (0, s.j)(() => u.B.setState({
    searchQuery: e
  }));
}, []),
m = i.useCallback(() => {
  r(), (0, s.j)(() => u.B.setState({
    searchResultsQuery: '',
    searchQuery: '',
    isSearchVisible: !1
  })), d.IZ(t);
}, [
  t,
  r
]),
I = i.useCallback(() => {
  var e;
  let i = u.B.getState();
  (0, _.y)({
    loadId: t,
    categoryId: n,
    offset: 0,
    searchQuery: i.searchQuery,
    languageCode: null !== (e = i.searchLanguageCode) && void 0 !== e ? e : (0, _.X)()
  });
}, [
  n,
  t
]);
  return i.useMemo(() => ({
searchQuery: h,
onSearchTextChange: E,
onClearSearch: m,
onSearchSubmit: I,
isSearchVisible: c
  }), [
c,
m,
I,
E,
h
  ]);
}