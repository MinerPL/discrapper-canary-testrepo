n.d(t, {
    Qs: function () {
        return m;
    },
    Uf: function () {
        return p;
    },
    VO: function () {
        return I;
    },
    Xs: function () {
        return h;
    },
    ep: function () {
        return f;
    },
    t$: function () {
        return g;
    },
    yi: function () {
        return T;
    }
}), n(47120), n(653041);
var r = n(470079), i = n(392711), a = n.n(i), o = n(536895), s = n(566064), l = n(611144), u = n(468194), c = n(477690), d = n(691251), _ = n(981631);
let E = (0, u.Mg)(c.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT), f = e => {
        let {
                gridWrapperRef: t,
                containerWidth: n,
                showingEmptyState: i,
                listPaddingLeft: o = E,
                listScrollbarWidth: s = 8
            } = e, [l, u] = r.useState(void 0), c = r.useCallback(() => {
                if (null == t.current)
                    return null;
                u(t.current.offsetWidth - o - s);
            }, [
                t,
                o,
                s
            ]);
        return r.useLayoutEffect(() => {
            c();
        }, [
            n,
            c,
            i
        ]), r.useEffect(() => {
            let e = a().debounce(c, 250);
            return window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, [c]), l;
    }, h = e => {
        let {
                activeCategoryIndex: t,
                listRef: n,
                searchQuery: i
            } = e, a = r.useRef(i), o = r.useRef(!0);
        r.useLayoutEffect(() => {
            if ('' === i && '' !== a.current) {
                var e;
                null === (e = n.current) || void 0 === e || e.scrollToSectionTop(t);
            }
            a.current = i;
        }, [
            i,
            t,
            n
        ]), r.useLayoutEffect(() => {
            if (o.current) {
                var e;
                null === (e = n.current) || void 0 === e || e.scrollToSectionTop(t), o.current = !1;
            }
        }, [
            t,
            n
        ]), r.useEffect(() => {
            a.current = i;
        }, [i]);
    }, p = e => {
        let {
                listRef: t,
                searchQuery: n,
                setShowUpsell: i,
                setUpsellGlowOpacity: a,
                emojiSectionDescriptors: o
            } = e, s = r.useCallback(e => {
                if ('' !== n) {
                    a(0);
                    return;
                }
                if (null == t.current)
                    return;
                let r = o.findIndex(e => e.isNitroLocked);
                if (-1 === r) {
                    a(0);
                    return;
                }
                let i = t.current.getSectionDescriptors();
                if (null == i || 0 === i.length || i.length !== o.length)
                    return;
                let s = i[r], l = e + t.current.getListDimensions().height;
                a(Math.min(Math.max((s.offset.top - (l - 250)) / 250, 0), 1));
            }, [
                n,
                t,
                o,
                a
            ]), l = r.useCallback(e => {
                if ('' !== n) {
                    i(!1);
                    return;
                }
                if (null == t.current)
                    return;
                let r = t.current.getSectionDescriptors();
                if (null == r || 0 === r.length || r.length !== o.length)
                    return;
                let a = t.current.getListDimensions().height, s = e + 0.7 * a, l = e + 0.85 * a, u = !1, c = !1;
                o.forEach((e, t) => {
                    if (!e.isNitroLocked)
                        return;
                    let n = r[t];
                    n.offset.top <= l && n.offset.bottom >= l && (c = !0), n.offset.top <= s && n.offset.bottom >= s && (u = !0);
                }), i(c && u);
            }, [
                n,
                t,
                o,
                i
            ]);
        return r.useCallback(e => {
            l(e), s(e);
        }, [
            l,
            s
        ]);
    }, m = e => {
        let {
                activeCategoryIndex: t,
                listRef: n,
                isScrolling: i,
                searchQuery: o,
                scrollOffset: s = 0,
                onActiveCategoryIndexChange: l,
                disableForSearch: u = !0
            } = e, c = r.useRef(_.xAR), d = r.useMemo(() => a().debounce(() => {
                i.current = !1;
            }, 250), [i]), E = r.useMemo(() => a().debounce(e => {
                ('' === o || !u) && (window.cancelAnimationFrame(c.current), c.current = window.requestAnimationFrame(() => {
                    var r;
                    let i = null === (r = n.current) || void 0 === r ? void 0 : r.getSectionDescriptors();
                    if (null == i)
                        return;
                    let a = i.findIndex((t, n) => {
                            let r = i[n + 1], a = e + s >= t.offset.top, o = null != r && e + s < r.offset.top;
                            return null != r && !a && !o || a && o || a && null == r;
                        }), o = -1 === a ? 0 : a;
                    t !== o && l(o);
                }));
            }, 0), [
                o,
                n,
                t,
                s,
                l,
                u
            ]);
        return r.useCallback(e => {
            i.current = !0, d(), E(e);
        }, [
            i,
            d,
            E
        ]);
    }, I = e => {
        let {
                columnCounts: t,
                gridNavigatorId: n,
                itemGrid: i,
                itemList: a,
                onGridNavigatorItemSelect: l,
                onGridNavigatorPositionChange: u
            } = e, c = r.useRef(!1), d = r.useCallback((e, t) => {
                let n = i[t];
                if (null != n)
                    return n[e];
            }, [i]), _ = r.useCallback(e => {
                let {
                    focusedX: t,
                    focusedY: n
                } = e;
                c.current = !0;
                let r = d(t, n);
                if (null == r)
                    return;
                let {
                    visibleRowIndex: i,
                    columnIndex: o
                } = r;
                u(o, i), null != a.current && a.current.scrollRowIntoView(n);
            }, [
                d,
                a,
                u
            ]), E = r.useCallback((e, t, n) => {
                switch (n.type) {
                case o.Us.NAVIGATE_UP:
                case o.Us.NAVIGATE_DOWN:
                case o.Us.NAVIGATE_RIGHT:
                case o.Us.NAVIGATE_LEFT:
                case o.Us.NAVIGATE_INLINE_START:
                case o.Us.NAVIGATE_INLINE_END:
                case o.Us.NAVIGATE_START:
                case o.Us.NAVIGATE_END:
                case o.Us.NAVIGATE_CROSSLINE_START:
                case o.Us.NAVIGATE_CROSSLINE_END:
                    _(t);
                }
            }, [_]), f = r.useCallback((e, t, n) => {
                let r = d(e, t);
                null != r && l(r, n);
            }, [
                d,
                l
            ]), {
                dispatch: h,
                getItemProps: p,
                getRowProps: m,
                getContainerProps: I
            } = (0, s.Z)({
                navId: n,
                columnCounts: t,
                onDispatch: E,
                onSelect: f,
                autoFocusElement: !1,
                useVirtualFocus: !0
            }), {
                gridContainerProps: T,
                handleGridContainerKeyDown: g
            } = r.useMemo(() => {
                let e = I();
                return {
                    gridContainerProps: e,
                    handleGridContainerKeyDown: e.onKeyDown
                };
            }, [I]);
        return r.useEffect(() => {
            let e = () => {
                c.current = !1;
            };
            return window.addEventListener('mousemove', e), () => window.removeEventListener('mousemove', e);
        }, []), {
            gridDispatch: h,
            getItemProps: p,
            getRowProps: m,
            gridContainerProps: T,
            handleGridContainerKeyDown: g,
            isUsingKeyboardNavigation: c
        };
    };
function T(e) {
    let {
        categories: t,
        collapsedCategories: n,
        gridWidth: i = 0,
        listPaddingRight: a = 0,
        itemNodeWidth: o,
        itemNodeMargin: s = 0
    } = e;
    return r.useMemo(() => {
        let e = Math.max(1, Math.floor((i - a + s) / (o + s))), r = Math.floor(Math.max(s, (i - a - o * e) / (e - 1))), l = [], u = [], c = [], d = 0, _ = 0, E = 0;
        if (0 !== i) {
            let r = function (t, n) {
                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = Math.ceil(t.length / e);
                u[_] = r ? 0 : i;
                for (let a = 0; a < i; a++) {
                    let i = a * e, o = i + e, s = t.slice(i, o).map((e, t) => ({
                            item: e,
                            gridSectionIndex: _,
                            rowIndex: d,
                            columnIndex: t,
                            visibleRowIndex: E,
                            category: n
                        }));
                    !r && (E++, c.push(s), l.push(s.length)), d++;
                }
                _++;
            };
            for (let e of t)
                if (e.items.length > 0) {
                    var f;
                    r(e.items, e.categoryInfo.type, null !== (f = null == n ? void 0 : n.has(''.concat(e.key))) && void 0 !== f && f);
                }
        }
        return {
            expressionsGrid: c,
            rowCount: d,
            rowCountBySection: u,
            columnCounts: l,
            gutterWidth: r
        };
    }, [
        t,
        n,
        i,
        s,
        o,
        a
    ]);
}
function g(e) {
    let {
            columnCounts: t,
            expressionsGrid: n,
            expressionsListRef: i,
            store: a,
            gridNavigatorId: o,
            onSelectItem: s
        } = e, {
            gridDispatch: u,
            getItemProps: c,
            getRowProps: _,
            gridContainerProps: E,
            handleGridContainerKeyDown: f,
            isUsingKeyboardNavigation: h
        } = I({
            columnCounts: t,
            gridNavigatorId: o,
            itemGrid: n,
            itemList: i,
            onGridNavigatorItemSelect: s,
            onGridNavigatorPositionChange: a.setInspectedExpressionPosition
        });
    return r.useEffect(() => a.useStore.subscribe(e => {
        if (null == e)
            return;
        let {
            columnIndex: t,
            rowIndex: n,
            source: r
        } = e;
        r !== d.u.GRID_NAVIGATOR_EVENT && u({
            type: l.s.SET_FOCUSED_POSITION,
            x: t,
            y: n
        });
    }, e => e.inspectedExpressionPosition), [
        u,
        a
    ]), {
        getItemProps: c,
        getRowProps: _,
        gridContainerProps: E,
        handleGridContainerKeyDown: f,
        isUsingKeyboardNavigation: h
    };
}
