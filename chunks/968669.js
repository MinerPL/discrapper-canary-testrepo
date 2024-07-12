n.d(t, {
  C: function() {
return o;
  }
}), n(47120);
var i = n(470079),
  s = n(212093),
  a = n(706454),
  r = n(900849),
  l = n(731455);

function o(e) {
  var t;
  let [n, o] = i.useState(!1), [c, d] = i.useState(''), u = l.dU, _ = a.default.locale, h = null !== (t = u.find(e => e.code === _)) && void 0 !== t ? t : u[0];
  i.useEffect(() => {
s.Ue();
  }, []);
  let E = i.useCallback(t => {
  o(!0), s.bR(t, {
    categoryId: e,
    preferredLocale: h.code,
    offset: 0,
    length: 12,
    filters: {
      approximate_member_count: r.sq
    }
  }, !1);
}, [
  h.code,
  e
]),
I = i.useCallback(() => {
  d(''), o(!1);
}, [
  d,
  o
]);
  return {
searching: n,
searchQuery: c,
setSearchQuery: d,
handleSearchSubmit: E,
handleSearchClear: I
  };
}