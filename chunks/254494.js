var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(695464),
  l = n(28546),
  u = n(981631),
  c = n(598025);
let d = e => {
  let {
activeIndex: t,
categoryListRef: n,
getScrollOffsetForIndex: r
  } = e, a = i.useRef(u.xAR), o = i.useRef(t);
  return i.useEffect(() => {
null != t && t !== o.current && (a.current !== u.xAR && window.cancelAnimationFrame(a.current), a.current = window.requestAnimationFrame(() => {
  var e;
  if (null == n.current)
    return;
  let i = t > (null !== (e = o.current) && void 0 !== e ? e : -1),
    s = null != r ? r(t, i) : 0;
  n.current.scrollRowIntoView(t, {
    animate: !0,
    offset: s
  }), a.current = u.xAR, o.current = t;
}));
  }, [
t,
n,
r
  ]), {
categoryListRef: n
  };
};
t.Z = function(e) {
  let {
categoryListRef: t,
expressionsListRef: n,
categories: a,
store: u,
children: _,
className: E,
listPadding: f,
rowCount: h,
getScrollOffsetForIndex: p,
categoryHeight: m,
onScroll: I,
renderCategoryListItem: T,
rowCountBySection: g,
renderSection: S
  } = e, A = u.useStore(e => e.activeCategoryIndex);
  d({
activeIndex: A,
categoryListRef: t,
getScrollOffsetForIndex: p
  });
  let N = i.useCallback(e => {
  let {
    searchQuery: t
  } = l.Iu.getState();
  if (u.setActiveCategoryIndex(e), '' !== t)
    (0, l.ql)('');
  else {
    var r;
    null === (r = n.current) || void 0 === r || r.scrollToSectionTop(e);
  }
}, [
  n,
  u
]),
v = i.useCallback(e => T(a[e], e, () => N(e), A === e), [
  A,
  a,
  N,
  T
]),
O = i.useMemo(() => 'function' == typeof m ? e => m(a[e], e) : m, [
  a,
  m
]);
  return (0, r.jsxs)('div', {
className: o()(c.wrapper, E),
children: [
  (0, r.jsx)(s.Z, {
    listPadding: f,
    onScroll: I,
    ref: t,
    renderRow: v,
    rowCount: h,
    rowHeight: O,
    hideScrollbar: !0,
    rowCountBySection: g,
    renderSection: S
  }),
  null == _ ? void 0 : _(N)
]
  });
};