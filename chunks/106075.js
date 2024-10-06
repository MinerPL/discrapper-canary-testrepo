n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(481060),
    c = n(827837),
    d = n(963202),
    u = n(117496),
    _ = n(702646),
    E = n(207796),
    h = n(979233),
    m = n(88693),
    I = n(611928),
    p = n(922122),
    g = n(680180),
    T = n(164991),
    f = n(444324),
    S = n(726115),
    C = n(750910),
    N = n(28494),
    A = n(29086),
    v = n(590771),
    Z = n(273596),
    L = n(128449),
    R = n(689938),
    O = n(636872);
function x() {
    let e = a.useRef((0, u.P)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: s } = (0, h.M)(),
        { tabs: x, selectedTab: b, setSelectedTab: M } = (0, A.Y)(),
        P = (0, S.lg)(b),
        D = !L.MU.has(b),
        y = (0, d.iN)('global_discovery_servers_layout'),
        { searchQuery: j, onSearchTextChange: U, onClearSearch: G, onSearchSubmit: w, isSearchVisible: k } = (0, N.H)({ loadId: e.current }),
        {
            searchBarState: B,
            onTabsAvailableWidthChange: V,
            onCollapsedSearchBarClick: H,
            onSearchBarBlur: F,
            tabsClassName: Y
        } = (0, m.U)({
            isSearchBarVisible: D,
            isSearchBarEmpty: '' === j.trim()
        }),
        z = (0, T.NL)(),
        W = (0, E.GN)((e) => e.mode, l.Z),
        K = a.useCallback(
            (e) => {
                M(e), k && G();
            },
            [k, G, M]
        ),
        q = a.useMemo(
            () =>
                k
                    ? x.filter((e) => {
                          let { id: t } = e;
                          return !L.MU.has(t);
                      })
                    : x,
            [x, k]
        ),
        Q = W === E.v0.SAVED_GUILDS,
        X = a.useRef(new f.Z(P)),
        { onGuildCardSeen: J, onGuildCardClick: $ } = (0, C.H)({
            guildDiscoveryCardSeenManager: X.current,
            loadId: e.current
        });
    a.useEffect(() => {
        X.current.flushSeenGuilds(e.current);
    }, [P]),
        a.useEffect(() => {
            s();
        }, [b, s]),
        a.useEffect(() => {
            !k && (0, T.LD)({ scrollPosition: null });
        }, [k]),
        a.useEffect(() => {
            (0, c.N)();
        }, []);
    let ee = a.useMemo(() => {
        switch (b) {
            case L.vf.HUBS:
                return null;
            case L.vf.GUILDS:
                if (y) return (0, i.jsx)(_.Z, { className: r()(O.clanDiscoveryToolbar, !Q && O.rightAlignedToolbar) });
                return null;
            default:
                return (0, i.jsx)(g.Z, {
                    query: j,
                    placeholder: R.Z.Messages.SEARCH,
                    onTextChange: U,
                    onClear: G,
                    onSubmit: w,
                    onCollapsedClick: H,
                    state: B,
                    onBlur: F
                });
        }
    }, [b, y, j, U, G, w, H, B, F, Q]);
    return (0, i.jsxs)('div', {
        className: O.container,
        children: [
            (0, i.jsxs)(I.ZP, {
                className: k ? O.search : void 0,
                children: [
                    !k && (0, i.jsx)(I.z6, { scrollPosition: n }),
                    !Q &&
                        (0, i.jsx)(I.aV, {
                            icon: k ? o.ArrowLargeLeftIcon : o.ServerIcon,
                            iconColor: k ? o.tokens.colors.INTERACTIVE_NORMAL : void 0,
                            onClick: k ? G : void 0
                        }),
                    !Q &&
                        !k &&
                        (0, i.jsx)(p.Z, {
                            className: Y,
                            tabs: q,
                            selectedTab: k ? null : b,
                            onTabSelect: K,
                            onAvailableWidthChange: V
                        }),
                    !Q &&
                        k &&
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            className: O.searchResultsHeader,
                            children: R.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({ query: z })
                        }),
                    ee
                ]
            }),
            k
                ? (0, i.jsx)(Z.Z, {
                      loadId: e.current,
                      onGuildCardClick: $,
                      onGuildCardSeen: J
                  })
                : (0, i.jsx)(v.Z, {
                      loadId: e.current,
                      selectedTab: b,
                      onScroll: t,
                      onGuildCardClick: $,
                      onGuildCardSeen: J
                  })
        ]
    });
}
