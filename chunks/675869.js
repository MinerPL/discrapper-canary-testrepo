n.r(t),
    n.d(t, {
        default: function () {
            return D;
        }
    }),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var a = n(735250),
    i = n(470079),
    l = n(392711),
    r = n.n(l),
    s = n(991637),
    c = n.n(s),
    o = n(266067),
    d = n(91192),
    u = n(209173),
    _ = n(375051),
    g = n(399606),
    m = n(481060),
    f = n(209613),
    C = n(626135),
    p = n(674588),
    h = n(463571),
    x = n(894653),
    I = n(809547),
    R = n(738130),
    T = n(34674),
    b = n(465082),
    A = n(33146),
    v = n(125909),
    E = n(190733),
    P = n(101741),
    N = n(132871),
    S = n(147890),
    j = n(166996),
    y = n(981631),
    O = n(61117),
    M = n(878428);
function D() {
    var e;
    let t;
    let n = (0, N.useApplicationDirectoryHistory)((e) => e.guildId),
        l = (0, g.e7)([x.Z], () => x.Z.getCategories()),
        s = (0, o.TH)(),
        {
            queryParam: c,
            pageParam: d,
            categoryIdParam: m
        } = i.useMemo(() => {
            let e = new URLSearchParams(s.search);
            return {
                queryParam: e.get('q'),
                pageParam: e.get('page'),
                categoryIdParam: e.get('category_id')
            };
        }, []),
        [f, h] = i.useState(null != d ? Number(d) : 1),
        [b, D] = i.useState(null != c ? c : ''),
        [L, Y] = i.useState(null !== (e = Number(m)) && void 0 !== e ? e : T.MU),
        k = i.useMemo(() => (null == l ? void 0 : l.find((e) => e.id === L)), [l, L]),
        H = i.useCallback((e) => {
            Y(e.id), h(1);
        }, []),
        U = i.useCallback((e) => {
            D(e), h(1), 0 === e.length && Y(T.MU);
        }, []),
        B = i.useCallback(
            (e) => {
                var t, n;
                let { query: a, categoryId: i, page: l } = e,
                    r = new URLSearchParams(s.search);
                '' === a ? r.delete('q') : r.set('q', a), i === T.MU ? r.delete('category_id') : r.set('category_id', null !== (t = null == i ? void 0 : i.toString()) && void 0 !== t ? t : ''), 1 === l ? r.delete('page') : r.set('page', null !== (n = null == l ? void 0 : l.toString()) && void 0 !== n ? n : ''), (0, S.replaceAppDirectoryURLWith)(''.concat(y.Z5c.APPLICATION_DIRECTORY_SEARCH, '?').concat(r.toString()));
            },
            [s.search]
        ),
        w = i.useMemo(() => r().debounce(B, 400), [B]);
    i.useEffect(() => {
        w({
            query: b,
            categoryId: L,
            page: f
        });
    }, [w, b, L, f]);
    let G = (0, g.e7)([I.Z], () =>
            I.Z.getFetchState({
                query: b,
                guildId: n,
                page: f,
                categoryId: L
            })
        ),
        F = i.useRef({
            query: '',
            guildId: void 0,
            page: void 0,
            categoryId: void 0
        }),
        V = (0, g.cj)([I.Z], () => {
            let e = I.Z.getSearchResults({
                query: b,
                guildId: n
            });
            return null != e
                ? {
                      [T.MU]: e.totalCount,
                      ...e.countsByCategory
                  }
                : {};
        }),
        {
            pageResults: z,
            pageCount: W,
            searchResultsType: q,
            loadId: K
        } = (0, g.cj)([I.Z], () => {
            var e, t;
            let a = {
                    query: b,
                    guildId: n,
                    page: f,
                    categoryId: L
                },
                i = I.Z.getSearchResults(a);
            return (
                null == i ? (i = I.Z.getSearchResults(F.current)) : (F.current = a),
                {
                    pageResults: null == i ? void 0 : i.results,
                    pageCount: null !== (e = null == i ? void 0 : i.totalPages) && void 0 !== e ? e : 0,
                    searchResultsType: null !== (t = null == i ? void 0 : i.type) && void 0 !== t ? t : _.c.SEARCH_RESULTS,
                    loadId: null == i ? void 0 : i.loadId
                }
            );
        }),
        J = i.useMemo(() => (null == z ? void 0 : z.filter((e) => !(q === _.c.SEARCH_RESULTS && e.type !== u.s.APPLICATION))), [z, q]),
        Q = i.useRef(null),
        X = (0, N.getCurrentView)(),
        $ = i.useCallback(
            (e) => {
                C.default.track(y.rMx.APP_DIRECTORY_SEARCHED, {
                    search_term: b,
                    num_results: e,
                    current_page: null == X ? void 0 : X.type,
                    result_page: f,
                    category: null == k ? void 0 : k.name,
                    category_id: null == k ? void 0 : k.id,
                    guild_id: n
                });
            },
            [null == k ? void 0 : k.id, null == k ? void 0 : k.name, f, n, b, X]
        ),
        ee = i.useCallback((e) => {
            let { query: t, page: n, activeCategoryId: a, onSuccessCallback: i, guildId: l, fetchCounts: r } = e;
            r &&
                p.yC({
                    query: t,
                    guildId: l
                }),
                p.yC({
                    query: t,
                    guildId: l,
                    options: {
                        page: n,
                        categoryId: a
                    },
                    onSuccessCallback: i
                }),
                (Q.current = t);
        }, []),
        [et] = i.useState(() =>
            r().debounce(ee, 400, {
                leading: !1,
                trailing: !0
            })
        ),
        en = i.useCallback(
            (e) => {
                h(e);
            },
            [h]
        ),
        ea = i.useCallback(
            (e) => {
                let { application: t, mutualGuilds: a } = e;
                C.default.track(y.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: N.ApplicationDirectoryViews.SEARCH,
                    application_id: t.id,
                    load_id: K,
                    search_term: b,
                    guild_id: n,
                    shown_mutual_guilds_count: a.length
                }),
                    (0, S.goToApplication)({ applicationId: t.id });
            },
            [K, b, n]
        );
    i.useEffect(() => {
        ee({
            query: b,
            page: f,
            activeCategoryId: L,
            guildId: n,
            fetchCounts: b !== Q.current,
            onSuccessCallback: $
        });
    }, [ee, k, n, f]),
        i.useEffect(() => {
            et({
                query: b,
                page: f,
                activeCategoryId: L,
                guildId: n,
                fetchCounts: b !== Q.current,
                onSuccessCallback: $
            });
        }, [b, et]);
    let ei = i.useMemo(() => Object.keys(V).length > 0, [V]);
    return (
        (null != J && 0 === W) || G === I.M.ERROR
            ? (t = (0, a.jsx)(A.Z, {
                  category: k,
                  onViewAll: () => {
                      h(1), Y(T.MU);
                  }
              }))
            : null != J && J.length > 0 && q === _.c.SEARCH_RESULTS
              ? (t = (0, a.jsx)(Z, {
                    items: J,
                    pageCount: W,
                    currentPage: f,
                    showPrimaryCategory: L === T.MU,
                    onItemClick: ea,
                    onChangePage: en
                }))
              : null != J &&
                J.length > 0 &&
                q === _.c.MUSIC &&
                (t = (0, a.jsx)(P.Z, {
                    guildId: n,
                    results: J
                })),
        (0, a.jsx)(R.Z, {
            children: (0, a.jsxs)('div', {
                className: O.page,
                children: [
                    (0, a.jsxs)('div', {
                        className: O.sidebar,
                        children: [
                            (0, a.jsx)('img', {
                                src: M,
                                alt: '',
                                className: O.sidebarImage
                            }),
                            (0, a.jsx)(j.Z, {
                                className: O.categoryList,
                                countsByCategory: ei ? V : void 0,
                                currentCategoryId: L,
                                onView: H
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: O.content,
                        children: [
                            (0, a.jsx)(E.Z, {
                                query: b,
                                onChange: U
                            }),
                            (0, a.jsx)(v.Z, {
                                loading: G === I.M.FETCHING,
                                children: (0, a.jsx)('div', {
                                    className: O.contentContainer,
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
function Z(e) {
    let { items: t, currentPage: n, pageCount: l, showPrimaryCategory: r, onItemClick: s, onChangePage: c } = e,
        o = (0, f.Z)('application-directory-search');
    return (0, a.jsxs)(i.Fragment, {
        children: [
            (0, a.jsx)(d.bG, {
                navigator: o,
                children: (0, a.jsx)(d.SJ, {
                    children: (e) => {
                        let { ref: n, ...i } = e;
                        return (0, a.jsx)('ul', {
                            ref: n,
                            ...i,
                            children: t.map((e) => {
                                if (e.type === u.s.APPLICATION) {
                                    var t;
                                    let n;
                                    let i = e.data;
                                    return (
                                        (null === (t = i.directory_entry) || void 0 === t ? void 0 : t.short_description) != null && i.directory_entry.short_description.length > 0 ? (n = i.directory_entry.short_description) : null != i.description && i.description.length > 0 && (n = i.description),
                                        (0, a.jsx)(
                                            h.Z,
                                            {
                                                href: y.Z5c.APPLICATION_DIRECTORY_PROFILE(i.id),
                                                children: (0, a.jsx)(b.Z, {
                                                    className: O.listing,
                                                    childrenClassName: O.listingDetails,
                                                    application: i,
                                                    onView: (e) => {
                                                        let { mutualGuilds: t } = e;
                                                        return s({
                                                            application: i,
                                                            mutualGuilds: t
                                                        });
                                                    },
                                                    showMutualGuilds: !0,
                                                    showPrimaryCategory: r,
                                                    source: 'search',
                                                    children:
                                                        null != n
                                                            ? (0, a.jsx)(m.Text, {
                                                                  className: O.listingDescription,
                                                                  variant: 'text-md/normal',
                                                                  lineClamp: 3,
                                                                  children: n
                                                              })
                                                            : null
                                                })
                                            },
                                            i.id
                                        )
                                    );
                                }
                            })
                        });
                    }
                })
            }),
            (0, a.jsx)(m.Paginator, {
                currentPage: n,
                totalCount: Math.min(7 * l, 700),
                pageSize: 7,
                onPageChange: c,
                disablePaginationGap: !0
            })
        ]
    });
}
c().shim();
