n.d(t, {
  X: function() {
return d;
  },
  y: function() {
return u;
  }
});
var i = n(731965),
  a = n(212093),
  s = n(706454),
  r = n(683301),
  l = n(900849),
  o = n(540742),
  c = n(731455);

function d() {
  var e;
  let t = c.dU,
n = s.default.locale;
  return (null !== (e = t.find(e => e.code === n)) && void 0 !== e ? e : t[0]).code;
}

function u(e) {
  let {
loadId: t,
categoryId: n,
offset: s,
searchQuery: c,
languageCode: d
  } = e;
  (0, i.j)(() => o.B.setState({
searchResultsQuery: c,
isSearchVisible: !0,
searchCategoryId: n
  })), l.tI(t, n), null == r.ZP.getTopCategoryCounts(c) && a.G7(c, {
approximate_member_count: l.sq
  }), a.bR(c, {
categoryId: n,
preferredLocale: d,
offset: s,
length: 12,
filters: {
  approximate_member_count: l.sq
}
  }, !1);
}