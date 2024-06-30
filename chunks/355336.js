n.d(t, {
    $: function () {
        return c;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(803997), o = n.n(a), s = n(84735), l = n(780900), u = n(420455);
function c(e, t) {
    let n = new Map(), a = new t(e => {
            e.forEach(e => {
                var t;
                let {target: r} = e;
                null === (t = n.get(r)) || void 0 === t || t(e);
            });
        });
    return i.forwardRef(function (t, c) {
        let {
                children: d,
                className: _,
                onResize: E,
                contentClassName: f,
                onScroll: h,
                dir: p = 'ltr',
                fade: m = !1,
                customTheme: I = !1,
                style: T,
                ...g
            } = t, S = i.useRef(null), A = i.useRef(null), [N, v] = i.useState(!1), {
                scrollerRef: O,
                getScrollerState: R
            } = (0, l.Ke)(), C = (0, l.t2)(O);
        i.useImperativeHandle(c, () => ({
            getScrollerNode: () => O.current,
            isScrolling: () => null != S.current,
            getScrollerState: R,
            ...(0, l.Ue)(O, R, C)
        }), [
            O,
            R,
            C
        ]);
        let y = i.useCallback(e => {
            null == S.current ? v(!0) : clearTimeout(S.current), S.current = setTimeout(() => {
                S.current = null, v(!1);
            }, 200), null != h && h(e);
        }, [h]);
        return i.useEffect(() => () => clearTimeout(S.current), []), (0, l.zn)({
            ref: O,
            key: 'container',
            onUpdate: E,
            resizeObserver: a,
            listenerMap: n
        }), (0, l.zn)({
            ref: A,
            key: 'content',
            onUpdate: E,
            resizeObserver: a,
            listenerMap: n
        }), (0, r.jsx)('div', {
            ref: O,
            className: o()(_, {
                [u.fade]: m,
                [u.customTheme]: I,
                [e]: !0,
                [u.managedReactiveScroller]: !0,
                [u.scrolling]: N && m
            }),
            style: T,
            dir: p,
            onScroll: y,
            ...g,
            children: (0, r.jsx)(s.J, {
                containerRef: A,
                children: (0, r.jsxs)('div', {
                    ref: A,
                    className: o()(f, u.content),
                    children: [
                        d,
                        N && (0, r.jsx)('div', { className: u.pointerCover })
                    ]
                })
            })
        });
    });
}
