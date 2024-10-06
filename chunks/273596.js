n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120),
    n(411104);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(481060),
    d = n(393903),
    u = n(117496),
    _ = n(229765),
    E = n(626135),
    h = n(823379),
    m = n(900849),
    I = n(356164),
    p = n(164991),
    g = n(28494),
    T = n(746728),
    f = n(140700),
    S = n(665807),
    C = n(188493),
    N = n(294330),
    A = n(179596);
let v = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 202
    }),
    Z = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 32
    }),
    L = o().throttle(m.c6, 1000, {
        leading: !1,
        trailing: !0
    });
function R(e) {
    let { loadId: t, onGuildCardSeen: n, onGuildCardClick: s } = e,
        { guildIds: o, loading: m, searchResultsQuery: R, loadMore: O, searchCategoryId: x, isBlockedSearchQuery: b } = (0, g.f)({ loadId: t }),
        M = 0 === o.length && !m,
        P = a.useContext(E.AnalyticsContext),
        [D, y] = a.useState((0, u.P)()),
        [j, U] = a.useState(!0),
        G = a.useRef(j),
        [w, k] = a.useState(3),
        B = a.useRef(w),
        V = a.useRef(null),
        H = a.useCallback(
            (e) => {
                var t;
                if (b) return;
                let n = null === (t = V.current) || void 0 === t ? void 0 : t.getScrollerState();
                null != n && null != e && n.scrollHeight < e.height && O();
            },
            [b, O]
        ),
        F = (0, d.y)((e) => {
            let t = null == e ? void 0 : e.getBoundingClientRect();
            if (null == t) return;
            let n = t.width;
            n < 1024 && G.current ? ((G.current = !1), U(!1)) : n > 1024 && !G.current && ((G.current = !0), U(!0));
            let i = 1;
            for (n -= j ? 450 : 0, n -= 280; n > 0; ) (n -= 264), (i += 1);
            i !== B.current && ((B.current = i), k(i)), H(t);
        });
    a.useLayoutEffect(() => {
        var e;
        H(null === (e = F.current) || void 0 === e ? void 0 : e.getBoundingClientRect());
    }, [F, o, H]),
        a.useEffect(() => {
            y((0, u.P)());
        }, [R]),
        a.useEffect(() => {
            L({
                loadId: t,
                searchId: D,
                query: R,
                guildResults: o.map(I.Z.getGuild).filter(h.lm),
                analyticsContext: P,
                categoryId: x
            });
        }, [P, o, t, x, D, R]);
    let Y = a.useCallback((e) => n(e, x), [n, x]),
        z = a.useMemo(() => (m && !b ? [o.length, 0] : [o.length]), [o.length, b, m]),
        W = a.useCallback(
            (e, n, a) => {
                switch (e) {
                    case 0:
                        return (0, i.jsxs)(
                            'div',
                            {
                                style: {
                                    paddingLeft: n.left,
                                    width: n.width - 16
                                },
                                className: r()({ [A.heading]: !j || M }),
                                children: [
                                    !j &&
                                        (0, i.jsxs)('div', {
                                            className: A.headingFilters,
                                            children: [(0, i.jsx)(f.Z, { loadId: t }), (0, i.jsx)(C.Z, { loadId: t })]
                                        }),
                                    (M || b) && (0, i.jsx)(S.Z, { loadId: t })
                                ]
                            },
                            a
                        );
                    case 1:
                        return (0, i.jsx)(c.Spinner, { className: r()(A.spinner, { [A.spinnerWithSidebar]: j }) }, a);
                }
            },
            [b, M, j, t]
        ),
        K = a.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = j ? 16 : 50;
                        return M ? t + 448 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error('[getSectionHeight] Failed for section: '.concat(e));
                }
            },
            [M, j]
        ),
        q = a.useCallback(
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
        Q = a.useCallback((e) => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error('[getItemHeight] Failed for section: '.concat(e));
            }
        }, []),
        X = a.useCallback(
            async (e, t, n) => {
                var i, a;
                await s(e, t, n);
                let r = null === (a = V.current) || void 0 === a ? void 0 : null === (i = a.getScrollerState()) || void 0 === i ? void 0 : i.scrollTop;
                null != r && (0, p.LD)({ scrollPosition: r });
            },
            [s]
        ),
        J = a.useCallback(
            (e, t, n, a) => {
                if (0 === e) {
                    let e = o[t];
                    return (0, i.jsx)(
                        'div',
                        {
                            style: n,
                            children: (0, i.jsx)(N.ZP, {
                                guildId: e,
                                onClick: async (e) => await X(e, t, x),
                                onView: (e) => Y(e)
                            })
                        },
                        a
                    );
                }
                return null;
            },
            [o, X, Y, x]
        );
    a.useEffect(() => {
        let e = V.current;
        return () => {
            var t;
            let n = null == e ? void 0 : null === (t = e.getScrollerState()) || void 0 === t ? void 0 : t.scrollTop;
            null != n && (0, p.LD)({ scrollPosition: n });
        };
    }, []),
        a.useLayoutEffect(() => {
            let e = (0, p.BK)();
            null != e &&
                setTimeout(() => {
                    var t;
                    null === (t = V.current) ||
                        void 0 === t ||
                        t.scrollTo({
                            to: e,
                            animate: !1,
                            callback: () => {
                                (0, p.LD)({ scrollPosition: null });
                            }
                        });
                });
        }, []);
    let $ = a.useMemo(() => {
            if (!b)
                return (0, l.debounce)(
                    () => {
                        var e;
                        let t = null === (e = V.current) || void 0 === e ? void 0 : e.getScrollerState();
                        if (null == t) return;
                        let n = t.scrollTop + t.offsetHeight;
                        t.scrollHeight - n < 300 && O();
                    },
                    100,
                    { leading: !0 }
                );
        }, [b, O]),
        ee = j ? v : Z;
    return (0, i.jsxs)('div', {
        className: A.container,
        ref: F,
        children: [
            (0, i.jsx)(_.KY, {
                location: 'global_discovery_search',
                query: R
            }),
            (0, i.jsx)(c.MasonryList, {
                ref: V,
                className: A.masonryList,
                sections: z,
                columns: w,
                itemGutter: 16,
                padding: ee,
                renderItem: J,
                renderSection: W,
                getSectionHeight: K,
                getItemKey: q,
                getItemHeight: Q,
                chunkSize: 24,
                onScroll: $,
                renderAccessory: (e) =>
                    j
                        ? (0, i.jsx)('div', {
                              className: A.sidebar,
                              style: { height: e },
                              children: (0, i.jsxs)('div', {
                                  className: A.sidebarContent,
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: A.sidebarLanguageSelect,
                                          children: (0, i.jsx)(C.Z, { loadId: t })
                                      }),
                                      (0, i.jsx)(T.Z, { loadId: t })
                                  ]
                              })
                          })
                        : null
            })
        ]
    });
}
