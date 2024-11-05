n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(47120),
    n(411104);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(392711),
    o = n.n(s),
    c = n(481060),
    d = n(393903),
    u = n(117496),
    h = n(229765),
    m = n(626135),
    p = n(823379),
    g = n(900849),
    f = n(356164),
    _ = n(164991),
    E = n(28494),
    I = n(746728),
    C = n(140700),
    v = n(665807),
    S = n(188493),
    N = n(294330),
    T = n(981631),
    x = n(179596);
let b = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 202
    }),
    A = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 32
    }),
    Z = {
        page: T.ZY5.GUILD_DISCOVERY,
        object: T.qAy.CARD,
        section: T.jXE.DISCOVER_SEARCH
    },
    y = o().throttle(g.c6, 1000, {
        leading: !1,
        trailing: !0
    });
function L(e) {
    let { loadId: t, onGuildCardSeen: n, onGuildCardClick: a } = e,
        { guildIds: o, loading: g, searchResultsQuery: T, loadMore: L, searchCategoryId: R, isBlockedSearchQuery: P } = (0, E.f)({ loadId: t }),
        O = 0 === o.length && !g,
        j = r.useContext(m.AnalyticsContext),
        [D, M] = r.useState((0, u.P)()),
        [w, k] = r.useState(!0),
        U = r.useRef(w),
        [G, B] = r.useState(3),
        H = r.useRef(G),
        V = r.useRef(null),
        F = r.useCallback(
            (e) => {
                var t;
                if (P) return;
                let n = null === (t = V.current) || void 0 === t ? void 0 : t.getScrollerState();
                null != n && null != e && n.scrollHeight < e.height && L();
            },
            [P, L]
        ),
        z = (0, d.y)((e) => {
            let t = null == e ? void 0 : e.getBoundingClientRect();
            if (null == t) return;
            let n = t.width;
            n < 1024 && U.current ? ((U.current = !1), k(!1)) : n > 1024 && !U.current && ((U.current = !0), k(!0));
            let i = 1;
            for (n -= w ? 450 : 0, n -= 280; n > 0; ) (n -= 264), (i += 1);
            i !== H.current && ((H.current = i), B(i)), F(t);
        });
    r.useLayoutEffect(() => {
        var e;
        F(null === (e = z.current) || void 0 === e ? void 0 : e.getBoundingClientRect());
    }, [z, o, F]),
        r.useEffect(() => {
            M((0, u.P)());
        }, [T]),
        r.useEffect(() => {
            y({
                loadId: t,
                searchId: D,
                query: T,
                guildResults: o.map(f.Z.getGuild).filter(p.lm),
                analyticsContext: j,
                categoryId: R
            });
        }, [j, o, t, R, D, T]);
    let Y = r.useCallback((e) => n(e, R), [n, R]),
        W = r.useMemo(() => (g && !P ? [o.length, 0] : [o.length]), [o.length, P, g]),
        K = r.useCallback(
            (e, n, r) => {
                switch (e) {
                    case 0:
                        return (0, i.jsxs)(
                            'div',
                            {
                                style: {
                                    paddingLeft: n.left,
                                    width: n.width - 16
                                },
                                className: l()({ [x.heading]: !w || O }),
                                children: [
                                    !w &&
                                        (0, i.jsxs)('div', {
                                            className: x.headingFilters,
                                            children: [(0, i.jsx)(C.Z, { loadId: t }), (0, i.jsx)(S.Z, { loadId: t })]
                                        }),
                                    (O || P) && (0, i.jsx)(v.Z, { loadId: t })
                                ]
                            },
                            r
                        );
                    case 1:
                        return (0, i.jsx)(c.Spinner, { className: l()(x.spinner, { [x.spinnerWithSidebar]: w }) }, r);
                }
            },
            [P, O, w, t]
        ),
        q = r.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = w ? 16 : 50;
                        return O ? t + 448 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error('[getSectionHeight] Failed for section: '.concat(e));
                }
            },
            [O, w]
        ),
        X = r.useCallback(
            (e, t) => {
                switch (e) {
                    case 0:
                        return o[t];
                    case 1:
                        return 'loading';
                    default:
                        throw Error('[getItemKey] Failed for section: '.concat(e));
                }
            },
            [o]
        ),
        Q = r.useCallback((e) => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error('[getItemHeight] Failed for section: '.concat(e));
            }
        }, []),
        J = r.useCallback(
            async (e, t, n, i) => {
                var r, l;
                await a(e, t, n, i);
                let s = null === (l = V.current) || void 0 === l ? void 0 : null === (r = l.getScrollerState()) || void 0 === r ? void 0 : r.scrollTop;
                null != s && (0, _.LD)({ scrollPosition: s });
            },
            [a]
        ),
        $ = r.useCallback(
            (e, t, n, r) => {
                if (0 === e) {
                    let e = o[t];
                    return (0, i.jsx)(
                        'div',
                        {
                            style: n,
                            children: (0, i.jsx)(N.ZP, {
                                guildId: e,
                                onClick: async (e) => await J(e, t, R, Z),
                                onView: (e) => Y(e)
                            })
                        },
                        r
                    );
                }
                return null;
            },
            [o, J, Y, R]
        );
    r.useEffect(() => {
        let e = V.current;
        return () => {
            var t;
            let n = null == e ? void 0 : null === (t = e.getScrollerState()) || void 0 === t ? void 0 : t.scrollTop;
            null != n && (0, _.LD)({ scrollPosition: n });
        };
    }, []),
        r.useLayoutEffect(() => {
            let e = (0, _.BK)();
            null != e &&
                setTimeout(() => {
                    var t;
                    null === (t = V.current) ||
                        void 0 === t ||
                        t.scrollTo({
                            to: e,
                            animate: !1,
                            callback: () => {
                                (0, _.LD)({ scrollPosition: null });
                            }
                        });
                });
        }, []);
    let ee = r.useMemo(() => {
            if (!P)
                return (0, s.debounce)(
                    () => {
                        var e;
                        let t = null === (e = V.current) || void 0 === e ? void 0 : e.getScrollerState();
                        if (null == t) return;
                        let n = t.scrollTop + t.offsetHeight;
                        t.scrollHeight - n < 300 && L();
                    },
                    100,
                    { leading: !0 }
                );
        }, [P, L]),
        et = w ? b : A;
    return (0, i.jsxs)('div', {
        className: x.container,
        ref: z,
        children: [
            (0, i.jsx)(h.KY, {
                location: 'global_discovery_search',
                query: T
            }),
            (0, i.jsx)(c.MasonryList, {
                ref: V,
                className: x.masonryList,
                sections: W,
                columns: G,
                itemGutter: 16,
                padding: et,
                renderItem: $,
                renderSection: K,
                getSectionHeight: q,
                getItemKey: X,
                getItemHeight: Q,
                chunkSize: 24,
                onScroll: ee,
                renderAccessory: (e) =>
                    w
                        ? (0, i.jsx)('div', {
                              className: x.sidebar,
                              style: { height: e },
                              children: (0, i.jsxs)('div', {
                                  className: x.sidebarContent,
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: x.sidebarLanguageSelect,
                                          children: (0, i.jsx)(S.Z, { loadId: t })
                                      }),
                                      (0, i.jsx)(I.Z, { loadId: t })
                                  ]
                              })
                          })
                        : null
            })
        ]
    });
}
