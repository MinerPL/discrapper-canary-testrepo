n.d(t, {
    H: function () {
        return m;
    },
    f: function () {
        return h;
    }
});
var i = n(470079),
    a = n(442837),
    s = n(296386),
    r = n(900849),
    l = n(762692),
    o = n(356164),
    c = n(164991),
    d = n(726115),
    u = n(859921),
    _ = n(128449),
    E = n(731455);
function h(e) {
    let { loadId: t } = e,
        n = (0, c.NL)(),
        s = (0, c.lZ)(),
        r = (0, c.Dm)(),
        l = i.useMemo(
            () => ({
                categoryId: s,
                query: n,
                languageCode: r
            }),
            [s, r, n]
        ),
        u = (0, a.e7)([o.Z], () => {
            var e;
            return null !== (e = o.Z.getGuildIds(l)) && void 0 !== e ? e : _.q5;
        }),
        E = (0, a.e7)([o.Z], () => {
            var e;
            return null !== (e = o.Z.getIsFetching(l)) && void 0 !== e && e;
        }),
        h = (0, a.e7)([o.Z], () => {
            var e;
            return null === (e = o.Z.getIsBlocked(n)) || void 0 === e || e;
        }),
        m = (0, c.$G)(),
        I = m !== n,
        p = i.useCallback(() => {
            let e = (0, c.Zq)(),
                n = (0, c.lx)(),
                i = o.Z.getGuildIds(l),
                a = o.Z.getTotal(l);
            if (null == i || null == a) return;
            let s = o.Z.getIsFetching(l),
                r = o.Z.getIsInitialFetchComplete(l);
            if (s || !r || i.length >= a) return;
            let u = (0, c.a7)();
            (0, d.CD)({
                loadId: t,
                categoryId: n,
                offset: i.length,
                query: e,
                languageCode: u
            });
        }, [t, l]);
    return i.useMemo(
        () => ({
            guildIds: u,
            loading: !h && (I || E),
            searchResultsQuery: m,
            loadMore: p,
            searchCategoryId: s,
            isBlockedSearchQuery: h
        }),
        [u, h, I, E, m, p, s]
    );
}
function m(e) {
    let { loadId: t } = e,
        n = (0, u.QQ)(),
        a = (0, c.A3)();
    i.useEffect(() => {
        l.Z.createAlgoliaIndex(), (0, s.le)();
    }, []);
    let o = i.useCallback((e) => {
            (0, c.LD)({ query: e });
        }, []),
        _ = i.useCallback(() => {
            r.IZ(t),
                l.Z.clearAlgoliaSearchResults(),
                l.Z.resetSearchLayout(),
                (0, c.LD)({
                    query: '',
                    fetchedQuery: '',
                    resultsQuery: '',
                    categoryId: E.Hk,
                    resultsInitialCategoryId: null,
                    scrollPosition: null
                }),
                (0, u.jY)({ isSearchVisible: !1 });
        }, [t]);
    return {
        searchQuery: a,
        onSearchTextChange: o,
        onClearSearch: _,
        onSearchSubmit: i.useCallback(() => {
            let e = (0, c.uP)(),
                n = (0, c.Zq)();
            if ('' === e.trim() || e === n) return;
            l.Z.clearAlgoliaSearchResults();
            let i = (0, c.a7)(),
                a = (0, c.lx)();
            (0, c.LD)({ resultsInitialCategoryId: a }),
                (0, u.jY)({ isSearchVisible: !0 }),
                (0, d.NL)({
                    loadId: t,
                    categoryId: a,
                    query: e,
                    languageCode: i
                });
        }, [t]),
        isSearchVisible: n
    };
}
