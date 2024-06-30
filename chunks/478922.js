n.d(t, {
    z: function () {
        return c;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(84735), l = n(562701), u = n(471006);
function c(e, t, n) {
    let a = (0, l.G6)(e), c = new Map(), d = new n(e => {
            e.forEach(e => {
                var t;
                let {target: n} = e;
                null === (t = c.get(n)) || void 0 === t || t(e);
            });
        });
    return (0, i.forwardRef)(function (n, _) {
        let {
                onScroll: E,
                dir: f = 'ltr',
                sections: h,
                columns: p,
                getItemKey: m,
                getItemHeight: I,
                getSectionHeight: T,
                chunkSize: g,
                renderSection: S,
                renderItem: A,
                getSectionProps: N,
                itemGutter: v,
                removeEdgeItemGutters: O,
                sectionGutter: R,
                padding: C,
                paddingVertical: y,
                paddingHorizontal: D,
                fade: L = !1,
                className: b,
                style: M,
                maxContentWidth: P,
                ...U
            } = n, w = i.useRef(null), x = i.useRef(null), [G, k] = i.useState(!1), {
                scrollerRef: B,
                scrollerState: F,
                getScrollerState: V
            } = (0, l.T4)();
        (0, l.tT)({
            scrollerRef: B,
            className: b,
            specs: a,
            orientation: 'vertical',
            dir: f
        });
        let {
                forceUpdateOnChunkChange: H,
                coordsMap: Z,
                gridData: Y,
                visibleSections: j,
                totalHeight: W,
                forceUpdate: K,
                masonryComputer: z
            } = (0, l.QB)({
                sections: h,
                columns: p,
                getItemKey: m,
                getItemHeight: I,
                getSectionHeight: T,
                chunkSize: g,
                itemGutter: v,
                removeEdgeItemGutters: O,
                sectionGutter: R,
                padding: C,
                paddingVertical: y,
                paddingHorizontal: D,
                getScrollerState: V,
                dir: f,
                maxBufferWidth: P
            }), q = (0, i.useCallback)(function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                e > F.current.dirty && (F.current.dirty = e, 2 === e ? K() : H(1));
            }, [
                H,
                F,
                K
            ]), Q = (0, l.t2)(B), X = (0, i.useCallback)(() => z.itemGrid, [z]), $ = (0, i.useCallback)(() => z.coordsMap, [z]), J = i.useCallback(() => q(), [q]);
        (0, l.zn)({
            ref: B,
            key: 'container',
            onUpdate: J,
            resizeObserver: d,
            listenerMap: c
        }), (0, i.useImperativeHandle)(_, () => ({
            getScrollerNode: () => B.current,
            getItemGrid: X,
            getCoordsMap: $,
            getScrollerState: V,
            ...(0, l.Ue)(B, V, Q)
        }), [
            B,
            V,
            X,
            Q,
            $
        ]);
        let ee = (0, i.useCallback)(e => {
            q(1), null == w.current ? k(!0) : clearTimeout(w.current), w.current = setTimeout(() => {
                w.current = null, k(!1);
            }, 200), null != E && E(e);
        }, [
            E,
            q
        ]);
        return (0, r.jsx)('div', {
            ref: B,
            onScroll: ee,
            className: o()(b, {
                [e]: !0,
                [t]: L,
                [u.scrolling]: G
            }),
            style: (0, l.uT)(M),
            ...U,
            children: (0, i.useMemo)(() => (0, r.jsx)(s.J, {
                containerRef: x,
                children: (0, r.jsx)('div', {
                    style: { height: W },
                    className: u.content,
                    ref: x,
                    children: Object.keys(j).map(e => {
                        let t = (0, l.t$)(e), n = Z[e], i = j[e], a = Z[(0, l.DP)(t)], o = null == N ? void 0 : N(t);
                        return null != n && null != i ? (0, r.jsxs)('div', {
                            style: n,
                            ...o,
                            children: [
                                null != S && null != a && S(t, a, e),
                                i.map(e => {
                                    let [t, n, r] = e, i = Z[t];
                                    return null != i ? A(n, r, i, t, Y) : null;
                                })
                            ]
                        }, e) : null;
                    })
                })
            }), [
                j,
                A,
                S,
                Z,
                W,
                N,
                Y
            ])
        });
    });
}
