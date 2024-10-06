n.d(t, {
    ZP: function () {
        return c;
    }
}),
    n(47120);
var r = n(470079),
    i = n(372817),
    a = n(25441),
    s = n(585627),
    o = n(536895),
    l = n(260866);
function u(e, t) {
    var n;
    return Array.from((null !== (n = t.current) && void 0 !== n ? n : document).querySelectorAll('['.concat(l.ie, '^="').concat(e, '"]')));
}
function c(e) {
    let { id: t, defaultFocused: n, isEnabled: c, scrollToStart: d, scrollToEnd: _, onNavigatePreviousAtStart: E, onNavigateNextAtEnd: f, setFocus: h, setFocusOnList: p, preserveFocusPosition: I = !0, useVirtualFocus: m = !1, wrap: T = !1, orientation: S = o.hy.VERTICAL, disableClickOnSpace: g = !1 } = e,
        A = r.useRef(n ? (0, l.jb)(t, n) : null),
        N = r.useRef(!1),
        O = r.useRef(null),
        R = r.useRef(c);
    function v(e) {
        var t;
        return (null !== (t = O.current) && void 0 !== t ? t : document).querySelector(e);
    }
    function C(e) {
        var t;
        null === (t = v(e)) || void 0 === t || t.focus();
    }
    r.useLayoutEffect(() => {
        R.current = c;
    }, [c]);
    let L = r.useCallback(
            (e, t) => {
                R.current && (null != h ? h : C)(e, t);
            },
            [h]
        ),
        y = r.useCallback(
            (e) => {
                R.current && (null != p ? p : C)(e);
            },
            [p]
        ),
        D = r.useCallback(
            (e) => {
                if (((A.current = e), null == e)) {
                    (0, a.h)(t, null, I);
                    return;
                }
                let n = (0, l.P1)(e),
                    r = (0, l.x3)(e);
                L(n, r), (0, a.h)(t, r, I);
            },
            [t, I, L]
        ),
        b = r.useMemo(
            () =>
                (0, i.E)({
                    getFocusableElements: () => u(t, O),
                    getActiveElement() {
                        var e;
                        return null === (e = O.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement;
                    },
                    scrollToStart: d,
                    scrollToEnd: _
                }),
            [t, d, _]
        ),
        [M, P] = r.useState(!1),
        U = r.useRef(M);
    r.useLayoutEffect(() => {
        U.current = M;
    }, [M]),
        r.useLayoutEffect(() => {
            let e = O.current;
            if (null != e) {
                if (!c) return;
                return (
                    e.addEventListener('focusin', n),
                    e.addEventListener('focusout', r),
                    e.addEventListener('focus', i),
                    e.addEventListener('scroll', a, { passive: !0 }),
                    () => {
                        e.removeEventListener('focusin', n), e.removeEventListener('focusout', r), e.removeEventListener('focus', i), e.removeEventListener('scroll', a);
                    }
                );
            }
            function n() {
                P(!0);
            }
            function r(e) {
                if (!e.currentTarget.contains(e.relatedTarget))
                    P(!1),
                        requestAnimationFrame(() => {
                            let e = A.current;
                            null !== e && null == v((0, l.P1)(e)) && y((0, l.P1)(t, l.kn));
                        });
            }
            async function i() {
                let e = O.current;
                if (U.current || null == e) return;
                let n = A.current;
                if (I && null !== n) {
                    let t = (0, l.P1)(n),
                        r = v(t);
                    if (null != r) {
                        if (!0 !== N.current) return L(t, (0, l.x3)(n));
                        if (await (0, s.JJ)(e, r)) return L(t, (0, l.x3)(n));
                    }
                }
                let r = await (0, s.KG)(e, u(t, O));
                null !== r && D(r);
            }
            function a() {
                N.current = !0;
            }
        }, [c, t, I, L, p, y, D]);
    let w = r.useMemo(
            () => ({
                wrap: T,
                get from() {
                    if (!m) return;
                    let t = A.current;
                    if (null != t) {
                        var e;
                        return null !== (e = v((0, l.P1)(t))) && void 0 !== e ? e : void 0;
                    }
                    return;
                }
            }),
            [m, T]
        ),
        x = r.useCallback(async () => {
            let e = await b.getNextFocusableElement(w),
                t = null == e ? void 0 : e.getAttribute(l.ie);
            null != t ? D(t) : null == e && null != f && f();
        }, [b, w, f, D]),
        G = r.useCallback(async () => {
            let e = await b.getPreviousFocusableElement(w),
                t = null == e ? void 0 : e.getAttribute(l.ie);
            null != t ? D(t) : null == e && null != E && E();
        }, [b, w, E, D]),
        k = r.useCallback(
            (e) => {
                if (!R.current || (!m && !U.current)) return;
                let n = S === o.hy.HORIZONTAL ? o.R8.RIGHT : o.R8.DOWN,
                    r = S === o.hy.HORIZONTAL ? o.R8.LEFT : o.R8.UP;
                switch (e.key) {
                    case n:
                        e.stopPropagation(), e.preventDefault(), x();
                        return;
                    case r:
                        e.stopPropagation(), e.preventDefault(), G();
                        return;
                    case o.R8.HOME:
                        e.stopPropagation(),
                            e.preventDefault(),
                            d().then(() => {
                                var e;
                                let n = null === (e = u(t, O)[0]) || void 0 === e ? void 0 : e.getAttribute(l.ie);
                                null != n && D(n);
                            });
                        return;
                    case o.R8.END:
                        e.stopPropagation(),
                            e.preventDefault(),
                            _().then(() => {
                                var e;
                                let n = u(t, O),
                                    r = null === (e = n[n.length - 1]) || void 0 === e ? void 0 : e.getAttribute(l.ie);
                                null != r && D(r);
                            });
                        return;
                    case o.R8.SPACE:
                    case o.R8.ENTER: {
                        if ((e.key === o.R8.SPACE && g) || e.repeat) return;
                        let t = A.current;
                        if (null != t) {
                            var i;
                            let n = v((0, l.P1)(t)),
                                r = null !== (i = null == n ? void 0 : n.ownerDocument) && void 0 !== i ? i : document,
                                a = m || n === r.activeElement;
                            null != n && a && (e.preventDefault(), e.stopPropagation(), null == n || n.click());
                        }
                    }
                }
            },
            [x, G, t, S, _, d, D, m]
        ),
        B = r.useCallback(
            (e) => {
                let n = null != e ? (0, l.jb)(t, e) : null;
                (A.current = n), (0, a.h)(t, e, I);
            },
            [t, I]
        );
    return r.useMemo(
        () => ({
            id: t,
            containerProps: {
                onKeyDown: k,
                ref: O,
                tabIndex: M && I ? -1 : 0
            },
            orientation: S,
            setFocus: B,
            async focusLastVisibleItem() {
                var e;
                let n = await (0, s.jo)(null !== (e = O.current) && void 0 !== e ? e : document.body, u(t, O));
                null !== n && D(n);
            },
            async focusFirstVisibleItem() {
                var e;
                let n = await (0, s.KG)(null !== (e = O.current) && void 0 !== e ? e : document.body, u(t, O));
                null !== n && D(n);
            },
            focusPreviousItem: G,
            focusNextItem: x,
            focusedItemId() {
                let e = A.current;
                return e ? (0, l.x3)(e) : null;
            }
        }),
        [t, k, S, M, I, B, G, x, D]
    );
}
