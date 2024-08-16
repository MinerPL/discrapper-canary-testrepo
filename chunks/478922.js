n.d(t, {
    z: function () {
        return c;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(84735),
    l = n(562701),
    u = n(514958);
function c(e, t, n) {
    let a = (0, l.G6)(e),
        c = new Map(),
        d = new n((e) => {
            e.forEach((e) => {
                var t;
                let { target: n } = e;
                null === (t = c.get(n)) || void 0 === t || t(e);
            });
        });
    return (0, i.forwardRef)(function (n, _) {
        var E;
        let { onScroll: f, dir: h = 'ltr', sections: p, columns: m, getItemKey: I, getItemHeight: T, getSectionHeight: g, chunkSize: S, renderSection: A, renderItem: N, getSectionProps: v, itemGutter: O, removeEdgeItemGutters: R, sectionGutter: C, padding: y, paddingVertical: D, paddingHorizontal: L, fade: b = !1, className: M, style: P, maxContentWidth: U, renderAccessory: w, ...x } = n,
            G = i.useRef(null),
            k = i.useRef(null),
            [B, F] = i.useState(!1),
            { scrollerRef: V, scrollerState: H, getScrollerState: Z } = (0, l.T4)();
        (0, l.tT)({
            scrollerRef: V,
            className: M,
            specs: a,
            orientation: 'vertical',
            dir: h
        });
        let {
                forceUpdateOnChunkChange: Y,
                coordsMap: j,
                gridData: W,
                visibleSections: K,
                totalHeight: z,
                forceUpdate: q,
                masonryComputer: Q
            } = (0, l.QB)({
                sections: p,
                columns: m,
                getItemKey: I,
                getItemHeight: T,
                getSectionHeight: g,
                chunkSize: S,
                itemGutter: O,
                removeEdgeItemGutters: R,
                sectionGutter: C,
                padding: y,
                paddingVertical: D,
                paddingHorizontal: L,
                getScrollerState: Z,
                dir: h,
                maxBufferWidth: U
            }),
            X = (0, i.useCallback)(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > H.current.dirty && (H.current.dirty = e), 2 === e ? q() : Y(1);
                },
                [Y, H, q]
            ),
            $ = (0, l.t2)(V),
            J = (0, i.useCallback)(() => Q.itemGrid, [Q]),
            ee = (0, i.useCallback)(() => Q.coordsMap, [Q]),
            et = i.useCallback(() => X(), [X]);
        (0, l.zn)({
            ref: V,
            key: 'container',
            onUpdate: et,
            resizeObserver: d,
            listenerMap: c
        }),
            (0, i.useImperativeHandle)(
                _,
                () => ({
                    getScrollerNode: () => V.current,
                    getItemGrid: J,
                    getCoordsMap: ee,
                    getScrollerState: Z,
                    ...(0, l.Ue)(V, Z, $)
                }),
                [V, Z, J, $, ee]
            );
        let en = (0, i.useCallback)(
            (e) => {
                X(1),
                    null == G.current ? F(!0) : clearTimeout(G.current),
                    (G.current = setTimeout(() => {
                        (G.current = null), F(!1);
                    }, 200)),
                    null != f && f(e);
            },
            [f, X]
        );
        return (
            i.useLayoutEffect(() => {
                2 !== H.current.dirty && (H.current.dirty = 2);
            }, [z, H]),
            (0, r.jsxs)('div', {
                ref: V,
                onScroll: en,
                className: s()(M, {
                    [e]: !0,
                    [t]: b,
                    [u.scrolling]: B
                }),
                style: (0, l.uT)(P),
                ...x,
                children: [
                    null !== (E = null == w ? void 0 : w(z)) && void 0 !== E ? E : null,
                    (0, i.useMemo)(
                        () =>
                            (0, r.jsx)(o.J, {
                                containerRef: k,
                                children: (0, r.jsx)('div', {
                                    style: { height: z },
                                    className: u.content,
                                    ref: k,
                                    children: Object.keys(K).map((e) => {
                                        let t = (0, l.t$)(e),
                                            n = j[e],
                                            i = K[e],
                                            a = j[(0, l.DP)(t)],
                                            s = null == v ? void 0 : v(t);
                                        return null != n && null != i
                                            ? (0, r.jsxs)(
                                                  'div',
                                                  {
                                                      style: n,
                                                      ...s,
                                                      children: [
                                                          null != A && null != a && A(t, a, e),
                                                          i.map((e) => {
                                                              let [t, n, r] = e,
                                                                  i = j[t];
                                                              return null != i ? N(n, r, i, t, W) : null;
                                                          })
                                                      ]
                                                  },
                                                  e
                                              )
                                            : null;
                                    })
                                })
                            }),
                        [K, N, A, j, z, v, W]
                    )
                ]
            })
        );
    });
}
