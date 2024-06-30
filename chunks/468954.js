n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250), i = n(470079), a = n(28546), o = n(98528), s = n(429155), l = n(810462), u = n(597294);
function c(e) {
    let {
            categories: t,
            collapsedCategories: n,
            containerWidth: c,
            store: d,
            onSelectItem: _,
            onSearchExpressions: E,
            hasSearchResults: f,
            defaultSearchPlaceholder: h,
            emptySearchPlaceholder: p,
            renderEmptyState: m,
            renderRow: I,
            renderSection: T,
            renderSectionHeader: g,
            renderSectionFooter: S,
            renderInspector: A,
            renderEmptySearchState: N,
            renderCategoryList: v,
            renderHeaderAccessories: O,
            rowHeight: R,
            sectionHeaderHeight: C,
            sectionFooterHeight: y,
            itemNodeWidth: D,
            listPaddingRight: L,
            itemNodeMargin: b,
            listPadding: M,
            gridNavigatorId: P,
            gridNotice: U,
            renderHeader: w
        } = e, x = i.useRef(null), G = i.useRef(null), k = i.useRef(null), B = 0 === t.length, F = (0, a.Iu)(e => e.searchQuery), V = d.useStore(e => e.inspectedExpressionPosition), H = (0, o.ep)({
            gridWrapperRef: x,
            containerWidth: c,
            showingEmptyState: B
        }), {
            expressionsGrid: Z,
            rowCount: Y,
            rowCountBySection: j,
            columnCounts: W,
            gutterWidth: K
        } = (0, o.yi)({
            categories: t,
            collapsedCategories: n,
            gridWidth: H,
            listPaddingRight: L,
            itemNodeWidth: D,
            itemNodeMargin: b
        }), {
            getItemProps: z,
            getRowProps: q,
            gridContainerProps: Q,
            handleGridContainerKeyDown: X,
            isUsingKeyboardNavigation: $
        } = (0, o.t$)({
            columnCounts: W,
            expressionsListRef: G,
            expressionsGrid: Z,
            onSelectItem: _,
            store: d,
            gridNavigatorId: P
        }), J = i.useCallback(e => I(Z[e], q(e), {
            isUsingKeyboardNavigation: $.current,
            gutterWidth: K,
            rowIndex: e
        }, t => z(e, t), t => d.setInspectedExpressionPosition(t, e)), [
            Z,
            z,
            q,
            K,
            $,
            I,
            d
        ]), ee = i.useCallback(e => null == T ? void 0 : T(t[e]), [
            t,
            T
        ]), et = i.useCallback(e => null == g ? void 0 : g(t[e], e), [
            t,
            g
        ]), en = i.useCallback(e => null == S ? void 0 : S(t[e]), [
            t,
            S
        ]), er = i.useCallback(() => {
            var e;
            return null == A ? void 0 : A(null == Z ? void 0 : null === (e = Z[V.rowIndex]) || void 0 === e ? void 0 : e[V.columnIndex]);
        }, [
            Z,
            V.columnIndex,
            V.rowIndex,
            A
        ]);
    i.useEffect(() => {
        E(F);
    }, [
        E,
        F
    ]), i.useEffect(() => d.resetStoreState, [d.resetStoreState]), i.useLayoutEffect(() => {
        var e;
        null === (e = k.current) || void 0 === e || e.focus();
    }, []);
    let ei = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Z, {
                ref: k,
                store: d,
                hasSendableExpressions: !0,
                onKeyDown: X,
                expressionsListRef: G,
                gridNavigatorId: P,
                defaultSearchPlaceholder: h,
                emptySearchPlaceholder: p
            }),
            null == O ? void 0 : O()
        ]
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != w ? w(ei) : (0, r.jsxs)('div', {
                className: u.header,
                children: [
                    ' ',
                    ei,
                    ' '
                ]
            }),
            B && null != m ? m(u.emptyState) : (0, r.jsxs)(r.Fragment, {
                children: [
                    v(G),
                    null != U && (0, r.jsx)('div', {
                        className: u.gridNoticeWrapper,
                        children: U
                    }),
                    (0, r.jsx)('div', {
                        ref: x,
                        className: u.listWrapper,
                        id: P,
                        ...Q,
                        children: null != H ? (0, r.jsx)(s.Z, {
                            ref: G,
                            store: d,
                            hasSearchResults: f,
                            listPadding: M,
                            renderRow: J,
                            renderSection: null != T ? ee : void 0,
                            renderSectionHeader: null != g ? et : void 0,
                            renderSectionFooter: null != S ? en : void 0,
                            renderInspector: null != A ? er : void 0,
                            renderEmptySearchState: N,
                            rowCount: Y,
                            rowCountBySection: j,
                            rowHeight: R,
                            sectionHeaderHeight: C,
                            sectionFooterHeight: y
                        }) : null
                    })
                ]
            })
        ]
    });
}
