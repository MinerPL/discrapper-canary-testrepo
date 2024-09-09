n.d(t, {
    B: function () {
        return s;
    }
}),
    n(47120);
var a = n(470079),
    r = n(215023);
let s = (e, t) => {
    let [n, s] = a.useState(r.f7.HIDDEN),
        [o, i] = a.useState(r.f7.HIDDEN);
    a.useEffect(() => {
        s(e ? r.f7.VISIBLE : r.f7.HIDDEN), i(e ? r.f7.HIDDEN : r.f7.VISIBLE);
    }, [e]);
    let l = (e) => new Promise((t) => setTimeout(t, e)),
        c = a.useCallback(
            async (e) => {
                e && (s(r.f7.OUT), await l(1.1 * r.lb)), e && i(r.f7.IN), s(r.f7.HIDDEN), null != t.current && t.current.scrollTo({ to: 0 }), i(r.f7.VISIBLE);
            },
            [t]
        );
    return {
        feedState: n,
        catalogState: o,
        transitionToCatalog: c,
        transitionToFeed: a.useCallback(() => {
            null != t.current && t.current.scrollTo({ to: 0 }), i(r.f7.HIDDEN), s(r.f7.VISIBLE);
        }, [t])
    };
};
