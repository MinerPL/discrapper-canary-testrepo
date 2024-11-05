var i = n(200651),
    r = n(192379),
    a = n(481060),
    l = n(674588),
    s = n(979233),
    o = n(88693),
    c = n(611928),
    d = n(922122),
    u = n(680180),
    h = n(975907),
    m = n(119014),
    p = n(578470),
    g = n(726941),
    f = n(666697),
    _ = n(370648),
    E = n(569527),
    I = n(979007),
    C = n(388032),
    v = n(842221);
t.Z = function () {
    let { onScroll: e, scrollPosition: t, resetScrollPosition: n } = (0, s.M)(),
        { tabs: S, selectedTab: N, onSelectTab: T } = (0, m.i)();
    r.useEffect(() => {
        l.CP();
    }, []),
        r.useEffect(() => {
            l.g5();
        }, []);
    let { searchQuery: x, searchFetchedQuery: b, onSearchTextChange: A, onClearSearch: Z, onSearchSubmit: y, hasSearchView: L } = (0, h.M)(),
        {
            searchBarState: R,
            onTabsAvailableWidthChange: P,
            onCollapsedSearchBarClick: O,
            onSearchBarBlur: j
        } = (0, o.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === x.trim()
        }),
        { onSelectApplication: D, onCloseAppDetails: M, selectedAppId: w } = (0, p.g)(n),
        k = null != w,
        U = L && !k,
        G = r.useCallback(
            (e) => {
                T(e), U && Z(), n();
            },
            [U, Z, T, n]
        );
    return (0, i.jsxs)('div', {
        className: v.container,
        children: [
            (0, i.jsxs)(c.ZP, {
                className: U ? v.search : void 0,
                children: [
                    !U &&
                        (0, i.jsx)(
                            c.z6,
                            {
                                scrollPosition: t,
                                minOpacity: k ? 0.4 : 0
                            },
                            k ? 'apps' : ''
                        ),
                    (0, i.jsx)(c.aV, {
                        icon: U || k ? a.ArrowLargeLeftIcon : a.AppsIcon,
                        onClick: k ? M : U ? Z : void 0
                    }),
                    k || U
                        ? (0, i.jsx)(a.Heading, {
                              variant: 'heading-lg/semibold',
                              color: 'header-primary',
                              className: v.alternateHeader,
                              children: k ? C.intl.string(C.t['13/7kZ']) : C.intl.formatToPlainString(C.t.zHdzqa, { query: b })
                          })
                        : (0, i.jsx)(d.Z, {
                              tabs: S,
                              selectedTab: N,
                              onTabSelect: G,
                              onAvailableWidthChange: P
                          }),
                    !k &&
                        (0, i.jsx)(u.Z, {
                            query: x,
                            placeholder: C.intl.string(C.t['7J5i+/']),
                            onTextChange: A,
                            onClear: Z,
                            onSubmit: y,
                            onCollapsedClick: O,
                            state: R,
                            onBlur: j
                        })
                ]
            }),
            k
                ? (0, i.jsx)(f.Z, {
                      onScroll: e,
                      applicationId: w
                  })
                : U
                  ? (0, i.jsx)(E.Z, {
                        query: b,
                        onSelectApplication: D
                    })
                  : N === I.kK
                    ? (0, i.jsx)(_.Z, {
                          onScroll: e,
                          onSelectApplication: D
                      })
                    : (0, i.jsx)(g.Z, {
                          tabId: Number(N),
                          onScroll: e,
                          onSelectApplication: D
                      })
        ]
    });
};
