n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120),
    n(411104);
var i = n(735250),
    a = n(470079),
    s = n(392711),
    r = n.n(s),
    l = n(260034),
    o = n(481060),
    c = n(393903),
    d = n(410030),
    u = n(117496),
    _ = n(225784),
    E = n(229765),
    h = n(626135),
    m = n(900849),
    I = n(859921),
    g = n(28494),
    p = n(746728),
    T = n(140700),
    S = n(665807),
    C = n(882126),
    f = n(689938),
    N = n(237981);
let A = 56,
    v = 94,
    L = Object.freeze({
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
    R = r().throttle(m.c6, 1000, {
        leading: !1,
        trailing: !0
    });
function O(e) {
    let { loadId: t, onGuildCardSeen: n, onGuildCardClick: r } = e,
        m = (0, d.ZP)(),
        { guilds: O, loading: x, searchResultsQuery: b, loadMore: P, searchCategoryId: M } = (0, g.f)({ loadId: t }),
        D = a.useContext(h.AnalyticsContext),
        [y, j] = a.useState((0, u.P)()),
        [U, G] = a.useState(!0),
        w = a.useRef(U),
        [k, B] = a.useState(3),
        H = a.useRef(k),
        V = (0, c.y)((e) => {
            let t = null == e ? void 0 : e.getBoundingClientRect();
            if (null == t) return;
            let n = t.width;
            n < 1024 && w.current ? ((w.current = !1), G(!1)) : n > 1024 && !w.current && ((w.current = !0), G(!0));
            let i = 1;
            for (n -= U ? 420 : 0, n -= 250; n > 0; ) (n -= 234), (i += 1);
            i !== H.current && ((H.current = i), B(i));
        });
    a.useEffect(() => {
        j((0, u.P)());
    }, [b]),
        a.useEffect(() => {
            R({
                loadId: t,
                searchId: y,
                query: b,
                guildResults: O,
                analyticsContext: D,
                categoryId: M,
                isTagSearch: !1
            });
        }, [D, O, t, M, y, b]);
    let F = a.useCallback((e) => n(e, M), [n, M]),
        Y = a.useMemo(() => (x ? [O.length, 0] : [O.length]), [O.length, x]),
        W = 0 === O.length && !x,
        z = a.useCallback(
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
                                children: [
                                    (0, i.jsx)(l.X, {
                                        variant: 'heading-lg/semibold',
                                        className: N.heading,
                                        children: f.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({ query: b })
                                    }),
                                    !U &&
                                        (0, i.jsxs)('div', {
                                            className: N.headingFilters,
                                            children: [(0, i.jsx)(T.Z, { loadId: t }), (0, i.jsx)(C.Z, { loadId: t })]
                                        }),
                                    W && (0, i.jsx)(S.Z, { loadId: t })
                                ]
                            },
                            a
                        );
                    case 1:
                        return (0, i.jsx)(o.Spinner, { className: N.spinner }, a);
                }
            },
            [W, U, t, b]
        ),
        K = a.useCallback(
            (e) => {
                switch (e) {
                    case 0:
                        let t = U ? A : v;
                        return W ? t + 400 : t;
                    case 1:
                        return 120;
                    default:
                        throw Error('[getSectionHeight] Failed for section: '.concat(e));
                }
            },
            [W, U]
        ),
        q = a.useCallback(
            (e, t) => {
                switch (e) {
                    case 0:
                        return O[t].id;
                    case 1:
                        return 'loading';
                    default:
                        throw Error('[getItemKey] Failed for section: '.concat(e));
                }
            },
            [O]
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
            (e, t, n) => {
                var i, a;
                r(e, t, n);
                let s = null === (a = $.current) || void 0 === a ? void 0 : null === (i = a.getScrollerState()) || void 0 === i ? void 0 : i.scrollTop;
                null != s && I.B.setState({ searchScrollPosition: s });
            },
            [r]
        ),
        J = a.useCallback(
            (e, t, n, a) => {
                if (0 === e) {
                    let e = O[t];
                    return (0, i.jsx)(
                        'div',
                        {
                            style: n,
                            children: (0, i.jsx)(
                                _.Z,
                                {
                                    guild: e,
                                    onView: (e) => X(e, t, M),
                                    onGuildCardSeen: F,
                                    theme: m
                                },
                                e.id
                            )
                        },
                        a
                    );
                }
                return null;
            },
            [O, X, F, M, m]
        ),
        $ = a.useRef(null);
    a.useEffect(() => {
        let e = $.current;
        return () => {
            var t;
            let n = null == e ? void 0 : null === (t = e.getScrollerState()) || void 0 === t ? void 0 : t.scrollTop;
            null != n && I.B.setState({ searchScrollPosition: n });
        };
    }, []),
        a.useLayoutEffect(() => {
            let { searchScrollPosition: e } = I.B.getState();
            null != e &&
                setTimeout(() => {
                    var t;
                    null === (t = $.current) ||
                        void 0 === t ||
                        t.scrollTo({
                            to: e,
                            animate: !1,
                            callback: () => {
                                I.B.setState({ searchScrollPosition: null });
                            }
                        });
                });
        }, []);
    let ee = a.useMemo(
            () =>
                (0, s.debounce)(() => {
                    var e;
                    let t = null === (e = $.current) || void 0 === e ? void 0 : e.getScrollerState();
                    if (null == t) return;
                    let n = t.scrollTop + t.offsetHeight;
                    t.scrollHeight - n < 200 && P();
                }, 250),
            [P]
        ),
        et = U ? L : Z;
    return (0, i.jsxs)('div', {
        className: N.container,
        ref: V,
        children: [
            (0, i.jsx)(E.KY, {
                location: 'global_discovery_search',
                query: b
            }),
            (0, i.jsx)(o.MasonryList, {
                ref: $,
                className: N.masonryList,
                sections: Y,
                columns: k,
                itemGutter: 16,
                padding: et,
                renderItem: J,
                renderSection: z,
                getSectionHeight: K,
                getItemKey: q,
                getItemHeight: Q,
                chunkSize: 24,
                onScroll: ee,
                renderAccessory: (e) =>
                    U
                        ? (0, i.jsx)('div', {
                              className: N.sidebar,
                              style: { height: e },
                              children: (0, i.jsxs)('div', {
                                  className: N.sidebarContent,
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: N.sidebarLanguageSelect,
                                          children: (0, i.jsx)(C.Z, { loadId: t })
                                      }),
                                      (0, i.jsx)(p.Z, { loadId: t })
                                  ]
                              })
                          })
                        : null
            })
        ]
    });
}
