n.d(t, {
  H: function() {
return I;
  },
  f: function() {
return m;
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
  _ = n(766219),
  E = n(72881);
let h = [];

function m(e) {
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
!s && (!r || !(i.length >= a)) && (0, E.y)({
  loadId: t,
  categoryId: n.searchCategoryId,
  offset: i.length,
  searchQuery: n.searchQuery,
  languageCode: null !== (e = n.searchLanguageCode) && void 0 !== e ? e : (0, E.X)()
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

function I(e) {
  let {
loadId: t
  } = e, n = (0, u.B)(e => {
let {
  isSearchVisible: t
} = e;
return t;
  }, a.Z), r = (0, u.B)(e => {
let {
  searchQuery: t
} = e;
return t;
  }, a.Z);
  i.useEffect(() => {
l.Ue(), (0, o.le)();
  }, []);
  let c = i.useCallback(e => {
  (0, s.j)(() => u.B.setState({
    searchQuery: e
  }));
}, []),
h = i.useCallback(() => {
  d.IZ(t), (0, s.j)(() => u.B.setState({
    searchResultsQuery: '',
    searchQuery: '',
    isSearchVisible: !1,
    searchCategoryId: (0, _.lg)(u.B.getState().selectedTab),
    initialSearchCategoryId: null,
    searchScrollPosition: null
  }));
}, [t]);
  return {
searchQuery: r,
onSearchTextChange: c,
onClearSearch: h,
onSearchSubmit: i.useCallback(() => {
  var e;
  let n = u.B.getState();
  n.searchQuery !== n.searchResultsQuery && ((0, s.j)(() => u.B.setState({
    initialSearchCategoryId: n.searchCategoryId
  })), (0, E.y)({
    loadId: t,
    categoryId: n.searchCategoryId,
    offset: 0,
    searchQuery: n.searchQuery,
    languageCode: null !== (e = n.searchLanguageCode) && void 0 !== e ? e : (0, E.X)()
  }));
}, [t]),
isSearchVisible: n
  };
}