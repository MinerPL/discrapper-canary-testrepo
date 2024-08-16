n.d(t, {
    s: function () {
        return _;
    }
}),
    n(47120);
var l = n(470079),
    a = n(442837),
    s = n(38618),
    i = n(51596),
    r = n(516373),
    o = n(314897),
    c = n(580005),
    u = n(987509),
    d = n(601565),
    h = n(41837);
function _(e) {
    let { searchText: t, targetDestination: n, selectedDestinations: _, originDestination: f, includeMissingDMs: E = !1 } = e,
        g = (0, a.e7)([o.default], () => o.default.getId()),
        m = l.useMemo(
            () => ({
                searchOptions: {
                    blacklist: new Set(['user:'.concat(g)]),
                    frecencyBoosters: !0,
                    userFilters: null
                }
            }),
            [g]
        ),
        { search: S, query: I, results: A } = (0, d.Z)(m),
        p = l.useMemo(
            () =>
                (function (e) {
                    let { query: t, queryMode: n } = (0, i.F_)(e),
                        l = h.M,
                        a = null;
                    return (
                        null != n && h.M.includes(n) && ((l = [n]), (a = n)),
                        {
                            query: t,
                            queryMode: a,
                            resultTypes: l
                        }
                    );
                })(t),
            [t]
        ),
        { queryMode: C } = p,
        [N, L] = l.useState(null != _ ? _ : []);
    l.useLayoutEffect(() => {
        let { query: e, resultTypes: t } = p;
        S({
            query: e,
            resultTypes: t
        }),
            L(null != _ ? _ : []);
    }, [S, p]),
        (0, r.D)();
    let b = (0, a.e7)([c.Z], () => c.Z.getFrequentlyWithoutFetchingLatest()),
        v = (0, a.e7)([s.Z], () => s.Z.isConnected()),
        T = '' !== I;
    return l.useMemo(
        () =>
            (0, u.ZP)({
                results: A,
                hasQuery: T,
                queryMode: C,
                targetDestination: n,
                frequentChannels: b,
                selectedDestinations: _,
                pinnedDestinations: N,
                originDestination: f,
                includeMissingDMs: E,
                isConnected: v
            }),
        [A, T, C, n, b, _, N, f, E, v]
    );
}
