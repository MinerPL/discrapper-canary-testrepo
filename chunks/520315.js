t.d(n, {
    Z: function () {
        return o;
    }
}),
    t(47120);
var i = t(470079),
    a = t(442837),
    l = t(607070);
function o(e) {
    let { key: n, isExpanded: t, durationMs: o = 100, minHeightOverride: r, maxHeightOverride: s, maxAnimationHeight: c } = e,
        d = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        [u, m] = i.useState(null),
        p = i.useCallback(() => {}, []),
        _ = i.useRef(),
        C = i.useRef(),
        f = i.useRef(n),
        h = i.useRef(o);
    h.current = o;
    let A = i.useRef(r);
    A.current = r;
    let E = i.useRef(s);
    E.current = s;
    let N = i.useRef(c);
    N.current = c;
    let [v, x] = i.useState(!1),
        I = i.useCallback(() => x(!1), []);
    return (
        i.useLayoutEffect(() => {
            void 0 !== n && ((_.current = void 0), (C.current = void 0), x(!1));
        }, [n]),
        i.useLayoutEffect(() => {
            var e, i, a;
            if (null == u) return;
            let { height: l } = u.getBoundingClientRect();
            !t && (null == _.current || l < _.current) && (_.current = l), t && (null == C.current || l > C.current) && (C.current = l);
            let o = null !== (e = A.current) && void 0 !== e ? e : _.current,
                r = null !== (i = E.current) && void 0 !== i ? i : C.current,
                s = f.current !== n;
            if (((f.current = n), null == o || null == r || s)) return;
            let c = Math.min(null !== (a = N.current) && void 0 !== a ? a : r, r),
                d = t ? o : c,
                m = t ? c : o;
            if (!(d !== m)) return;
            x(!0), (u.style.height = ''.concat(d, 'px')), (u.style.transition = '');
            let p = null;
            return (
                (p = requestAnimationFrame(() => {
                    (p = null), (u.style.height = ''.concat(m, 'px')), (u.style.transition = 'height '.concat(h.current, 'ms ease-in-out'));
                })),
                () => (null != p ? cancelAnimationFrame(p) : void 0)
            );
        }, [n, u, t]),
        i.useLayoutEffect(() => {
            if (null != u && !v) (u.style.height = ''), (u.style.transition = '');
        }, [n, u, v]),
        {
            ref: d ? p : m,
            isTransitioning: v,
            onTransitionEnd: I
        }
    );
}
