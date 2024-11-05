n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(209173),
    l = n(288385),
    s = n(442837),
    o = n(481060),
    c = n(110924),
    d = n(393903),
    u = n(674588),
    h = n(264043),
    m = n(809547),
    p = n(34674),
    g = n(125909),
    f = n(374939),
    _ = n(283293),
    E = n(797908),
    I = n(120549),
    C = n(979007),
    v = n(463051);
function S(e) {
    var t;
    let { query: n, onSelectApplication: S } = e,
        [N, T] = r.useState(void 0),
        [x, b] = r.useState(1),
        [A, Z] = r.useState(!0),
        y = r.useRef(A),
        [L, R] = r.useState(0),
        P = r.useRef(null),
        { fetchState: O, searchResults: j } = (0, s.cj)([m.Z], () => ({
            fetchState: m.Z.getFetchState({
                query: n,
                categoryId: N,
                page: x,
                pageSize: C.IV,
                source: l.F.APP_DIRECTORY
            }),
            searchResults: m.Z.getSearchResults({
                query: n,
                categoryId: N,
                page: x,
                pageSize: C.IV,
                source: l.F.APP_DIRECTORY
            })
        })),
        D = (0, s.cj)([m.Z], () => {
            let e = m.Z.getSearchResults({
                query: n,
                page: 1,
                pageSize: C.IV,
                source: l.F.APP_DIRECTORY
            });
            return null != e
                ? {
                      [p.MU]: e.totalCount,
                      ...e.countsByCategory
                  }
                : {};
        }),
        M = (0, c.Z)(j),
        w = r.useMemo(() => (O === h.M.FETCHING ? M : j), [O, M, j]);
    r.useEffect(() => {
        T(void 0), b(1);
    }, [n]);
    let k = r.useCallback(
            (e) => {
                u.yC({
                    query: n,
                    options: {
                        page: e,
                        pageSize: C.IV,
                        source: l.F.APP_DIRECTORY,
                        categoryId: N
                    }
                }),
                    b(e);
            },
            [n, N]
        ),
        U = (0, d.y)((e) => {
            var t;
            let n = null == e ? void 0 : e.getBoundingClientRect();
            if (null == n) return;
            let i = n.width;
            i < 1024 && y.current ? ((y.current = !1), Z(!1)) : i > 1024 && !y.current && ((y.current = !0), Z(!0));
            let r = null === (t = P.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
            null != r && R(r.width);
        }),
        G = r.useCallback(
            (e) => {
                b(1),
                    T(e),
                    u.yC({
                        query: n,
                        options: {
                            page: 1,
                            source: l.F.APP_DIRECTORY,
                            categoryId: e
                        }
                    });
            },
            [n]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(_.Z, {
                children: (0, i.jsxs)(f.Z, {
                    children: [
                        (0, i.jsx)(g.Z, {
                            loading: O === h.M.FETCHING,
                            children: (0, i.jsx)('div', {
                                ref: U,
                                children: (0, i.jsx)('div', {
                                    className: v.content,
                                    style: { paddingRight: A ? L + 32 : void 0 },
                                    children:
                                        null == w
                                            ? void 0
                                            : w.results.map((e) => {
                                                  if (e.type === a.s.APPLICATION) {
                                                      let t = e.data;
                                                      return (0, i.jsx)(
                                                          E.Z,
                                                          {
                                                              application: t,
                                                              onSelectApplication: S,
                                                              showCategory: !0
                                                          },
                                                          t.id
                                                      );
                                                  }
                                                  return null;
                                              })
                                })
                            })
                        }),
                        (0, i.jsx)(o.Paginator, {
                            className: v.paginationInput,
                            totalCount: Math.min((null !== (t = null == w ? void 0 : w.totalPages) && void 0 !== t ? t : 0) * C.IV, C.Et * C.IV),
                            pageSize: C.IV,
                            disablePaginationGap: !0,
                            hideMaxPage: !0,
                            currentPage: x,
                            onPageChange: k
                        })
                    ]
                })
            }),
            A &&
                (0, i.jsx)('div', {
                    className: v.sidebar,
                    ref: P,
                    children: (0, i.jsx)('div', {
                        className: v.sidebarContent,
                        children: (0, i.jsx)(I.Z, {
                            countsByCategory: D,
                            selectedCategoryId: null != N ? N : p.MU,
                            onSelectCategory: G
                        })
                    })
                })
        ]
    });
}
