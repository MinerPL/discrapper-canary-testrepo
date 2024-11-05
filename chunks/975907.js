n.d(t, {
    M: function () {
        return s;
    }
}),
    n(47120);
var i = n(192379),
    r = n(288385),
    a = n(674588),
    l = n(979007);
function s() {
    let [e, t] = i.useState(''),
        [n, s] = i.useState(''),
        [o, c] = i.useState(!1),
        d = i.useCallback((e) => {
            t(e);
        }, []),
        u = i.useCallback(() => {
            t(''), s(''), c(!1);
        }, []),
        h = i.useCallback(() => {
            a.yC({
                query: e,
                options: {
                    page: 1,
                    source: r.F.APP_DIRECTORY,
                    pageSize: l.IV
                }
            }),
                c(!0),
                s(e);
        }, [e]);
    return {
        searchQuery: e,
        searchFetchedQuery: n,
        onSearchTextChange: d,
        onClearSearch: u,
        onSearchSubmit: h,
        hasSearchView: o
    };
}
