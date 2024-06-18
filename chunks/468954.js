"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250),
  r = n(470079),
  s = n(28546),
  o = n(98528),
  a = n(429155),
  l = n(810462),
  u = n(380800);

function _(e) {
  let {
    categories: t,
    collapsedCategories: n,
    containerWidth: _,
    store: d,
    onSelectItem: c,
    onSearchExpressions: E,
    hasSearchResults: I,
    defaultSearchPlaceholder: T,
    emptySearchPlaceholder: h,
    renderEmptyState: S,
    renderRow: f,
    renderSection: N,
    renderSectionHeader: A,
    renderSectionFooter: m,
    renderInspector: O,
    renderEmptySearchState: R,
    renderCategoryList: C,
    renderHeaderAccessories: p,
    rowHeight: g,
    sectionHeaderHeight: L,
    sectionFooterHeight: v,
    itemNodeWidth: D,
    listPaddingRight: M,
    itemNodeMargin: P,
    listPadding: y,
    gridNavigatorId: U,
    gridNotice: b,
    renderHeader: G
  } = e, w = r.useRef(null), k = r.useRef(null), B = r.useRef(null), x = 0 === t.length, V = (0, s.Iu)(e => e.searchQuery), Z = d.useStore(e => e.inspectedExpressionPosition), H = (0, o.ep)({
    gridWrapperRef: w,
    containerWidth: _,
    showingEmptyState: x
  }), {
    expressionsGrid: F,
    rowCount: Y,
    rowCountBySection: j,
    columnCounts: W,
    gutterWidth: K
  } = (0, o.yi)({
    categories: t,
    collapsedCategories: n,
    gridWidth: H,
    listPaddingRight: M,
    itemNodeWidth: D,
    itemNodeMargin: P
  }), {
    getItemProps: z,
    getRowProps: q,
    gridContainerProps: X,
    handleGridContainerKeyDown: Q,
    isUsingKeyboardNavigation: J
  } = (0, o.t$)({
    columnCounts: W,
    expressionsListRef: k,
    expressionsGrid: F,
    onSelectItem: c,
    store: d,
    gridNavigatorId: U
  }), $ = r.useCallback(e => f(F[e], q(e), {
    isUsingKeyboardNavigation: J.current,
    gutterWidth: K,
    rowIndex: e
  }, t => z(e, t), t => d.setInspectedExpressionPosition(t, e)), [F, z, q, K, J, f, d]), ee = r.useCallback(e => null == N ? void 0 : N(t[e]), [t, N]), et = r.useCallback(e => null == A ? void 0 : A(t[e], e), [t, A]), en = r.useCallback(e => null == m ? void 0 : m(t[e]), [t, m]), ei = r.useCallback(() => {
    var e;
    return null == O ? void 0 : O(null == F ? void 0 : null === (e = F[Z.rowIndex]) || void 0 === e ? void 0 : e[Z.columnIndex])
  }, [F, Z.columnIndex, Z.rowIndex, O]);
  r.useEffect(() => {
    E(V)
  }, [E, V]), r.useEffect(() => d.resetStoreState, [d.resetStoreState]), r.useLayoutEffect(() => {
    var e;
    null === (e = B.current) || void 0 === e || e.focus()
  }, []);
  let er = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.Z, {
      ref: B,
      store: d,
      hasSendableExpressions: !0,
      onKeyDown: Q,
      expressionsListRef: k,
      gridNavigatorId: U,
      defaultSearchPlaceholder: T,
      emptySearchPlaceholder: h
    }), null == p ? void 0 : p()]
  });
  return (0, i.jsxs)(i.Fragment, {
    children: [null != G ? G(er) : (0, i.jsxs)("div", {
      className: u.header,
      children: [" ", er, " "]
    }), x && null != S ? S(u.emptyState) : (0, i.jsxs)(i.Fragment, {
      children: [C(k), null != b && (0, i.jsx)("div", {
        className: u.gridNoticeWrapper,
        children: b
      }), (0, i.jsx)("div", {
        ref: w,
        className: u.listWrapper,
        id: U,
        ...X,
        children: null != H ? (0, i.jsx)(a.Z, {
          ref: k,
          store: d,
          hasSearchResults: I,
          listPadding: y,
          renderRow: $,
          renderSection: null != N ? ee : void 0,
          renderSectionHeader: null != A ? et : void 0,
          renderSectionFooter: null != m ? en : void 0,
          renderInspector: null != O ? ei : void 0,
          renderEmptySearchState: R,
          rowCount: Y,
          rowCountBySection: j,
          rowHeight: g,
          sectionHeaderHeight: L,
          sectionFooterHeight: v
        }) : null
      })]
    })]
  })
}