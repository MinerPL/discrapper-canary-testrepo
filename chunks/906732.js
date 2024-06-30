n.d(t, {
    Gt: function () {
        return c;
    },
    ZP: function () {
        return _;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(348327), o = n.n(a), s = n(392711), l = n.n(s);
let u = i.createContext([]);
function c(e) {
    let {
        children: t,
        value: n
    } = e;
    return (0, r.jsx)(u.Provider, {
        value: n,
        children: t
    });
}
function d(e, t) {
    return 0 === t.length ? e : [
        ...e,
        ...l().flatten(t)
    ];
}
function _() {
    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
    let [a, s] = i.useState(n), l = i.useContext(u), c = i.useMemo(() => d(l, a), [
            a,
            l
        ]), _ = i.useMemo(() => d(l, a.slice(0, a.length - 1)), [
            a,
            l
        ]);
    return i.useEffect(() => {
        !o()(n, a) && s(n);
    }, [n]), {
        analyticsLocations: c,
        sourceAnalyticsLocations: _,
        newestAnalyticsLocation: null !== (e = c[c.length - 1]) && void 0 !== e ? e : null
    };
}
