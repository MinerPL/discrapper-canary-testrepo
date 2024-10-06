n.d(t, {
    y: function () {
        return r;
    }
}),
    n(47120);
var r,
    i,
    a,
    s,
    o = n(470079),
    l = n(392711);
function u(e) {
    return 2 === e || 3 === e ? 1 : 0;
}
((a = r || (r = {}))[(a.VERTICAL_TOP = 0)] = 'VERTICAL_TOP'), (a[(a.VERTICAL_BOTTOM = 1)] = 'VERTICAL_BOTTOM'), (a[(a.HORIZONTAL_LEFT = 2)] = 'HORIZONTAL_LEFT'), (a[(a.HORIZONTAL_RIGHT = 3)] = 'HORIZONTAL_RIGHT'), ((s = i || (i = {}))[(s.VERTICAL = 0)] = 'VERTICAL'), (s[(s.HORIZONTAL = 1)] = 'HORIZONTAL');
t.Z = (e) => {
    let { initialElementDimension: t, resizableDomNodeRef: n, maxDimension: r, minDimension: i, onElementResize: a, onElementResizeStart: s, onElementResizeEnd: c, throttleDuration: d = 300, orientation: _, usePointerEvents: E = !1, getClampedValue: f = l.clamp } = e,
        [h, p] = o.useState(!1),
        I = o.useRef(0),
        m = o.useRef(!1),
        T = o.useRef(null == t ? 0 : t);
    return (
        o.useLayoutEffect(() => {
            if (!h || null == n.current) return;
            function e(e) {
                let t = 1 === u(_) ? e.screenX : e.screenY,
                    n = 0 === _ || 2 === _,
                    r = (t - I.current) * (n ? -1 : 1);
                return T.current + r;
            }
            function t(e) {
                return f(e, null != i ? i : 0, null != r ? r : e);
            }
            let o = (0, l.throttle)(a, d),
                S = (r) => {
                    if (null == n.current) return null;
                    let i = e(r),
                        a = t(i),
                        l = 1 === u(_) ? 'width' : 'height';
                    (n.current.style[l] = ''.concat(a, 'px')), !m.current && ((m.current = !0), null == s || s(a)), o(a, i);
                },
                g = (n) => {
                    p(!1);
                    let r = e(n),
                        i = t(r);
                    a(i, r), null == c || c(i), (m.current = !1);
                },
                A = E ? 'pointerup' : 'mouseup',
                N = E ? 'pointermove' : 'mousemove',
                O = n.current.ownerDocument;
            return (
                O.addEventListener(A, g),
                O.addEventListener(N, S),
                () => {
                    O.removeEventListener(A, g), O.removeEventListener(N, S), o.cancel();
                }
            );
        }, [h, a, i, r, _, n, d, c, E, f, s]),
        o.useCallback(
            (e) => {
                let t = 1 === u(_);
                null != n.current && (T.current = t ? n.current.offsetWidth : n.current.offsetHeight), (I.current = t ? e.screenX : e.screenY), p(!0);
            },
            [_, n]
        )
    );
};
