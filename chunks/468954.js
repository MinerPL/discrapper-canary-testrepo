n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(28546),
    s = n(98528),
    o = n(429155),
    l = n(810462),
    u = n(40261);
function c(e) {
    let { categories: t, collapsedCategories: n, containerWidth: c, store: d, onSelectItem: _, onSearchExpressions: E, hasSearchResults: f, defaultSearchPlaceholder: h, emptySearchPlaceholder: p, renderEmptyState: I, renderRow: m, renderSection: T, renderSectionHeader: S, renderSectionFooter: g, renderInspector: A, renderEmptySearchState: N, renderCategoryList: O, renderHeaderAccessories: R, rowHeight: v, sectionHeaderHeight: C, sectionFooterHeight: y, itemNodeWidth: L, listPaddingRight: D, itemNodeMargin: b, listPadding: M, gridNavigatorId: P, gridNotice: U, renderHeader: w, renderUpsell: x, setShowUpsell: G } = e,
        k = i.useRef(null),
        B = i.useRef(null),
        F = i.useRef(null),
        V = 0 === t.length,
        H = (0, a.Iu)((e) => e.searchQuery),
        Z = d.useStore((e) => e.inspectedExpressionPosition),
        Y = (0, s.ep)({
            gridWrapperRef: k,
            containerWidth: c,
            showingEmptyState: V
        }),
        {
            expressionsGrid: j,
            rowCount: W,
            rowCountBySection: K,
            columnCounts: z,
            gutterWidth: q
        } = (0, s.yi)({
            categories: t,
            collapsedCategories: n,
            gridWidth: Y,
            listPaddingRight: D,
            itemNodeWidth: L,
            itemNodeMargin: b
        }),
        {
            getItemProps: Q,
            getRowProps: X,
            gridContainerProps: $,
            handleGridContainerKeyDown: J,
            isUsingKeyboardNavigation: ee
        } = (0, s.t$)({
            columnCounts: z,
            expressionsListRef: B,
            expressionsGrid: j,
            onSelectItem: _,
            store: d,
            gridNavigatorId: P
        }),
        et = i.useCallback(
            (e, t) =>
                m(
                    j[e],
                    X(e),
                    {
                        isUsingKeyboardNavigation: ee.current,
                        gutterWidth: q,
                        rowIndex: e,
                        totalRowCount: W,
                        sectionIndex: t.sectionIndex
                    },
                    (t) => Q(e, t),
                    (t) => d.setInspectedExpressionPosition(t, e)
                ),
            [j, Q, X, q, ee, m, d, W]
        ),
        en = i.useCallback((e) => (null == T ? void 0 : T(t[e])), [t, T]),
        er = i.useCallback((e) => (null == S ? void 0 : S(t[e], e)), [t, S]),
        ei = i.useCallback((e) => (null == g ? void 0 : g(t[e], e)), [t, g]),
        ea = i.useCallback(() => {
            var e;
            return null == A ? void 0 : A(null == j ? void 0 : null === (e = j[Z.rowIndex]) || void 0 === e ? void 0 : e[Z.columnIndex]);
        }, [j, Z.columnIndex, Z.rowIndex, A]);
    i.useEffect(() => {
        E(H);
    }, [E, H]),
        i.useEffect(() => {
            var e, t;
            d.setBottomPosition(null !== (t = null === (e = k.current) || void 0 === e ? void 0 : e.getBoundingClientRect().bottom) && void 0 !== t ? t : null);
        }),
        i.useEffect(() => d.resetStoreState, [d.resetStoreState]),
        i.useLayoutEffect(() => {
            var e;
            null === (e = F.current) || void 0 === e || e.focus();
        }, []);
    let es = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Z, {
                ref: F,
                store: d,
                hasSendableExpressions: !0,
                onKeyDown: J,
                expressionsListRef: B,
                gridNavigatorId: P,
                defaultSearchPlaceholder: h,
                emptySearchPlaceholder: p
            }),
            null == R ? void 0 : R()
        ]
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != w
                ? w(es)
                : (0, r.jsxs)('div', {
                      className: u.header,
                      children: [' ', es, ' ']
                  }),
            V && null != I
                ? I(u.emptyState)
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          O(B),
                          null != U &&
                              (0, r.jsx)('div', {
                                  className: u.gridNoticeWrapper,
                                  children: U
                              }),
                          (0, r.jsx)('div', {
                              ref: k,
                              className: u.listWrapper,
                              id: P,
                              ...$,
                              children:
                                  null != Y
                                      ? (0, r.jsx)(o.Z, {
                                            categories: t,
                                            ref: B,
                                            store: d,
                                            hasSearchResults: f,
                                            listPadding: M,
                                            renderRow: et,
                                            renderSection: null != T ? en : void 0,
                                            renderSectionHeader: null != S ? er : void 0,
                                            renderSectionFooter: null != g ? ei : void 0,
                                            renderInspector: null != A ? ea : void 0,
                                            renderEmptySearchState: N,
                                            rowCount: W,
                                            rowCountBySection: K,
                                            rowHeight: v,
                                            sectionHeaderHeight: C,
                                            sectionFooterHeight: y,
                                            renderUpsell: x,
                                            setShowUpsell: G
                                        })
                                      : null
                          })
                      ]
                  })
        ]
    });
}
