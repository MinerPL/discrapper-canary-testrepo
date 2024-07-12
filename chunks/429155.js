n(47120);
var r = n(735250),
  i = n(470079),
  a = n(695464),
  o = n(28546),
  s = n(98528),
  l = n(18467);
let u = i.forwardRef(function(e, t) {
  let {
store: n,
hasSearchResults: u,
listPadding: c,
renderRow: d,
renderSection: _,
renderSectionHeader: E,
renderSectionFooter: f,
renderInspector: h,
renderEmptySearchState: p,
rowCount: m,
rowCountBySection: I,
rowHeight: T,
sectionHeaderHeight: g,
sectionFooterHeight: S
  } = e, A = i.useRef(!1), N = i.useRef(null), v = (0, o.Iu)(e => e.searchQuery), O = n.useStore(e => e.activeCategoryIndex), R = (0, s.Qs)({
activeCategoryIndex: O,
isScrolling: A,
listRef: N,
onActiveCategoryIndexChange: n.setActiveCategoryIndex,
scrollOffset: 20,
searchQuery: v
  });
  return (0, s.Xs)({
searchQuery: v,
activeCategoryIndex: O,
listRef: N
  }), i.useImperativeHandle(t, () => ({
scrollTo: function() {
  for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return null === (e = N.current) || void 0 === e ? void 0 : e.scrollTo(...n);
},
getRowDescriptors: () => {
  var e, t;
  return null !== (t = null === (e = N.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : [];
},
getSectionDescriptors: () => {
  var e, t;
  return null !== (t = null === (e = N.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : [];
},
scrollToSectionTop: function() {
  for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return null === (e = N.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n);
},
scrollRowIntoView: function() {
  for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return null === (e = N.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n);
},
getScrollerNode: function() {
  for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return null === (e = N.current) || void 0 === e ? void 0 : e.getScrollerNode(...n);
},
scrollIntoViewNode: function() {
  for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return null === (e = N.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n);
},
getListDimensions: function() {
  for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++)
    r[i] = arguments[i];
  return null !== (t = null === (e = N.current) || void 0 === e ? void 0 : e.getListDimensions(...r)) && void 0 !== t ? t : {
    height: -1,
    totalHeight: -1
  };
}
  }), []), (0, r.jsxs)('div', {
className: l.wrapper,
children: [
  v.length > 0 && !u && null != p ? p() : (0, r.jsx)(a.Z, {
    role: 'none presentation',
    listPadding: c,
    onScroll: R,
    renderRow: d,
    renderSection: _,
    renderSectionHeader: E,
    renderSectionFooter: f,
    rowCount: m,
    rowCountBySection: I,
    rowHeight: T,
    sectionHeaderHeight: g,
    sectionFooterHeight: S,
    stickyHeaders: !0,
    ref: N
  }),
  null == h ? void 0 : h()
]
  });
});
t.Z = u;