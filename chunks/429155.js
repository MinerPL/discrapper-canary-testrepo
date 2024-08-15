n(47120);
var r = n(735250),
  i = n(470079),
  a = n(218867),
  s = n(74538),
  o = n(28546),
  l = n(98528),
  u = n(653248);
let c = i.forwardRef(function(e, t) {
  let {
categories: n,
store: c,
hasSearchResults: d,
listPadding: _,
renderRow: E,
renderSection: f,
renderSectionHeader: h,
renderSectionFooter: p,
renderInspector: m,
renderEmptySearchState: I,
rowCount: T,
rowCountBySection: g,
rowHeight: S,
sectionHeaderHeight: A,
sectionFooterHeight: N,
renderUpsell: v,
setShowUpsell: O
  } = e, R = i.useRef(!1), C = i.useRef(null), y = (0, o.Iu)(e => e.searchQuery), D = c.useStore(e => e.activeCategoryIndex), L = n.map(e => (0, s._O)(e.categoryInfo) ? {
isNitroLocked: e.categoryInfo.isNitroLocked
  } : {
isNitroLocked: !1
  }), b = (0, l.Uf)({
listRef: C,
searchQuery: y,
nitroLockedSectionStates: L,
setShowUpsell: O
  }), M = (0, l.Qs)({
activeCategoryIndex: D,
isScrolling: R,
listRef: C,
onActiveCategoryIndexChange: c.setActiveCategoryIndex,
scrollOffset: 20,
searchQuery: y
  }), P = i.useCallback(e => {
b(e), M(e);
  }, [
b,
M
  ]);
  return (0, l.Xs)({
searchQuery: y,
activeCategoryIndex: D,
listRef: C
  }), i.useImperativeHandle(t, () => ({
scrollTo: function() {
  for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return null === (e = C.current) || void 0 === e ? void 0 : e.scrollTo(...n);
},
getRowDescriptors: () => {
  var e, t;
  return null !== (t = null === (e = C.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : [];
},
getSectionDescriptors: () => {
  var e, t;
  return null !== (t = null === (e = C.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : [];
},
scrollToSectionTop: function() {
  for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return null === (e = C.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n);
},
scrollRowIntoView: function() {
  for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return null === (e = C.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n);
},
getScrollerNode: function() {
  for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return null === (e = C.current) || void 0 === e ? void 0 : e.getScrollerNode(...n);
},
scrollIntoViewNode: function() {
  for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return null === (e = C.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n);
},
getListDimensions: function() {
  for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++)
    r[i] = arguments[i];
  return null !== (t = null === (e = C.current) || void 0 === e ? void 0 : e.getListDimensions(...r)) && void 0 !== t ? t : {
    height: -1,
    totalHeight: -1
  };
}
  }), []), (0, r.jsxs)('div', {
className: u.wrapper,
children: [
  y.length > 0 && !d && null != I ? I() : (0, r.jsx)(a.Z, {
    role: 'none presentation',
    listPadding: _,
    onScroll: P,
    renderRow: E,
    renderSection: f,
    renderSectionHeader: h,
    renderSectionFooter: p,
    rowCount: T,
    rowCountBySection: g,
    rowHeight: S,
    sectionHeaderHeight: A,
    sectionFooterHeight: N,
    stickyHeaders: !0,
    ref: C
  }),
  null == v ? void 0 : v(),
  null == m ? void 0 : m()
]
  });
});
t.Z = c;