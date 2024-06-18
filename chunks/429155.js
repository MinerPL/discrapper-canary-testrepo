"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(695464),
  o = n(28546),
  a = n(98528),
  l = n(889);
let u = r.forwardRef(function(e, t) {
  let {
    store: n,
    hasSearchResults: u,
    listPadding: _,
    renderRow: d,
    renderSection: c,
    renderSectionHeader: E,
    renderSectionFooter: I,
    renderInspector: T,
    renderEmptySearchState: h,
    rowCount: S,
    rowCountBySection: f,
    rowHeight: N,
    sectionHeaderHeight: A,
    sectionFooterHeight: m
  } = e, O = r.useRef(!1), R = r.useRef(null), C = (0, o.Iu)(e => e.searchQuery), p = n.useStore(e => e.activeCategoryIndex), g = (0, a.Qs)({
    activeCategoryIndex: p,
    isScrolling: O,
    listRef: R,
    onActiveCategoryIndexChange: n.setActiveCategoryIndex,
    scrollOffset: 20,
    searchQuery: C
  });
  return (0, a.Xs)({
    searchQuery: C,
    activeCategoryIndex: p,
    listRef: R
  }), r.useImperativeHandle(t, () => ({
    scrollTo: function() {
      for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
      return null === (e = R.current) || void 0 === e ? void 0 : e.scrollTo(...n)
    },
    getRowDescriptors: () => {
      var e, t;
      return null !== (t = null === (e = R.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : []
    },
    getSectionDescriptors: () => {
      var e, t;
      return null !== (t = null === (e = R.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : []
    },
    scrollToSectionTop: function() {
      for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
      return null === (e = R.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n)
    },
    scrollRowIntoView: function() {
      for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
      return null === (e = R.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n)
    },
    getScrollerNode: function() {
      for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
      return null === (e = R.current) || void 0 === e ? void 0 : e.getScrollerNode(...n)
    },
    scrollIntoViewNode: function() {
      for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
      return null === (e = R.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n)
    },
    getListDimensions: function() {
      for (var e, t, n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
      return null !== (t = null === (e = R.current) || void 0 === e ? void 0 : e.getListDimensions(...i)) && void 0 !== t ? t : {
        height: -1,
        totalHeight: -1
      }
    }
  }), []), (0, i.jsxs)("div", {
    className: l.wrapper,
    children: [C.length > 0 && !u && null != h ? h() : (0, i.jsx)(s.Z, {
      role: "none presentation",
      listPadding: _,
      onScroll: g,
      renderRow: d,
      renderSection: c,
      renderSectionHeader: E,
      renderSectionFooter: I,
      rowCount: S,
      rowCountBySection: f,
      rowHeight: N,
      sectionHeaderHeight: A,
      sectionFooterHeight: m,
      stickyHeaders: !0,
      ref: R
    }), null == T ? void 0 : T()]
  })
});
t.Z = u