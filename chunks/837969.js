n.d(t, {
    ZP: function () {
        return d;
    }
}),
    n(47120);
var i = n(470079),
    a = n(714319),
    s = n(536895),
    l = n(260866);
let r = [s.R8.TAB, s.R8.UP, s.R8.DOWN];
function o(e, t, n) {
    return null != n ? '#'.concat(e(t, n)) : '#'.concat(t);
}
function c(e) {
    return document.querySelector(e);
}
function u(e) {
    var t;
    null === (t = document.getElementById(e)) || void 0 === t || t.focus();
}
function d(e) {
    let { navId: t, itemCount: n, focusedIndex: d = 0, onSelect: h, setFocus: m, getNewFocusIndex: p, maintainFocusPosition: _ = !0, includeSetSizes: E = !0, focusOnMount: f = !0, enabled: C = !0, onDispatch: g } = e,
        I = i.useCallback(
            (e, t) => {
                let n = (0, a.Z)(e, t);
                return null != g && g(e, n, t), n;
            },
            [g]
        ),
        [x, T] = i.useReducer(I, {
            focusedIndex: d,
            itemCount: n
        }),
        { itemCount: N, focusedIndex: v } = x,
        [S] = i.useState(() => (0, l.P2)(T, 16));
    return (
        i.useEffect(() => {
            T({
                type: a.G.UPDATE_ITEM_COUNT,
                itemCount: n
            });
        }, [n]),
        (function (e) {
            let { navId: t, itemCount: n, focusedIndex: d, onSelect: h, setFocus: m = u, getNewFocusIndex: p, dispatch: _, maintainFocusPosition: E, includeSetSizes: f, focusOnMount: C, enabled: g, makeId: I = l.qR, getIndexFromId: x } = e,
                T = i.useRef(n),
                N = i.useRef(x);
            (N.current = x), (T.current = n);
            let v = i.useRef();
            i.useEffect(() => {
                v.current = g;
            }, [g]);
            let [S, Z] = i.useState(!1),
                [A] = i.useState(
                    () =>
                        new l.$o((e) => () => {
                            let t = null != N.current && 'string' == typeof e ? N.current(e) : e;
                            'number' == typeof t &&
                                !(t < 0) &&
                                _({
                                    type: a.G.SET_FOCUSED_INDEX,
                                    index: t
                                });
                        })
                );
            i.useEffect(() => () => A.clean(), [A]);
            let M = i.useCallback(
                    (e, t) => {
                        v.current && m(e, t);
                    },
                    [m]
                ),
                [b, R] = i.useState(!0);
            i.useEffect(() => {
                if (b && !C) {
                    R(!1);
                    return;
                }
                M(I(t, d), d);
            }, [d]);
            let j = i.useCallback(
                    function () {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            n = null != p ? p(d) : d;
                        n !== d &&
                            _({
                                type: a.G.SET_FOCUSED_INDEX,
                                index: n
                            }),
                            e && M(I(t, n), n);
                    },
                    [I, d, p, _, t, M]
                ),
                L = i.useCallback(
                    (e) => {
                        if (!v.current) return;
                        if (r.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                            e.preventDefault(), e.stopPropagation(), j();
                            return;
                        }
                        let n = (function (e) {
                            switch (e.key) {
                                case s.R8.ENTER:
                                case s.R8.SPACE:
                                    return s.Us.SELECT_FOCUSED_ITEM;
                                case s.R8.UP:
                                    return s.Us.NAVIGATE_UP;
                                case s.R8.DOWN:
                                    return s.Us.NAVIGATE_DOWN;
                                case s.R8.HOME:
                                    return s.Us.NAVIGATE_START;
                                case s.R8.END:
                                    return s.Us.NAVIGATE_END;
                            }
                        })(e);
                        switch (n) {
                            case s.Us.NAVIGATE_UP:
                            case s.Us.NAVIGATE_DOWN:
                            case s.Us.NAVIGATE_START:
                            case s.Us.NAVIGATE_END:
                                e.preventDefault(), e.stopPropagation(), _({ type: n });
                                return;
                            case s.Us.SELECT_FOCUSED_ITEM:
                                var i;
                                let a = c(o(I, t, d));
                                if ((null == (i = a) ? void 0 : i.ownerDocument.activeElement) !== i || e.repeat) return;
                                if ((e.preventDefault(), e.stopPropagation(), _({ type: n }), null != h)) {
                                    h(d);
                                    return;
                                }
                                null == a || a.click();
                        }
                    },
                    [I, t, _, d, j, h]
                ),
                P = i.useCallback(() => {
                    S || Z(!0);
                }, [S]),
                O = i.useCallback(() => {
                    if (!S) E ? M(I(t, d), d) : j(!0);
                }, [I, t, M, E, S, d, j]),
                y = i.useCallback(
                    (e) => {
                        if (!e.currentTarget.contains(e.relatedTarget))
                            requestAnimationFrame(() => {
                                if (null == c(o(I, t, d))) {
                                    M(t);
                                    return;
                                }
                                Z(!1);
                            });
                    },
                    [I, t, d, M]
                ),
                D = i.useRef(null);
            i.useLayoutEffect(() => {
                let e = D.current;
                if (null != e)
                    return (
                        e.addEventListener('focusin', P),
                        e.addEventListener('focus', O),
                        e.addEventListener('focusout', y),
                        () => {
                            e.removeEventListener('focusin', P), e.removeEventListener('focus', O), e.removeEventListener('focusout', y);
                        }
                    );
            }, [O, P, y]);
            let k = i.useCallback(
                    () => ({
                        role: 'list',
                        tabIndex: S && E ? -1 : 0,
                        id: t,
                        onKeyDown: L,
                        ref: D
                    }),
                    [t, S, L, E]
                ),
                U = i.useCallback(
                    (e) => {
                        let { index: n } = e;
                        return {
                            role: 'listitem',
                            'aria-setsize': f ? T.current : void 0,
                            'aria-posinset': f ? n + 1 : void 0,
                            id: I(t, n),
                            tabIndex: E && n === d ? 0 : -1,
                            onFocus: A.get(null != N.current ? I(t, n) : n)
                        };
                    },
                    [I, t, d, E, A, f]
                );
            return i.useMemo(
                () => ({
                    dispatch: _,
                    getContainerProps: k,
                    getItemProps: U
                }),
                [_, k, U]
            );
        })({
            navId: t,
            itemCount: N,
            focusedIndex: v,
            dispatch: S,
            onSelect: h,
            setFocus: m,
            getNewFocusIndex: p,
            maintainFocusPosition: _,
            includeSetSizes: E,
            focusOnMount: f,
            enabled: C
        })
    );
}
