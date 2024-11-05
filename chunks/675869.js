n.r(t),
    n.d(t, {
        default: function () {
            return E;
        }
    }),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(200651),
    a = n(192379),
    l = n(392711),
    r = n.n(l),
    c = n(991637),
    o = n.n(c),
    s = n(512969),
    d = n(91192),
    u = n(209173),
    g = n(375051),
    m = n(399606),
    f = n(481060),
    p = n(209613),
    _ = n(626135),
    h = n(674588),
    x = n(463571),
    C = n(894653),
    b = n(809547),
    v = n(738130),
    j = n(34674),
    y = n(170771),
    I = n(33146),
    N = n(125909),
    S = n(190733),
    A = n(101741),
    T = n(132871),
    P = n(147890),
    R = n(166996),
    L = n(981631),
    Z = n(609368),
    k = n(878428);
function E() {
    var e;
    let t;
    let n = (0, T.useApplicationDirectoryHistory)((e) => e.guildId),
        l = (0, m.e7)([C.Z], () => C.Z.getCategories()),
        c = (0, s.TH)(),
        {
            queryParam: o,
            pageParam: d,
            categoryIdParam: f
        } = a.useMemo(() => {
            let e = new URLSearchParams(c.search);
            return {
                queryParam: e.get('q'),
                pageParam: e.get('page'),
                categoryIdParam: e.get('category_id')
            };
        }, []),
        [p, x] = a.useState(null != d ? Number(d) : 1),
        [y, E] = a.useState(null != o ? o : ''),
        [w, D] = a.useState(null !== (e = Number(f)) && void 0 !== e ? e : j.MU),
        O = a.useMemo(() => (null == l ? void 0 : l.find((e) => e.id === w)), [l, w]),
        B = a.useCallback((e) => {
            D(e.id), x(1);
        }, []),
        U = a.useCallback((e) => {
            E(e), x(1), 0 === e.length && D(j.MU);
        }, []),
        H = a.useCallback(
            (e) => {
                var t, n;
                let { query: i, categoryId: a, page: l } = e,
                    r = new URLSearchParams(c.search);
                '' === i ? r.delete('q') : r.set('q', i), a === j.MU ? r.delete('category_id') : r.set('category_id', null !== (t = null == a ? void 0 : a.toString()) && void 0 !== t ? t : ''), 1 === l ? r.delete('page') : r.set('page', null !== (n = null == l ? void 0 : l.toString()) && void 0 !== n ? n : ''), (0, P.replaceAppDirectoryURLWith)(''.concat(L.Z5c.APPLICATION_DIRECTORY_SEARCH, '?').concat(r.toString()));
            },
            [c.search]
        ),
        G = a.useMemo(() => r().debounce(H, 400), [H]);
    a.useEffect(() => {
        G({
            query: y,
            categoryId: w,
            page: p
        });
    }, [G, y, w, p]);
    let z = (0, m.e7)([b.Z], () =>
            b.Z.getFetchState({
                query: y,
                guildId: n,
                page: p,
                pageSize: 7,
                categoryId: w
            })
        ),
        Y = a.useRef({
            query: '',
            guildId: void 0,
            page: void 0,
            pageSize: void 0,
            categoryId: void 0
        }),
        F = (0, m.cj)([b.Z], () => {
            let e = b.Z.getSearchResults({
                query: y,
                guildId: n
            });
            return null != e
                ? {
                      [j.MU]: e.totalCount,
                      ...e.countsByCategory
                  }
                : {};
        }),
        {
            pageResults: V,
            pageCount: W,
            searchResultsType: q,
            loadId: K
        } = (0, m.cj)([b.Z], () => {
            var e, t;
            let i = {
                    query: y,
                    guildId: n,
                    page: p,
                    pageSize: 7,
                    categoryId: w
                },
                a = b.Z.getSearchResults(i);
            return (
                null == a ? (a = b.Z.getSearchResults(Y.current)) : (Y.current = i),
                {
                    pageResults: null == a ? void 0 : a.results,
                    pageCount: null !== (e = null == a ? void 0 : a.totalPages) && void 0 !== e ? e : 0,
                    searchResultsType: null !== (t = null == a ? void 0 : a.type) && void 0 !== t ? t : g.c.SEARCH_RESULTS,
                    loadId: null == a ? void 0 : a.loadId
                }
            );
        }),
        J = a.useMemo(() => (null == V ? void 0 : V.filter((e) => !(q === g.c.SEARCH_RESULTS && e.type !== u.s.APPLICATION))), [V, q]),
        X = a.useRef(null),
        Q = (0, T.getCurrentView)(),
        $ = a.useCallback(
            (e) => {
                _.default.track(L.rMx.APP_DIRECTORY_SEARCHED, {
                    search_term: y,
                    num_results: e,
                    current_page: null == Q ? void 0 : Q.type,
                    result_page: p,
                    category: null == O ? void 0 : O.name,
                    category_id: null == O ? void 0 : O.id,
                    guild_id: n
                });
            },
            [null == O ? void 0 : O.id, null == O ? void 0 : O.name, p, n, y, Q]
        ),
        ee = a.useCallback((e) => {
            let { query: t, page: n, activeCategoryId: i, onSuccessCallback: a, guildId: l, fetchCounts: r } = e;
            r &&
                h.yC({
                    query: t,
                    guildId: l
                }),
                h.yC({
                    query: t,
                    guildId: l,
                    options: {
                        page: n,
                        pageSize: 7,
                        categoryId: i
                    },
                    onSuccessCallback: a
                }),
                (X.current = t);
        }, []),
        [et] = a.useState(() =>
            r().debounce(ee, 400, {
                leading: !1,
                trailing: !0
            })
        ),
        en = a.useCallback(
            (e) => {
                x(e);
            },
            [x]
        ),
        ei = a.useCallback(
            (e) => {
                let { application: t, mutualGuilds: i } = e;
                _.default.track(L.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: T.ApplicationDirectoryViews.SEARCH,
                    application_id: t.id,
                    load_id: K,
                    search_term: y,
                    guild_id: n,
                    shown_mutual_guilds_count: i.length
                }),
                    (0, P.goToApplication)({ applicationId: t.id });
            },
            [K, y, n]
        );
    a.useEffect(() => {
        ee({
            query: y,
            page: p,
            activeCategoryId: w,
            guildId: n,
            fetchCounts: y !== X.current,
            onSuccessCallback: $
        });
    }, [ee, O, n, p]),
        a.useEffect(() => {
            et({
                query: y,
                page: p,
                activeCategoryId: w,
                guildId: n,
                fetchCounts: y !== X.current,
                onSuccessCallback: $
            });
        }, [y, et]);
    let ea = a.useMemo(() => Object.keys(F).length > 0, [F]);
    return (
        (null != J && 0 === W) || z === b.M.ERROR
            ? (t = (0, i.jsx)(I.Z, {
                  category: O,
                  onViewAll: () => {
                      x(1), D(j.MU);
                  }
              }))
            : null != J && J.length > 0 && q === g.c.SEARCH_RESULTS
              ? (t = (0, i.jsx)(M, {
                    items: J,
                    pageCount: W,
                    currentPage: p,
                    showPrimaryCategory: w === j.MU,
                    onItemClick: ei,
                    onChangePage: en
                }))
              : null != J &&
                J.length > 0 &&
                q === g.c.MUSIC &&
                (t = (0, i.jsx)(A.Z, {
                    guildId: n,
                    results: J
                })),
        (0, i.jsx)(v.Z, {
            children: (0, i.jsxs)('div', {
                className: Z.page,
                children: [
                    (0, i.jsxs)('div', {
                        className: Z.sidebar,
                        children: [
                            (0, i.jsx)('img', {
                                src: k,
                                alt: '',
                                className: Z.sidebarImage
                            }),
                            (0, i.jsx)(R.Z, {
                                className: Z.categoryList,
                                countsByCategory: ea ? F : void 0,
                                currentCategoryId: w,
                                onView: B
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: Z.content,
                        children: [
                            (0, i.jsx)(S.Z, {
                                query: y,
                                onChange: U
                            }),
                            (0, i.jsx)(N.Z, {
                                loading: z === b.M.FETCHING,
                                children: (0, i.jsx)('div', {
                                    className: Z.contentContainer,
                                    children: t
                                })
                            })
                        ]
                    })
                ]
            })
        })
    );
}
function M(e) {
    let { items: t, currentPage: n, pageCount: l, showPrimaryCategory: r, onItemClick: c, onChangePage: o } = e,
        s = (0, p.Z)('application-directory-search');
    return (0, i.jsxs)(a.Fragment, {
        children: [
            (0, i.jsx)(d.bG, {
                navigator: s,
                children: (0, i.jsx)(d.SJ, {
                    children: (e) => {
                        let { ref: n, ...a } = e;
                        return (0, i.jsx)('ul', {
                            ref: n,
                            ...a,
                            children: t.map((e) => {
                                if (e.type === u.s.APPLICATION) {
                                    var t;
                                    let n;
                                    let a = e.data;
                                    return (
                                        (null === (t = a.directory_entry) || void 0 === t ? void 0 : t.short_description) != null && a.directory_entry.short_description.length > 0 ? (n = a.directory_entry.short_description) : null != a.description && a.description.length > 0 && (n = a.description),
                                        (0, i.jsx)(
                                            x.Z,
                                            {
                                                href: L.Z5c.APPLICATION_DIRECTORY_PROFILE(a.id),
                                                children: (0, i.jsx)(y.Z, {
                                                    className: Z.listing,
                                                    childrenClassName: Z.listingDetails,
                                                    application: a,
                                                    onView: (e) => {
                                                        let { mutualGuilds: t } = e;
                                                        return c({
                                                            application: a,
                                                            mutualGuilds: t
                                                        });
                                                    },
                                                    showMutualGuilds: !0,
                                                    showPrimaryCategory: r,
                                                    source: 'search',
                                                    children:
                                                        null != n
                                                            ? (0, i.jsx)(f.Text, {
                                                                  className: Z.listingDescription,
                                                                  variant: 'text-md/normal',
                                                                  lineClamp: 3,
                                                                  children: n
                                                              })
                                                            : null
                                                })
                                            },
                                            a.id
                                        )
                                    );
                                }
                            })
                        });
                    }
                })
            }),
            (0, i.jsx)(f.Paginator, {
                currentPage: n,
                totalCount: Math.min(7 * l, 700),
                pageSize: 7,
                onPageChange: o,
                disablePaginationGap: !0
            })
        ]
    });
}
o().shim();
