n(47120);
var i = n(200651),
    r = n(192379),
    a = n(209173),
    l = n(399606),
    s = n(481060),
    o = n(699682),
    c = n(674588),
    d = n(368862),
    u = n(809547),
    h = n(125909),
    m = n(797908),
    p = n(292191),
    g = n(979007),
    f = n(854336);
let _ = {
    results: [],
    totalPages: 0
};
t.Z = function (e) {
    var t;
    let { categoryId: n, onSelectApplication: E } = e,
        [I, C] = r.useState(1),
        v = r.useCallback((e) => {
            C(e);
        }, []);
    r.useEffect(() => {
        C(1);
    }, [n]);
    let S = r.useMemo(
            () => ({
                query: g.Mm,
                page: I,
                pageSize: g.IV,
                categoryId: n
            }),
            [I, n]
        ),
        N = (0, l.e7)([u.Z], () =>
            u.Z.getFetchState({
                query: g.Mm,
                page: I,
                pageSize: g.IV,
                categoryId: n
            })
        ),
        T = (0, l.cj)([u.Z], () => {
            var e;
            return null !== (e = u.Z.getSearchResults(S)) && void 0 !== e ? e : _;
        }),
        x = null !== (t = (0, o.Z)(T)) && void 0 !== t ? t : _,
        { results: b, totalPages: A } = r.useMemo(() => (N === d.M.FETCHING ? x : T), [N, x, T]),
        Z = r.useMemo(() => (null == b ? void 0 : b.filter((e) => !(e.type !== a.s.APPLICATION))), [b]),
        y = r.useCallback((e) => {
            let { page: t, activeCategoryId: n, onSuccessCallback: i, guildId: r, fetchCounts: a } = e;
            a &&
                c.yC({
                    query: g.Mm,
                    guildId: r
                }),
                c.yC({
                    query: g.Mm,
                    guildId: r,
                    options: {
                        page: t,
                        pageSize: g.IV,
                        categoryId: n
                    },
                    onSuccessCallback: i
                });
        }, []);
    return (r.useEffect(() => {
        y({
            page: I,
            activeCategoryId: n,
            onSuccessCallback: () => {}
        });
    }, [n, y, I]),
    N === d.M.ERROR)
        ? (0, i.jsx)('div', {
              className: f.errorContainer,
              children: (0, i.jsx)(p.Z, { className: f.error })
          })
        : (0, i.jsxs)(h.Z, {
              loading: N === d.M.FETCHING,
              children: [
                  (0, i.jsx)('div', {
                      className: f.content,
                      children:
                          null == Z
                              ? void 0
                              : Z.map((e) => {
                                    if (e.type === a.s.APPLICATION) {
                                        let t = e.data;
                                        return (0, i.jsx)(
                                            m.Z,
                                            {
                                                application: t,
                                                onSelectApplication: E
                                            },
                                            t.id
                                        );
                                    }
                                    return null;
                                })
                  }),
                  (0, i.jsx)(s.Paginator, {
                      className: f.paginationInput,
                      totalCount: Math.min(A * g.IV, g.Et * g.IV),
                      pageSize: g.IV,
                      disablePaginationGap: !0,
                      hideMaxPage: !0,
                      currentPage: I,
                      onPageChange: v
                  })
              ]
          });
};
