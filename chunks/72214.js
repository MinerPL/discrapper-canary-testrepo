n.d(t, {
    s: function () {
        return h;
    }
}), n(47120);
var l = n(470079), a = n(442837), i = n(38618), s = n(51596), r = n(516373), c = n(314897), o = n(580005), u = n(987509), d = n(601565), _ = n(41837);
function h(e) {
    let {
            searchText: t,
            targetDestination: n,
            selectedDestinations: h,
            originDestination: E,
            includeMissingDMs: f = !1
        } = e, S = (0, a.e7)([c.default], () => c.default.getId()), g = l.useMemo(() => ({
            searchOptions: {
                blacklist: new Set(['user:'.concat(S)]),
                frecencyBoosters: !0,
                userFilters: null
            }
        }), [S]), {
            search: I,
            query: A,
            results: p
        } = (0, d.Z)(g), m = l.useMemo(() => function (e) {
            let {
                    query: t,
                    queryMode: n
                } = (0, s.F_)(e), l = _.M, a = null;
            return null != n && _.M.includes(n) && (l = [n], a = n), {
                query: t,
                queryMode: a,
                resultTypes: l
            };
        }(t), [t]), {queryMode: b} = m, [C, L] = l.useState(null != h ? h : []);
    l.useLayoutEffect(() => {
        let {
            query: e,
            resultTypes: t
        } = m;
        I({
            query: e,
            resultTypes: t
        }), L(null != h ? h : []);
    }, [
        I,
        m
    ]), (0, r.D)();
    let N = (0, a.e7)([o.Z], () => o.Z.getFrequentlyWithoutFetchingLatest()), T = (0, a.e7)([i.Z], () => i.Z.isConnected()), Z = '' !== A;
    return l.useMemo(() => (0, u.ZP)({
        results: p,
        hasQuery: Z,
        queryMode: b,
        targetDestination: n,
        frequentChannels: N,
        selectedDestinations: h,
        pinnedDestinations: C,
        originDestination: E,
        includeMissingDMs: f,
        isConnected: T
    }), [
        p,
        Z,
        b,
        n,
        N,
        h,
        C,
        E,
        f,
        T
    ]);
}
