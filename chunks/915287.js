n.d(t, {
    v: function () {
        return _;
    }
}), n(653041), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(952639), l = n.n(s), u = n(84735), c = n(562701), d = n(471006);
function _(e, t, n, a) {
    let s = (0, c.G6)(e), _ = new Map(), E = new a(e => {
            e.forEach(e => {
                var t;
                let {target: n} = e;
                null === (t = _.get(n)) || void 0 === t || t(e);
            });
        });
    return i.forwardRef(function (a, f) {
        let {
                className: h,
                onScroll: p,
                onResize: m = null,
                onContentResize: I = null,
                dir: T = 'ltr',
                sections: g,
                sectionHeight: S,
                rowHeight: A,
                footerHeight: N = 0,
                sidebarHeight: v,
                listHeaderHeight: O = 0,
                renderSection: R,
                renderRow: C,
                renderFooter: y,
                renderSidebar: D,
                renderListHeader: L,
                wrapSection: b,
                getAnchorId: M,
                paddingTop: P,
                paddingBottom: U,
                fade: w = !1,
                customTheme: x = !1,
                chunkSize: G,
                style: k,
                innerId: B,
                innerRole: F,
                innerAriaLabel: V,
                innerAriaMultiselectable: H,
                innerAriaOrientation: Z,
                innerClassName: Y,
                innerTag: j = 'div',
                ...W
            } = a, K = i.useRef(null), z = i.useRef(null), [q, Q] = i.useState(!1), {
                scrollerRef: X,
                scrollerState: $,
                getScrollerState: J
            } = (0, c.T4)();
        (0, c.tT)({
            scrollerRef: X,
            className: h,
            specs: s,
            orientation: 'vertical',
            dir: T
        });
        let {
                spacerTop: ee,
                totalHeight: et,
                items: en,
                isSidebarVisible: er,
                listComputer: ei,
                forceUpdateOnChunkChange: ea,
                anchor: eo
            } = (0, c.aU)({
                sections: g,
                sectionHeight: S,
                rowHeight: A,
                footerHeight: N,
                sidebarHeight: v,
                listHeaderHeight: O,
                paddingTop: P,
                paddingBottom: U,
                chunkSize: G,
                getScrollerState: J,
                getAnchorId: M
            }), es = (0, c.t2)(X), el = i.useRef(m), eu = i.useRef(I);
        i.useLayoutEffect(() => {
            el.current = m, eu.current = I;
        });
        let ec = i.useCallback(function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                if (e > $.current.dirty && ($.current.dirty = e), 2 === e) {
                    var t;
                    null === (t = el.current) || void 0 === t || t.call(el);
                }
                ea(e);
            }, [
                ea,
                $
            ]), ed = i.useCallback(() => ec(), [ec]);
        (0, c.zn)({
            ref: X,
            onUpdate: ed,
            key: 'container',
            resizeObserver: E,
            listenerMap: _
        }), (0, c.zn)({
            ref: z,
            onUpdate: () => {
                var e;
                return null === (e = eu.current) || void 0 === e ? void 0 : e.call(eu);
            },
            key: 'content',
            resizeObserver: E,
            listenerMap: _
        });
        let e_ = function (e) {
                let t = i.useRef(e);
                return i.useEffect(() => void (t.current = e), [e]), i.useCallback(() => t.current, []);
            }(en), eE = function (e) {
                let t = i.useRef(e);
                return i.useEffect(() => void (t.current = e), [e]), i.useCallback(e => {
                    let {current: n} = t, r = 0;
                    for (let t = 0; t < n.length; t++) {
                        let i = n[t];
                        if (r <= e && r + i >= e)
                            return [
                                t,
                                e - r
                            ];
                        r += i;
                    }
                    return [
                        0,
                        0
                    ];
                }, []);
            }(g);
        i.useImperativeHandle(f, () => ({
            getScrollerNode: () => X.current,
            getScrollerState: J,
            getItems: e_,
            getSectionRowFromIndex: eE,
            ...(0, c.rH)(X, J, ei, es)
        }), [
            X,
            J,
            eE,
            e_,
            ei,
            es
        ]);
        let ef = i.useCallback(e => {
            ec(1), null == K.current ? Q(!0) : clearTimeout(K.current), K.current = setTimeout(() => {
                K.current = null, Q(!1);
            }, 200), null != p && p(e);
        }, [
            p,
            ec
        ]);
        return i.useLayoutEffect(() => {
            2 !== $.current.dirty && ($.current.dirty = 2);
        }, [
            en,
            R,
            C,
            y,
            b,
            et,
            ee,
            $
        ]), (0, c.rS)({
            scrollerRef: X,
            anchor: eo,
            getScrollerState: J,
            listComputer: ei,
            getAnchorId: M,
            totalHeight: et
        }), (0, r.jsxs)('div', {
            ref: X,
            onScroll: ef,
            className: o()(h, {
                [e]: !0,
                [t]: w,
                [n]: x,
                [d.scrolling]: q
            }),
            style: (0, c.uT)(k),
            ...W,
            children: [
                i.useMemo(() => (0, r.jsx)(j, {
                    id: B,
                    role: F,
                    'aria-label': V,
                    'aria-multiselectable': H,
                    'aria-orientation': Z,
                    style: { height: et },
                    className: o()(d.content, Y),
                    ref: z,
                    children: (0, r.jsx)(u.J, {
                        containerRef: z,
                        children: function (e) {
                            let {
                                    renderSection: t,
                                    renderRow: n,
                                    renderFooter: i,
                                    renderListHeader: a,
                                    wrapSection: o,
                                    items: s,
                                    spacerTop: u
                                } = e, c = [(0, r.jsx)('div', {
                                        'aria-hidden': !0,
                                        style: { height: u }
                                    }, '---list-spacer-top')], d = [], _ = 0;
                            if (s.forEach(e => {
                                    var r;
                                    switch (e.section !== _ && d.length > 0 && (c.push(null != o ? o(_, d) : d), d = []), _ = null !== (r = e.section) && void 0 !== r ? r : 0, e.type) {
                                    case 'section':
                                        null != t && d.push(t(e));
                                        break;
                                    case 'row':
                                        d.push(n(e));
                                        break;
                                    case 'footer':
                                        null != i && d.push(i(e));
                                        break;
                                    case 'header':
                                        null != a && d.push(a());
                                    }
                                }), d.length > 0) {
                                var E;
                                c.push(null !== (E = null == o ? void 0 : o(_, d)) && void 0 !== E ? E : d);
                            }
                            return l()(c);
                        }({
                            items: en,
                            renderListHeader: L,
                            renderSection: R,
                            renderRow: C,
                            renderFooter: y,
                            wrapSection: b,
                            spacerTop: ee
                        })
                    })
                }), [
                    B,
                    F,
                    V,
                    H,
                    Z,
                    Y,
                    j,
                    et,
                    en,
                    R,
                    C,
                    y,
                    L,
                    b,
                    ee
                ]),
                i.useMemo(() => function (e) {
                    let {
                        renderSidebar: t,
                        sidebarHeight: n,
                        isSidebarVisible: r,
                        isListVisible: i
                    } = e;
                    return null == n || null == t ? null : t(i, r);
                }({
                    isSidebarVisible: er,
                    renderSidebar: D,
                    sidebarHeight: v,
                    isListVisible: 0 !== en.length
                }), [
                    er,
                    D,
                    v,
                    en.length
                ])
            ]
        });
    });
}
